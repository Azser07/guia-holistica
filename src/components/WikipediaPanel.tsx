import { useState, useCallback } from 'react'

interface Props {
  plantName: string
  scientificName?: string
}

const CACHE: Record<string, string> = {}

async function fetchDescription(title: string): Promise<string> {
  const params = new URLSearchParams({
    action: 'query',
    prop: 'extracts',
    titles: title,
    format: 'json',
    exintro: '1',
    explaintext: '1',
    origin: '*'
  })
  const res = await fetch(`https://es.wikipedia.org/w/api.php?${params}`)
  const data = await res.json()
  const pages = data.query?.pages
  if (!pages) return ''
  const page = Object.values(pages)[0] as { extract?: string } | undefined
  return page?.extract?.trim() || ''
}

export default function WikipediaPanel({ plantName, scientificName }: Props) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleToggle = useCallback(async () => {
    if (open) {
      setOpen(false)
      return
    }
    setOpen(true)
    if (text) return

    setLoading(true)
    const titles = [scientificName, plantName, `${plantName} (planta)`].filter(Boolean)
    for (const t of titles) {
      if (!t) continue
      if (CACHE[t]) {
        setText(CACHE[t])
        setLoading(false)
        return
      }
      try {
        const desc = await fetchDescription(t)
        if (desc) {
          CACHE[t] = desc
          setText(desc)
          setLoading(false)
          return
        }
      } catch {
        // try next title
      }
    }
    setText('No se encontró descripción disponible.')
    setLoading(false)
  }, [open, text, plantName, scientificName])

  return (
    <div className="wiki-wrap">
      <button
        className="wiki-toggle"
        onClick={handleToggle}
        aria-expanded={open}
      >
        {open ? '▼' : '▶'} Descripción botánica
      </button>
      {open && (
        <div className="wiki-body">
          {loading ? (
            <p className="wiki-loading">Cargando descripción...</p>
          ) : (
            <p className="wiki-text">{text}</p>
          )}
        </div>
      )}
    </div>
  )
}
