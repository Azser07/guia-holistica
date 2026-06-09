import { useState, useEffect, useCallback, useRef } from 'react'

interface Props {
  minutes: number
}

export default function Timer({ minutes }: Props) {
  const [active, setActive] = useState(false)
  const [remaining, setRemaining] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const start = useCallback(() => {
    setActive(true)
    setRemaining(minutes * 60)
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [minutes])

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActive(false)
    setRemaining(0)
  }, [])

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const display = `${mins}:${secs.toString().padStart(2, '0')}`

  if (minutes <= 0) return null

  return (
    <div className="timer-wrap">
      {!active ? (
        <button className="timer-btn" onClick={start}>
          ⏱ Iniciar temporizador ({minutes} min)
        </button>
      ) : (
        <div className="timer-active">
          <span className="timer-display">{display}</span>
          <button className="timer-stop" onClick={stop}>
            Detener
          </button>
        </div>
      )}
    </div>
  )
}
