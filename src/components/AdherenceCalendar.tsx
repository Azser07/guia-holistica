import { useMemo, useState } from 'react'
import { getAllCompletions } from '../hooks/useProfile'

export default function AdherenceCalendar() {
  const [open, setOpen] = useState(false)
  const completions = getAllCompletions()

  const totalSessions = Object.values(completions).reduce((a, b) => a + b, 0)

  const streakDays = useMemo(() => {
    let streak = 0
    const d = new Date()
    for (let i = 0; i < 365; i++) {
      const key = d.toISOString().slice(0, 10)
      if (completions[key]) {
        streak++
        d.setDate(d.getDate() - 1)
      } else break
    }
    return streak
  }, [completions])

  const calendarDays = useMemo(() => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const first = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days: { day: number; done: boolean }[] = []
    for (let i = 0; i < first; i++) days.push({ day: 0, done: false })
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      days.push({ day: d, done: completions[dateStr] > 0 })
    }
    return days
  }, [completions])

  return (
    <div className="cal-wrap">
      <button className="cal-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {open ? '▼' : '▶'} Progreso diario
      </button>
      {open && (
        <div className="cal-body">
          <div className="cal-stats">
            <div className="cal-stat">
              <span className="cal-stat-val">{totalSessions}</span>
              <span className="cal-stat-label">Protocolos totales</span>
            </div>
            <div className="cal-stat">
              <span className="cal-stat-val">{streakDays}</span>
              <span className="cal-stat-label">Racha (días)</span>
            </div>
          </div>
          <div className="cal-grid">
            {calendarDays.map((d, i) => (
              <div
                key={i}
                className={`cal-day${d.day === 0 ? ' cal-day-empty' : ''}${d.done ? ' cal-day-done' : ''}`}
              >
                {d.day > 0 ? d.day : ''}
              </div>
            ))}
          </div>
          <p className="cal-month">
            {new Date().toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      )}
    </div>
  )
}
