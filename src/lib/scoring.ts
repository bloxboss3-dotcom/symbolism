/**
 * What counts as progress.
 *
 * Insight is awarded for work that requires thought — noticing, weighing,
 * composing, revising — and only nominally for reading. There is deliberately
 * no way to farm it: every step pays once, and the ceiling for a lesson is the
 * lesson itself.
 */
import type { AbilityId, CertaintyTier, LessonStep, LessonStepType } from '../types/content'
import type { ConceptMastery, LessonProgress, StepResponse, StreakState } from '../types/progress'
import { addDays, daysBetween, isoDay } from './date'

/** Base insight per step kind. Reading pays little; judgement pays most. */
const STEP_INSIGHT: Record<LessonStepType, number> = {
  encounter: 1,
  'first-judgment': 6,
  observation: 8,
  certainty: 10,
  quiz: 5,
  evidence: 8,
  ranking: 8,
  teaching: 2,
  lenses: 3,
  socratic: 9,
  perspective: 10,
  decision: 8,
  'wise-answer': 14,
  exemplar: 2,
  'self-assess': 4,
  revision: 11,
  practice: 6,
  reflection: 4,
  connection: 8,
  retrieval: 5,
}

export function baseInsightFor(step: LessonStep): number {
  return STEP_INSIGHT[step.type] ?? 3
}

/**
 * Quality multiplier in [0.5, 1.25]. Deliberately gentle: a learner who thinks
 * hard and lands somewhere defensible should not feel punished, and no
 * multiple-choice score is treated as a measure of wisdom.
 */
export function qualityFor(step: LessonStep, response: StepResponse | undefined): number {
  if (!response) return 0.5

  switch (step.type) {
    case 'certainty': {
      if (response.kind !== 'map') return 0.5
      const total = step.claims.length
      if (total === 0) return 1
      const exact = step.claims.filter((c) => response.values[c.id] === c.tier).length
      const near = step.claims.filter((c) => {
        const given = response.values[c.id] as CertaintyTier | undefined
        return given && given !== c.tier && Math.abs(tierIndex(given) - tierIndex(c.tier)) === 1
      }).length
      return clampQuality(0.55 + (exact + near * 0.5) / total)
    }
    case 'quiz': {
      if (response.kind !== 'choice') return 0.5
      const chosen = step.options.find((o) => o.id === response.value)
      return chosen?.correct ? 1.25 : 0.6
    }
    case 'evidence': {
      if (response.kind !== 'multi') return 0.5
      const chosen = new Set(response.values)
      const right = step.options.filter((o) => o.supports === chosen.has(o.id)).length
      return clampQuality(0.5 + right / Math.max(1, step.options.length))
    }
    case 'ranking': {
      if (response.kind !== 'order') return 0.5
      return clampQuality(0.5 + rankAgreement(response.values, step.idealOrder) * 0.75)
    }
    case 'observation': {
      if (response.kind !== 'multi') return 0.5
      const subtle = new Set(step.subtleIds ?? [])
      const found = response.values.filter((id) => subtle.has(id)).length
      const breadth = Math.min(1, response.values.length / Math.max(2, step.options.length * 0.5))
      const depth = subtle.size ? found / subtle.size : 0
      return clampQuality(0.6 + breadth * 0.25 + depth * 0.4)
    }
    case 'connection': {
      if (response.kind !== 'map') return 0.5
      const right = step.pairs.filter((p) => response.values[p.leftId] === p.rightId).length
      return clampQuality(0.5 + (right / Math.max(1, step.pairs.length)) * 0.75)
    }
    case 'first-judgment':
    case 'socratic':
    case 'wise-answer':
    case 'revision':
    case 'reflection': {
      if (response.kind !== 'text') return 0.5
      // Effort, not eloquence: enough words to have actually reasoned.
      const words = countWords(response.value)
      const target = 'minWords' in step && step.minWords ? step.minWords : 40
      return clampQuality(0.6 + Math.min(1, words / Math.max(20, target)) * 0.6)
    }
    default:
      return 1
  }
}

function clampQuality(value: number): number {
  return Math.max(0.5, Math.min(1.25, Number(value.toFixed(3))))
}

function tierIndex(tier: CertaintyTier): number {
  return ['stated', 'implied', 'reasonable', 'possible', 'unsupported'].indexOf(tier)
}

export function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

/**
 * Agreement between two orderings in [0, 1], by mean rank displacement. Partial
 * credit matters here: getting the top item right is worth something even if
 * the middle is muddled.
 */
export function rankAgreement(given: string[], ideal: string[]): number {
  if (ideal.length < 2) return 1
  const position = new Map(given.map((id, index) => [id, index]))
  let displacement = 0
  ideal.forEach((id, index) => {
    const at = position.get(id)
    displacement += at === undefined ? ideal.length : Math.abs(at - index)
  })
  const worst = Math.floor((ideal.length * ideal.length) / 2)
  return Math.max(0, 1 - displacement / Math.max(1, worst))
}

