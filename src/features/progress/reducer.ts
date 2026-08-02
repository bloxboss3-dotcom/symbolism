/**
 * All state transitions live here as one pure function, so progress rules can
 * be tested without mounting a component or touching a browser.
 */
import type { AbilityId, LessonStep } from '../../types/content'
import type {
  DiscoveredConnection,
  JournalEntry,
  LessonProgress,
  PracticeCommitment,
  Profile,
  Settings,
  StepResponse,
  WisdomState,
} from '../../types/progress'
import { isoDay } from '../../lib/date'
import { createId } from '../../lib/id'
import { abilityForStep, insightForStep, recordActiveDay, reviewConcept } from '../../lib/scoring'
import { truncate } from '../../lib/text'

export type Track = 'lessons' | 'cases' | 'trials'

export interface UnitRef {
  track: Track
  unitId: string
  /** Used for journal titles and search; keeps the store free of content imports. */
  unitTitle: string
}

export type WisdomAction =
  | { type: 'onboard'; profile: Profile }
  | { type: 'update-profile'; patch: Partial<Profile> }
  | { type: 'begin-unit'; ref: UnitRef }
  | { type: 'seek-step'; ref: UnitRef; stepIndex: number }
  | {
      type: 'record-step'
      ref: UnitRef
      step: LessonStep
      stepIndex: number
      response: StepResponse
    }
  | { type: 'complete-unit'; ref: UnitRef; stepCount: number }
  | { type: 'reset-unit'; ref: UnitRef }
  | { type: 'add-journal'; entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'update-journal'; id: string; patch: Partial<JournalEntry> }
  | { type: 'delete-journal'; id: string }
  | { type: 'close-practice'; id: string; status: 'done' | 'skipped'; reflection?: string }
  | { type: 'update-settings'; patch: Partial<Settings> }
  | { type: 'replace-state'; state: WisdomState }

const now = () => new Date().toISOString()

function emptyUnit(): LessonProgress {
  const iso = now()
  return {
    status: 'in-progress',
    stepIndex: 0,
    completedStepIds: [],
    responses: {},
    insight: 0,
    startedAt: iso,
    updatedAt: iso,
  }
}

function withUnit(
  state: WisdomState,
  ref: UnitRef,
  update: (unit: LessonProgress) => LessonProgress,
): WisdomState {
  const bucket = state[ref.track]
  const current = bucket[ref.unitId] ?? emptyUnit()
  return {
    ...state,
    [ref.track]: { ...bucket, [ref.unitId]: { ...update(current), updatedAt: now() } },
  }
}

/** Insight and ability credit are granted once per step; revisions never re-pay. */
function creditStep(
  state: WisdomState,
  step: LessonStep,
  response: StepResponse,
): { insight: number; abilities: WisdomState['abilities'] } {
  const insight = insightForStep(step, response)
  const ability: AbilityId = abilityForStep(step)
  const previous = state.abilities[ability]
  return {
    insight,
    abilities: {
      ...state.abilities,
      [ability]: { points: previous.points + insight, touches: previous.touches + 1 },
    },
  }
}

function journalForStep(
  ref: UnitRef,
  step: LessonStep,
  response: StepResponse,
): Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'> | null {
  if (step.type === 'wise-answer' && response.kind === 'text') {
    return {
      kind: 'answer',
      title: step.title ?? `Wise answer — ${ref.unitTitle}`,
      body: response.value,
      tags: ['wise answer', ref.unitTitle],
      sourceLessonId: ref.unitId,
      sourceStepId: step.id,
    }
  }
  if (step.type === 'reflection' && response.kind === 'text' && response.value.trim()) {
    return {
      kind: 'insight',
      title: `Reflection — ${ref.unitTitle}`,
      body: response.value,
      tags: ['reflection', ref.unitTitle],
      sourceLessonId: ref.unitId,
      sourceStepId: step.id,
    }
  }
  return null
}

