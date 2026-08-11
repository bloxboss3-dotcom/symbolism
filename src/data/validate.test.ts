/**
 * Content integrity gate. Runs as `npm run validate:content`, inside
 * `npm run build`, and in CI — the build fails if any rule here fails.
 *
 * These are product requirements, not style checks: an unverified quotation
 * or an uncited commentary entry must be impossible to ship.
 */
import { describe, expect, it } from 'vitest'
import {
  CommentaryEntrySchema,
  PrayerContentSchema,
  ReadingPlanSchema,
  RoutineSchema,
  ScripturePassageSchema,
  StretchSchema,
  TranslationSchema,
  VerifiedQuoteSchema,
} from '../schemas'
import {
  allQuotes,
  commentaries,
  commentaryById,
  passageById,
  passages,
  plans,
  prayerById,
  prayers,
  publishableQuotes,
  quoteById,
  routines,
  stretchById,
  stretches,
  webTranslation,
} from './registry'

function assertAll<T>(items: T[], parse: (item: T) => { success: boolean; error?: unknown }) {
  const failures = items
    .map((item) => ({ item, result: parse(item) }))
    .filter(({ result }) => !result.success)
  expect(
    failures.map(({ item, result }) => ({
      item: JSON.stringify(item).slice(0, 120),
      error: String(result.error),
    })),
  ).toEqual([])
}

describe('schema conformance', () => {
  it('translation record is valid', () => {
    expect(TranslationSchema.safeParse(webTranslation).success).toBe(true)
  })
  it('every passage matches the schema', () => {
    expect(passages.length).toBeGreaterThanOrEqual(10)
    assertAll(passages, (p) => ScripturePassageSchema.safeParse(p))
  })
  it('every prayer matches the schema', () => {
    assertAll(prayers, (p) => PrayerContentSchema.safeParse(p))
  })
  it('every commentary entry matches the schema', () => {
    expect(commentaries.length).toBeGreaterThanOrEqual(4)
    assertAll(commentaries, (c) => CommentaryEntrySchema.safeParse(c))
  })
  it('every quote record matches the schema', () => {
    assertAll(allQuotes, (q) => VerifiedQuoteSchema.safeParse(q))
  })
  it('every plan matches the schema', () => {
    assertAll(plans, (p) => ReadingPlanSchema.safeParse(p))
  })
  it('every stretch matches the schema', () => {
    expect(stretches.length).toBeGreaterThanOrEqual(4)
    assertAll(stretches, (s) => StretchSchema.safeParse(s))
  })
  it('every routine matches the schema', () => {
    assertAll(routines, (r) => RoutineSchema.safeParse(r))
  })
})

