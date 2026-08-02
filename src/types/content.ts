/**
 * The shape of everything the curriculum is allowed to say.
 *
 * Content is data, not components: a lesson is a list of typed steps, and the
 * lesson player knows how to render each kind. Adding a lesson never means
 * touching the interface.
 */

/** The six trainable abilities the whole app is organised around. */
export type AbilityId = 'see' | 'interpret' | 'discern' | 'understand' | 'answer' | 'live'

export const ABILITY_IDS: AbilityId[] = [
  'see',
  'interpret',
  'discern',
  'understand',
  'answer',
  'live',
]

export interface Ability {
  id: AbilityId
  name: string
  verb: string
  tagline: string
  description: string
  /** Two-line description of what growth in this ability actually looks like. */
  growthLooksLike: string[]
}

/**
 * How confident a reader is entitled to be about a claim. Teaching learners to
 * keep these apart is the single most repeated move in the curriculum.
 */
export type CertaintyTier = 'stated' | 'implied' | 'reasonable' | 'possible' | 'unsupported'

export const CERTAINTY_TIERS: CertaintyTier[] = [
  'stated',
  'implied',
  'reasonable',
  'possible',
  'unsupported',
]

/**
 * Where a claim comes from. Displayed on lens cards so a psychological finding
 * is never quietly dressed up as a biblical teaching, and so the curriculum
 * writer's own inference is labelled as such.
 */
export type ClaimKind =
  | 'scripture'
  | 'historic-christian'
  | 'psychology'
  | 'philosophy'
  | 'history'
  | 'literary'
  | 'mythology'
  | 'leadership'
  | 'inference'

export type LensKind =
  | 'biblical'
  | 'psychological'
  | 'philosophical'
  | 'mythological'
  | 'literary'
  | 'historical'
  | 'leadership'
  | 'pastoral'

/* ------------------------------------------------------------ rich text ---- */

export interface DialogueLine {
  speaker: string
  text: string
  /** Optional stage direction shown in muted italics. */
  beat?: string
}

export type RichBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'quote'; text: string; attribution?: string }
  | { kind: 'scripture'; ref: string; text: string; translation?: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'dialogue'; lines: DialogueLine[] }
  | { kind: 'callout'; tone: 'insight' | 'caution' | 'distinction'; title: string; text: string }
  | { kind: 'aside'; label: string; text: string }

/* ---------------------------------------------------------------- steps ---- */

interface StepBase {
  id: string
  /** Section heading shown above the step. */
  title?: string
  /** Which ability this step exercises; drives the Wisdom Map. */
  ability?: AbilityId
}

export interface EncounterStep extends StepBase {
  type: 'encounter'
  kicker?: string
  body: RichBlock[]
  /** Provenance for public-domain or historical material. */
  source?: string
}

export interface FirstJudgmentStep extends StepBase {
  type: 'first-judgment'
  prompt: string
  helper?: string
  placeholder?: string
  minWords?: number
}

export interface ObservationStep extends StepBase {
  type: 'observation'
  prompt: string
  helper?: string
  options: { id: string; text: string; significance: string }[]
  /** Options worth noticing but not obviously so; noticing them earns extra credit. */
  subtleIds?: string[]
  afterword?: RichBlock[]
}

export interface CertaintyStep extends StepBase {
  type: 'certainty'
  prompt: string
  helper?: string
  claims: { id: string; text: string; tier: CertaintyTier; why: string }[]
}

export interface QuizStep extends StepBase {
  type: 'quiz'
  prompt: string
  options: { id: string; text: string; correct?: boolean; feedback: string }[]
  explanation?: string
}

export interface EvidenceStep extends StepBase {
  type: 'evidence'
  prompt: string
  claim: string
  options: { id: string; text: string; supports: boolean; why: string }[]
}

export interface RankingStep extends StepBase {
  type: 'ranking'
  prompt: string
  helper?: string
  items: { id: string; text: string }[]
  /** Ordered best-to-worst; scoring is by rank distance, not exact match. */
  idealOrder: string[]
  rationale: RichBlock[]
}

export interface TeachingStep extends StepBase {
  type: 'teaching'
  body: RichBlock[]
}

export interface LensCard {
  lens: LensKind
  heading: string
  claimKind: ClaimKind
  body: RichBlock[]
  /** Passage references for the Library; brief quotations only. */
  passages?: string[]
  /** Named honestly, including where the source disagrees with Scripture. */
  tension?: string
}

export interface LensesStep extends StepBase {
  type: 'lenses'
  intro?: string
  cards: LensCard[]
}

export interface SocraticStep extends StepBase {
  type: 'socratic'
  challenge: string
  prompt: string
  helper?: string
  reveal: RichBlock[]
}

export type PerspectiveField =
  'saying' | 'feeling' | 'fearing' | 'desiring' | 'assuming' | 'not-seeing'

export interface PerspectiveStep extends StepBase {
  type: 'perspective'
  person: string
  setup: string
  fields: { key: PerspectiveField; label: string; prompt: string }[]
  reveal: RichBlock[]
}

