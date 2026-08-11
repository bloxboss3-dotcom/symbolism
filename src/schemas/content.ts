/**
 * Content schemas: routines, prayers, commentary, quotations, reading plans,
 * and stretches.
 *
 * These schemas are executed by `npm run validate:content` (and therefore by
 * `npm run build` and CI). The rules that guard content integrity — verified
 * quotations only, cited commentary only — live in `src/data/validate.test.ts`
 * on top of the shapes defined here.
 */
import { z } from 'zod'

const slug = z.string().regex(/^[a-z0-9-]+$/)

/* ---------------------------------------------------------------- prayers -- */

/**
 * A prayer is written in movements (adoration, confession, intercession…) so
 * the player can pace them and the writing keeps a deliberate structure.
 */
export const PrayerMovementSchema = z.object({
  /** Optional quiet label, e.g. "Adoration". Not read as a heading in the UI. */
  label: z.string().optional(),
  lines: z.array(z.string().min(1)).min(1),
})

export const PrayerContentSchema = z.object({
  id: slug,
  title: z.string().min(1),
  kind: z.enum(['call-to-worship', 'guided', 'sending', 'compline']),
  movements: z.array(PrayerMovementSchema).min(1),
  /**
   * Internal editorial notes: where substantial biblical language in the
   * prayer comes from. Not rendered to users; audited by the validator.
   */
  allusions: z.array(
    z.object({
      phrase: z.string().min(1),
      reference: z.string().min(1),
    }),
  ),
  endsWithAmen: z.boolean(),
})
export type PrayerContent = z.infer<typeof PrayerContentSchema>
export type PrayerMovement = z.infer<typeof PrayerMovementSchema>

/* ----------------------------------------------------------------- quotes -- */

export const QuoteVerificationSchema = z.object({
  status: z.enum(['verified', 'unverified', 'placeholder']),
  /** Edition or archive the exact wording was checked against. */
  verifiedAgainst: z.string().optional(),
  verifiedOn: z.iso.date().optional(),
  notes: z.string().optional(),
})

export const VerifiedQuoteSchema = z.object({
  id: slug,
  speaker: z.string().min(1),
  /** Exact wording. Never paraphrase inside quotation marks. */
  text: z.string().min(1),
  work: z.string().min(1),
  edition: z.string().optional(),
  translator: z.string().optional(),
  /** Page, chapter, or section locator when available. */
  locator: z.string().optional(),
  url: z.url().optional(),
  /** Year of the work (or of the translation quoted). */
  year: z.string().optional(),
  license: z.enum(['public-domain', 'fair-use-short', 'permission']),
  verification: QuoteVerificationSchema,
  /**
   * Only quotes that are both publishable and verified ever reach the UI;
   * the validator enforces that this flag cannot be true otherwise.
   */
  publishable: z.boolean(),
})
export type VerifiedQuote = z.infer<typeof VerifiedQuoteSchema>

/* ------------------------------------------------------------- commentary -- */

export const CitationSchema = z
  .object({
    author: z.string().min(1),
    work: z.string().min(1),
    publisher: z.string().optional(),
    url: z.url().optional(),
    /** Free-form bibliographic reference when no URL exists. */
    bibliographic: z.string().optional(),
    year: z.string().optional(),
    note: z.string().optional(),
  })
  .refine((c) => c.url !== undefined || c.bibliographic !== undefined, {
    message: 'a citation needs a URL or a bibliographic reference',
  })
export type Citation = z.infer<typeof CitationSchema>

/**
 * Commentary keeps kinds of claims in separate, labeled sections: literary
 * context and historical context deal in facts and textual observations;
 * themes are theological interpretation; application is devotional.
 */
export const CommentaryEntrySchema = z.object({
  id: slug,
  passageId: slug,
  literaryContext: z.string().min(1),
  historicalContext: z.string().min(1),
  themes: z
    .array(
      z.object({
        title: z.string().min(1),
        body: z.string().min(1),
      }),
    )
    .min(1),
  application: z.string().min(1),
  /**
   * Where faithful traditions genuinely differ on this passage, say so here.
   * The validator requires at least one note when `contested` is true.
   */
  contested: z.boolean(),
  perspectives: z.array(
    z.object({
      topic: z.string().min(1),
      note: z.string().min(1),
    }),
  ),
  questions: z.array(z.string().min(1)).min(1),
  /** Companion quotations (must reference verified, publishable quotes). */
  quoteIds: z.array(slug),
  citations: z.array(CitationSchema).min(1),
  /** Theological tradition or perspective of the entry, when relevant. */
  tradition: z.string().min(1),
  reviewStatus: z.enum(['demo', 'draft', 'reviewed']),
})
export type CommentaryEntry = z.infer<typeof CommentaryEntrySchema>

