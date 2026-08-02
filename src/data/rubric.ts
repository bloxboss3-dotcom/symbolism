import type { RubricDimension, RubricDimensionId } from '../types/content'

/**
 * The Wise Answer rubric, reused everywhere a learner composes something.
 *
 * The learner scores themselves, after reading an exemplar. Nothing here is
 * marked by the app: judgement of this kind cannot be automated honestly, and
 * pretending otherwise would teach the opposite of what the rubric measures.
 */
export const RUBRIC: Record<RubricDimensionId, RubricDimension> = {
  observation: {
    id: 'observation',
    name: 'Careful observation',
    question: 'Did I actually look, or did I answer the situation I expected?',
    levels: [
      'I responded to a general type of situation, not this one.',
      'I used the obvious facts and missed the quiet ones.',
      'I used specific details, including at least one easy to overlook.',
      'My answer could only have been written about this situation.',
    ],
  },
  context: {
    id: 'context',
    name: 'Contextual understanding',
    question: 'Did I read this in its setting — the history, the genre, the relationship?',
    levels: [
      'I read it flat, as though context did not exist.',
      'I noticed context but it did not change my reading.',
      'Context shaped my reading in at least one concrete way.',
      'I named the context and showed how it rules out a plausible misreading.',
    ],
  },
  evidence: {
    id: 'evidence',
    name: 'Evidence',
    question: 'Can I point to what supports each claim I made?',
    levels: [
      'I asserted things without support.',
      'I gave support for my main claim only.',
      'Each significant claim is tied to something in the material.',
      'I also named what would count against me.',
    ],
  },
  grounding: {
    id: 'grounding',
    name: 'Biblical and moral grounding',
    question: 'Is this shaped by Scripture — and did I use it honestly?',
    levels: [
      'No moral or scriptural grounding, or a verse used as decoration.',
      'A relevant passage, applied loosely.',
      'Scripture shapes the substance, read in context.',
      'Scripture shapes it, and I resisted a passage that would have been convenient but misapplied.',
    ],
  },
  perspective: {
    id: 'perspective',
    name: 'Perspective-taking',
    question: 'Would the other person recognise themselves in my description of them?',
    levels: [
      'I described a position no one holds.',
      'I described their view fairly but thinly.',
      'I stated their view in a form they would accept.',
      'I found the true thing in their view and said it out loud.',
    ],
  },
  uncertainty: {
    id: 'uncertainty',
    name: 'Recognition of uncertainty',
    question: 'Did I claim more confidence than the evidence allows — or less?',
    levels: [
      'I spoke as if everything were settled.',
      'I hedged everything equally, which is its own evasion.',
      'I marked which parts are firm and which are inference.',
      'I said plainly what I would need to know to be more sure.',
    ],
  },
  usefulness: {
    id: 'usefulness',
    name: 'Practical usefulness',
    question: 'Could this person actually do something with what I said?',
    levels: [
      'True but unusable.',
      'A direction, with no first step.',
      'A clear next step that fits their situation.',
      'A next step, and a way to tell whether it is working.',
    ],
  },
  compassion: {
    id: 'compassion',
    name: 'Compassion and emotional awareness',
    question: 'Did I speak to a person, or at a problem?',
    levels: [
      'I ignored what this costs them.',
      'I acknowledged feeling, then moved on quickly.',
      'The weight of it shapes how I said things, not just what I said.',
      'I made it safe to tell me I was wrong.',
    ],
  },
  clarity: {
    id: 'clarity',
    name: 'Clarity and memorability',
    question: 'If they remember one sentence, is it the right one?',
    levels: [
      'Muddled, or so long the point is buried.',
      'Clear but forgettable.',
      'Clear, and one line will survive the week.',
      'Clear, memorable, and the image does real work rather than decorating.',
    ],
  },
  action: {
    id: 'action',
    name: 'Appropriate action',
    question: 'Is what I asked of them mine to ask, and theirs to carry?',
    levels: [
      'I took over a decision that was not mine.',
      'I pushed harder than the relationship can bear.',
      'What I asked fits my place in their life.',
      'I left the decision with them and stayed available for it.',
    ],
  },
}

export const RUBRIC_LIST: RubricDimension[] = Object.values(RUBRIC)

export const RUBRIC_SCALE_LABELS = ['Not yet', 'Beginning', 'Solid', 'Strong'] as const

/** The default set used when a step does not name its own dimensions. */
export const DEFAULT_RUBRIC: RubricDimensionId[] = [
  'observation',
  'grounding',
  'perspective',
  'uncertainty',
  'clarity',
  'usefulness',
]
