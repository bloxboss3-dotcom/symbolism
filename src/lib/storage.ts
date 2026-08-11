/**
 * Local persistence.
 *
 * Everything the user does — preferences, reminders, history, notes,
 * bookmarks, and a mid-session snapshot — lives in one versioned
 * `localStorage` document on their own device. Nothing is ever sent anywhere.
 *
 * Two rules shape this file (proven in this repository's previous life):
 *
 *  1. A newer build must never silently destroy saved data. The state carries
 *     a `version`; `migrate()` walks it forward one step at a time, and the
 *     raw pre-migration document is kept under a backup key.
 *  2. Reading must never throw. A corrupt or half-written record degrades to
 *     a fresh state rather than a blank screen.
 */
import {
  BookmarkSchema,
  PrivateNoteSchema,
  ReadingPositionSchema,
  ReminderScheduleSchema,
  RoutineCompletionSchema,
  SessionProgressSchema,
  UserPreferencesSchema,
  type Bookmark,
  type PrivateNote,
  type ReadingPosition,
  type ReminderSchedule,
  type RoutineCompletion,
  type SessionProgress,
  type UserPreferences,
} from '../schemas'
import type { z } from 'zod'

export const STORAGE_VERSION = 2
export const STORAGE_KEY = 'stillbeforehim:state'
/** Written before every migration so a failed upgrade is recoverable. */
export const BACKUP_KEY = 'stillbeforehim:state:pre-migration'

export type AppState = {
  version: number
  createdAt: string
  updatedAt: string
  preferences: UserPreferences
  reminders: ReminderSchedule
  history: RoutineCompletion[]
  bookmarks: Bookmark[]
  notes: PrivateNote[]
  reading: ReadingPosition | null
  session: SessionProgress | null
}

export function defaultPreferences(): UserPreferences {
  return {
    theme: 'system',
    motion: 'system',
    textScale: 1,
    routineMinutes: 15,
    silenceSecondsOverride: null,
    prayerSecondsOverride: null,
    audio: {
      ambience: 'off',
      ambienceVolume: 0.5,
      chimeEnabled: true,
      chimeVolume: 0.6,
      narrationVolume: 0.8,
      narration: {
        enabled: true,
        voiceURI: null,
        rate: 0.9,
      },
    },
    breathing: {
      style: 'guided',
      inSeconds: 4,
      outSeconds: 6,
      restSeconds: 2,
      textCues: true,
    },
    translationId: 'web',
    contentPack: 'ecumenical',
    onboarded: false,
  }
}

export function defaultReminders(): ReminderSchedule {
  return {
    morning: { enabled: false, time: '07:00', days: [0, 1, 2, 3, 4, 5, 6] },
    evening: { enabled: false, time: '21:30', days: [0, 1, 2, 3, 4, 5, 6] },
    sound: true,
    paused: false,
    snoozedUntil: null,
    lastFired: {},
  }
}

export function createInitialState(now = new Date()): AppState {
  const iso = now.toISOString()
  return {
    version: STORAGE_VERSION,
    createdAt: iso,
    updatedAt: iso,
    preferences: defaultPreferences(),
    reminders: defaultReminders(),
    history: [],
    bookmarks: [],
    notes: [],
    reading: null,
    session: null,
  }
}

/* ------------------------------------------------------------ migration ---- */

type AnyState = Record<string, unknown>

/** Ordered upgrades: entry `n` takes a version-n state to version n+1. */
const MIGRATIONS: Record<number, (state: AnyState) => AnyState> = {
  // v1 → v2: voice guidance arrived; older preferences gain its defaults so
  // the stricter schema does not reset everything the user has chosen.
  1: (state) => {
    const prefs = state.preferences as { audio?: Record<string, unknown> } | undefined
    if (prefs?.audio && typeof prefs.audio === 'object' && !('narration' in prefs.audio)) {
      prefs.audio.narration = { enabled: true, voiceURI: null, rate: 0.9 }
    }
    return { ...state, version: 2 }
  },
}

export function migrate(input: AnyState): AppState {
  let state = { ...input }
  let version = typeof state.version === 'number' ? state.version : 1

  while (version < STORAGE_VERSION) {
    const step = MIGRATIONS[version]
    if (!step) return reconcile(state)
    state = step(state)
    const next = typeof state.version === 'number' ? state.version : version + 1
    if (next <= version) break
    version = next
  }
  return reconcile(state)
}

/**
 * Field-by-field validation with per-field fallback: one corrupt list must
 * not cost the user everything else.
 */
export function reconcile(input: AnyState): AppState {
  const base = createInitialState()

  const field = <T>(schema: z.ZodType<T>, value: unknown, fallback: T): T => {
    const parsed = schema.safeParse(value)
    return parsed.success ? parsed.data : fallback
  }
  const list = <T>(schema: z.ZodType<T>, value: unknown): T[] => {
    if (!Array.isArray(value)) return []
    return value.flatMap((item) => {
      const parsed = schema.safeParse(item)
      return parsed.success ? [parsed.data] : []
    })
  }

  return {
    version: STORAGE_VERSION,
    createdAt: typeof input.createdAt === 'string' ? input.createdAt : base.createdAt,
    updatedAt: base.updatedAt,
    preferences: field(UserPreferencesSchema, input.preferences, base.preferences),
    reminders: field(ReminderScheduleSchema, input.reminders, base.reminders),
    history: list(RoutineCompletionSchema, input.history),
    bookmarks: list(BookmarkSchema, input.bookmarks),
    notes: list(PrivateNoteSchema, input.notes),
    reading: field(ReadingPositionSchema.nullable(), input.reading ?? null, null),
    session: field(SessionProgressSchema.nullable(), input.session ?? null, null),
  }
}

/* -------------------------------------------------------------- read/write - */

function storage(): Storage | null {
  try {
    if (typeof localStorage === 'undefined') return null
    const probe = '__sbh_probe__'
    localStorage.setItem(probe, '1')
    localStorage.removeItem(probe)
    return localStorage
  } catch {
    // Private browsing, disabled storage, or a full quota.
    return null
  }
}

export function loadState(): AppState {
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

export function saveState(state: AppState): boolean {
  const store = storage()
  if (!store) {
    writeFailed = true
    return false
  }
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

/** "Delete my local data" — removes every key this app owns. */
export function clearState(): void {
  const store = storage()
  if (!store) return
  store.removeItem(STORAGE_KEY)
  store.removeItem(BACKUP_KEY)
}
