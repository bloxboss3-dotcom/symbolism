import type { AbilityId } from '../types/content'
import type { Familiarity, GoalId, StudyPreference } from '../types/progress'

export interface GoalOption {
  id: GoalId
  label: string
  description: string
  /** Abilities this goal leans on; used to order the first suggested lessons. */
  abilities: AbilityId[]
  /** Modules surfaced first for someone with this goal. */
  emphasises: string[]
}

export const GOALS: GoalOption[] = [
  {
    id: 'counsel',
    label: 'Counselling and helping people',
    description: 'Friends bring you things. You want to help without making it worse.',
    abilities: ['understand', 'answer'],
    emphasises: ['m09', 'm10', 'm07'],
  },
  {
    id: 'decisions',
    label: 'Personal and moral decisions',
    description: 'You want to choose well when the options all cost something.',
    abilities: ['discern', 'live'],
    emphasises: ['m05', 'm06', 'm08'],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    description: 'Other people carry the consequences of your judgement.',
    abilities: ['discern', 'understand'],
    emphasises: ['m08', 'm12', 'm10'],
  },
  {
    id: 'scripture',
    label: 'Understanding Scripture',
    description: 'You want to read the Bible carefully rather than for a quick verdict.',
    abilities: ['see', 'interpret'],
    emphasises: ['m02', 'm03', 'm04'],
  },
  {
    id: 'symbolism',
    label: 'Understanding stories and symbolism',
    description: 'You want to read film, myth, and literature for what is actually there.',
    abilities: ['see', 'interpret'],
    emphasises: ['m03', 'm11', 'm05'],
  },
  {
    id: 'communication',
    label: 'Communicating meaningful answers',
    description: 'You understand more than you can say. You want the words to land.',
    abilities: ['answer', 'interpret'],
    emphasises: ['m11', 'm10', 'm01'],
  },
]

export const STUDY_PREFERENCES: {
  id: StudyPreference
  label: string
  detail: string
}[] = [
  {
    id: 'short',
    label: '10–15 minutes',
    detail: 'A section or two at a sitting. Lessons resume where you left them.',
  },
  {
    id: 'standard',
    label: '30–45 minutes',
    detail: 'A full lesson in one sitting, the way each one is written.',
  },
  {
    id: 'deep',
    label: 'An hour or more',
    detail: 'A lesson plus a case file or a transfer trial.',
  },
]

export const FAMILIARITY_OPTIONS: {
  id: Familiarity
  label: string
  detail: string
}[] = [
  {
    id: 'new',
    label: 'New to this',
    detail: 'Little background in Scripture or philosophy. Nothing will be assumed.',
  },
  {
    id: 'some',
    label: 'Some background',
    detail: 'You know the major stories and some of the arguments.',
  },
  {
    id: 'seasoned',
    label: 'Well read',
    detail: 'You have studied this seriously. Expect the harder readings.',
  },
]

/**
 * The personalised opening summary. Written from the learner's own answers, so
 * it says something specific rather than flattering them.
 */
export function startingSummary(
  goals: GoalId[],
  preference: StudyPreference,
  familiarity: Familiarity,
): { headline: string; body: string; firstModuleId: string } {
  const chosen = GOALS.filter((goal) => goals.includes(goal.id))
  const names = chosen.map((goal) => goal.label.toLowerCase())

  const headline =
    names.length === 0
      ? 'A place to begin'
      : names.length === 1
        ? `Wisdom for ${names[0]}`
        : `Wisdom for ${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`

  const pace =
    preference === 'short'
      ? 'Short sittings work here — every lesson saves after each step, so you can put it down mid-thought and come back.'
      : preference === 'deep'
        ? 'You have room for the long form, so case files and transfer trials will open alongside the lessons.'
        : 'A lesson at a sitting is how these were written: about thirty to forty-five minutes, ending with something to do.'

  const depth =
    familiarity === 'new'
      ? 'Nothing assumes prior study. Passages are quoted where they are used, and terms are defined the first time they appear.'
      : familiarity === 'seasoned'
        ? 'The harder readings are included rather than summarised, and where interpreters disagree you will be told so instead of being handed a verdict.'
        : 'Familiar stories are used in unfamiliar ways — the aim is to slow down texts you think you already know.'

  const emphasis = chosen.flatMap((goal) => goal.emphasises)
  const firstModuleId = 'm01'
  const next =
    emphasis.length > 0
      ? ' Module one comes first for everyone — it is the argument the rest depends on — and after that the modules you chose are brought forward.'
      : ''

  return { headline, body: `${pace} ${depth}${next}`, firstModuleId }
}