export interface DecisionStep extends StepBase {
  type: 'decision'
  situation: string
  prompt: string
  options: {
    id: string
    text: string
    consequence: string
    /** What this choice costs — every real decision costs something. */
    cost: string
    verdict: 'wise' | 'defensible' | 'risky' | 'unwise'
  }[]
  afterword?: RichBlock[]
}

export interface WiseAnswerStep extends StepBase {
  type: 'wise-answer'
  brief: string
  audience: string
  constraints?: string[]
  rubric: RubricDimensionId[]
  minWords?: number
  /** Enables the optional dictation affordance where the browser supports it. */
  allowVoice?: boolean
}

export interface ExemplarStep extends StepBase {
  type: 'exemplar'
  /** The wise-answer step this models, so the two can be shown side by side. */
  answersStepId: string
  body: RichBlock[]
  commentary: { label: string; text: string }[]
  /** Named weaknesses; the exemplar is strong, not perfect. */
  limits?: string
}

export interface SelfAssessStep extends StepBase {
  type: 'self-assess'
  answersStepId: string
  rubric: RubricDimensionId[]
}

export interface RevisionStep extends StepBase {
  type: 'revision'
  answersStepId: string
  prompt: string
  helper?: string
}

export interface PracticeStep extends StepBase {
  type: 'practice'
  assignment: string
  window: string
  cautions?: string[]
  checkIn: string
}

export interface ReflectionStep extends StepBase {
  type: 'reflection'
  prompt: string
  prayer?: string
}

export interface ConnectionStep extends StepBase {
  type: 'connection'
  prompt: string
  left: { id: string; label: string; detail?: string }[]
  right: { id: string; label: string; detail?: string }[]
  pairs: { leftId: string; rightId: string; why: string }[]
}

export interface RetrievalStep extends StepBase {
  type: 'retrieval'
  intro?: string
  conceptIds: string[]
  passageRefs: string[]
}

export type LessonStep =
  | EncounterStep
  | FirstJudgmentStep
  | ObservationStep
  | CertaintyStep
  | QuizStep
  | EvidenceStep
  | RankingStep
  | TeachingStep
  | LensesStep
  | SocraticStep
  | PerspectiveStep
  | DecisionStep
  | WiseAnswerStep
  | ExemplarStep
  | SelfAssessStep
  | RevisionStep
  | PracticeStep
  | ReflectionStep
  | ConnectionStep
  | RetrievalStep

export type LessonStepType = LessonStep['type']

/* --------------------------------------------------------------- rubric ---- */

export type RubricDimensionId =
  | 'observation'
  | 'context'
  | 'evidence'
  | 'grounding'
  | 'perspective'
  | 'uncertainty'
  | 'usefulness'
  | 'compassion'
  | 'clarity'
  | 'action'

export interface RubricDimension {
  id: RubricDimensionId
  name: string
  question: string
  /** Descriptors for scores 1..4, weakest first. */
  levels: [string, string, string, string]
}

/* -------------------------------------------------------- lessons/modules -- */

export interface Lesson {
  id: string
  moduleId: string
  title: string
  subtitle: string
  /** The one question the lesson exists to answer. */
  centralQuestion: string
  minutes: number
  abilities: AbilityId[]
  /** Concept ids introduced here; feeds mastery and later retrieval. */
  concepts: string[]
  passages: string[]
  steps: LessonStep[]
}

export interface Module {
  id: string
  order: number
  title: string
  /** Short label for tight spaces such as the map. */
  shortTitle: string
  centralQuestion: string
  summary: string
  abilities: AbilityId[]
  lessonIds: string[]
}

/* ------------------------------------------------------------ case files --- */

export interface CaseFile {
  id: string
  title: string
  kind: 'counsel' | 'leadership' | 'formation' | 'interpretation' | 'conflict' | 'symbol'
  premise: string
  minutes: number
  abilities: AbilityId[]
  /** Case files open once the learner has done the work that makes them fair. */
  unlockAfterLessonId?: string
  steps: LessonStep[]
}

/* -------------------------------------------------------- transfer trials -- */

export interface TransferTrial {
  id: string
  title: string
  /** The principle being carried into unfamiliar territory. */
  conceptId: string
  fromLessonId: string
  minutes: number
  steps: LessonStep[]
}

/* -------------------------------------------------------------- library ---- */

export type LibraryKind =
  | 'passage'
  | 'concept'
  | 'virtue'
  | 'vice'
  | 'tool'
  | 'thinker'
  | 'story'
  | 'psychology'
  | 'analogy'

export interface LibraryEntry {
  id: string
  kind: LibraryKind
  title: string
  /** e.g. a passage reference, a thinker's dates, a myth's origin. */
  subtitle?: string
  summary: string
  body: RichBlock[]
  claimKind: ClaimKind
  tags: string[]
  relatedLessonIds?: string[]
  /** Honest provenance note: translation used, what is disputed, what is inferred. */
  sourceNote?: string
}
