import { useCallback } from 'react'
import { SystemKey } from '../types'
import { DATA } from '../data/remedies'

interface Props {
  active: SystemKey
  onSelect: (key: SystemKey) => void
}

const keys = Object.keys(DATA) as SystemKey[]

export default function SystemNav({ active, onSelect }: Props) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
      if (dir !== 0) {
        e.preventDefault()
        const next = (idx + dir + keys.length) % keys.length
        onSelect(keys[next])
      }
    },
    [onSelect]
  )

  return (
    <nav className="sys-nav" role="tablist" aria-label="Seleccionar sistema clínico">
      {keys.map((k, i) => (
        <button
          key={k}
          id={`tab-${k}`}
          role="tab"
          aria-selected={active === k}
          aria-controls={`panel-${k}`}
          tabIndex={active === k ? 0 : -1}
          className={`sys-btn${active === k ? ' active' : ''}`}
          onClick={() => onSelect(k)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        >
          {DATA[k].icon} {DATA[k].title.split(' ').slice(-1)[0]}
        </button>
      ))}
    </nav>
  )
}
