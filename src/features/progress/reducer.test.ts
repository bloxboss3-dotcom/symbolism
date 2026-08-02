import { describe, expect, it } from 'vitest'
import { createInitialState } from '../../lib/storage'
import type { LessonStep } from '../../types/content'
import type { StepResponse, WisdomState } from '../../types/progress'
import { wisdomReducer, type UnitRef } from './reducer'

const ref: UnitRef = { track: 'lessons', unitId: 'l01-1', unitTitle: 'Two Answers in a Stairwell' }
const at = '2026-01-01T00:00:00.000Z'

const quiz: LessonStep = {
  id: 's-quiz',
  type: 'quiz',
  ability: 'interpret',
  prompt: 'p',
  options: [
    { id: 'a', text: 'a', correct: true, feedback: 'yes' },
    { id: 'b', text: 'b', feedback: 'no' },
  ],
}

const wiseAnswer: LessonStep = {
  id: 's-answer',
  type: 'wise-answer',
  title: 'Your wise answer',
  brief: 'b',
  audience: 'a',
  rubric: ['clarity'],
  minWords: 40,
}

const revision: LessonStep = {
  id: 's-revision',
  type: 'revision',
  answersStepId: 's-answer',
  prompt: 'again',
}

const practice: LessonStep = {
  id: 's-practice',
  type: 'practice',
  assignment: 'Have one conversation.',
  window: 'Within seven days',
  checkIn: 'What happened?',
}

const connection: LessonStep = {
  id: 's-connection',
  type: 'connection',
  prompt: 'match',
  left: [{ id: 'l1', label: 'Left one' }],
  right: [
    { id: 'r1', label: 'Right one' },
    { id: 'r2', label: 'Right two' },
  ],
  pairs: [{ leftId: 'l1', rightId: 'r1', why: 'because' }],
}

const retrieval: LessonStep = {
  id: 's-retrieval',
  type: 'retrieval',
  conceptIds: ['phronesis'],
  passageRefs: ['Proverbs 1:7'],
}

function record(
  state: WisdomState,
  step: LessonStep,
  response: StepResponse,
  stepIndex = 0,
): WisdomState {
  return wisdomReducer(state, { type: 'record-step', ref, step, stepIndex, response })
}

describe('recording a step', () => {
  it('stores the response, marks the step complete, and awards insight once', () => {
    let state = createInitialState()
    state = record(state, quiz, { kind: 'choice', value: 'a', updatedAt: at })

    const unit = state.lessons[ref.unitId]
    expect(unit.responses['s-quiz']).toEqual({ kind: 'choice', value: 'a', updatedAt: at })
    expect(unit.completedStepIds).toEqual(['s-quiz'])
    expect(unit.status).toBe('in-progress')

    const earned = state.insight
    expect(earned).toBeGreaterThan(0)
    expect(state.abilities.interpret.points).toBe(earned)
    expect(state.abilities.interpret.touches).toBe(1)

    // Answering again updates the response and pays nothing further.
    state = record(state, quiz, { kind: 'choice', value: 'b', updatedAt: at })
    expect(state.insight).toBe(earned)
    expect(state.abilities.interpret.touches).toBe(1)
    expect(state.lessons[ref.unitId].responses['s-quiz']).toEqual({
      kind: 'choice',
      value: 'b',
      updatedAt: at,
    })
    expect(state.lessons[ref.unitId].completedStepIds).toEqual(['s-quiz'])
  })

  it('advances the furthest step reached and never rewinds it', () => {
    let state = createInitialState()
    state = wisdomReducer(state, { type: 'seek-step', ref, stepIndex: 5 })
    state = wisdomReducer(state, { type: 'seek-step', ref, stepIndex: 2 })
    expect(state.lessons[ref.unitId].stepIndex).toBe(5)
  })

  it('marks the day active', () => {
    const state = record(createInitialState(), quiz, { kind: 'choice', value: 'a', updatedAt: at })
    expect(state.streak.current).toBe(1)
    expect(state.streak.activeDays).toHaveLength(1)
  })
})

