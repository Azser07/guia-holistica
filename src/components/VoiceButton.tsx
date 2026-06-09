import { useCallback, useState, useRef } from 'react'

interface Props {
  steps: string[]
}

export default function VoiceButton({ steps }: Props) {
  const [speaking, setSpeaking] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const handleSpeak = useCallback(() => {
    if (!('speechSynthesis' in window)) return

    if (speaking) {
      speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const text = steps.map((s, i) => `Paso ${i + 1}: ${s}`).join('. ')
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'es-ES'
    u.rate = 0.9
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    utteranceRef.current = u
    speechSynthesis.speak(u)
    setSpeaking(true)
  }, [steps, speaking])

  return (
    <button className={`voice-btn${speaking ? ' voice-btn-active' : ''}`} onClick={handleSpeak}>
      {speaking ? '🔊 Detener' : '🔈 Leer en voz alta'}
    </button>
  )
}
