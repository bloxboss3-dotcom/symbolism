/**
 * Turns a routine plus the user's preferences into concrete per-segment
 * timings. Reading-type segments are self-paced (`plannedMs: null`); the two
 * personal segments — your prayer and silence — scale with the chosen session
 * length, unless the user has pinned explicit durations in Settings.
 */
import type { Routine, RoutineSegment } from '../../schemas'
import type { UserPreferences } from '../../schemas'

export type PlannedSegment = {
  segment: RoutineSegment
  /** null = self-paced; the user advances with Continue. */
  plannedMs: number | null
}

const MIN_TIMED_SECONDS = 30

export function scaleSeconds(baseSeconds: number, chosenMinutes: number, baseMinutes: number) {
  const scaled = Math.round((baseSeconds * chosenMinutes) / baseMinutes)
  return Math.max(MIN_TIMED_SECONDS, scaled)
}

export function planSegments(routine: Routine, prefs: UserPreferences): PlannedSegment[] {
  const minutes = prefs.routineMinutes
  return routine.segments.map((segment) => {
    switch (segment.kind) {
      case 'your-prayer': {
        const seconds =
          prefs.prayerSecondsOverride ??
          scaleSeconds(segment.baseSeconds, minutes, routine.baseMinutes)
        return { segment, plannedMs: seconds * 1000 }
      }
      case 'silence': {
        const seconds =
          prefs.silenceSecondsOverride ??
          scaleSeconds(segment.baseSeconds, minutes, routine.baseMinutes)
        return { segment, plannedMs: seconds * 1000 }
      }
      case 'stretch': {
        // Stretch holds do not stretch with session length.
        return { segment, plannedMs: null }
      }
      default:
        return { segment, plannedMs: null }
    }
  })
}
