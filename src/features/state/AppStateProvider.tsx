/**
 * The single source of truth for user-side state, persisted locally on every
 * change. Content (routines, Scripture, prayers) is static data and lives in
 * `src/data`; this provider holds only what the user does.
 */
import { useEffect, useMemo, useReducer, useState } from 'react'
import { AppStateContext } from './context'
import type {
  PrivateNote,
  ReadingPosition,
  ReminderSchedule,
  RoutineCompletion,
  SessionProgress,
  UserPreferences,
} from '../../schemas'
import {
  createInitialState,
  lastWriteFailed,
  loadState,
  saveState,
  type AppState,
} from '../../lib/storage'
import { newId } from '../../lib/id'

export type AppAction =
  | { type: 'prefs'; patch: Partial<UserPreferences> }
  | { type: 'audio'; patch: Partial<UserPreferences['audio']> }
  | { type: 'breathing'; patch: Partial<UserPreferences['breathing']> }
  | { type: 'reminders'; patch: Partial<ReminderSchedule> }
  | {
      type: 'reminder-slot'
      slot: 'morning' | 'evening'
      patch: Partial<ReminderSchedule['morning']>
    }
  | { type: 'reminder-fired'; key: string; value: string }
  | { type: 'complete'; completion: RoutineCompletion }
  | { type: 'session'; session: SessionProgress | null }
  | { type: 'bookmark-toggle'; passageId: string }
  | { type: 'note-add'; passageId: string | null; text: string }
  | { type: 'note-update'; id: string; text: string }
  | { type: 'note-delete'; id: string }
  | { type: 'reading'; position: ReadingPosition | null }
  | { type: 'reset' }

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'prefs':
      return { ...state, preferences: { ...state.preferences, ...action.patch } }
    case 'audio':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          audio: { ...state.preferences.audio, ...action.patch },
        },
      }
    case 'breathing':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          breathing: { ...state.preferences.breathing, ...action.patch },
        },
      }
    case 'reminders':
      return { ...state, reminders: { ...state.reminders, ...action.patch } }
    case 'reminder-slot':
      return {
        ...state,
        reminders: {
          ...state.reminders,
          [action.slot]: { ...state.reminders[action.slot], ...action.patch },
        },
      }
    case 'reminder-fired':
      return {
        ...state,
        reminders: {
          ...state.reminders,
          lastFired: { ...state.reminders.lastFired, [action.key]: action.value },
        },
      }
    case 'complete':
      return {
        ...state,
        history: [...state.history, action.completion],
        session: null,
      }
    case 'session':
      return { ...state, session: action.session }
    case 'bookmark-toggle': {
      const existing = state.bookmarks.find((b) => b.passageId === action.passageId)
      return {
        ...state,
        bookmarks: existing
          ? state.bookmarks.filter((b) => b.passageId !== action.passageId)
          : [
              ...state.bookmarks,
              { id: newId(), passageId: action.passageId, createdAt: new Date().toISOString() },
            ],
      }
    }
    case 'note-add': {
      const now = new Date().toISOString()
      const note: PrivateNote = {
        id: newId(),
        passageId: action.passageId,
        text: action.text,
        createdAt: now,
        updatedAt: now,
      }
      return { ...state, notes: [note, ...state.notes] }
    }
    case 'note-update':
      return {
        ...state,
        notes: state.notes.map((n) =>
          n.id === action.id ? { ...n, text: action.text, updatedAt: new Date().toISOString() } : n,
        ),
      }
    case 'note-delete':
      return { ...state, notes: state.notes.filter((n) => n.id !== action.id) }
    case 'reading':
      return { ...state, reading: action.position }
    case 'reset':
      return createInitialState()
  }
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)
  const [persistenceBlocked, setPersistenceBlocked] = useState(false)

  useEffect(() => {
    saveState(state)
    setPersistenceBlocked(lastWriteFailed())
  }, [state])

  const value = useMemo(
    () => ({ state, dispatch, persistenceBlocked }),
    [state, persistenceBlocked],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}