describe('journal side effects', () => {
  it('files a wise answer, then attaches the revision to the same entry', () => {
    let state = createInitialState()
    state = record(state, wiseAnswer, { kind: 'text', value: 'First attempt.', updatedAt: at })

    expect(state.journal).toHaveLength(1)
    expect(state.journal[0].body).toBe('First attempt.')
    expect(state.journal[0].revisedBody).toBeUndefined()

    state = record(state, revision, { kind: 'text', value: 'Second attempt.', updatedAt: at }, 1)

    expect(state.journal).toHaveLength(1)
    expect(state.journal[0].body).toBe('First attempt.')
    expect(state.journal[0].revisedBody).toBe('Second attempt.')
  })

  it('does not duplicate the entry when an answer is edited', () => {
    let state = createInitialState()
    state = record(state, wiseAnswer, { kind: 'text', value: 'One.', updatedAt: at })
    state = record(state, wiseAnswer, { kind: 'text', value: 'Two.', updatedAt: at })
    expect(state.journal).toHaveLength(1)
    expect(state.journal[0].body).toBe('Two.')
  })

  it('records a practice commitment', () => {
    const state = record(createInitialState(), practice, { kind: 'ack', updatedAt: at })
    expect(state.practices).toHaveLength(1)
    expect(state.practices[0].status).toBe('committed')
    expect(state.practices[0].assignment).toContain('one conversation')
  })

  it('keeps only the connections actually found, and never duplicates them', () => {
    let state = createInitialState()
    state = record(state, connection, { kind: 'map', values: { l1: 'r2' }, updatedAt: at })
    expect(state.connections).toHaveLength(0)

    state = record(state, connection, { kind: 'map', values: { l1: 'r1' }, updatedAt: at })
    // The step was already credited, so re-answering does not add connections either.
    expect(state.connections).toHaveLength(0)

    let fresh = createInitialState()
    fresh = record(fresh, connection, { kind: 'map', values: { l1: 'r1' }, updatedAt: at })
    expect(fresh.connections).toHaveLength(1)
    expect(fresh.connections[0].leftLabel).toBe('Left one')
  })

  it('schedules concepts from a retrieval step', () => {
    const state = record(createInitialState(), retrieval, { kind: 'ack', updatedAt: at })
    expect(state.concepts.phronesis).toBeDefined()
    expect(state.concepts.phronesis.encounters).toBe(1)
  })
})

describe('completing a unit', () => {
  it('marks it complete and is idempotent', () => {
    let state = createInitialState()
    state = record(state, quiz, { kind: 'choice', value: 'a', updatedAt: at })
    state = wisdomReducer(state, { type: 'complete-unit', ref, stepCount: 4 })

    const unit = state.lessons[ref.unitId]
    expect(unit.status).toBe('complete')
    expect(unit.completedAt).toBeTruthy()
    expect(unit.stepIndex).toBe(3)

    const again = wisdomReducer(state, { type: 'complete-unit', ref, stepCount: 4 })
    expect(again).toBe(state)
  })

  it('keeps a completed unit complete when a step is re-answered', () => {
    let state = createInitialState()
    state = record(state, quiz, { kind: 'choice', value: 'a', updatedAt: at })
    state = wisdomReducer(state, { type: 'complete-unit', ref, stepCount: 2 })
    state = record(state, quiz, { kind: 'choice', value: 'b', updatedAt: at })
    expect(state.lessons[ref.unitId].status).toBe('complete')
  })

  it('resets a unit on request without touching anything else', () => {
    let state = createInitialState()
    state = record(state, quiz, { kind: 'choice', value: 'a', updatedAt: at })
    const insight = state.insight
    state = wisdomReducer(state, { type: 'reset-unit', ref })
    expect(state.lessons[ref.unitId]).toBeUndefined()
    // Insight already earned is not clawed back — it was real work.
    expect(state.insight).toBe(insight)
  })
})

describe('journal management', () => {
  it('adds, updates and deletes entries', () => {
    let state = createInitialState()
    state = wisdomReducer(state, {
      type: 'add-journal',
      entry: { kind: 'note', title: 'Note', body: 'Body', tags: ['x'] },
    })
    const id = state.journal[0].id

    state = wisdomReducer(state, { type: 'update-journal', id, patch: { pinned: true } })
    expect(state.journal[0].pinned).toBe(true)

    state = wisdomReducer(state, { type: 'delete-journal', id })
    expect(state.journal).toHaveLength(0)
  })
})

describe('practices', () => {
  it('closing one as done counts the day; skipping does not', () => {
    let state = record(createInitialState(), practice, { kind: 'ack', updatedAt: at })
    const id = state.practices[0].id
    const before = state.streak.lastActiveDay

    state = wisdomReducer(state, { type: 'close-practice', id, status: 'done', reflection: 'ok' })
    expect(state.practices[0].status).toBe('done')
    expect(state.practices[0].reflection).toBe('ok')
    expect(state.streak.lastActiveDay).toBe(before)
  })
})

describe('settings and restore', () => {
  it('patches settings without clobbering the rest', () => {
    const state = wisdomReducer(createInitialState(), {
      type: 'update-settings',
      patch: { theme: 'light' },
    })
    expect(state.settings.theme).toBe('light')
    expect(state.settings.textScale).toBe(1)
  })

  it('replaces the whole state on import', () => {
    const incoming = { ...createInitialState(), insight: 500 }
    const state = wisdomReducer(createInitialState(), { type: 'replace-state', state: incoming })
    expect(state.insight).toBe(500)
  })
})
