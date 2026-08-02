/**
 * Derived views over saved progress. Kept separate from the reducer so the home
 * screen can ask a question ("what should this person do next?") without any
 * component having to know how progress is stored.
 */
import type { AbilityId, CaseFile, Lesson, TransferTrial } from '../../types/content'
import type { JournalEntry, PracticeCommitment, WisdomState } from '../../types/progress'
import { CASES, TRIALS } from '../../data/cases'
import { LESSONS, LESSON_ORDER, MODULES, getLesson } from '../../data/curriculum'
import { conceptsDue } from '../../lib/scoring'
import { isoDay } from '../../lib/date'

export interface LessonView {
  lesson: Lesson
  status: 'not-started' | 'in-progress' | 'complete'
  completion: number
  stepIndex: number
}

export function lessonView(state: WisdomState, lesson: Lesson): LessonView {
  const record = state.lessons[lesson.id]
  const completion =
    record?.status === 'complete'
      ? 1
      : Math.min(1, (record?.completedStepIds.length ?? 0) / lesson.steps.length)
  return {
    lesson,
    status: record?.status ?? 'not-started',
    completion,
    stepIndex: record?.stepIndex ?? 0,
  }
}

/** The lesson the Continue button should open: in-progress first, else next unstarted. */
export function nextLesson(state: WisdomState): LessonView | null {
  const inProgress = LESSON_ORDER.map((id) => getLesson(id))
    .filter((lesson): lesson is Lesson => Boolean(lesson))
    .find((lesson) => state.lessons[lesson.id]?.status === 'in-progress')
  if (inProgress) return lessonView(state, inProgress)

  const unstarted = LESSON_ORDER.map((id) => getLesson(id))
    .filter((lesson): lesson is Lesson => Boolean(lesson))
    .find((lesson) => !state.lessons[lesson.id])
  return unstarted ? lessonView(state, unstarted) : null
}

export function completedLessonCount(state: WisdomState): number {
  return LESSONS.filter((lesson) => state.lessons[lesson.id]?.status === 'complete').length
}

export function completedModuleCount(state: WisdomState): number {
  return MODULES.filter((module) =>
    module.lessonIds.every((id) => state.lessons[id]?.status === 'complete'),
  ).length
}

export function moduleCompletion(state: WisdomState, moduleId: string): number {
  const module = MODULES.find((m) => m.id === moduleId)
  if (!module || module.lessonIds.length === 0) return 0
  const total = module.lessonIds.reduce((sum, id) => {
    const lesson = getLesson(id)
    if (!lesson) return sum
    return sum + lessonView(state, lesson).completion
  }, 0)
  return total / module.lessonIds.length
}

export function overallCompletion(state: WisdomState): number {
  if (LESSONS.length === 0) return 0
  return (
    LESSONS.reduce((sum, lesson) => sum + lessonView(state, lesson).completion, 0) / LESSONS.length
  )
}

/** A case file opens once the lesson that makes it a fair test has been finished. */
export function caseUnlocked(state: WisdomState, file: CaseFile): boolean {
  if (!file.unlockAfterLessonId) return true
  return state.lessons[file.unlockAfterLessonId]?.status === 'complete'
}

export function availableCases(state: WisdomState): { file: CaseFile; unlocked: boolean }[] {
  return CASES.map((file) => ({ file, unlocked: caseUnlocked(state, file) }))
}

/** Trials become available once their source lesson is complete. */
export function availableTrials(state: WisdomState): { trial: TransferTrial; unlocked: boolean }[] {
  return TRIALS.map((trial) => ({
    trial,
    unlocked: state.lessons[trial.fromLessonId]?.status === 'complete',
  }))
}

export function nextTrial(state: WisdomState): TransferTrial | null {
  const candidate = availableTrials(state).find(
    ({ trial, unlocked }) => unlocked && state.trials[trial.id]?.status !== 'complete',
  )
  return candidate?.trial ?? null
}

export interface AbilityView {
  id: AbilityId
  points: number
  touches: number
}

export function abilityViews(state: WisdomState): AbilityView[] {
  return (Object.keys(state.abilities) as AbilityId[]).map((id) => ({
    id,
    points: state.abilities[id].points,
    touches: state.abilities[id].touches,
  }))
}

export function openPractices(state: WisdomState): PracticeCommitment[] {
  return state.practices.filter((practice) => practice.status === 'committed')
}

export function recentJournal(state: WisdomState, count = 3): JournalEntry[] {
  return [...state.journal]
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
      return b.updatedAt.localeCompare(a.updatedAt)
    })
    .slice(0, count)
}

export function conceptsToRevisit(state: WisdomState, today = isoDay()): string[] {
  return conceptsDue(state.concepts, today)
}

/**
 * Today's practice: the single most useful thing to do in a short sitting.
 * Ordered by what would actually help rather than by what is easiest to render.
 */
export type TodayKind = 'practice' | 'trial' | 'revisit' | 'case' | 'lesson'

export interface TodaySuggestion {
  kind: TodayKind
  title: string
  detail: string
  to: string
  cta: string
}

export function todaysPractice(state: WisdomState): TodaySuggestion | null {
  const open = openPractices(state)
  if (open.length > 0) {
    const practice = open[0]
    return {
      kind: 'practice',
      title: 'A practice you committed to',
      detail: practice.assignment,
      to: '/journal?tab=practices',
      cta: 'Report back',
    }
  }

  const trial = nextTrial(state)
  if (trial) {
    return {
      kind: 'trial',
      title: 'Transfer trial',
      detail: `${trial.title} — a principle you have met, somewhere it does not belong.`,
      to: `/trials/${trial.id}`,
      cta: `Begin · ${trial.minutes} min`,
    }
  }

  const due = conceptsToRevisit(state)
  if (due.length > 0) {
    return {
      kind: 'revisit',
      title: 'Worth revisiting',
      detail: `${due.length} concept${due.length === 1 ? '' : 's'} you met earlier are due for another look.`,
      to: '/library',
      cta: 'Open the Library',
    }
  }

  const openCase = availableCases(state).find(
    ({ file, unlocked }) => unlocked && state.cases[file.id]?.status !== 'complete',
  )
  if (openCase) {
    return {
      kind: 'case',
      title: 'Case file open',
      detail: openCase.file.premise,
      to: `/cases/${openCase.file.id}`,
      cta: `Open · ${openCase.file.minutes} min`,
    }
  }

  const lesson = nextLesson(state)
  if (lesson) {
    return {
      kind: 'lesson',
      title: 'Next lesson',
      detail: lesson.lesson.centralQuestion,
      to: `/learn/${lesson.lesson.id}`,
      cta: lesson.status === 'in-progress' ? 'Continue' : 'Begin',
    }
  }

  return null
}
