import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { SystemKey, Tradition } from './types'
import { DATA } from './data/remedies'
import { SystemData } from './types'
import ErrorBoundary from './components/ErrorBoundary'
import BiometricPanel from './components/BiometricPanel'
import SearchBar from './components/SearchBar'
import SystemNav from './components/SystemNav'
import RemedyCard from './components/RemedyCard'
import ThemeToggle from './components/ThemeToggle'
import ProfileModal from './components/ProfileModal'
import DailyRoutine from './components/DailyRoutine'
import AdherenceCalendar from './components/AdherenceCalendar'
import TraditionFilter from './components/TraditionFilter'
import Onboarding from './components/Onboarding'
import useProfile from './hooks/useProfile'

const FAV_KEY = 'gh-favorites'

function loadFavorites(): string[] {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]') } catch { return [] }
}

function AppContent() {
  const [activeSys, setActiveSys] = useState<SystemKey>('nervioso')
  const [search, setSearch] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [tradFilter, setTradFilter] = useState<Tradition | 'todas'>('todas')
  const [showFavsOnly, setShowFavsOnly] = useState(false)
  const [showPathologies, setShowPathologies] = useState(false)
  const { profile, updateName, showModal, setShowModal } = useProfile()
  const mainRef = useRef<HTMLDivElement>(null)

  const favRemedyNames = useMemo(() => loadFavorites(), [showFavsOnly])

  const currentRemedies = useMemo(() => {
    return DATA[activeSys].remedies
  }, [activeSys])

  const filteredRemedies = useMemo(() => {
    let items = (search.trim() || showFavsOnly)
      ? (Object.values(DATA) as SystemData[]).flatMap((s) => s.remedies)
      : currentRemedies

    if (search.trim()) {
      const q = search.toLowerCase()
      items = items.filter((r) => r.name.toLowerCase().includes(q) || r.type.toLowerCase().includes(q))
    }

    if (tradFilter !== 'todas') {
      items = items.filter((r) => r.tradition === tradFilter)
    }

    if (showFavsOnly) {
      items = items.filter((r) => favRemedyNames.includes(r.name))
    }

    return items
  }, [currentRemedies, search, tradFilter, showFavsOnly, favRemedyNames])

  const favCount = favRemedyNames.length

  const handleSearchChange = useCallback((val: string) => setSearch(val), [])
  const handleConnect = useCallback(() => setIsConnected(true), [])
  const handleSystemClick = useCallback((k: SystemKey) => {
    setActiveSys(k)
    setSearch('')
  }, [])

  useEffect(() => {
    if (!search.trim()) {
      mainRef.current?.focus()
    }
  }, [activeSys, search])

  return (
    <div className="root-container">
      <ThemeToggle />
      <Onboarding />

      <header className="header">
        <span className="eyebrow">
          Ecosistema Clínico Funcional
        </span>
        <h1>
          Guía de <em>Sistemas</em>
        </h1>
        <p>
          Mapeo biológico interactivo optimizado para un control ágil desde
          pantallas móviles.
        </p>
        {profile.name && (
          <p className="greeting">Bienvenido, {profile.name}</p>
        )}
        <div className="header-actions">
          <button className="profile-btn" onClick={() => setShowModal(true)}>
            {profile.name ? '⚙️ Perfil' : '👤 Iniciar sesión'}
          </button>
          <button
            className={`profile-btn fav-header-btn${showFavsOnly ? ' active' : ''}`}
            onClick={() => setShowFavsOnly((v) => !v)}
            disabled={favCount === 0 && !showFavsOnly}
          >
            ★ Favoritos{favCount > 0 ? ` (${favCount})` : ''}
          </button>
        </div>
      </header>

      <DailyRoutine onSelectSystem={handleSystemClick} />

      <AdherenceCalendar />

      <BiometricPanel isConnected={isConnected} onConnect={handleConnect} />

      <div className="filter-row">
        <SearchBar value={search} onChange={handleSearchChange} />
        <TraditionFilter selected={tradFilter} onChange={setTradFilter} />
      </div>

      {!search.trim() && !showFavsOnly && (
        <>
          <SystemNav active={activeSys} onSelect={handleSystemClick} />
          <div className="sys-pathologies">
            <button className="path-toggle" onClick={() => setShowPathologies((v) => !v)} aria-expanded={showPathologies}>
              {showPathologies ? '▼' : '▶'} Patologías asociadas ({DATA[activeSys].pathologies.length})
            </button>
            {showPathologies && (
              <div className="path-body">
                {DATA[activeSys].pathologies.map((p: string) => (
                  <span key={p} className="path-pill">{p}</span>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {search.trim() && filteredRemedies.length === 0 && (
        <div className="empty-state" role="status">
          <p>
            No se encontraron resultados para <strong>"{search}"</strong>
          </p>
          <button
            className="link-btn clear-btn"
            onClick={() => setSearch('')}
          >
            Limpiar búsqueda
          </button>
        </div>
      )}

      {showFavsOnly && filteredRemedies.length === 0 && (
        <div className="empty-state" role="status">
          <p>No tienes favoritos aún. Marca ★ en los remedios que más uses.</p>
        </div>
      )}

      <main className="main">
        <div
          ref={mainRef}
          role="tabpanel"
          id={`panel-${activeSys}`}
          aria-labelledby={`tab-${activeSys}`}
          tabIndex={-1}
        >
          {!search.trim() && !showFavsOnly && (
            <div className="sys-intro">
              <h2 className="sys-title">
                {DATA[activeSys].icon} {DATA[activeSys].title}
              </h2>
              <p className="sys-desc">{DATA[activeSys].desc}</p>
            </div>
          )}

          {search.trim() && filteredRemedies.length > 0 && (
            <p className="search-count" role="status">
              {filteredRemedies.length} resultado
              {filteredRemedies.length !== 1 ? 's' : ''} para "{search}"
            </p>
          )}

          {showFavsOnly && filteredRemedies.length > 0 && (
            <p className="search-count" role="status">
              {filteredRemedies.length} favorito{filteredRemedies.length !== 1 ? 's' : ''}
            </p>
          )}

          {filteredRemedies.map((r) => (
            <RemedyCard key={r.name} remedy={r} />
          ))}
        </div>
      </main>

      <div className="export-bar">
        <button className="export-btn" onClick={() => window.print()}>
          🖨 Exportar / Imprimir guía
        </button>
      </div>

      <footer className="footer">
        Vademécum Autónomo · Divulgación Científica
      </footer>

      {showModal && (
        <ProfileModal
          name={profile.name}
          onSaveName={updateName}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  )
}
