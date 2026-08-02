/**
 * Everything the app remembers about a learner. All of it lives on the device;
 * none of it is transmitted anywhere.
 */
import type { AbilityId, RubricDimensionId } from './content'

export const STORAGE_VERSION = 3

export type GoalId =
  'counsel' | 'decisions' | 'leadership' | 'scripture' | 'symbolism' | 'communication'

export type StudyPreference = 'short' | 'standard' | 'deep'
export type Familiarity = 'new' | 'some' | 'seasoned'
export type ThemePreference = 'system' | 'dark' | 'light'
export type MotionPreference = 'system' | 'reduced'

export interface Profile {
  goals: GoalId[]
  studyPreference: StudyPreference
  familiarity: Familiarity
  /** Free-text: what the learner wants wisdom for, in their own words. */
  intention?: string
  startedAt: string
  onboardedAt?: string
}

/** One saved answer to one step. */
export type StepResponse =
  | { kind: 'text'; value: string; revised?: string; updatedAt: string }
  | { kind: 'choice'; value: string; updatedAt: string }
  | { kind: 'multi'; values: string[]; updatedAt: string }
  | { kind: 'order'; values: string[]; updatedAt: string }
  | { kind: 'map'; values: Record<string, string>; updatedAt: string }
  | { kind: 'ratings'; values: Record<string, number>; updatedAt: string }
  | { kind: 'ack'; updatedAt: string }

export type LessonStatus = 'not-started' | 'in-progress' | 'complete'

export interface LessonProgress {
  status: LessonStatus
  /** Index of the furthest step reached, so returning resumes in place. */
  stepIndex: number
  /** Steps the learner has explicitly completed, by step id. */
  completedStepIds: string[]
  responses: Record<string, StepResponse>
  insight: number
  startedAt: string
  updatedAt: string
  completedAt?: string
}

export interface ConceptMastery {
  conceptId: string
  /** 0 = met once, 3 = recalled correctly across separate sittings. */
  level: number
  encounters: number
  firstMetAt: string
  lastSeenAt: string
  /** ISO day the concept is next worth revisiting. */
  dueOn: string
}

export interface JournalEntry {
  id: string
  createdAt: string
  updatedAt: string
  kind: 'insight' | 'answer' | 'principle' | 'analogy' | 'passage' | 'practice' | 'note'
  title: string
  body: string
  /** Present when the entry was revised after seeing an exemplar. */
  revisedBody?: string
  tags: string[]
  sourceLessonId?: string
  sourceStepId?: string
  pinned?: boolean
}

export interface DiscoveredConnection {
  id: string
  createdAt: string
  leftLabel: string
  rightLabel: string
  why: string
  sourceLessonId?: string
}

export interface PracticeCommitment {
  id: string
  createdAt: string
  lessonId: string
  assignment: string
  window: string
  checkIn: string
  status: 'committed' | 'done' | 'skipped'
  reflection?: string
  closedAt?: string
}

export interface StreakState {
  current: number
  longest: number
  /** ISO day strings (YYYY-MM-DD) on which any meaningful work happened. */
  activeDays: string[]
  lastActiveDay?: string
}

export interface AbilityScore {
  /** Insight earned through steps tagged with this ability. */
  points: number
  /** Distinct steps completed, so the map reflects breadth as well as volume. */
  touches: number
}

export interface Settings {
  theme: ThemePreference
  motion: MotionPreference
  /** Multiplier applied to the root type scale, 0.9–1.3. */
  textScale: number
  /** Optional dictation on long-answer steps, where the browser supports it. */
  voiceEnabled: boolean
}

export interface WisdomState {
  version: number
  createdAt: string
  updatedAt: string
  profile: Profile | null
  lessons: Record<string, LessonProgress>
  cases: Record<string, LessonProgress>
  trials: Record<string, LessonProgress>
  abilities: Record<AbilityId, AbilityScore>
  concepts: Record<string, ConceptMastery>
  journal: JournalEntry[]
  connections: DiscoveredConnection[]
  practices: PracticeCommitment[]
  /** Self-ratings keyed `${lessonId}:${stepId}`. */
  selfAssessments: Record<string, Record<RubricDimensionId, number>>
  insight: number
  streak: StreakState
  settings: Settings
}

/** The file produced by Export and accepted by Import. */
export interface WisdomBackup {
  app: 'wisdom'
  kind: 'wisdom-backup'
  exportedAt: string
  appVersion: string
  state: WisdomState
}
