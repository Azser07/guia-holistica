import { useState, useEffect } from 'react'

const ONBOARDING_KEY = 'gh-onboarding-done'

export default function Onboarding() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const done = localStorage.getItem(ONBOARDING_KEY)
    if (!done) setVisible(true)
  }, [])

  const handleDismiss = () => {
    localStorage.setItem(ONBOARDING_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="onboarding-overlay" onClick={handleDismiss}>
      <div className="onboarding-body" onClick={(e) => e.stopPropagation()}>
        <h2 className="onboarding-title">Bienvenido a la Guía de Sistemas</h2>
        <ul className="onboarding-list">
          <li>🧠 Explora <strong>10 sistemas clínicos</strong> con remedios de 4 tradiciones médicas</li>
          <li>🔍 <strong>Busca</strong> por nombre de protocolo o tipo</li>
          <li>📊 <strong>Conecta</strong> la biometría simulada para ver datos en vivo</li>
          <li>⏱ Usa el <strong>temporizador</strong> para seguir cada preparación</li>
          <li>📝 Toma <strong>notas</strong> personales en cada remedio</li>
          <li>⭐ <strong>Favoritos</strong> para guardar tus protocolos preferidos</li>
          <li>🌙 <strong>Modo oscuro/claro</strong> disponible</li>
          <li>📅 Sigue tu <strong>progreso diario</strong> con el calendario de adherencia</li>
        </ul>
        <button className="onboarding-btn" onClick={handleDismiss}>
          ¡Comenzar!
        </button>
      </div>
    </div>
  )
}
