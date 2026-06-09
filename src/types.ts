export type Tradition = 'occidental' | 'tcm' | 'ayurveda' | 'holistica'

export interface Interaction {
  drugClass: string
  severity: 'alta' | 'moderada' | 'baja'
  effect: string
  mechanism: string
  evidence: string
  source: string
  doi?: string
}

export interface Remedy {
  ico: string
  name: string
  type: string
  tradition?: Tradition
  organ?: string
  ingredients: string[]
  steps: string[]
  warning?: string
  plantName?: string
  scientificName?: string
  herbId?: string
  timerMinutes?: number
  citations?: string[]
  dosage?: string
}

export interface SystemData {
  title: string
  icon: string
  desc: string
  pathologies: string[]
  remedies: Remedy[]
}

export type SystemKey =
  | 'nervioso'
  | 'cardio'
  | 'respiratorio'
  | 'digestivo'
  | 'endocrino'
  | 'inmune'
  | 'musculo'
  | 'renal'
  | 'reproductor'
  | 'tegumentario'
