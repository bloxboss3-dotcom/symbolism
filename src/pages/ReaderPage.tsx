/**
 * The Scripture reader: the passage itself first, then clearly labeled
 * commentary — context, themes, application — with perspective notes where
 * traditions differ, verified companion quotations, sources for every claim,
 * bookmarking, and a private note kept on this device.
 */
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { BookmarkIcon } from '../components/Icons'
import { PassageText } from '../components/PassageText'
import { commentaries, passageById, planById, quoteById } from '../data/registry'
import { useAppState } from '../features/state/useAppState'
import type { CommentaryEntry, ScripturePassage } from '../schemas'

export function ReaderPage() {
  const { passageId } = useParams()
  const passage = passageId ? passageById.get(passageId) : undefined
  if (!passage) return <Navigate to="/study" replace />
  return <Reader key={passage.id} passage={passage} />
}

function Reader({ passage }: { passage: ScripturePassage }) {
  const passageId = passage.id
  const [params] = useSearchParams()
  const { state, dispatch } = useAppState()

  const planId = params.get('plan')
  const day = Number(params.get('day') ?? NaN)
  const plan = planId ? planById.get(planId) : undefined

  // Opening a plan day records it as the last-read position.
  useEffect(() => {
    if (plan && Number.isInteger(day) && day > 0 && day <= plan.days.length) {
      const already = state.reading
      if (already?.planId === plan.id && already.day >= day) return
      dispatch({
        type: 'reading',
        position: { planId: plan.id, day, updatedAt: new Date().toISOString() },
      })
    }
  }, [])

  const commentary = commentaries.find((c) => c.passageId === passageId)
  const bookmarked = state.bookmarks.some((b) => b.passageId === passageId)
  const existingNote = state.notes.find((n) => n.passageId === passageId)
  const [noteDraft, setNoteDraft] = useState<string | null>(null)

  const planDay = plan?.days.find((d) => d.day === day)
  const prevDay = plan?.days.find((d) => d.day === day - 1)
  const nextDay = plan?.days.find((d) => d.day === day + 1)

  return (
    <main className="page" id="main">
      <header className="page-head">
        {plan && planDay ? (
          <p className="kicker">
            {plan.title} — Day {planDay.day}
          </p>
        ) : (
          <p className="kicker">Scripture</p>
        )}
        <div className="row row--between">
          <h1>{passage.reference}</h1>
          <button
            type="button"
            className="btn btn--icon btn--quiet"
            aria-pressed={bookmarked}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this passage'}
            onClick={() => dispatch({ type: 'bookmark-toggle', passageId })}
            style={bookmarked ? { color: 'var(--c-gold)' } : undefined}
          >
            <BookmarkIcon filled={bookmarked} />
          </button>
        </div>
        {planDay ? <p className="lede">{planDay.invitation}</p> : null}
      </header>

      <div className="stack stack--loose">
        <div className="card card--raise">
          <PassageText passage={passage} />
        </div>

        {commentary ? <CommentaryPanel entry={commentary} /> : null}

        <section className="card" aria-labelledby="note-head">
          <h2 id="note-head" style={{ fontSize: '1.05rem' }}>
            Your note
          </h2>
          <p className="footnote" style={{ marginTop: 'var(--s-1)' }}>
            Kept only on this device. Never uploaded, never analyzed.
          </p>
          <textarea
            aria-label={`Private note on ${passage.reference}`}
            rows={4}
            style={{ marginTop: 'var(--s-3)' }}
            placeholder="What is this passage saying — and what does it ask of you?"
            value={noteDraft ?? existingNote?.text ?? ''}
            onChange={(event) => setNoteDraft(event.target.value)}
          />
          <div className="row" style={{ marginTop: 'var(--s-3)', justifyContent: 'flex-end' }}>
            <button
              type="button"
              className="btn btn--sm"
              disabled={noteDraft === null || noteDraft === (existingNote?.text ?? '')}
              onClick={() => {
                if (noteDraft === null) return
                if (existingNote) {
                  dispatch({ type: 'note-update', id: existingNote.id, text: noteDraft })
                } else if (noteDraft.trim().length > 0) {
                  dispatch({ type: 'note-add', passageId, text: noteDraft })
                }
                setNoteDraft(null)
              }}
            >
              Save note
            </button>
          </div>
        </section>

        {plan && planDay ? (
          <nav className="row row--between" aria-label="Reading plan navigation">
            {prevDay ? (
              <Link
                className="btn btn--quiet"
                to={`/read/${prevDay.passageId}?plan=${plan.id}&day=${prevDay.day}`}
              >
                ← Day {prevDay.day}
              </Link>
            ) : (
              <span />
            )}
            {nextDay ? (
              <Link
                className="btn"
                to={`/read/${nextDay.passageId}?plan=${plan.id}&day=${nextDay.day}`}
              >
                Day {nextDay.day} →
              </Link>
            ) : (
              <Link className="btn" to="/study">
                Finish the week
              </Link>
            )}
          </nav>
        ) : null}
      </div>
    </main>
  )
}

