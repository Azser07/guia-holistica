import { useState, useCallback, useRef } from 'react'
import { exportAllData, importAllData } from '../hooks/useProfile'

interface Props {
  name: string
  onSaveName: (name: string) => void
  onClose: () => void
}

export default function ProfileModal({ name, onSaveName, onClose }: Props) {
  const [localName, setLocalName] = useState(name)
  const [msg, setMsg] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSave = useCallback(() => {
    onSaveName(localName.trim() || 'Usuario')
    setMsg('Perfil guardado')
    setTimeout(() => setMsg(''), 2000)
  }, [localName, onSaveName])

  const handleExport = useCallback(() => {
    const json = exportAllData()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `guia-holistica-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMsg('Datos exportados')
    setTimeout(() => setMsg(''), 2000)
  }, [])

  const handleImport = useCallback(() => {
    fileRef.current?.click()
  }, [])

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (importAllData(reader.result as string)) {
        setMsg('Datos importados — recarga la página')
        setTimeout(() => window.location.reload(), 1000)
      } else {
        setMsg('Archivo inválido')
      }
    }
    reader.readAsText(file)
  }, [])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Tu perfil</h3>

        <label className="modal-label">Nombre</label>
        <input
          className="modal-input"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          placeholder="Tu nombre"
          autoFocus
        />
        <button className="modal-btn" onClick={handleSave}>Guardar</button>

        <div className="modal-divider" />

        <button className="modal-btn-outline" onClick={handleExport}>
          📤 Exportar datos
        </button>
        <button className="modal-btn-outline" onClick={handleImport}>
          📥 Importar datos
        </button>
        <input ref={fileRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleFile} />

        {msg && <p className="modal-msg">{msg}</p>}

        <button className="modal-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}
