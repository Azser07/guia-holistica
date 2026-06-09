import { useCallback, useState } from 'react'
import { Remedy } from '../types'

interface Props {
  remedy: Remedy
}

export default function ShareButton({ remedy }: Props) {
  const [msg, setMsg] = useState('')

  const handleShare = useCallback(async () => {
    const text = [
      `🌿 ${remedy.name}`,
      `Tipo: ${remedy.type}`,
      '',
      'Componentes:',
      ...remedy.ingredients.map((i) => `• ${i}`),
      '',
      'Preparación:',
      ...remedy.steps.map((s, i) => `${i + 1}. ${s}`),
      '',
      '— De la Guía de Sistemas Clínicos Holísticos'
    ].join('\n')

    if (navigator.share) {
      try {
        await navigator.share({ title: remedy.name, text })
        setMsg('')
      } catch {
        setMsg('Compartir cancelado')
        setTimeout(() => setMsg(''), 2000)
      }
    } else {
      await navigator.clipboard.writeText(text)
      setMsg('Copiado al portapapeles')
      setTimeout(() => setMsg(''), 2000)
    }
  }, [remedy])

  return (
    <div className="share-wrap">
      <button className="share-btn" onClick={handleShare}>📤 Compartir</button>
      {msg && <span className="share-msg">{msg}</span>}
    </div>
  )
}
