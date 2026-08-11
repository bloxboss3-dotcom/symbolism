/**
 * User-side state: preferences, reminders, session progress, history, notes.
 *
 * Everything here stays on the device. The schemas exist so imports/restores
 * and storage migrations can be validated the same way content is.
 */
import { z } from 'zod'

export const ROUTINE_MINUTE_CHOICES = [5, 10, 15, 20, 30] as const

export const UserPreferencesSchema = z.object({
  theme: z.enum(['system', 'light', 'dark']),
  motion: z.enum(['system', 'reduced']),
  /** Multiplier applied to the root font size. */
  textScale: z.number().min(0.9).max(1.3),
  routineMinutes: z.union([
    z.literal(5),
    z.literal(10),
    z.literal(15),
    z.literal(20),
    z.literal(30),
  ]),
  /** Explicit overrides for the two timed segments; null = scale with length. */
  silenceSecondsOverride: z.number().int().min(30).max(1800).nullable(),
  prayerSecondsOverride: z.number().int().min(30).max(1800).nullable(),
  audio: z.object({
    ambience: z.enum(['off', 'rain', 'night', 'pad']),
    ambienceVolume: z.number().min(0).max(1),
    chimeEnabled: z.boolean(),
    chimeVolume: z.number().min(0).max(1),
    /** Reserved for future licensed narration; no MVP implementation. */
    narrationVolume: z.number().min(0).max(1),
  }),
  breathing: z.object({
    /** `guided` shows the moving circle; `still` shows a static figure. */
    style: z.enum(['guided', 'still']),
    inSeconds: z.number().min(3).max(8),
    outSeconds: z.number().min(3).max(10),
    /** A gentle pause at the bottom of the breath. Never breath-holding. */
    restSeconds: z.number().min(0).max(4),
    textCues: z.boolean(),
  }),
  translationId: z.enum(['web']),
  contentPack: z.enum(['ecumenical']),
  onboarded: z.boolean(),
})
export type UserPreferences = z.infer<typeof UserPreferencesSchema>

const timeOfDayReminder = z.object({
  enabled: z.boolean(),
  /** Local wall-clock time, "HH:MM". Fires at this time in the current zone. */
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  /** Days of week, 0 = Sunday … 6 = Saturday. */
  days: z.array(z.number().int().min(0).max(6)),
})

export const ReminderScheduleSchema = z.object({
  morning: timeOfDayReminder,
  evening: timeOfDayReminder,
  sound: z.boolean(),
  /** A rest from reminders, without losing the schedule. */
  paused: z.boolean(),
  /** Set when the user snoozes; epoch ms after which reminders resume. */
  snoozedUntil: z.number().nullable(),
  /** The last local date ("YYYY-MM-DD" + slot) a reminder was shown or resolved. */
  lastFired: z.record(z.string(), z.string()),
})
export type ReminderSchedule = z.infer<typeof ReminderScheduleSchema>

export const SessionProgressSchema = z.object({
  routineId: z.string(),
  chosenMinutes: z.number(),
  segmentIndex: z.number().int().min(0),
  status: z.enum(['running', 'paused']),
  /** Epoch ms when the current segment last (re)started running. */
  segmentStartedAt: z.number(),
  /** Ms already spent in the current segment across pauses/reloads. */
  segmentAccumulatedMs: z.number(),
  startedAt: z.number(),
  updatedAt: z.number(),
})
export type SessionProgress = z.infer<typeof SessionProgressSchema>

export const RoutineCompletionSchema = z.object({
  id: z.string(),
  routineId: z.string(),
  timeOfDay: z.enum(['morning', 'evening']),
  /** ISO datetime of completion. */
  completedAt: z.string(),
  /** Local date "YYYY-MM-DD" for the history calendar. */
  localDate: z.string(),
  minutes: z.number(),
  endedEarly: z.boolean(),
})
export type RoutineCompletion = z.infer<typeof RoutineCompletionSchema>

export const BookmarkSchema = z.object({
  id: z.string(),
  passageId: z.string(),
  createdAt: z.string(),
})
export type Bookmark = z.infer<typeof BookmarkSchema>

export const PrivateNoteSchema = z.object({
  id: z.string(),
  /** Attached to a passage when set; a free-standing note otherwise. */
  passageId: z.string().nullable(),
  text: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type PrivateNote = z.infer<typeof PrivateNoteSchema>

/** Where the reader last was, for "Continue reading". */
export const ReadingPositionSchema = z.object({
  planId: z.string(),
  day: z.number().int().positive(),
  updatedAt: z.string(),
})
export type ReadingPosition = z.infer<typeof ReadingPositionSchema>
