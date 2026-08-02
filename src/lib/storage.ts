/**
 * Local persistence.
 *
 * Everything the learner writes stays in `localStorage` on their own device.
 * Two rules shape this file:
 *
 *  1. A newer build must never silently destroy saved work. Every state carries
 *     a `version`, and `migrate()` walks it forward one step at a time.
 *  2. Reading must never throw. A corrupt or half-written record degrades to a
 *     fresh state rather than a blank screen.
 */
import { ABILITY_IDS, type AbilityId } from '../types/content'
import {
  STORAGE_VERSION,
  type AbilityScore,
  type WisdomBackup,
  type WisdomState,
} from '../types/progress'
import { isoDay } from './date'

export const STORAGE_KEY = 'wisdom:state'
/** Written before every migration so a failed upgrade is recoverable. */
export const BACKUP_KEY = 'wisdom:state:pre-migration'
export const APP_VERSION = '1.0.0'

function emptyAbilities(): Record<AbilityId, AbilityScore> {
  return ABILITY_IDS.reduce(
    (acc, id) => {
      acc[id] = { points: 0, touches: 0 }
      return acc
    },
    {} as Record<AbilityId, AbilityScore>,
  )
}

export function createInitialState(now = new Date()): WisdomState {
  const iso = now.toISOString()
  return {
    version: STORAGE_VERSION,
    createdAt: iso,
    updatedAt: iso,
    profile: null,
    lessons: {},
    cases: {},
    trials: {},
    abilities: emptyAbilities(),
    concepts: {},
    journal: [],
    connections: [],
    practices: [],
    selfAssessments: {},
    insight: 0,
    streak: { current: 0, longest: 0, activeDays: [] },
    settings: { theme: 'system', motion: 'system', textScale: 1, voiceEnabled: false },
  }
}

/* ------------------------------------------------------------ migration ---- */

type AnyState = Record<string, unknown>

/**
 * Ordered upgrades. Each entry takes the state at version `n` and returns it at
 * version `n + 1`. Steps are additive on purpose: an unknown field from a newer
 * build is preserved rather than stripped.
 */
const MIGRATIONS: Record<number, (state: AnyState) => AnyState> = {
  // v1 → v2: case files and transfer trials became first-class progress records.
  1: (state) => ({ ...state, cases: state.cases ?? {}, trials: state.trials ?? {}, version: 2 }),
  // v2 → v3: lessons began tracking which steps were explicitly completed,
  // rather than inferring completion from the furthest index reached.
  2: (state) => {
    const upgradeBucket = (bucket: unknown) => {
      if (!bucket || typeof bucket !== 'object') return {}
      return Object.fromEntries(
        Object.entries(bucket as Record<string, AnyState>).map(([id, lesson]) => [
          id,
          {
            ...lesson,
            completedStepIds: Array.isArray(lesson.completedStepIds) ? lesson.completedStepIds : [],
          },
        ]),
      )
    }
    return {
      ...state,
      lessons: upgradeBucket(state.lessons),
      cases: upgradeBucket(state.cases),
      trials: upgradeBucket(state.trials),
      version: 3,
    }
  },
}

export function migrate(input: AnyState): WisdomState {
  let state = { ...input }
  let version = typeof state.version === 'number' ? state.version : 1

  while (version < STORAGE_VERSION) {
    const step = MIGRATIONS[version]
    if (!step) {
      // No path forward: keep the learner's writing, reset the machinery.
      return { ...createInitialState(), journal: normaliseArray(state.journal) } as WisdomState
    }
    state = step(state)
    const next = typeof state.version === 'number' ? state.version : version + 1
    if (next <= version) break
    version = next
  }

  return reconcile(state)
}

function normaliseArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : []
}

/**
 * Fills in anything a migration or a hand-edited import left out, so the rest
 * of the app can treat the state as total.
 */
