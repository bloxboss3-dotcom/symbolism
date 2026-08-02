import type { LessonStep } from '../../types/content'

/**
 * Steps that carry no question. They are marked complete when the learner moves
 * on, rather than requiring an answer first.
 */
const PASSIVE = new Set<LessonStep['type']>([
  'encounter',
  'teaching',
  'lenses',
  'exemplar',
  'retrieval',
])

export function isPassiveStep(step: LessonStep): boolean {
  return PASSIVE.has(step.type)
}
