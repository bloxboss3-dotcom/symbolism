/**
 * In-page reminder scheduling, timestamp-based and honest about limits: with
 * no push server, reminders can only surface while the app is open (or
 * installed and running). The system notification fires once per slot per
 * day; the in-app card stays until the user acts. Completing the routine
 * counts as done — no nagging, no guilt states.
 */
import { useCallback, useEffect, useState } from 'react'
import { showReminder } from '../../lib/notifications'
import { localDay } from '../../lib/time'
import { useAppState } from '../state/useAppState'

export type ReminderSlot = 'morning' | 'evening'

const SNOOZE_MINUTES = 10

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
  const dueSlot: ReminderSlot | null = (() => {
    const r = state.reminders
    if (r.paused) return null
    if (r.snoozedUntil && Date.now() < r.snoozedUntil) return null
    for (const slot of ['morning', 'evening'] as const) {
      const cfg = r[slot]
      if (!cfg.enabled) continue
      if (!cfg.days.includes(now.getDay())) continue
      const [h, m] = cfg.time.split(':').map(Number)
      const fireAt = new Date(now)
      fireAt.setHours(h, m, 0, 0)
      if (now < fireAt) continue
      const status = r.lastFired[`${today}:${slot}`]
      if (status === 'done' || status === 'skipped') continue
      if (completedToday(slot)) continue
      return slot
    }
    return null
  })()

  // One system notification per slot per day, when the slot first comes due.
  useEffect(() => {
    if (!dueSlot) return
    const key = `${today}:${dueSlot}`
    if (state.reminders.lastFired[key]) return
    dispatch({ type: 'reminder-fired', key, value: 'notified' })
    showReminder(
      dueSlot === 'morning' ? 'Morning prayer' : 'Evening prayer',
      dueSlot === 'morning'
        ? 'A quiet space is ready when you are.'
        : 'Before the day ends, be still for a little while.',
      !state.reminders.sound,
    )
  }, [dueSlot, today, state.reminders.lastFired, state.reminders.sound, dispatch])

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
