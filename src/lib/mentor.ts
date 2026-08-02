/**
 * The seam where a future mentor backend would attach.
 *
 * The MVP ships `authoredMentor`, which returns nothing but authored material:
 * the Socratic questions, rubric, and exemplar a human wrote for that step. It
 * is not a language model and the interface never calls it one — every response
 * carries `provenance: 'authored'`, and the UI labels it accordingly.
 *
 * A hosted mentor would implement the same interface against a server that
 * holds the API key. That is why `MentorRequest` carries ids and the learner's
 * own words but no journal, and why there is no key, endpoint, or fetch call in
 * this file. Client code must never hold a provider credential.
 */
import type { RubricDimensionId } from '../types/content'

export interface MentorRequest {
  lessonId: string
  stepId: string
  /** The learner's answer to this step, and nothing else from their device. */
  answer: string
  rubric: RubricDimensionId[]
}

export interface MentorResponse {
  /** How this text came to exist. The interface must show this honestly. */
  provenance: 'authored' | 'remote-model'
  /** Questions that open the answer up rather than closing it down. */
  questions: string[]
  /** Rubric dimensions worth a second look, chosen without reading the answer. */
  watchFor: RubricDimensionId[]
  note?: string
}

export interface MentorAdapter {
  readonly id: string
  readonly label: string
  /** False when the adapter needs a backend that is not configured. */
  readonly available: boolean
  respond(request: MentorRequest): Promise<MentorResponse>
}

const AUTHORED_QUESTIONS = [
  'What in the material actually supports your reading, and what did you supply yourself?',
  'Which part of your answer would the person on the other side of it recognise as fair?',
  'What would have to be true for your reading to be wrong?',
  'Where did you state something as certain that is really an inference?',
  'If this person could only remember one sentence of what you said, which should it be?',
]

/**
 * Deterministic, authored, and labelled as such. It picks its prompts from the
 * step's own rubric rather than from the learner's text, because it does not
 * read the learner's text — nothing here leaves the device.
 */
export const authoredMentor: MentorAdapter = {
  id: 'authored',
  label: 'Authored prompts',
  available: true,
  async respond({ stepId, rubric }: MentorRequest): Promise<MentorResponse> {
    // Stable per step so a learner returning to a step sees the same questions.
    const seed = Array.from(stepId).reduce((sum, char) => sum + char.charCodeAt(0), 0)
    const questions = [0, 1, 2].map(
      (offset) => AUTHORED_QUESTIONS[(seed + offset) % AUTHORED_QUESTIONS.length],
    )
    const watchFor = rubric.length
      ? [rubric[seed % rubric.length], rubric[(seed + 2) % rubric.length]].filter(
          (value, index, all) => all.indexOf(value) === index,
        )
      : []

    return {
      provenance: 'authored',
      questions: Array.from(new Set(questions)),
      watchFor,
      note: 'These questions were written in advance for this step. Nothing you typed was read or sent anywhere.',
    }
  },
}

let active: MentorAdapter = authoredMentor

export function getMentor(): MentorAdapter {
  return active
}

/** Reserved for a future build that ships a hosted, key-holding backend. */
export function setMentor(adapter: MentorAdapter): void {
  active = adapter
}
