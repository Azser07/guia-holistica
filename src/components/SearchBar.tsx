import { useId } from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  const id = useId()

  return (
    <div className="search-wrap">
      <label htmlFor={id} className="sr-only">
        Buscar protocolo o planta
      </label>
      <input
        id={id}
        type="search"
        className="search-box"
        placeholder="Buscar protocolo o planta..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}