export function insightForStep(step: LessonStep, response: StepResponse | undefined): number {
  return Math.round(baseInsightFor(step) * qualityFor(step, response))
}

/* ------------------------------------------------------------- abilities --- */

/** Steps without an explicit ability still train something; this is the map. */
const DEFAULT_ABILITY: Record<LessonStepType, AbilityId> = {
  encounter: 'see',
  'first-judgment': 'discern',
  observation: 'see',
  certainty: 'interpret',
  quiz: 'interpret',
  evidence: 'interpret',
  ranking: 'discern',
  teaching: 'interpret',
  lenses: 'interpret',
  socratic: 'discern',
  perspective: 'understand',
  decision: 'discern',
  'wise-answer': 'answer',
  exemplar: 'answer',
  'self-assess': 'answer',
  revision: 'answer',
  practice: 'live',
  reflection: 'live',
  connection: 'interpret',
  retrieval: 'interpret',
}

export function abilityForStep(step: LessonStep): AbilityId {
  return step.ability ?? DEFAULT_ABILITY[step.type] ?? 'interpret'
}

/**
 * Ability level from accumulated points. Growth slows on purpose — the curve is
 * square-root shaped, so early movement is visible and later levels are earned.
 * Levels describe practice completed, not the state of anyone's soul.
 */
export const ABILITY_LEVELS = [
  'Beginning',
  'Practising',
  'Steadying',
  'Discerning',
  'Seasoned',
] as const
export type AbilityLevelName = (typeof ABILITY_LEVELS)[number]

const LEVEL_THRESHOLDS = [0, 60, 180, 400, 750]

export function abilityLevel(points: number): { index: number; name: AbilityLevelName } {
  let index = 0
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (points >= LEVEL_THRESHOLDS[i]) {
      index = i
      break
    }
  }
  return { index, name: ABILITY_LEVELS[index] }
}

/** Fraction toward the next level, or 1 at the top. */
export function abilityProgress(points: number): number {
  const { index } = abilityLevel(points)
  if (index >= LEVEL_THRESHOLDS.length - 1) return 1
  const floor = LEVEL_THRESHOLDS[index]
  const ceiling = LEVEL_THRESHOLDS[index + 1]
  return Math.max(0, Math.min(1, (points - floor) / (ceiling - floor)))
}

/* ---------------------------------------------------------------- streak --- */

/**
 * A streak that measures presence, not obedience. Missing a day ends a run and
 * starts a new one; nothing is taken away, and the interface never scolds.
 */
export function recordActiveDay(streak: StreakState, day = isoDay()): StreakState {
  if (streak.lastActiveDay === day) return streak

  const activeDays = streak.activeDays.includes(day)
    ? streak.activeDays
    : [...streak.activeDays, day].sort()

  const gap = streak.lastActiveDay ? daysBetween(streak.lastActiveDay, day) : Infinity
  const current = gap === 1 ? streak.current + 1 : 1

  return {
    current,
    longest: Math.max(streak.longest, current),
    activeDays,
    lastActiveDay: day,
  }
}

/** A run only counts as live today or the day after its last entry. */
export function liveStreak(streak: StreakState, today = isoDay()): number {
  if (!streak.lastActiveDay) return 0
  const gap = daysBetween(streak.lastActiveDay, today)
  return gap <= 1 ? streak.current : 0
}

/* --------------------------------------------------------------- mastery --- */

/** Expanding intervals, in days, as a concept is met again and recalled. */
const REVIEW_INTERVALS = [1, 3, 8, 18, 40]

export function reviewConcept(
  existing: ConceptMastery | undefined,
  conceptId: string,
  recalledWell: boolean,
  today = isoDay(),
): ConceptMastery {
  const level = existing
    ? recalledWell
      ? Math.min(REVIEW_INTERVALS.length - 1, existing.level + 1)
      : Math.max(0, existing.level - 1)
    : 0

  return {
    conceptId,
    level,
    encounters: (existing?.encounters ?? 0) + 1,
    firstMetAt: existing?.firstMetAt ?? today,
    lastSeenAt: today,
    dueOn: addDays(today, REVIEW_INTERVALS[level]),
  }
}

export function conceptsDue(concepts: Record<string, ConceptMastery>, today = isoDay()): string[] {
  return Object.values(concepts)
    .filter((concept) => daysBetween(concept.dueOn, today) >= 0)
    .sort((a, b) => a.dueOn.localeCompare(b.dueOn))
    .map((concept) => concept.conceptId)
}

/* -------------------------------------------------------------- lessons ---- */

export function lessonCompletion(progress: LessonProgress | undefined, stepCount: number): number {
  if (!progress || stepCount === 0) return 0
  if (progress.status === 'complete') return 1
  return Math.min(1, progress.completedStepIds.length / stepCount)
}

export function countCompleted(records: Record<string, LessonProgress>): number {
  return Object.values(records).filter((record) => record.status === 'complete').length
}
