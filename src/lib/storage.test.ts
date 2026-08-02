import { beforeEach, describe, expect, it } from 'vitest'
import { STORAGE_VERSION } from '../types/progress'
import {
  BACKUP_KEY,
  STORAGE_KEY,
  clearState,
  createBackup,
  createInitialState,
  loadState,
  migrate,
  parseBackup,
  reconcile,
  saveState,
} from './storage'

beforeEach(() => localStorage.clear())

describe('createInitialState', () => {
  it('is complete and at the current version', () => {
    const state = createInitialState()
    expect(state.version).toBe(STORAGE_VERSION)
    expect(state.profile).toBeNull()
    expect(Object.keys(state.abilities)).toHaveLength(6)
    expect(state.abilities.see).toEqual({ points: 0, touches: 0 })
    expect(state.settings.textScale).toBe(1)
  })
})

describe('round trip', () => {
  it('saves and reloads without loss', () => {
    const state = createInitialState()
    state.insight = 42
    state.journal = [
      {
        id: 'j1',
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
        kind: 'answer',
        title: 'A wise answer',
        body: 'Body text',
        tags: ['counsel'],
      },
    ]
    expect(saveState(state)).toBe(true)

    const loaded = loadState()
    expect(loaded.insight).toBe(42)
    expect(loaded.journal[0].title).toBe('A wise answer')
  })

  it('falls back to a fresh state when the record is corrupt', () => {
    localStorage.setItem(STORAGE_KEY, '{ not json')
    expect(loadState().insight).toBe(0)
  })

  it('clears everything it wrote', () => {
    saveState(createInitialState())
    clearState()
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    expect(localStorage.getItem(BACKUP_KEY)).toBeNull()
  })
})

describe('migration', () => {
  const v1 = {
    version: 1,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
    profile: {
      goals: ['counsel'],
      studyPreference: 'standard',
      familiarity: 'some',
      startedAt: 'x',
    },
    lessons: {
      'l01-1': {
        status: 'in-progress',
        stepIndex: 4,
        responses: { s2: { kind: 'text', value: 'kept', updatedAt: 'x' } },
        insight: 20,
        startedAt: 'x',
        updatedAt: 'x',
      },
    },
    abilities: { see: { points: 20, touches: 2 } },
    concepts: {},
    journal: [
      { id: 'j', createdAt: 'x', updatedAt: 'x', kind: 'note', title: 't', body: 'b', tags: [] },
    ],
    connections: [],
    practices: [],
    selfAssessments: {},
    insight: 20,
    streak: { current: 1, longest: 1, activeDays: ['2026-01-01'] },
    settings: { theme: 'dark', motion: 'system', textScale: 1, voiceEnabled: false },
  }

  it('walks a v1 record forward without destroying work', () => {
    const migrated = migrate({ ...v1 })
    expect(migrated.version).toBe(STORAGE_VERSION)
    expect(migrated.lessons['l01-1'].responses.s2).toBeDefined()
    expect(migrated.lessons['l01-1'].completedStepIds).toEqual([])
    expect(migrated.journal).toHaveLength(1)
    expect(migrated.insight).toBe(20)
    expect(migrated.abilities.see).toEqual({ points: 20, touches: 2 })
    // Abilities absent from the old record are filled in rather than left undefined.
    expect(migrated.abilities.live).toEqual({ points: 0, touches: 0 })
    expect(migrated.cases).toEqual({})
    expect(migrated.trials).toEqual({})
  })

  it('migrates on load and keeps a pre-migration backup', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v1))
    const loaded = loadState()
    expect(loaded.version).toBe(STORAGE_VERSION)
    expect(localStorage.getItem(BACKUP_KEY)).toContain('"version":1')
  })

  it('fills gaps in a partial record', () => {
    const patched = reconcile({ version: STORAGE_VERSION, journal: null, insight: 'nope' })
    expect(patched.journal).toEqual([])
    expect(patched.insight).toBe(0)
    expect(patched.streak.activeDays).toEqual([])
    expect(Object.keys(patched.abilities)).toHaveLength(6)
  })

  it('clamps an out-of-range text scale', () => {
    expect(reconcile({ settings: { textScale: 9 } }).settings.textScale).toBe(1.3)
    expect(reconcile({ settings: { textScale: 0.1 } }).settings.textScale).toBe(0.9)
  })
})

describe('export and import', () => {
  it('accepts its own backup envelope', () => {
    const state = createInitialState()
    state.insight = 99
    const backup = createBackup(state)

    const result = parseBackup(JSON.stringify(backup))
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.state.insight).toBe(99)
  })

  it('accepts a bare state object', () => {
    const result = parseBackup(JSON.stringify(createInitialState()))
    expect(result.ok).toBe(true)
  })

  it('upgrades an older backup and says so', () => {
    const result = parseBackup(
      JSON.stringify({ app: 'wisdom', kind: 'wisdom-backup', state: { version: 1, journal: [] } }),
    )
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.migratedFrom).toBe(1)
      expect(result.state.version).toBe(STORAGE_VERSION)
    }
  })

  it('rejects malformed JSON with a readable message', () => {
    const result = parseBackup('{{{')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error).toMatch(/not valid JSON/i)
  })

  it('rejects a file that is not a Wisdom backup', () => {
    const result = parseBackup(JSON.stringify({ hello: 'world' }))
    expect(result.ok).toBe(false)
  })

  it('refuses a backup from a newer version rather than mangling it', () => {
    const result = parseBackup(JSON.stringify({ version: STORAGE_VERSION + 5, journal: [] }))
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error).toMatch(/newer version/i)
  })
})
