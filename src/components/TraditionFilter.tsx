import { Tradition } from '../types'

interface Props {
  selected: Tradition | 'todas'
  onChange: (t: Tradition | 'todas') => void
}

const OPTIONS: { value: Tradition | 'todas'; label: string; icon: string }[] = [
  { value: 'todas', label: 'Todas', icon: '⊞' },
  { value: 'occidental', label: 'Occidental', icon: '⚕' },
  { value: 'tcm', label: 'TCM', icon: '☯' },
  { value: 'ayurveda', label: 'Ayurveda', icon: '🕉' },
  { value: 'holistica', label: 'Holística', icon: '✧' },
]

export default function TraditionFilter({ selected, onChange }: Props) {
  return (
    <nav className="trad-filter" aria-label="Filtrar por tradición médica">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          className={`trad-btn${selected === opt.value ? ' active' : ''}`}
          onClick={() => onChange(opt.value)}
          aria-pressed={selected === opt.value}
        >
          {opt.icon} {opt.label}
        </button>
      ))}
    </nav>
  )
}
