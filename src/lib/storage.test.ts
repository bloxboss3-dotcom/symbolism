import { beforeEach, describe, expect, it } from 'vitest'
import {
  BACKUP_KEY,
  STORAGE_KEY,
  clearState,
  createInitialState,
  loadState,
  reconcile,
  saveState,
} from './storage'

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('round-trips a state document', () => {
    const state = createInitialState()
    state.preferences.routineMinutes = 20
    state.notes.push({
      id: 'n1',
      passageId: null,
      text: 'a private thought',
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
    })
    expect(saveState(state)).toBe(true)
    const loaded = loadState()
    expect(loaded.preferences.routineMinutes).toBe(20)
    expect(loaded.notes).toHaveLength(1)
    expect(loaded.notes[0].text).toBe('a private thought')
  })

  it('corrupt JSON degrades to a fresh state instead of throwing', () => {
    localStorage.setItem(STORAGE_KEY, '{not json')
    const loaded = loadState()
    expect(loaded.preferences.onboarded).toBe(false)
    expect(loaded.history).toEqual([])
  })

  it('one corrupt list entry is dropped without losing the rest', () => {
    const state = createInitialState()
    const raw = JSON.parse(JSON.stringify(state)) as Record<string, unknown>
    raw.bookmarks = [
      { id: 'b1', passageId: 'psalm-63-1-8', createdAt: '2026-01-01T00:00:00.000Z' },
      { corrupt: true },
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(raw))
    const loaded = loadState()
    expect(loaded.bookmarks).toHaveLength(1)
    expect(loaded.bookmarks[0].id).toBe('b1')
  })

  it('invalid preferences fall back to defaults without touching other fields', () => {
    const state = createInitialState()
    const raw = JSON.parse(JSON.stringify(state)) as Record<string, unknown>
    raw.preferences = { theme: 'neon' }
    raw.history = [
      {
        id: 'c1',
        routineId: 'morning-1',
        timeOfDay: 'morning',
        completedAt: '2026-01-01T07:15:00.000Z',
        localDate: '2026-01-01',
        minutes: 15,
        endedEarly: false,
      },
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(raw))
    const loaded = loadState()
    expect(loaded.preferences.theme).toBe('system')
    expect(loaded.history).toHaveLength(1)
  })

  it('reconcile fills any missing field with defaults', () => {
    const state = reconcile({})
    expect(state.preferences.audio.ambience).toBe('off')
    expect(state.session).toBeNull()
  })

  it('clearState removes the persisted document', () => {
    saveState(createInitialState())
    clearState()
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })

  it('migrates a v1 document to v2 without losing choices, and keeps a backup', () => {
    const v1 = JSON.parse(JSON.stringify(createInitialState())) as {
      version: number
      preferences: { routineMinutes: number; audio: Record<string, unknown> }
    }
    v1.version = 1
    v1.preferences.routineMinutes = 30
    delete v1.preferences.audio.narration
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v1))

    const loaded = loadState()
    expect(loaded.version).toBe(2)
    // The user's earlier choices survive the schema change…
    expect(loaded.preferences.routineMinutes).toBe(30)
    // …and the new field arrives with its defaults.
    expect(loaded.preferences.audio.narration).toEqual({
      enabled: true,
      voiceURI: null,
      rate: 0.9,
    })
    expect(localStorage.getItem(BACKUP_KEY)).not.toBeNull()
  })
})
