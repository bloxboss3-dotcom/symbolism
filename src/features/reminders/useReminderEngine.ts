/**
 * In-page reminder scheduling, timestamp-based and honest about limits: with
 * no push server, reminders can only surface while the app is open (or
 * installed and running). Each slot fires its system notification once per
 * day, independently; the in-app card stays until the user acts. Completing
 * the routine counts as done — no nagging, no guilt states.
 */
import { useCallback, useEffect, useState } from 'react'
import { showReminder } from '../../lib/notifications'
import { localDay } from '../../lib/time'
import { useAppState } from '../state/useAppState'

export type ReminderSlot = 'morning' | 'evening'

const SNOOZE_MINUTES = 10
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/

/** Whether an "HH:MM" wall-clock time is already behind us today. */
export function slotTimePassedToday(time: string, now = new Date()): boolean {
  if (!TIME_PATTERN.test(time)) return false
  const [h, m] = time.split(':').map(Number)
  const fireAt = new Date(now)
  fireAt.setHours(h, m, 0, 0)
  return now >= fireAt
}

export function useReminderEngine() {
  const { state, dispatch } = useAppState()
  const [, setTick] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setTick((t) => t + 1), 30_000)
    const onVisible = () => setTick((t) => t + 1)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const now = new Date()
  const today = localDay(now)

  const completedToday = useCallback(
    (slot: ReminderSlot) =>
      state.history.some((c) => c.localDate === today && c.timeOfDay === slot),
    [state.history, today],
  )

  // Recomputed every render; the 30-second tick above keeps renders coming.
  const dueSlots: ReminderSlot[] = (() => {
    const r = state.reminders
    if (r.paused) return []
    if (r.snoozedUntil && Date.now() < r.snoozedUntil) return []
    const due: ReminderSlot[] = []
    for (const slot of ['morning', 'evening'] as const) {
      const cfg = r[slot]
      if (!cfg.enabled) continue
      if (!cfg.days.includes(now.getDay())) continue
      // A malformed time (possible only if storage was edited by hand)
      // must never make a slot permanently "due".
      if (!slotTimePassedToday(cfg.time, now)) continue
      const status = r.lastFired[`${today}:${slot}`]
      if (status === 'done' || status === 'skipped') continue
      if (completedToday(slot)) continue
      due.push(slot)
    }
    return due
  })()

  // The card surfaces one slot; when both linger, the later one (evening)
  // is the one that matches the hour.
  const dueSlot: ReminderSlot | null = dueSlots.length > 0 ? dueSlots[dueSlots.length - 1] : null

  // One system notification per slot per day — each slot independently, so
  // an unresolved morning card cannot swallow the evening notification.
  useEffect(() => {
    for (const slot of dueSlots) {
      const key = `${today}:${slot}`
      if (state.reminders.lastFired[key]) continue
      dispatch({ type: 'reminder-fired', key, value: 'notified' })
      showReminder(
        slot === 'morning' ? 'Morning prayer' : 'Evening prayer',
        slot === 'morning'
          ? 'A quiet space is ready when you are.'
          : 'Before the day ends, be still for a little while.',
        !state.reminders.sound,
      )
    }
  }, [dueSlots, today, state.reminders.lastFired, state.reminders.sound, dispatch])

  const snooze = useCallback(() => {
    dispatch({
      type: 'reminders',
      patch: { snoozedUntil: Date.now() + SNOOZE_MINUTES * 60_000 },
    })
  }, [dispatch])

  const skipToday = useCallback(() => {
    if (!dueSlot) return
    dispatch({ type: 'reminder-fired', key: `${today}:${dueSlot}`, value: 'skipped' })
  }, [dispatch, dueSlot, today])

  const markDone = useCallback(() => {
    if (!dueSlot) return
    dispatch({ type: 'reminder-fired', key: `${today}:${dueSlot}`, value: 'done' })
  }, [dispatch, dueSlot, today])

  return { dueSlot, snooze, skipToday, markDone, snoozeMinutes: SNOOZE_MINUTES }
}
