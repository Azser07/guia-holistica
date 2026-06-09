import { useState, useEffect, useCallback } from 'react'
import { Remedy, Tradition } from '../types'
import { HERB_INTERACTIONS } from '../data/interactions'
import Timer from './Timer'
import NotesPanel from './NotesPanel'
import WikipediaPanel from './WikipediaPanel'
import VoiceButton from './VoiceButton'
import ShareButton from './ShareButton'

interface Props {
  remedy: Remedy
}

const STORAGE_KEY = 'gh-completions'
const FAV_KEY = 'gh-favorites'

const TRADITION_LABELS: Record<Tradition, string> = {
  occidental: 'Occidental',
  tcm: 'TCM',
  ayurveda: 'Ayurveda',
  holistica: 'Holística',
}

function loadCompletions(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveCompletions(data: Record<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAV_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveFavorites(data: string[]) {
  localStorage.setItem(FAV_KEY, JSON.stringify(data))
}

export default function RemedyCard({ remedy }: Props) {
  const [count, setCount] = useState(0)
  const [showInteractions, setShowInteractions] = useState(false)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const data = loadCompletions()
    setCount(data[remedy.name] ?? 0)
    setIsFav(loadFavorites().includes(remedy.name))
  }, [remedy.name])

  const handleComplete = useCallback(() => {
    const data = loadCompletions()
    const next = (data[remedy.name] ?? 0) + 1
    data[remedy.name] = next
    saveCompletions(data)
    setCount(next)

    const dateKey = new Date().toISOString().slice(0, 10)
    const adher = JSON.parse(localStorage.getItem('gh-completions') || '{}')
    localStorage.setItem('gh-completions', JSON.stringify({ ...adher, [dateKey]: (adher[dateKey] || 0) + 1 }))
    localStorage.setItem('gh-last-activity', dateKey)
  }, [remedy.name])

  const handleFav = useCallback(() => {
    const favs = loadFavorites()
    if (favs.includes(remedy.name)) {
      saveFavorites(favs.filter((f) => f !== remedy.name))
      setIsFav(false)
    } else {
      saveFavorites([...favs, remedy.name])
      setIsFav(true)
    }
  }, [remedy.name])

  const hasInteractions = remedy.herbId && HERB_INTERACTIONS[remedy.herbId]

  return (
    <article className="card">
      <div className="card-head-row">
        <h3 className="card-name">
          {remedy.ico} {remedy.name}
        </h3>
        <button
          className={`fav-btn${isFav ? ' active' : ''}`}
          onClick={handleFav}
          aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFav ? '★' : '☆'}
        </button>
      </div>
      <div className="card-meta-row">
        <span className="card-type">{remedy.type}</span>
        {remedy.tradition && (
          <span className={`trad-badge trad-${remedy.tradition}`}>
            {TRADITION_LABELS[remedy.tradition]}
          </span>
        )}
      </div>
      {remedy.organ && <span className="card-organ">{remedy.ico} {remedy.organ}</span>}

      <div className="two-col">
        <div>
          <h4 className="block-title">Componentes</h4>
          <ul className="list-style">
            {remedy.ingredients.map((ing, i) => (
              <li key={ing + i}>{ing}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="block-title">Preparación</h4>
          <ol className="list-style">
            {remedy.steps.map((st, i) => (
              <li key={st.slice(0, 20) + i}>{st}</li>
            ))}
          </ol>
        </div>
      </div>

      {remedy.dosage && (
        <div className="dosage-info" role="note">
          <strong>Posología:</strong> {remedy.dosage}
        </div>
      )}

      {remedy.warning && (
        <div className="warning" role="note">
          <strong>Restricciones:</strong> {remedy.warning}
        </div>
      )}

      {hasInteractions && (
        <div className="interactions-wrap">
          <button
            className="interactions-toggle"
            onClick={() => setShowInteractions((v) => !v)}
            aria-expanded={showInteractions}
          >
            {showInteractions ? '▼' : '▶'} Interacciones farmacológicas
          </button>
          {showInteractions && (
            <div className="interactions-body">
              {HERB_INTERACTIONS[remedy.herbId!].map((ix, i) => (
                <div key={i} className={`ix-row ix-${ix.severity}`}>
                  <span className={`ix-badge ix-badge-${ix.severity}`}>
                    {ix.severity === 'alta' ? 'ALTA' : ix.severity === 'moderada' ? 'MOD' : 'BAJA'}
                  </span>
                  <div>
                    <strong>{ix.drugClass}:</strong> {ix.effect}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Timer minutes={remedy.timerMinutes ?? 0} />

      {(remedy.plantName || remedy.scientificName) && (
        <WikipediaPanel plantName={remedy.plantName!} scientificName={remedy.scientificName} />
      )}

      {remedy.citations && remedy.citations.length > 0 && (
        <details className="citations-details">
          <summary className="citations-summary">Referencias científicas</summary>
          <ul className="citations-list">
            {remedy.citations.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </details>
      )}

      <ShareButton remedy={remedy} />

      <VoiceButton steps={remedy.steps} />

      <NotesPanel remedyName={remedy.name} />

      <button className="complete-btn" onClick={handleComplete}>
        {count > 0 ? `✓ Completado (${count})` : '✓ Marcar completado'}
      </button>
    </article>
  )
}