/* ---------------------------------------------------------- reading plans -- */

export const ReadingPlanDaySchema = z.object({
  day: z.number().int().positive(),
  title: z.string().min(1),
  passageId: slug,
  /** Optional deeper study for this day. */
  commentaryId: slug.optional(),
  /** One quiet sentence inviting the reader into the passage. */
  invitation: z.string().min(1),
})

export const ReadingPlanSchema = z
  .object({
    id: slug,
    title: z.string().min(1),
    description: z.string().min(1),
    days: z.array(ReadingPlanDaySchema).min(1),
  })
  .refine((p) => p.days.every((d, i) => d.day === i + 1), {
    message: 'plan days must be numbered 1..n in order',
  })
export type ReadingPlan = z.infer<typeof ReadingPlanSchema>
export type ReadingPlanDay = z.infer<typeof ReadingPlanDaySchema>

/* -------------------------------------------------------------- stretches -- */

export const StretchSchema = z.object({
  id: slug,
  name: z.string().min(1),
  /** One short instruction. Keep it under a sentence or two. */
  instruction: z.string().min(1),
  seconds: z.number().int().min(20).max(120),
  posture: z.enum(['seated', 'standing', 'either']),
  /** Which CSS line-figure to draw. */
  figure: z.enum(['neck', 'shoulders', 'wrists', 'side-body', 'reach', 'fold']),
  /** Plain-language description of the movement for screen readers. */
  figureDescription: z.string().min(1),
  sleepFriendly: z.boolean(),
})
export type Stretch = z.infer<typeof StretchSchema>

/* --------------------------------------------------------------- routines -- */

const segmentBase = {
  id: slug,
  title: z.string().min(1),
}

/**
 * Segment kinds:
 * - `arrival`   settling in; optional chime and breathing guide, self-paced
 * - `word`      a short Scripture-anchored call to worship / remembrance
 * - `prayer`    a written prayer, self-paced movement by movement
 * - `your-prayer` timed private prayer with optional gentle prompts
 * - `silence`   timed stillness with optional breathing guide
 * - `scripture` the day's passage with commentary available
 * - `review`    evening examen prompts, self-paced
 * - `stretch`   one or two gentle movements, always skippable
 */
export const RoutineSegmentSchema = z.discriminatedUnion('kind', [
  z.object({
    ...segmentBase,
    kind: z.literal('arrival'),
    body: z.array(z.string().min(1)).min(1),
    chime: z.boolean(),
    breathing: z.boolean(),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('word'),
    passageId: slug,
    /** Optional single framing line shown above the text. */
    lead: z.string().optional(),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('prayer'),
    prayerId: slug,
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('your-prayer'),
    prompts: z.array(z.string().min(1)),
    baseSeconds: z.number().int().min(30),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('silence'),
    baseSeconds: z.number().int().min(30),
    breathing: z.boolean(),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('scripture'),
    passageId: slug,
    commentaryId: slug.optional(),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('review'),
    lead: z.string().min(1),
    prompts: z.array(z.string().min(1)).min(1),
  }),
  z.object({
    ...segmentBase,
    kind: z.literal('stretch'),
    stretchIds: z.array(slug).min(1).max(2),
  }),
])
export type RoutineSegment = z.infer<typeof RoutineSegmentSchema>
export type SegmentKind = RoutineSegment['kind']

export const RoutineSchema = z
  .object({
    id: slug,
    timeOfDay: z.enum(['morning', 'evening']),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    /** The passage this routine is built around. */
    passageId: slug,
    /** Segment timings are written against this length and scaled to taste. */
    baseMinutes: z.literal(15),
    segments: z.array(RoutineSegmentSchema).min(3),
  })
  .refine((r) => new Set(r.segments.map((s) => s.id)).size === r.segments.length, {
    message: 'segment ids must be unique within a routine',
  })
export type Routine = z.infer<typeof RoutineSchema>
