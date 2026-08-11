/**
 * Scripture data schemas.
 *
 * Bible text ships as typed data validated at build time, and every read goes
 * through the `ScriptureProvider` interface in `src/features/scripture/` so a
 * licensed translation API can be added later without touching UI code.
 */
import { z } from 'zod'

/** Translations the app knows how to attribute. MVP ships the WEB only. */
export const TranslationSchema = z.object({
  id: z.enum(['web']),
  name: z.string().min(1),
  abbreviation: z.string().min(1),
  /** Human-readable licensing statement shown on the Sources screen. */
  license: z.string().min(1),
  /** Attribution line required (or courteously given) by the translation. */
  attribution: z.string().min(1),
  sourceUrl: z.url(),
})
export type Translation = z.infer<typeof TranslationSchema>

export const ScriptureRefSchema = z
  .object({
    /** Canonical English book name, e.g. "Psalms", "John". */
    book: z.string().min(1),
    chapter: z.number().int().positive(),
    verseStart: z.number().int().positive(),
    verseEnd: z.number().int().positive(),
  })
  .refine((r) => r.verseEnd >= r.verseStart, {
    message: 'verseEnd must be >= verseStart',
  })
export type ScriptureRef = z.infer<typeof ScriptureRefSchema>

export const VerseSchema = z.object({
  /** Verse number within the chapter. */
  v: z.number().int().positive(),
  text: z.string().min(1),
})
export type Verse = z.infer<typeof VerseSchema>

export const ScripturePassageSchema = z
  .object({
    /** Stable slug, e.g. "psalm-63-1-8". */
    id: z.string().regex(/^[a-z0-9-]+$/),
    /** Display reference, e.g. "Psalm 63:1–8". */
    reference: z.string().min(1),
    ref: ScriptureRefSchema,
    translationId: z.enum(['web']),
    verses: z.array(VerseSchema).min(1),
    /**
     * Where and when this exact text was retrieved — kept per passage so a
     * transcription can always be re-checked against its source.
     */
    retrieval: z.object({
      source: z.string().min(1),
      url: z.url(),
      date: z.iso.date(),
    }),
  })
  .refine((p) => p.verses.every((v) => v.v >= p.ref.verseStart && v.v <= p.ref.verseEnd), {
    message: 'every verse number must fall inside the declared reference range',
  })
export type ScripturePassage = z.infer<typeof ScripturePassageSchema>
