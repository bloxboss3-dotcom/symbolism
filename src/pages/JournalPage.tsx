import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IconClose, IconSearch } from '../components/Icons'
import { Empty, Rule, Sheet } from '../components/ui'
import { useWisdom } from '../features/progress/useWisdom'
import { formatDateTime } from '../lib/date'
import {
  backupFilename,
  clearState,
  createBackup,
  createInitialState,
  parseBackup,
} from '../lib/storage'
import { matchesQuery } from '../lib/text'
import type { JournalEntry } from '../types/progress'

type Tab = 'entries' | 'practices' | 'connections' | 'data'

const TABS: { id: Tab; label: string }[] = [
  { id: 'entries', label: 'Entries' },
  { id: 'practices', label: 'Practices' },
  { id: 'connections', label: 'Connections' },
  { id: 'data', label: 'Your data' },
]

const KIND_LABEL: Record<JournalEntry['kind'], string> = {
  insight: 'Insight',
  answer: 'Wise answer',
  principle: 'Principle',
  analogy: 'Analogy',
  passage: 'Passage',
  practice: 'Practice',
  note: 'Note',
}

export function JournalPage() {
  const { state, dispatch } = useWisdom()
  const [params, setParams] = useSearchParams()
  const tab = (params.get('tab') as Tab) ?? 'entries'
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [composing, setComposing] = useState(false)

  const tags = useMemo(
    () => Array.from(new Set(state.journal.flatMap((entry) => entry.tags))).sort(),
    [state.journal],
  )

  const entries = useMemo(() => {
    return state.journal
      .filter((entry) => (activeTag ? entry.tags.includes(activeTag) : true))
      .filter((entry) =>
        matchesQuery(
          `${entry.title} ${entry.body} ${entry.revisedBody ?? ''} ${entry.tags.join(' ')}`,
          query,
        ),
      )
      .sort((a, b) => {
        if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1
        return b.updatedAt.localeCompare(a.updatedAt)
      })
  }, [state.journal, query, activeTag])

  return (
    <main className="page" id="main">
      <header className="stack stack--tight" style={{ marginBottom: 'var(--s-4)' }}>
        <p className="kicker">Wisdom Journal</p>
        <h1 className="display">What you have written</h1>
      </header>

      <div className="tabs" role="tablist" aria-label="Journal sections">
        {TABS.map((entry) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={tab === entry.id}
            className="chip"
            aria-pressed={tab === entry.id}
            onClick={() => setParams(entry.id === 'entries' ? {} : { tab: entry.id })}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 'var(--s-5)' }}>
        {tab === 'entries' ? (
          <div className="stack stack--loose">
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
                  placeholder="Search everything you have written"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search journal"
                />
              </div>

              {tags.length > 0 ? (
                <div className="tabs">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="chip"
                      aria-pressed={activeTag === tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              ) : null}

              <button type="button" className="btn btn--ghost" onClick={() => setComposing(true)}>
                Add an entry of your own
              </button>
            </div>

            {entries.length === 0 ? (
              <Empty
                title="Nothing here yet"
                body="Your first judgments, wise answers, revisions and reflections are saved automatically as you work through a lesson."
              />
            ) : (
              <div className="list">
                {entries.map((entry) => (
                  <EntryCard
                    key={entry.id}
                    entry={entry}
                    onPin={() =>
                      dispatch({
                        type: 'update-journal',
                        id: entry.id,
                        patch: { pinned: !entry.pinned },
                      })
                    }
                    onDelete={() => dispatch({ type: 'delete-journal', id: entry.id })}
                  />
                ))}
              </div>
            )}
          </div>
        ) : null}

        {tab === 'practices' ? <Practices /> : null}
        {tab === 'connections' ? <Connections /> : null}
        {tab === 'data' ? <DataPanel /> : null}
      </div>

      <Sheet open={composing} onClose={() => setComposing(false)} title="New entry">
        <Composer
          onSave={(title, body, tags) => {
            dispatch({
              type: 'add-journal',
              entry: { kind: 'note', title, body, tags },
            })
            setComposing(false)
          }}
        />
      </Sheet>
    </main>
  )
}

function EntryCard({
  entry,
  onPin,
  onDelete,
}: {
  entry: JournalEntry
  onPin: () => void
  onDelete: () => void
}) {
  const [confirming, setConfirming] = useState(false)

  return (
    <article className="card stack stack--tight">
      <div className="row row--between">
        <span className="chip chip--gold">{KIND_LABEL[entry.kind]}</span>
        <span className="eyebrow">{formatDateTime(entry.updatedAt)}</span>
      </div>
      <h2 className="card__title">{entry.title}</h2>

      {entry.revisedBody ? (
        <>
          <div className="stack stack--tight">
            <span className="eyebrow">First version</span>
            <p className="small muted" style={{ whiteSpace: 'pre-wrap' }}>
              {entry.body}
            </p>
          </div>
          <Rule />
          <div className="stack stack--tight">
            <span className="eyebrow" style={{ color: 'var(--c-gold)' }}>
              Revised
            </span>
            <p style={{ whiteSpace: 'pre-wrap' }}>{entry.revisedBody}</p>
          </div>
        </>
      ) : (
        <p style={{ whiteSpace: 'pre-wrap' }}>{entry.body}</p>
      )}

      {entry.tags.length > 0 ? (
        <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
          {entry.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="row" style={{ gap: 'var(--s-2)' }}>
        <button type="button" className="btn btn--plain btn--sm" onClick={onPin}>
          {entry.pinned ? 'Unpin' : 'Pin'}
        </button>
        {confirming ? (
          <>
            <button type="button" className="btn btn--danger btn--sm" onClick={onDelete}>
              Delete for good
            </button>
            <button
              type="button"
              className="btn btn--plain btn--sm"
              onClick={() => setConfirming(false)}
            >
              Keep
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn--plain btn--sm"
            onClick={() => setConfirming(true)}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  )
}

function Composer({ onSave }: { onSave: (title: string, body: string, tags: string[]) => void }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')

  return (
    <div className="stack">
      <div className="field">
        <label className="field__label" htmlFor="entry-title">
          Title
        </label>
        <input
          id="entry-title"
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="entry-body">
          What you want to keep
        </label>
        <textarea
          id="entry-body"
          className="textarea"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="entry-tags">
          Tags, separated by commas
        </label>
        <input
          id="entry-tags"
          className="input"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
          placeholder="counsel, listening"
        />
      </div>
      <button
        type="button"
        className="btn btn--primary btn--block"
        disabled={!body.trim()}
        onClick={() =>
          onSave(
            title.trim() || 'Untitled note',
            body.trim(),
            tags
              .split(',')
              .map((tag) => tag.trim())
              .filter(Boolean),
          )
        }
      >
        Save to journal
      </button>
    </div>
  )
}

function Practices() {
  const { state, dispatch } = useWisdom()
  const [reflections, setReflections] = useState<Record<string, string>>({})

  if (state.practices.length === 0) {
    return (
      <Empty
        title="No practices yet"
        body="Every lesson ends with something to do outside the app. When you commit to one, it appears here — and nobody will chase you about it."
      />
    )
  }

  return (
    <div className="list">
      {state.practices.map((practice) => (
        <article className="card stack stack--tight" key={practice.id}>
          <div className="row row--between">
            <span
              className={`chip ${practice.status === 'done' ? 'chip--verdigris' : practice.status === 'skipped' ? '' : 'chip--gold'}`.trim()}
            >
              {practice.status === 'committed'
                ? practice.window
                : practice.status === 'done'
                  ? 'Done'
                  : 'Let go'}
            </span>
            <span className="eyebrow">{formatDateTime(practice.createdAt)}</span>
          </div>

          <p>{practice.assignment}</p>

          {practice.status === 'committed' ? (
            <div className="stack stack--tight">
              <label className="field__label" htmlFor={`reflect-${practice.id}`}>
                {practice.checkIn}
              </label>
              <textarea
                id={`reflect-${practice.id}`}
                className="textarea"
                style={{ minHeight: '5rem' }}
                value={reflections[practice.id] ?? ''}
                onChange={(event) =>
                  setReflections({ ...reflections, [practice.id]: event.target.value })
                }
              />
              <div className="row" style={{ gap: 'var(--s-2)' }}>
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() =>
                    dispatch({
                      type: 'close-practice',
                      id: practice.id,
                      status: 'done',
                      reflection: reflections[practice.id],
                    })
                  }
                >
                  I did it
                </button>
                <button
                  type="button"
                  className="btn btn--plain btn--sm"
                  onClick={() =>
                    dispatch({ type: 'close-practice', id: practice.id, status: 'skipped' })
                  }
                >
                  Let this one go
                </button>
              </div>
            </div>
          ) : practice.reflection ? (
            <p className="small muted" style={{ whiteSpace: 'pre-wrap' }}>
              {practice.reflection}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  )
}

function Connections() {
  const { state } = useWisdom()

  if (state.connections.length === 0) {
    return (
      <Empty
        title="No connections yet"
        body="When you match an idea to the moment that shows it, the pair is kept here — Scripture next to psychology, myth next to a Tuesday."
      />
    )
  }

  return (
    <div className="list">
      {state.connections.map((connection) => (
        <article className="card stack stack--tight" key={connection.id}>
          <p style={{ fontWeight: 600 }}>{connection.leftLabel}</p>
          <p className="eyebrow" style={{ color: 'var(--c-gold)' }}>
            ↓
          </p>
          <p style={{ fontWeight: 600 }}>{connection.rightLabel}</p>
          <p className="small muted">{connection.why}</p>
        </article>
      ))}
    </div>
  )
}

function DataPanel() {
  const { state, dispatch } = useWisdom()
  const fileInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<{ tone: 'ok' | 'bad'; text: string } | null>(null)
  const [confirmWipe, setConfirmWipe] = useState(false)
  const [typed, setTyped] = useState('')

  const exportJson = () => {
    const backup = createBackup(state)
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = backupFilename()
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
    setMessage({
      tone: 'ok',
      text: 'Exported. The file contains everything, including your journal.',
    })
  }

  const importJson = async (file: File) => {
    const text = await file.text()
    const result = parseBackup(text)
    if (!result.ok) {
      setMessage({ tone: 'bad', text: result.error })
      return
    }
    dispatch({ type: 'replace-state', state: result.state })
    setMessage({
      tone: 'ok',
      text: result.migratedFrom
        ? `Restored, and upgraded from an older save format (v${result.migratedFrom}).`
        : 'Restored. Everything is back.',
    })
  }

  return (
    <div className="stack stack--loose">
      <div className="card stack">
        <h2 className="card__title">Where your work lives</h2>
        <p className="small">
          On this device, in this browser&rsquo;s local storage. There is no account and no server,
          which means nothing you write is transmitted anywhere — and also that clearing your
          browser data, or switching to another device, loses it unless you export first.
        </p>
      </div>

      <div className="card stack">
        <h2 className="card__title">Export</h2>
        <p className="small muted">
          A single JSON file with your profile, every answer, your journal, practices, connections
          and progress.
        </p>
        <button type="button" className="btn btn--primary" onClick={exportJson}>
          Download my data
        </button>
      </div>

      <div className="card stack">
        <h2 className="card__title">Import</h2>
        <p className="small muted">
          Restores a previous export, replacing what is on this device. Backups from older versions
          are upgraded automatically.
        </p>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          style={{ display: 'none' }}
          onChange={(event) => {
            const file = event.target.files?.[0]
            if (file) void importJson(file)
            event.target.value = ''
          }}
        />
        <button type="button" className="btn btn--ghost" onClick={() => fileInput.current?.click()}>
          Choose a backup file
        </button>
      </div>

      {message ? (
        <p
          className="small"
          role="status"
          style={{ color: message.tone === 'ok' ? 'var(--c-verdigris)' : 'var(--c-vermilion)' }}
        >
          {message.text}
        </p>
      ) : null}

      <Rule />

      <div className="card stack">
        <h2 className="card__title">Delete everything</h2>
        <p className="small muted">
          Removes all progress, answers, and journal entries from this device. It cannot be undone,
          and it is genuinely permanent — export first if there is any doubt.
        </p>

        {!confirmWipe ? (
          <button type="button" className="btn btn--danger" onClick={() => setConfirmWipe(true)}>
            Delete my local data
          </button>
        ) : (
          <div className="stack">
            <div className="field">
              <label className="field__label" htmlFor="wipe-confirm">
                Type <strong>delete</strong> to confirm
              </label>
              <input
                id="wipe-confirm"
                className="input"
                value={typed}
                onChange={(event) => setTyped(event.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="row" style={{ gap: 'var(--s-2)' }}>
              <button
                type="button"
                className="btn btn--danger btn--sm"
                disabled={typed.trim().toLowerCase() !== 'delete'}
                onClick={() => {
                  clearState()
                  dispatch({ type: 'replace-state', state: createInitialState() })
                  setConfirmWipe(false)
                  setTyped('')
                  setMessage({ tone: 'ok', text: 'Everything has been deleted from this device.' })
                }}
              >
                Delete permanently
              </button>
              <button
                type="button"
                className="btn btn--plain btn--sm"
                onClick={() => {
                  setConfirmWipe(false)
                  setTyped('')
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {message ? (
        <button type="button" className="btn btn--plain" onClick={() => setMessage(null)}>
          <IconClose size={16} /> Dismiss message
        </button>
      ) : null}
    </div>
  )
}
