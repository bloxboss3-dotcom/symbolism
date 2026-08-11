import { routines } from '../../data/registry'
import type { Routine } from '../../schemas'

/** Rotates through a time-of-day's routines by calendar day, so the pair breathes. */
export function suggestRoutine(timeOfDay: 'morning' | 'evening', date = new Date()): Routine {
  const pool = routines.filter((r) => r.timeOfDay === timeOfDay)
  const dayNumber = Math.floor(date.getTime() / 86_400_000)
  return pool[dayNumber % pool.length]
}
