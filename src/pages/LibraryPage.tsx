import { useMemo, useState } from 'react'
import { IconSearch } from '../components/Icons'
import { RichText } from '../components/RichText'
import { Empty, Sheet } from '../components/ui'
import { LIBRARY } from '../data/library'
import { getLesson } from '../data/curriculum'
import { matchesQuery } from '../lib/text'
import type { ClaimKind, LibraryEntry, LibraryKind } from '../types/content'

const KIND_ORDER: { id: LibraryKind | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'passage', label: 'Passages' },
  { id: 'concept', label: 'Concepts' },
  { id: 'tool', label: 'Tools' },
  { id: 'virtue', label: 'Virtues' },
  { id: 'vice', label: 'Vices' },
  { id: 'story', label: 'Stories & myth' },
  { id: 'psychology', label: 'Psychology' },
  { id: 'analogy', label: 'Analogies' },
  { id: 'thinker', label: 'Thinkers' },
]

const CLAIM_LABEL: Record<ClaimKind, string> = {
  scripture: 'Scripture',
  'historic-christian': 'Historic Christian teaching',
  psychology: 'Psychological research',
  philosophy: 'Philosophical argument',
  history: 'Historical claim',
  literary: 'Literary reading',
  mythology: 'Myth and story',
  leadership: 'Leadership research',
  inference: "The writer's inference",
}

const CLAIM_TONE: Partial<Record<ClaimKind, string>> = {
  scripture: 'gold',
  'historic-christian': 'gold',
  psychology: 'lapis',
  leadership: 'lapis',
  philosophy: 'verdigris',
  history: 'verdigris',
}

export function LibraryPage() {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<LibraryKind | 'all'>('all')
  const [open, setOpen] = useState<LibraryEntry | null>(null)

  const kinds = useMemo(
    () => KIND_ORDER.filter((k) => k.id === 'all' || LIBRARY.some((entry) => entry.kind === k.id)),
    [],
  )

  const results = useMemo(
    () =>
      LIBRARY.filter((entry) => (kind === 'all' ? true : entry.kind === kind)).filter((entry) =>
        matchesQuery(
          `${entry.title} ${entry.subtitle ?? ''} ${entry.summary} ${entry.tags.join(' ')}`,
          query,
        ),
      ),
    [query, kind],
  )

  return (
    <main className="page" id="main">
      <header className="stack stack--tight" style={{ marginBottom: 'var(--s-4)' }}>
        <p className="kicker">Library</p>
        <h1 className="display">Reference, not syllabus</h1>
        <p className="lede reading">
          Every entry says where its claim comes from, so a research finding is never dressed up as
          a scriptural teaching and the writer&rsquo;s own inference is labelled as inference.
        </p>
      </header>

      <div className="stack">
        <div className="row" style={{ position: 'relative' }}>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'var(--s-3)',
              color: 'var(--c-text-faint)',
              display: 'grid',
            }}
          >
            <IconSearch size={18} />
          </span>
          <input
            className="input"
            style={{ paddingLeft: '2.75rem' }}
            placeholder="Search passages, concepts, tools, stories"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search the library"
          />
        </div>

        <div className="tabs" role="group" aria-label="Filter by kind">
          {kinds.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className="chip"
              aria-pressed={kind === entry.id}
              onClick={() => setKind(entry.id)}
            >
              {entry.label}
            </button>
          ))}
        </div>

        <p className="small faint numeral">
          {results.length} {results.length === 1 ? 'entry' : 'entries'}
        </p>

        {results.length === 0 ? (
          <Empty title="Nothing matched" body="Try a shorter search, or a different section." />
        ) : (
          <div className="list">
            {results.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className="card stack stack--tight"
                onClick={() => setOpen(entry)}
              >
                <div className="row row--between">
                  <span
                    className={`chip ${CLAIM_TONE[entry.claimKind] ? `chip--${CLAIM_TONE[entry.claimKind]}` : ''}`.trim()}
                  >
                    {CLAIM_LABEL[entry.claimKind]}
                  </span>
                  {entry.subtitle ? <span className="eyebrow">{entry.subtitle}</span> : null}
                </div>
                <h2 className="card__title">{entry.title}</h2>
                <p className="small muted">{entry.summary}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      <Sheet open={Boolean(open)} onClose={() => setOpen(null)} title={open?.title ?? ''}>
        {open ? (
          <div className="stack stack--loose">
            <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
              <span
                className={`chip ${CLAIM_TONE[open.claimKind] ? `chip--${CLAIM_TONE[open.claimKind]}` : ''}`.trim()}
              >
                {CLAIM_LABEL[open.claimKind]}
              </span>
              {open.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            {open.subtitle ? <p className="eyebrow">{open.subtitle}</p> : null}

            <RichText blocks={open.body} />

            {open.sourceNote ? (
              <aside className="aside">
                <span className="aside__label">Source note</span>
                <p>{open.sourceNote}</p>
              </aside>
            ) : null}

            {open.relatedLessonIds?.length ? (
              <div className="stack stack--tight">
                <p className="eyebrow">Where this comes up</p>
                {open.relatedLessonIds.map((id) => {
                  const lesson = getLesson(id)
                  return lesson ? (
                    <p className="small muted" key={id}>
                      {lesson.title}
                    </p>
                  ) : null
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </Sheet>
    </main>
  )
}
