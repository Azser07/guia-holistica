import { useState, useCallback, useEffect } from 'react'

const PROF_KEY = 'gh-profile'
const COMP_KEY = 'gh-completions'
const NOTES_KEY = 'gh-notes'

export interface ProfileData {
  name: string
  createdAt: string
}

const defaults: ProfileData = { name: '', createdAt: '' }

function load<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}

function save(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function exportAllData(): string {
  const profile = load<ProfileData | null>(PROF_KEY, null)
  const completions = load<Record<string, number>>(COMP_KEY, {})
  const notes = load<Record<string, string>>(NOTES_KEY, {})
  return JSON.stringify({ profile, completions, notes, exportedAt: new Date().toISOString() }, null, 2)
}

export function importAllData(json: string): boolean {
  try {
    const data = JSON.parse(json)
    if (!data || typeof data !== 'object') return false
    if (data.profile) save(PROF_KEY, data.profile)
    if (data.completions) save(COMP_KEY, data.completions)
    if (data.notes) save(NOTES_KEY, data.notes)
    return true
  } catch { return false }
}

export function getAllCompletions(): Record<string, number> {
  return load<Record<string, number>>(COMP_KEY, {})
}

export function getAllNotes(): Record<string, string> {
  return load<Record<string, string>>(NOTES_KEY, {})
}

export default function useProfile() {
  const [profile, setProfile] = useState<ProfileData>(() => load(PROF_KEY, defaults))
  const [showModal, setShowModal] = useState(false)

  useEffect(() => { save(PROF_KEY, profile) }, [profile])

  const updateName = useCallback((name: string) => {
    setProfile((p) => {
      const next = { ...p, name, createdAt: p.createdAt || new Date().toISOString() }
      return next
    })
  }, [])

  const logout = useCallback(() => {
    setProfile(defaults)
    localStorage.removeItem(PROF_KEY)
  }, [])

  return { profile, updateName, logout, showModal, setShowModal }
}