describe('scripture integrity', () => {
  it('verse numbers are continuous and complete for the declared range', () => {
    for (const p of passages) {
      const expected = Array.from(
        { length: p.ref.verseEnd - p.ref.verseStart + 1 },
        (_, i) => p.ref.verseStart + i,
      )
      expect(
        p.verses.map((v) => v.v),
        `passage ${p.id}`,
      ).toEqual(expected)
    }
  })
  it('every passage records where and when its text was retrieved', () => {
    for (const p of passages) {
      expect(p.retrieval.url, `passage ${p.id}`).toMatch(/^https:\/\//)
      expect(p.retrieval.date, `passage ${p.id}`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})

describe('quotation integrity', () => {
  it('a publishable quote must be verified, with archive, URL, and date', () => {
    for (const q of allQuotes.filter((q) => q.publishable)) {
      expect(q.verification.status, `quote ${q.id}`).toBe('verified')
      expect(q.verification.verifiedAgainst, `quote ${q.id} missing verifiedAgainst`).toBeTruthy()
      expect(q.verification.verifiedOn, `quote ${q.id} missing verifiedOn`).toBeTruthy()
      expect(q.url, `quote ${q.id} missing url`).toBeTruthy()
    }
  })
  it('non-verified quotes never carry unbracketed quotation text', () => {
    for (const q of allQuotes.filter((q) => q.verification.status === 'placeholder')) {
      expect(q.text.startsWith('['), `placeholder quote ${q.id} must be bracketed`).toBe(true)
      expect(q.publishable, `placeholder quote ${q.id} must not be publishable`).toBe(false)
    }
  })
  it('the UI-facing list contains only verified, publishable quotes', () => {
    expect(publishableQuotes.length).toBeGreaterThanOrEqual(4)
    for (const q of publishableQuotes) {
      expect(q.verification.status).toBe('verified')
      expect(q.publishable).toBe(true)
    }
  })
  it('verified public-domain quotes attribute speaker and work', () => {
    for (const q of publishableQuotes) {
      expect(q.speaker.length, `quote ${q.id}`).toBeGreaterThan(2)
      expect(q.work.length, `quote ${q.id}`).toBeGreaterThan(2)
    }
  })
})

describe('commentary integrity', () => {
  it('every entry cites at least one source with a locator', () => {
    for (const c of commentaries) {
      expect(c.citations.length, `commentary ${c.id}`).toBeGreaterThanOrEqual(1)
      for (const cite of c.citations) {
        expect(
          cite.url ?? cite.bibliographic,
          `commentary ${c.id} citation for ${cite.work} needs a URL or bibliographic reference`,
        ).toBeTruthy()
      }
    }
  })
  it('contested passages carry perspective notes', () => {
    for (const c of commentaries) {
      if (c.contested) {
        expect(c.perspectives.length, `commentary ${c.id}`).toBeGreaterThanOrEqual(1)
      }
    }
  })
  it('commentary always points at a real passage', () => {
    for (const c of commentaries) {
      expect(passageById.has(c.passageId), `commentary ${c.id} → ${c.passageId}`).toBe(true)
    }
  })
  it('companion quotes on commentary are verified and publishable', () => {
    for (const c of commentaries) {
      for (const id of c.quoteIds) {
        expect(quoteById.has(id), `commentary ${c.id} references unpublishable quote ${id}`).toBe(
          true,
        )
      }
    }
  })
})

describe('routine integrity', () => {
  it('ships at least two morning and two evening routines', () => {
    expect(routines.filter((r) => r.timeOfDay === 'morning').length).toBeGreaterThanOrEqual(2)
    expect(routines.filter((r) => r.timeOfDay === 'evening').length).toBeGreaterThanOrEqual(2)
  })
  it('every referenced passage, prayer, stretch, and commentary exists', () => {
    for (const r of routines) {
      expect(passageById.has(r.passageId), `routine ${r.id} focus ${r.passageId}`).toBe(true)
      for (const s of r.segments) {
        if (s.kind === 'word' || s.kind === 'scripture') {
          expect(passageById.has(s.passageId), `segment ${s.id} → ${s.passageId}`).toBe(true)
        }
        if (s.kind === 'scripture' && s.commentaryId) {
          expect(commentaryById.has(s.commentaryId), `segment ${s.id} → ${s.commentaryId}`).toBe(
            true,
          )
        }
        if (s.kind === 'prayer') {
          expect(prayerById.has(s.prayerId), `segment ${s.id} → ${s.prayerId}`).toBe(true)
        }
        if (s.kind === 'stretch') {
          for (const id of s.stretchIds) {
            expect(stretchById.has(id), `segment ${s.id} → stretch ${id}`).toBe(true)
          }
        }
      }
    }
  })
  it('every routine holds the full arc: word, prayer, personal prayer, silence, scripture', () => {
    for (const r of routines) {
      const kinds = new Set(r.segments.map((s) => s.kind))
      for (const required of ['word', 'prayer', 'your-prayer', 'silence', 'scripture'] as const) {
        expect(kinds.has(required), `routine ${r.id} missing ${required}`).toBe(true)
      }
    }
  })
  it('prayers record editorial allusion notes for their biblical language', () => {
    for (const p of prayers.filter((p) => p.kind === 'guided' || p.kind === 'compline')) {
      expect(p.allusions.length, `prayer ${p.id}`).toBeGreaterThanOrEqual(3)
    }
  })
})

describe('reading plan integrity', () => {
  it('plan references resolve', () => {
    for (const plan of plans) {
      for (const day of plan.days) {
        expect(passageById.has(day.passageId), `plan ${plan.id} day ${day.day}`).toBe(true)
        if (day.commentaryId) {
          expect(commentaryById.has(day.commentaryId), `plan ${plan.id} day ${day.day}`).toBe(true)
        }
      }
    }
  })
  it('the seed plan runs seven days', () => {
    expect(plans[0].days).toHaveLength(7)
  })
})