function CommentaryPanel({ entry }: { entry: CommentaryEntry }) {
  const quotes = entry.quoteIds.flatMap((id) => {
    const quote = quoteById.get(id)
    return quote ? [quote] : []
  })

  return (
    <section className="card stack" aria-labelledby="commentary-head">
      <div className="row row--between row--wrap">
        <h2 id="commentary-head" style={{ fontSize: '1.05rem' }}>
          Understanding the passage
        </h2>
        <span className="chip">
          {entry.reviewStatus === 'reviewed' ? 'Reviewed' : 'Demo content'}
        </span>
      </div>
      {entry.reviewStatus !== 'reviewed' ? (
        <p className="footnote">
          Seed commentary awaiting full editorial review. Sources below; standards on the{' '}
          <Link to="/sources">Sources page</Link>.
        </p>
      ) : null}

      <Labeled title="Literary context">{entry.literaryContext}</Labeled>
      <Labeled title="Historical context">{entry.historicalContext}</Labeled>

      <div>
        <h3 className="commentary-label">Theological themes</h3>
        <div className="stack" style={{ marginTop: 'var(--s-2)' }}>
          {entry.themes.map((theme) => (
            <p key={theme.title} style={{ fontSize: '0.95rem', color: 'var(--c-ink-soft)' }}>
              <strong style={{ color: 'var(--c-ink)' }}>{theme.title}.</strong> {theme.body}
            </p>
          ))}
        </div>
      </div>

      {entry.contested && entry.perspectives.length > 0 ? (
        <div className="banner banner--attention" role="note">
          <div className="stack--tight stack">
            <strong style={{ fontSize: '0.88rem' }}>Where faithful readers differ</strong>
            {entry.perspectives.map((p) => (
              <p key={p.topic} style={{ fontSize: '0.88rem' }}>
                <em>{p.topic}.</em> {p.note}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      <Labeled title="For reflection and practice">{entry.application}</Labeled>

      <div>
        <h3 className="commentary-label">Questions to sit with</h3>
        <ul style={{ marginTop: 'var(--s-2)', paddingLeft: '1.2rem' }}>
          {entry.questions.map((q) => (
            <li
              key={q}
              style={{ fontSize: '0.95rem', color: 'var(--c-ink-soft)', marginTop: 'var(--s-1)' }}
            >
              {q}
            </li>
          ))}
        </ul>
      </div>

      {quotes.length > 0 ? (
        <div className="stack">
          {quotes.map((quote) => (
            <figure
              key={quote.id}
              style={{
                margin: 0,
                borderLeft: '2px solid var(--c-gold)',
                paddingLeft: 'var(--s-4)',
              }}
            >
              <blockquote className="prayer-text" style={{ margin: 0, fontSize: '1.02rem' }}>
                “{quote.text}”
              </blockquote>
              <figcaption className="footnote" style={{ marginTop: 'var(--s-2)' }}>
                — {quote.speaker}, <em>{quote.work}</em>
                {quote.translator ? `, tr. ${quote.translator}` : ''}
                {quote.year ? ` (${quote.year})` : ''} ·{' '}
                {quote.url ? (
                  <a href={quote.url} target="_blank" rel="noreferrer">
                    source
                  </a>
                ) : (
                  'source on file'
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <details>
        <summary
          style={{
            cursor: 'pointer',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--c-ink-soft)',
          }}
        >
          Sources for this entry ({entry.citations.length})
        </summary>
        <ul style={{ paddingLeft: '1.2rem', marginTop: 'var(--s-2)' }}>
          {entry.citations.map((cite) => (
            <li key={cite.work} className="footnote" style={{ marginTop: 'var(--s-1)' }}>
              {cite.author}, <em>{cite.work}</em>
              {cite.year ? ` (${cite.year})` : ''}
              {cite.publisher ? `, ${cite.publisher}` : ''}.{' '}
              {cite.url ? (
                <a href={cite.url} target="_blank" rel="noreferrer">
                  Link
                </a>
              ) : (
                cite.bibliographic
              )}
              {cite.note ? ` — ${cite.note}` : ''}
            </li>
          ))}
        </ul>
        <p className="footnote" style={{ marginTop: 'var(--s-2)' }}>
          Perspective: {entry.tradition}.
        </p>
      </details>
    </section>
  )
}

function Labeled({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="commentary-label">{title}</h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--c-ink-soft)', marginTop: 'var(--s-2)' }}>
        {children}
      </p>
    </div>
  )
}
