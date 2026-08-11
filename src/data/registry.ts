/**
 * The content registry: every piece of seed content, gathered and indexed.
 *
 * Passages, commentary, and quotes are discovered with `import.meta.glob` so
 * adding a file is enough — no hand-maintained index to forget. The registry
 * is also the enforcement point for quote integrity: only verified,
 * publishable quotations are ever exposed to the UI (`publishableQuotes`);
 * everything else exists solely for the validator and the Sources screen.
 */
import type {
  CommentaryEntry,
  PrayerContent,
  ReadingPlan,
  Routine,
  ScripturePassage,
  Stretch,
  VerifiedQuote,
} from '../schemas'
import { plans } from './plans'
import { morningPrayer1, morningPrayer2, morningSending1, morningSending2 } from './prayers-morning'
import { evensongClose1, evensongClose2 } from './prayers-evening'
import { routines } from './routines'
import { stretches } from './stretches'
import { webTranslation } from './translations'

const passageModules = import.meta.glob('./scripture/passages/*.ts', { eager: true })
export const passages: ScripturePassage[] = Object.values(passageModules)
  .map((m) => (m as { passage: ScripturePassage }).passage)
  .sort((a, b) => a.id.localeCompare(b.id))
export const passageById: ReadonlyMap<string, ScripturePassage> = new Map(
  passages.map((p) => [p.id, p]),
)

const commentaryModules = import.meta.glob('./commentary/*.ts', { eager: true })
export const commentaries: CommentaryEntry[] = Object.values(commentaryModules)
  .map((m) => (m as { entry: CommentaryEntry }).entry)
  .sort((a, b) => a.id.localeCompare(b.id))
export const commentaryById: ReadonlyMap<string, CommentaryEntry> = new Map(
  commentaries.map((c) => [c.id, c]),
)

const quoteModules = import.meta.glob('./quotes/*.ts', { eager: true })
/** Every quote record, including unverified/placeholder ones. Validator + Sources only. */
export const allQuotes: VerifiedQuote[] = Object.values(quoteModules)
  .flatMap((m) => (m as { quotes: VerifiedQuote[] }).quotes)
  .sort((a, b) => a.id.localeCompare(b.id))
/** The only quote list UI components may render. */
export const publishableQuotes: VerifiedQuote[] = allQuotes.filter(
  (q) => q.publishable && q.verification.status === 'verified',
)
export const quoteById: ReadonlyMap<string, VerifiedQuote> = new Map(
  publishableQuotes.map((q) => [q.id, q]),
)

export const prayers: PrayerContent[] = [
  morningPrayer1,
  morningSending1,
  morningPrayer2,
  morningSending2,
  evensongClose1,
  evensongClose2,
]
export const prayerById: ReadonlyMap<string, PrayerContent> = new Map(prayers.map((p) => [p.id, p]))

export const routineById: ReadonlyMap<string, Routine> = new Map(routines.map((r) => [r.id, r]))
export const stretchById: ReadonlyMap<string, Stretch> = new Map(stretches.map((s) => [s.id, s]))
export const planById: ReadonlyMap<string, ReadingPlan> = new Map(plans.map((p) => [p.id, p]))

export { plans, routines, stretches, webTranslation }