export function reconcile(input: AnyState): WisdomState {
  const base = createInitialState()
  const state = { ...base, ...input } as WisdomState

  state.version = STORAGE_VERSION
  state.lessons = (state.lessons ?? {}) as WisdomState['lessons']
  state.cases = (state.cases ?? {}) as WisdomState['cases']
  state.trials = (state.trials ?? {}) as WisdomState['trials']
  state.concepts = (state.concepts ?? {}) as WisdomState['concepts']
  state.selfAssessments = (state.selfAssessments ?? {}) as WisdomState['selfAssessments']
  state.journal = normaliseArray(state.journal)
  state.connections = normaliseArray(state.connections)
  state.practices = normaliseArray(state.practices)
  state.insight = Number.isFinite(state.insight) ? state.insight : 0

  const abilities = emptyAbilities()
  for (const id of ABILITY_IDS) {
    const found = state.abilities?.[id]
    abilities[id] = {
      points: Number.isFinite(found?.points) ? found.points : 0,
      touches: Number.isFinite(found?.touches) ? found.touches : 0,
    }
  }
  state.abilities = abilities

  state.streak = {
    current: state.streak?.current ?? 0,
    longest: state.streak?.longest ?? 0,
    activeDays: normaliseArray<string>(state.streak?.activeDays),
    ...(state.streak?.lastActiveDay ? { lastActiveDay: state.streak.lastActiveDay } : {}),
  }

  state.settings = { ...base.settings, ...(state.settings ?? {}) }
  const scale = Number(state.settings.textScale)
  state.settings.textScale = Number.isFinite(scale) ? Math.min(1.3, Math.max(0.9, scale)) : 1

  return state
}

/* -------------------------------------------------------------- read/write - */

function storage(): Storage | null {
  try {
    if (typeof localStorage === 'undefined') return null
    const probe = '__wisdom_probe__'
    localStorage.setItem(probe, '1')
    localStorage.removeItem(probe)
    return localStorage
  } catch {
    // Private browsing, disabled storage, or a full quota.
    return null
  }
}

export function loadState(): WisdomState {
  const store = storage()
  if (!store) return createInitialState()

  const raw = store.getItem(STORAGE_KEY)
  if (!raw) return createInitialState()

  try {
    const parsed = JSON.parse(raw) as AnyState
    if (typeof parsed !== 'object' || parsed === null) return createInitialState()

    const version = typeof parsed.version === 'number' ? parsed.version : 1
    if (version < STORAGE_VERSION) {
      store.setItem(BACKUP_KEY, raw)
      const migrated = migrate(parsed)
      saveState(migrated)
      return migrated
    }
    return reconcile(parsed)
  } catch {
    return createInitialState()
  }
}

let writeFailed = false

export function saveState(state: WisdomState): boolean {
  const store = storage()
  if (!store) return false
  try {
    store.setItem(STORAGE_KEY, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }))
    writeFailed = false
    return true
  } catch {
    writeFailed = true
    return false
  }
}

export function lastWriteFailed(): boolean {
  return writeFailed
}

export function clearState(): void {
  const store = storage()
  if (!store) return
  store.removeItem(STORAGE_KEY)
  store.removeItem(BACKUP_KEY)
}

/* ---------------------------------------------------------- export/import -- */

export function createBackup(state: WisdomState): WisdomBackup {
  return {
    app: 'wisdom',
    kind: 'wisdom-backup',
    exportedAt: new Date().toISOString(),
    appVersion: APP_VERSION,
    state,
  }
}

export function backupFilename(now = new Date()): string {
  return `wisdom-backup-${isoDay(now)}.json`
}

export type ImportResult =
  { ok: true; state: WisdomState; migratedFrom?: number } | { ok: false; error: string }

/**
 * Accepts either a full backup envelope or a bare state object, so a file
 * hand-edited down to its `state` still restores.
 */
export function parseBackup(text: string): ImportResult {
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    return { ok: false, error: 'That file is not valid JSON.' }
  }

  if (typeof parsed !== 'object' || parsed === null) {
    return { ok: false, error: 'That file does not contain a Wisdom backup.' }
  }

  const envelope = parsed as Partial<WisdomBackup> & AnyState
  const candidate = (
    envelope.kind === 'wisdom-backup' || envelope.app === 'wisdom' ? envelope.state : envelope
  ) as AnyState | undefined

  if (!candidate || typeof candidate !== 'object') {
    return { ok: false, error: 'That file does not contain a Wisdom backup.' }
  }
  if (!('lessons' in candidate) && !('journal' in candidate) && !('profile' in candidate)) {
    return { ok: false, error: 'That backup is missing its progress data.' }
  }

  const version = typeof candidate.version === 'number' ? candidate.version : 1
  if (version > STORAGE_VERSION) {
    return {
      ok: false,
      error:
        'That backup was made by a newer version of Wisdom. Update the app, then import again.',
    }
  }

  const state = version < STORAGE_VERSION ? migrate(candidate) : reconcile(candidate)
  return version < STORAGE_VERSION
    ? { ok: true, state, migratedFrom: version }
    : { ok: true, state }
}
