import { describe, expect, it } from 'vitest'
import { CASES, TRIALS } from '../cases'
import { LIBRARY } from '../library'
import { RUBRIC } from '../rubric'
import type { CaseFile, Lesson, LessonStep, TransferTrial } from '../../types/content'
import { LESSONS, LESSON_ORDER, MODULES, getLesson } from './index'

const libraryIds = new Set(LIBRARY.map((entry) => entry.id))
const lessonIds = new Set(LESSONS.map((lesson) => lesson.id))

/**
 * Content is data, so it can be checked like data. These are the invariants a
 * broken lesson would violate — a dangling `answersStepId`, a case gated behind
 * a lesson that does not exist, a placeholder that slipped through.
 */
describe('curriculum shape', () => {
  it('has twelve modules in order, each with at least one lesson', () => {
    expect(MODULES).toHaveLength(12)
    MODULES.forEach((module, index) => {
      expect(module.order).toBe(index + 1)
      expect(module.lessonIds.length).toBeGreaterThan(0)
    })
  })

  it('resolves every module lesson id', () => {
    for (const id of LESSON_ORDER) expect(getLesson(id), `missing lesson ${id}`).toBeDefined()
  })

  it('uses unique lesson ids and unique step ids within a lesson', () => {
    expect(lessonIds.size).toBe(LESSONS.length)
    for (const lesson of LESSONS) {
      const stepIds = new Set(lesson.steps.map((step) => step.id))
      expect(stepIds.size, `duplicate step id in ${lesson.id}`).toBe(lesson.steps.length)
    }
  })

  it('points each lesson back at its own module', () => {
    for (const lesson of LESSONS) {
      const module = MODULES.find((candidate) => candidate.id === lesson.moduleId)
      expect(module, `lesson ${lesson.id} has no module`).toBeDefined()
      expect(module?.lessonIds).toContain(lesson.id)
    }
  })
})

describe('every core lesson is substantial', () => {
  const REQUIRED: LessonStep['type'][] = [
    'encounter',
    'first-judgment',
    'teaching',
    'lenses',
    'socratic',
    'perspective',
    'decision',
    'wise-answer',
    'exemplar',
    'self-assess',
    'revision',
    'practice',
    'reflection',
    'retrieval',
  ]

  it.each(LESSONS.map((lesson) => [lesson.id, lesson] as const))(
    '%s contains the full learning loop',
    (_id, lesson: Lesson) => {
      const present = new Set(lesson.steps.map((step) => step.type))
      for (const type of REQUIRED) {
        expect(present.has(type), `${lesson.id} is missing a ${type} step`).toBe(true)
      }
      // At least one investigation step: observation, certainty, evidence or ranking.
      const investigative = ['observation', 'certainty', 'evidence', 'ranking', 'quiz'] as const
      expect(investigative.some((type) => present.has(type))).toBe(true)
      expect(lesson.steps.length).toBeGreaterThanOrEqual(14)
      expect(lesson.minutes).toBeGreaterThanOrEqual(30)
    },
  )

  it('gives every lesson a central question, abilities, and concepts', () => {
    for (const lesson of LESSONS) {
      expect(lesson.centralQuestion.length).toBeGreaterThan(20)
      expect(lesson.abilities.length).toBeGreaterThan(0)
      expect(lesson.concepts.length).toBeGreaterThan(0)
      expect(lesson.passages.length).toBeGreaterThan(0)
    }
  })
})

