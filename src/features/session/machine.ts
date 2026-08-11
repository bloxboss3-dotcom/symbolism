/**
 * The guided-session state machine.
 *
 * A session is a pure value advanced by typed events; the React layer is a
 * thin shell that renders the current segment and dispatches. Two rules give
 * the player its reliability:
 *
 *  1. Time is derived, never counted. The state stores *when* the current
 *     segment last started running and *how much* time it had accumulated
 *     before that; elapsed time is computed from a timestamp on demand. A
 *     throttled background tab or a page reload changes nothing.
 *  2. Every transition goes through `reduce`, so persistence can serialize
 *     the state after any event and resume from exactly that point.
 */

export type SessionState = {
  routineId: string
  chosenMinutes: number
  segmentIndex: number
  status: 'running' | 'paused' | 'complete'
  /** Epoch ms when the current segment last (re)started running. */
  segmentStartedAt: number
  /** Ms spent in the current segment before `segmentStartedAt`. */
  segmentAccumulatedMs: number
  startedAt: number
  endedEarly: boolean
}

export type SessionEvent =
  | { type: 'PAUSE'; now: number }
  | { type: 'RESUME'; now: number }
  /** Advance to the next segment (Continue, Skip, or a timer finishing). */
  | { type: 'NEXT'; now: number }
  | { type: 'BACK'; now: number }
  | { type: 'RESTART'; now: number }
  | { type: 'END_EARLY'; now: number }

export function createSession(routineId: string, chosenMinutes: number, now: number): SessionState {
  return {
    routineId,
    chosenMinutes,
    segmentIndex: 0,
    status: 'running',
    segmentStartedAt: now,
    segmentAccumulatedMs: 0,
    startedAt: now,
    endedEarly: false,
  }
}

/** Ms the current segment has been running, computed from timestamps. */
export function segmentElapsedMs(state: SessionState, now: number): number {
  const live = state.status === 'running' ? Math.max(0, now - state.segmentStartedAt) : 0
  return state.segmentAccumulatedMs + live
}

function atSegment(state: SessionState, index: number, now: number): SessionState {
  return {
    ...state,
    segmentIndex: index,
    segmentStartedAt: now,
    segmentAccumulatedMs: 0,
  }
}

export function reduce(
  state: SessionState,
  event: SessionEvent,
  segmentCount: number,
): SessionState {
  if (state.status === 'complete') return state

  switch (event.type) {
    case 'PAUSE': {
      if (state.status !== 'running') return state
      return {
        ...state,
        status: 'paused',
        segmentAccumulatedMs: segmentElapsedMs(state, event.now),
      }
    }
    case 'RESUME': {
      if (state.status !== 'paused') return state
      return { ...state, status: 'running', segmentStartedAt: event.now }
    }
    case 'NEXT': {
      if (state.segmentIndex >= segmentCount - 1) {
        return { ...state, status: 'complete' }
      }
      return { ...atSegment(state, state.segmentIndex + 1, event.now), status: 'running' }
    }
    case 'BACK': {
      // At the first segment, going back restarts it — never an error.
      const target = Math.max(0, state.segmentIndex - 1)
      return { ...atSegment(state, target, event.now), status: 'running' }
    }
    case 'RESTART': {
      return createSession(state.routineId, state.chosenMinutes, event.now)
    }
    case 'END_EARLY': {
      return { ...state, status: 'complete', endedEarly: true }
    }
  }
}

/**
 * Rehydrate a persisted session after a reload. A paused snapshot resumes
 * paused; a running snapshot is re-anchored as paused so time spent with the
 * tab closed is not billed against the segment, and the user chooses the
 * moment to continue.
 */
export function rehydrate(saved: SessionState, now: number): SessionState {
  if (saved.status === 'complete') return saved
  const accumulated =
    saved.status === 'running'
      ? // The tab may have died mid-run; count only time up to the last save.
        saved.segmentAccumulatedMs
      : saved.segmentAccumulatedMs
  return {
    ...saved,
    status: 'paused',
    segmentAccumulatedMs: accumulated,
    segmentStartedAt: now,
  }
}
