import { useEffect, useState, useCallback } from 'react'

const THEME_KEY = 'gh-theme'

type Theme = 'dark' | 'light'

function getStored(): Theme {
  try {
    const v = localStorage.getItem(THEME_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {}
  return 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStored)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Cambiar tema">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