export function wisdomReducer(state: WisdomState, action: WisdomAction): WisdomState {
  switch (action.type) {
    case 'onboard':
      return { ...state, profile: action.profile, updatedAt: now() }

    case 'update-profile':
      return state.profile
        ? { ...state, profile: { ...state.profile, ...action.patch }, updatedAt: now() }
        : state

    case 'begin-unit': {
      if (state[action.ref.track][action.ref.unitId]) return state
      return withUnit(state, action.ref, (unit) => unit)
    }

    case 'seek-step':
      return withUnit(state, action.ref, (unit) => ({
        ...unit,
        stepIndex: Math.max(unit.stepIndex, action.stepIndex),
      }))

    case 'record-step': {
      const { ref, step, response, stepIndex } = action
      const unit = state[ref.track][ref.unitId] ?? emptyUnit()
      const alreadyCounted = unit.completedStepIds.includes(step.id)

      let next: WisdomState = state
      let earned = 0

      if (!alreadyCounted) {
        const credit = creditStep(state, step, response)
        earned = credit.insight
        next = {
          ...next,
          abilities: credit.abilities,
          insight: state.insight + credit.insight,
          streak: recordActiveDay(state.streak),
        }
      }

      next = withUnit(next, ref, (current) => ({
        ...current,
        status: current.status === 'complete' ? 'complete' : 'in-progress',
        stepIndex: Math.max(current.stepIndex, stepIndex),
        completedStepIds: alreadyCounted
          ? current.completedStepIds
          : [...current.completedStepIds, step.id],
        responses: { ...current.responses, [step.id]: response },
        insight: current.insight + earned,
      }))

      // Side effects the learner should be able to find again later.
      if (step.type === 'connection' && response.kind === 'map' && !alreadyCounted) {
        const found: DiscoveredConnection[] = step.pairs
          .filter((pair) => response.values[pair.leftId] === pair.rightId)
          .map((pair) => ({
            id: createId('conn'),
            createdAt: now(),
            leftLabel: step.left.find((item) => item.id === pair.leftId)?.label ?? pair.leftId,
            rightLabel: step.right.find((item) => item.id === pair.rightId)?.label ?? pair.rightId,
            why: pair.why,
            sourceLessonId: ref.unitId,
          }))
        // Re-answering never duplicates a connection already discovered.
        const seen = new Set(next.connections.map((c) => `${c.leftLabel}→${c.rightLabel}`))
        next = {
          ...next,
          connections: [
            ...next.connections,
            ...found.filter((c) => !seen.has(`${c.leftLabel}→${c.rightLabel}`)),
          ],
        }
      }

      if (step.type === 'practice' && !alreadyCounted) {
        const commitment: PracticeCommitment = {
          id: createId('practice'),
          createdAt: now(),
          lessonId: ref.unitId,
          assignment: step.assignment,
          window: step.window,
          checkIn: step.checkIn,
          status: 'committed',
        }
        next = { ...next, practices: [commitment, ...next.practices] }
      }

      if (step.type === 'retrieval') {
        const today = isoDay()
        const concepts = { ...next.concepts }
        for (const conceptId of step.conceptIds) {
          concepts[conceptId] = reviewConcept(concepts[conceptId], conceptId, true, today)
        }
        next = { ...next, concepts }
      }

      if (step.type === 'self-assess' && response.kind === 'ratings') {
        next = {
          ...next,
          selfAssessments: {
            ...next.selfAssessments,
            [`${ref.unitId}:${step.answersStepId}`]:
              response.values as WisdomState['selfAssessments'][string],
          },
        }
      }

      // A revision updates the journal entry the original answer created, so the
      // two versions sit together and growth is visible.
      if (step.type === 'revision' && response.kind === 'text') {
        next = {
          ...next,
          journal: next.journal.map((entry) =>
            entry.sourceLessonId === ref.unitId && entry.sourceStepId === step.answersStepId
              ? { ...entry, revisedBody: response.value, updatedAt: now() }
              : entry,
          ),
        }
      }

      const journalDraft = journalForStep(ref, step, response)
      if (journalDraft) {
        const existing = next.journal.find(
          (entry) => entry.sourceLessonId === ref.unitId && entry.sourceStepId === step.id,
        )
        next = existing
          ? {
              ...next,
              journal: next.journal.map((entry) =>
                entry.id === existing.id
                  ? { ...entry, body: journalDraft.body, updatedAt: now() }
                  : entry,
              ),
            }
          : {
              ...next,
              journal: [
                { ...journalDraft, id: createId('jrn'), createdAt: now(), updatedAt: now() },
                ...next.journal,
              ],
            }
      }

      return { ...next, updatedAt: now() }
    }

    case 'complete-unit': {
      const unit = state[action.ref.track][action.ref.unitId]
      if (unit?.status === 'complete') return state
      const withStreak = { ...state, streak: recordActiveDay(state.streak) }
      return withUnit(withStreak, action.ref, (current) => ({
        ...current,
        status: 'complete',
        stepIndex: Math.max(current.stepIndex, action.stepCount - 1),
        completedAt: now(),
      }))
    }

    case 'reset-unit': {
      const bucket = { ...state[action.ref.track] }
      delete bucket[action.ref.unitId]
      return { ...state, [action.ref.track]: bucket, updatedAt: now() }
    }

    case 'add-journal':
      return {
        ...state,
        journal: [
          { ...action.entry, id: createId('jrn'), createdAt: now(), updatedAt: now() },
          ...state.journal,
        ],
        updatedAt: now(),
      }

    case 'update-journal':
      return {
        ...state,
        journal: state.journal.map((entry) =>
          entry.id === action.id ? { ...entry, ...action.patch, updatedAt: now() } : entry,
        ),
        updatedAt: now(),
      }

    case 'delete-journal':
      return {
        ...state,
        journal: state.journal.filter((entry) => entry.id !== action.id),
        updatedAt: now(),
      }

    case 'close-practice':
      return {
        ...state,
        practices: state.practices.map((practice) =>
          practice.id === action.id
            ? {
                ...practice,
                status: action.status,
                reflection: action.reflection ?? practice.reflection,
                closedAt: now(),
              }
            : practice,
        ),
        // Finishing something you promised to do in the world counts as a day.
        streak: action.status === 'done' ? recordActiveDay(state.streak) : state.streak,
        updatedAt: now(),
      }

    case 'update-settings':
      return { ...state, settings: { ...state.settings, ...action.patch }, updatedAt: now() }

    case 'replace-state':
      return { ...action.state, updatedAt: now() }

    default:
      return state
  }
}

/** Convenience used by the journal list and the home screen. */
export function summariseEntry(entry: JournalEntry): string {
  return truncate(entry.revisedBody ?? entry.body, 180)
}
