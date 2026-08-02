import type { Ability, AbilityId } from '../types/content'

/**
 * The six trainable abilities. Every step in the curriculum is tagged with one,
 * and the Wisdom Map on the home screen is simply these six, lit by the work
 * the learner has actually done.
 */
export const ABILITIES: Record<AbilityId, Ability> = {
  see: {
    id: 'see',
    name: 'See',
    verb: 'Observe',
    tagline: 'Notice before you conclude',
    description:
      'Detail, repetition, contrast, omission, imagery, a change of tone, who speaks and who stays silent — gathered patiently, before any of it is explained.',
    growthLooksLike: [
      'You catch the detail that everyone else walks past.',
      'You can describe what happened without smuggling in why.',
    ],
  },
  interpret: {
    id: 'interpret',
    name: 'Interpret',
    verb: 'Understand meaning',
    tagline: 'Weigh what it can bear',
    description:
      'Reading in context — historical, literary, psychological, theological — and holding apart what is stated, implied, reasonable, possible, and merely imagined.',
    growthLooksLike: [
      'You name the genre before you name the meaning.',
      'You can say how confident you are and why.',
    ],
  },
  discern: {
    id: 'discern',
    name: 'Discern',
    verb: 'Judge well',
    tagline: 'Weigh good, harm, and duty',
    description:
      'Bringing Scripture, virtue, motive, consequence, responsibility, justice, and mercy to bear on a real situation — and knowing which of them is load-bearing here.',
    growthLooksLike: [
      'You can name what a good choice will cost.',
      'You notice when a rule is being used to avoid a person.',
    ],
  },
  understand: {
    id: 'understand',
    name: 'Understand',
    verb: 'Enter a perspective',
    tagline: 'Know the person, not the type',
    description:
      "Reconstructing what someone is saying, feeling, fearing, wanting, assuming, and failing to see — accurately enough that they'd recognise themselves in it.",
    growthLooksLike: [
      'You can state their view so well they would sign it.',
      'You ask the question underneath the question.',
    ],
  },
  answer: {
    id: 'answer',
    name: 'Answer',
    verb: 'Speak meaningfully',
    tagline: 'Say the true thing well',
    description:
      'Composing responses that are truthful, clear, memorable, morally serious, kind, and fitted to this person in this moment rather than to people in general.',
    growthLooksLike: [
      'You choose the one sentence worth remembering.',
      'You can be honest without being blunt or evasive.',
    ],
  },
  live: {
    id: 'live',
    name: 'Live',
    verb: 'Do the thing',
    tagline: 'Carry it out of the app',
    description:
      'Turning understanding into prayer, habit, repentance, courage, a conversation you have been avoiding, a responsibility taken up, a service rendered.',
    growthLooksLike: [
      'The person you owe a conversation gets the conversation.',
      'What you learned shows up in your week, not just your notes.',
    ],
  },
}

export const ABILITY_LIST: Ability[] = [
  ABILITIES.see,
  ABILITIES.interpret,
  ABILITIES.discern,
  ABILITIES.understand,
  ABILITIES.answer,
  ABILITIES.live,
]
