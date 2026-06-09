import { useState, useEffect, useCallback } from 'react'

interface Props {
  isConnected: boolean
  onConnect: () => void
}

const HIST_KEY = 'gh-biometric-history'

interface Snapshot {
  ts: number
  bpm: number
  hrv: number
  sleep: number
}

function loadHistory(): Snapshot[] {
  try { return JSON.parse(localStorage.getItem(HIST_KEY) || '[]') } catch { return [] }
}

function saveHistory(h: Snapshot[]) {
  localStorage.setItem(HIST_KEY, JSON.stringify(h.slice(-60)))
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randBpm(base: number): number {
  const delta = randInt(-4, 4)
  const next = base + delta
  return next < 55 ? 55 : next > 85 ? 85 : next
}

function randHrv(base: number): number {
  const delta = randInt(-8, 8)
  const next = base + delta
  return next < 25 ? 25 : next > 105 ? 105 : next
}

function randSleep(): number {
  return randInt(70, 96)
}

function MiniChart({ data, color }: { data: number[]; color: string }) {
  if (data.length < 2) return null
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 120
  const h = 32
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="mini-chart" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export default function BiometricPanel({ isConnected, onConnect }: Props) {
  const [bpm, setBpm] = useState(70)
  const [hrv, setHrv] = useState(60)
  const [sleep, setSleep] = useState(82)
  const [history, setHistory] = useState<Snapshot[]>(() => loadHistory())
  const [showChart, setShowChart] = useState(false)

  const tick = useCallback(() => {
    setBpm((prev) => randBpm(prev))
    setHrv((prev) => randHrv(prev))
    setSleep(randSleep())
  }, [])

  useEffect(() => {
    if (!isConnected) return
    const id = setInterval(tick, 3000)
    return () => clearInterval(id)
  }, [isConnected, tick])

  useEffect(() => {
    if (!isConnected) return
    const snap: Snapshot = { ts: Date.now(), bpm, hrv, sleep }
    setHistory((prev) => {
      const next = [...prev, snap].slice(-60)
      saveHistory(next)
      return next
    })
  }, [bpm, hrv, sleep, isConnected])

  const recentBpm = history.map((s) => s.bpm)
  const recentHrv = history.map((s) => s.hrv)

  return (
    <section className="smartwatch-panel" aria-label="Panel de biometría">
      <div>
        <div className="watch-top">
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: isConnected ? 'var(--green)' : 'var(--text3)',
            }}
            role="status"
          >
            <span aria-hidden="true">{isConnected ? '\u{1F7E2}' : '\u{1F534}'}</span>
            {isConnected ? ' BIOMETRÍA CONECTADA' : ' RELOJ DESCONECTADO'}
          </span>
          {!isConnected && (
            <button onClick={onConnect} className="link-btn" aria-label="Conectar reloj biométrico">
              Enlazar
            </button>
          )}
        </div>
        <div className="metrics-grid" aria-live="polite" aria-atomic="true">
          <div className="metric-box">
            <div className="metric-label">Pulso</div>
            <div className="metric-val">
              {isConnected ? bpm : '--'}
              <span className="metric-unit">bpm</span>
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-label">HRV</div>
            <div className="metric-val">
              {isConnected ? hrv : '--'}
              <span className="metric-unit">ms</span>
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Sueño</div>
            <div className="metric-val">
              {isConnected ? `${sleep}%` : '--'}
            </div>
          </div>
        </div>

        {isConnected && (
          <div className="chart-wrap">
            <button className="chart-toggle" onClick={() => setShowChart((v) => !v)} aria-expanded={showChart}>
              {showChart ? '▼' : '▶'} Historial biométrico
            </button>
            {showChart && (
              <div className="chart-body">
                <div className="chart-row">
                  <span className="chart-label">Pulso</span>
                  <MiniChart data={recentBpm} color="var(--green)" />
                </div>
                <div className="chart-row">
                  <span className="chart-label">HRV</span>
                  <MiniChart data={recentHrv} color="var(--gold)" />
                </div>
                <p className="chart-note">Últimos {history.length} registros</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
