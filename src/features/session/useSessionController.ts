/**
 * Orchestrates one guided session: machine transitions, persistence, the
 * shared tick, timed-segment auto-advance, chimes, and the screen wake lock.
 * All timing derives from timestamps (see machine.ts) — the interval below
 * only refreshes the view.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Routine } from '../../schemas'
import { audioEngine } from '../../lib/audio'
import { newId } from '../../lib/id'
import { localDay } from '../../lib/time'
import { releaseWakeLock, requestWakeLock } from '../../lib/wakeLock'
import { useAppState } from '../state/useAppState'
import { createSession, reduce, rehydrate, segmentElapsedMs, type SessionState } from './machine'
import { planSegments } from './plan'

export type SessionController = ReturnType<typeof useSessionController>

export function useSessionController(routine: Routine) {
  const { state: app, dispatch } = useAppState()
  const prefs = app.preferences

  const planned = useMemo(() => planSegments(routine, prefs), [routine, prefs])
  const segmentCount = planned.length

  // A snapshot saved for this routine resumes; anything else starts fresh
  // when the user chooses to begin.
  const [session, setSession] = useState<SessionState | null>(() => {
    const saved = app.session
    if (saved && saved.routineId === routine.id) {
      return rehydrate({ ...saved, endedEarly: false }, Date.now())
    }
    return null
  })
  const completionRecorded = useRef(false)

  const persist = useCallback(
    (next: SessionState | null) => {
      if (next === null || next.status === 'complete') {
        dispatch({ type: 'session', session: null })
        return
      }
      dispatch({
        type: 'session',
        session: {
          routineId: next.routineId,
          chosenMinutes: next.chosenMinutes,
          segmentIndex: next.segmentIndex,
          status: next.status,
          segmentStartedAt: next.segmentStartedAt,
          segmentAccumulatedMs: next.segmentAccumulatedMs,
          startedAt: next.startedAt,
          updatedAt: Date.now(),
        },
      })
    },
    [dispatch],
  )

  const begin = useCallback(() => {
    const next = session ?? createSession(routine.id, prefs.routineMinutes, Date.now())
    const started =
      next.status === 'paused'
        ? reduce(next, { type: 'RESUME', now: Date.now() }, segmentCount)
        : next
    setSession(started)
    persist(started)
  }, [session, routine.id, prefs.routineMinutes, segmentCount, persist])

  /** Discard any saved progress and begin from the first segment. */
  const startFresh = useCallback(() => {
    const fresh = createSession(routine.id, prefs.routineMinutes, Date.now())
    completionRecorded.current = false
    setSession(fresh)
    persist(fresh)
  }, [routine.id, prefs.routineMinutes, persist])

  const send = useCallback(
    (type: 'PAUSE' | 'RESUME' | 'NEXT' | 'BACK' | 'RESTART' | 'END_EARLY') => {
      setSession((current) => {
        if (!current) return current
        const next = reduce(current, { type, now: Date.now() }, segmentCount)
        persist(next)
        return next
      })
    },
    [segmentCount, persist],
  )

  // View refresh while a timed segment runs; timestamps carry the truth.
  const [, setTickCount] = useState(0)
  const current = session ? planned[session.segmentIndex] : null
  const running = session?.status === 'running'
  const timed = current?.plannedMs != null

  useEffect(() => {
    if (!running || !timed) return
    const interval = window.setInterval(() => setTickCount((c) => c + 1), 500)
    const onVisible = () => setTickCount((c) => c + 1)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [running, timed])

  // Timed segments advance themselves, with a chime when enabled.
  useEffect(() => {
    if (!session || !running || !current || current.plannedMs == null) return
    const elapsed = segmentElapsedMs(session, Date.now())
    if (elapsed >= current.plannedMs) {
      if (prefs.audio.chimeEnabled) audioEngine.chime()
      send('NEXT')
    }
  })

  // Wake lock follows the running state.
  useEffect(() => {
    if (running) requestWakeLock()
    else releaseWakeLock()
    return () => releaseWakeLock()
  }, [running])

  // Completion is recorded exactly once, then the snapshot clears.
  useEffect(() => {
    if (session?.status === 'complete' && !completionRecorded.current) {
      completionRecorded.current = true
      const now = new Date()
      dispatch({
        type: 'complete',
        completion: {
          id: newId(),
          routineId: routine.id,
          timeOfDay: routine.timeOfDay,
          completedAt: now.toISOString(),
          localDate: localDay(now),
          minutes: session.chosenMinutes,
          endedEarly: session.endedEarly,
        },
      })
      audioEngine.stop()
      if (prefs.audio.chimeEnabled) audioEngine.chime()
    }
  }, [session, dispatch, routine.id, routine.timeOfDay, prefs.audio.chimeEnabled])

  const remainingMs =
    session && current?.plannedMs != null
      ? Math.max(0, current.plannedMs - segmentElapsedMs(session, Date.now()))
      : null

  return {
    session,
    planned,
    current,
    remainingMs,
    begin,
    startFresh,
    send,
    hasSavedProgress: session !== null && session.status !== 'complete',
  }
}
