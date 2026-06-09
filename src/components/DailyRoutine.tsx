import { useMemo } from 'react'
import { getCurrentSlot } from '../data/routine'
import { SystemKey } from '../types'
import { DATA } from '../data/remedies'

interface Props {
  onSelectSystem: (key: SystemKey) => void
}

export default function DailyRoutine({ onSelectSystem }: Props) {
  const slot = useMemo(() => getCurrentSlot(), [])
  const remedies = slot.systems.flatMap((s) => DATA[s as SystemKey]?.remedies ?? [])

  return (
    <section className="routine-banner">
      <div className="routine-header">
        <span className="routine-icon">{slot.icon}</span>
        <div>
          <div className="routine-label">{slot.label}</div>
          <div className="routine-desc">{slot.desc}</div>
        </div>
      </div>
      <div className="routine-list">
        {remedies.slice(0, 2).map((r) => (
          <button
            key={r.name}
            className="routine-pill"
            onClick={() => {
              const entries = Object.entries(DATA) as [string, typeof DATA[SystemKey]][]
              const sys = (entries.find(([, v]) =>
                v.remedies.some((rem: { name: string }) => rem.name === r.name)
              )?.[0] ?? 'nervioso') as SystemKey
              onSelectSystem(sys)
            }}
          >
            {r.ico} {r.name}
          </button>
        ))}
      </div>
    </section>
  )
}