describe('cross-references resolve', () => {
  const units: (Lesson | CaseFile | TransferTrial)[] = [...LESSONS, ...CASES, ...TRIALS]

  it('has no dangling answersStepId', () => {
    for (const unit of units) {
      const ids = new Set(unit.steps.map((step) => step.id))
      for (const step of unit.steps) {
        if ('answersStepId' in step) {
          expect(ids.has(step.answersStepId), `${unit.id}/${step.id} → ${step.answersStepId}`).toBe(
            true,
          )
        }
      }
    }
  })

  it('uses rubric dimensions that exist', () => {
    for (const unit of units) {
      for (const step of unit.steps) {
        if (step.type === 'wise-answer' || step.type === 'self-assess') {
          for (const id of step.rubric) expect(RUBRIC[id], `unknown rubric ${id}`).toBeDefined()
        }
      }
    }
  })

  it('schedules only concepts that exist in the Library', () => {
    for (const unit of units) {
      for (const step of unit.steps) {
        if (step.type === 'retrieval') {
          for (const conceptId of step.conceptIds) {
            expect(
              libraryIds.has(conceptId),
              `${unit.id} schedules unknown concept ${conceptId}`,
            ).toBe(true)
          }
        }
      }
    }
  })

  it('gates case files and trials behind lessons that exist', () => {
    for (const file of CASES) {
      if (file.unlockAfterLessonId) expect(lessonIds.has(file.unlockAfterLessonId)).toBe(true)
    }
    for (const trial of TRIALS) {
      expect(lessonIds.has(trial.fromLessonId), `trial ${trial.id}`).toBe(true)
    }
  })

  it('links Library entries only to real lessons', () => {
    for (const entry of LIBRARY) {
      for (const id of entry.relatedLessonIds ?? []) {
        expect(lessonIds.has(id), `library ${entry.id} → ${id}`).toBe(true)
      }
    }
  })
})

describe('interaction steps are answerable', () => {
  const units: (Lesson | CaseFile | TransferTrial)[] = [...LESSONS, ...CASES, ...TRIALS]

  it('gives every certainty, connection and ranking step consistent options', () => {
    for (const unit of units) {
      for (const step of unit.steps) {
        if (step.type === 'certainty') expect(step.claims.length).toBeGreaterThanOrEqual(3)
        if (step.type === 'quiz') {
          expect(step.options.filter((option) => option.correct)).toHaveLength(1)
        }
        if (step.type === 'ranking') {
          const ids = step.items.map((item) => item.id).sort()
          expect([...step.idealOrder].sort()).toEqual(ids)
        }
        if (step.type === 'connection') {
          const rightIds = new Set(step.right.map((item) => item.id))
          const leftIds = new Set(step.left.map((item) => item.id))
          for (const pair of step.pairs) {
            expect(leftIds.has(pair.leftId)).toBe(true)
            expect(rightIds.has(pair.rightId)).toBe(true)
          }
        }
        if (step.type === 'decision') {
          expect(step.options.length).toBeGreaterThanOrEqual(3)
          for (const option of step.options) {
            expect(option.cost.trim().length).toBeGreaterThan(3)
            expect(option.consequence.length).toBeGreaterThan(30)
          }
        }
      }
    }
  })
})

describe('no placeholder content', () => {
  const units: (Lesson | CaseFile | TransferTrial)[] = [...LESSONS, ...CASES, ...TRIALS]
  const FORBIDDEN = /coming soon|lorem ipsum|\btodo\b|\btbd\b|placeholder text|\bxxx\b/i

  /** Values only — a field *named* `placeholder` is legitimate. */
  function stringValues(value: unknown, out: string[] = []): string[] {
    if (typeof value === 'string') out.push(value)
    else if (Array.isArray(value)) for (const item of value) stringValues(item, out)
    else if (value && typeof value === 'object') {
      for (const nested of Object.values(value)) stringValues(nested, out)
    }
    return out
  }

  it('contains no stub text anywhere in the curriculum', () => {
    for (const text of stringValues(units)) expect(text).not.toMatch(FORBIDDEN)
  })

  it('contains no stub text in the library', () => {
    for (const text of stringValues(LIBRARY)) expect(text).not.toMatch(FORBIDDEN)
  })

  it('has real prose in every encounter and teaching step', () => {
    for (const unit of units) {
      for (const step of unit.steps) {
        if (step.type === 'encounter' || step.type === 'teaching') {
          const length = JSON.stringify(step.body).length
          expect(length, `${unit.id}/${step.id} is thin`).toBeGreaterThan(400)
        }
      }
    }
  })
})

describe('case files and trials', () => {
  it('ships six case files and four transfer trials', () => {
    expect(CASES).toHaveLength(6)
    expect(TRIALS).toHaveLength(4)
  })

  it('covers the six required case situations', () => {
    const kinds = new Set(CASES.map((file) => file.kind))
    for (const kind of [
      'counsel',
      'leadership',
      'formation',
      'interpretation',
      'conflict',
      'symbol',
    ]) {
      expect(kinds.has(kind as CaseFile['kind']), `missing a ${kind} case`).toBe(true)
    }
  })
})
