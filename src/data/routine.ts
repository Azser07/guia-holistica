export interface RoutineSlot {
  period: string
  label: string
  icon: string
  desc: string
  systems: string[]
}

export function getCurrentSlot(): RoutineSlot {
  const h = new Date().getHours()
  if (h < 12) return {
    period: 'mañana',
    label: 'Rutina matinal',
    icon: '🌅',
    desc: 'Protocolos de activación y equilibrio metabólico',
    systems: ['endocrino', 'nervioso']
  }
  if (h < 18) return {
    period: 'tarde',
    label: 'Rutina vespertina',
    icon: '☀️',
    desc: 'Protocolos digestivos y de mantenimiento',
    systems: ['digestivo', 'cardio']
  }
  return {
    period: 'noche',
    label: 'Rutina nocturna',
    icon: '🌙',
    desc: 'Protocolos de relajación, reparación y descanso',
    systems: ['nervioso', 'respiratorio', 'inmune']
  }
}
