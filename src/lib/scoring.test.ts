import { describe, expect, it } from 'vitest'
import type { LessonStep } from '../types/content'
import type { StepResponse } from '../types/progress'
import {
  abilityLevel,
  abilityProgress,
  conceptsDue,
  countWords,
  insightForStep,
  lessonCompletion,
  liveStreak,
  qualityFor,
  rankAgreement,
  recordActiveDay,
  reviewConcept,
} from './scoring'

const at = '2026-01-01T00:00:00.000Z'

describe('rankAgreement', () => {
  it('is 1 for an exact match', () => {
    expect(rankAgreement(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(1)
  })

  it('gives partial credit for a near miss', () => {
    const score = rankAgreement(['b', 'a', 'c'], ['a', 'b', 'c'])
    expect(score).toBeGreaterThan(0.4)
    expect(score).toBeLessThan(1)
  })

  it('scores a full reversal low but not negative', () => {
    const score = rankAgreement(['d', 'c', 'b', 'a'], ['a', 'b', 'c', 'd'])
    expect(score).toBeGreaterThanOrEqual(0)
    expect(score).toBeLessThan(0.3)
  })

  it('handles a missing item without throwing', () => {
    expect(rankAgreement(['a'], ['a', 'b', 'c'])).toBeGreaterThanOrEqual(0)
  })
})

describe('ability levels', () => {
  it('starts at the first level', () => {
    expect(abilityLevel(0)).toEqual({ index: 0, name: 'Beginning' })
  })

  it('rises through the thresholds and stops at the top', () => {
    expect(abilityLevel(70).index).toBe(1)
    expect(abilityLevel(200).index).toBe(2)
    expect(abilityLevel(500).index).toBe(3)
    expect(abilityLevel(10_000).index).toBe(4)
  })

  it('reports fractional progress toward the next level, and 1 at the top', () => {
    expect(abilityProgress(0)).toBe(0)
    expect(abilityProgress(30)).toBeCloseTo(0.5, 5)
    expect(abilityProgress(5000)).toBe(1)
  })
})

describe('streaks', () => {
  it('extends on consecutive days and restarts after a gap', () => {
    let streak = recordActiveDay({ current: 0, longest: 0, activeDays: [] }, '2026-03-01')
    expect(streak.current).toBe(1)

    streak = recordActiveDay(streak, '2026-03-02')
    expect(streak.current).toBe(2)

    streak = recordActiveDay(streak, '2026-03-05')
    expect(streak.current).toBe(1)
    expect(streak.longest).toBe(2)
    expect(streak.activeDays).toHaveLength(3)
  })

  it('is idempotent within a single day', () => {
    const first = recordActiveDay({ current: 0, longest: 0, activeDays: [] }, '2026-03-01')
    const second = recordActiveDay(first, '2026-03-01')
    expect(second).toBe(first)
  })

  it('treats a run as live today and the day after, and cold beyond that', () => {
    const streak = { current: 4, longest: 9, activeDays: [], lastActiveDay: '2026-03-10' }
    expect(liveStreak(streak, '2026-03-10')).toBe(4)
    expect(liveStreak(streak, '2026-03-11')).toBe(4)
    expect(liveStreak(streak, '2026-03-12')).toBe(0)
  })
})

describe('insight', () => {
  const quiz: LessonStep = {
    id: 'q',
    type: 'quiz',
    prompt: 'p',
    options: [
      { id: 'a', text: 'a', correct: true, feedback: 'yes' },
      { id: 'b', text: 'b', feedback: 'no' },
    ],
  }

  it('pays more for a correct answer than a wrong one, and something for both', () => {
    const right = insightForStep(quiz, { kind: 'choice', value: 'a', updatedAt: at })
    const wrong = insightForStep(quiz, { kind: 'choice', value: 'b', updatedAt: at })
    expect(right).toBeGreaterThan(wrong)
    expect(wrong).toBeGreaterThan(0)
  })

  it('pays reading far less than composing', () => {
    const encounter: LessonStep = { id: 'e', type: 'encounter', body: [] }
    const answer: LessonStep = {
      id: 'w',
      type: 'wise-answer',
      brief: 'b',
      audience: 'a',
      rubric: ['clarity'],
      minWords: 40,
    }
    const read = insightForStep(encounter, { kind: 'ack', updatedAt: at })
    const wrote = insightForStep(answer, {
      kind: 'text',
      value: Array(60).fill('word').join(' '),
      updatedAt: at,
    })
    expect(wrote).toBeGreaterThan(read * 5)
  })

  it('keeps the quality multiplier inside its stated band', () => {
    const empty: StepResponse = { kind: 'text', value: '', updatedAt: at }
    expect(qualityFor(quiz, undefined)).toBe(0.5)
    expect(qualityFor(quiz, empty)).toBeGreaterThanOrEqual(0.5)
    expect(qualityFor(quiz, { kind: 'choice', value: 'a', updatedAt: at })).toBeLessThanOrEqual(
      1.25,
    )
  })

  it('rewards noticing the subtle observations', () => {
    const step: LessonStep = {
      id: 'o',
      type: 'observation',
      prompt: 'p',
      options: [
        { id: '1', text: 'a', significance: 's' },
        { id: '2', text: 'b', significance: 's' },
        { id: '3', text: 'c', significance: 's' },
        { id: '4', text: 'd', significance: 's' },
      ],
      subtleIds: ['3', '4'],
    }
    const obvious = qualityFor(step, { kind: 'multi', values: ['1', '2'], updatedAt: at })
    const subtle = qualityFor(step, { kind: 'multi', values: ['1', '3', '4'], updatedAt: at })
    expect(subtle).toBeGreaterThan(obvious)
  })
})

describe('concept scheduling', () => {
  it('expands the interval on each successful recall', () => {
    const first = reviewConcept(undefined, 'genre', true, '2026-01-01')
    expect(first.level).toBe(0)
    expect(first.dueOn).toBe('2026-01-02')

    const second = reviewConcept(first, 'genre', true, '2026-01-02')
    expect(second.level).toBe(1)
    expect(second.encounters).toBe(2)
    expect(second.dueOn).toBe('2026-01-05')
  })

  it('steps back down when recall fails', () => {
    const first = reviewConcept(undefined, 'genre', true, '2026-01-01')
    const second = reviewConcept(first, 'genre', true, '2026-01-02')
    const third = reviewConcept(second, 'genre', false, '2026-01-05')
    expect(third.level).toBe(0)
  })

  it('lists only concepts due on or before today', () => {
    const concepts = {
      due: reviewConcept(undefined, 'due', true, '2026-01-01'),
      later: reviewConcept(undefined, 'later', true, '2026-02-01'),
    }
    expect(conceptsDue(concepts, '2026-01-10')).toEqual(['due'])
  })
})

describe('lessonCompletion', () => {
  it('is 0 without a record and 1 when marked complete', () => {
    expect(lessonCompletion(undefined, 10)).toBe(0)
    expect(
      lessonCompletion(
        {
          status: 'complete',
          stepIndex: 2,
          completedStepIds: ['a'],
          responses: {},
          insight: 0,
          startedAt: at,
          updatedAt: at,
        },
        10,
      ),
    ).toBe(1)
  })

  it('reports the fraction of steps completed while in progress', () => {
    expect(
      lessonCompletion(
        {
          status: 'in-progress',
          stepIndex: 3,
          completedStepIds: ['a', 'b'],
          responses: {},
          insight: 0,
          startedAt: at,
          updatedAt: at,
        },
        8,
      ),
    ).toBeCloseTo(0.25, 5)
  })
})

describe('countWords', () => {
  it('ignores surrounding and repeated whitespace', () => {
    expect(countWords('   ')).toBe(0)
    expect(countWords(' one   two \n three ')).toBe(3)
  })
})
