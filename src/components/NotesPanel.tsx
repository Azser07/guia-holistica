import { useState, useEffect, useCallback } from 'react'

interface Props {
  remedyName: string
}

const NOTES_KEY = 'gh-notes'

function loadNotes(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || '{}')
  } catch {
    return {}
  }
}

export default function NotesPanel({ remedyName }: Props) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    setText(loadNotes()[remedyName] || '')
  }, [remedyName, open])

  const handleSave = useCallback(() => {
    const all = loadNotes()
    if (text.trim()) {
      all[remedyName] = text.trim()
    } else {
      delete all[remedyName]
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(all))
  }, [remedyName, text])

  return (
    <div className="notes-wrap">
      <button
        className="notes-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? '▼' : '▶'} Notas personales
      </button>
      {open && (
        <div className="notes-body">
          <textarea
            className="notes-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe tus observaciones sobre este protocolo..."
            rows={3}
          />
          <button className="notes-save" onClick={handleSave}>
            Guardar nota
          </button>
        </div>
      )}
    </div>
  )
}
