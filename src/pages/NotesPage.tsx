/**
 * Bookmarks and private notes. Everything here lives on the device only.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookmarkIcon } from '../components/Icons'
import { ConfirmDialog } from '../components/ui'
import { passageById } from '../data/registry'
import { useAppState } from '../features/state/useAppState'

export function NotesPage() {
  const { state, dispatch } = useAppState()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  const [newNote, setNewNote] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)

  return (
    <main className="page" id="main">
      <header className="page-head">
        <p className="kicker">Notes</p>
        <h1>Bookmarks &amp; notes</h1>
        <p className="lede">Kept on this device only — never uploaded, never analyzed.</p>
      </header>

      <div className="stack stack--loose">
        <section className="card" aria-labelledby="bookmarks-head">
          <h2 id="bookmarks-head" style={{ fontSize: '1.05rem' }}>
            Bookmarked passages
          </h2>
          {state.bookmarks.length === 0 ? (
            <p className="footnote" style={{ marginTop: 'var(--s-3)' }}>
              Nothing bookmarked yet. The bookmark mark lives at the top of any passage in the
              reader.
            </p>
          ) : (
            <ul className="list-plain" style={{ marginTop: 'var(--s-3)' }}>
              {state.bookmarks.map((bookmark) => {
                const passage = passageById.get(bookmark.passageId)
                if (!passage) return null
                return (
                  <li key={bookmark.id}>
                    <Link
                      to={`/read/${passage.id}`}
                      className="row"
                      style={{ textDecoration: 'none', color: 'inherit', minHeight: 44 }}
                    >
                      <span style={{ color: 'var(--c-gold)' }}>
                        <BookmarkIcon filled size={18} />
                      </span>
                      <span style={{ flex: 1, fontWeight: 600, fontSize: '0.95rem' }}>
                        {passage.reference}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <section className="card" aria-labelledby="notes-head">
          <h2 id="notes-head" style={{ fontSize: '1.05rem' }}>
            Notes
          </h2>
          <div style={{ marginTop: 'var(--s-3)' }}>
            <label className="field">
              <span className="visually-hidden">New note</span>
              <textarea
                rows={3}
                placeholder="Write a free-standing note…"
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
              />
            </label>
            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 'var(--s-2)' }}>
              <button
                type="button"
                className="btn btn--sm"
                disabled={newNote.trim().length === 0}
                onClick={() => {
                  dispatch({ type: 'note-add', passageId: null, text: newNote.trim() })
                  setNewNote('')
                }}
              >
                Add note
              </button>
            </div>
          </div>

          {state.notes.length === 0 ? (
            <p className="footnote">No notes yet.</p>
          ) : (
            <ul className="list-plain" style={{ marginTop: 'var(--s-3)' }}>
              {state.notes.map((note) => {
                const passage = note.passageId ? passageById.get(note.passageId) : undefined
                const isEditing = editingId === note.id
                return (
                  <li key={note.id} className="card card--flush" style={{ boxShadow: 'none' }}>
                    {passage ? (
                      <Link
                        to={`/read/${passage.id}`}
                        className="kicker"
                        style={{ fontSize: '0.72rem' }}
                      >
                        {passage.reference}
                      </Link>
                    ) : null}
                    {isEditing ? (
                      <>
                        <textarea
                          rows={3}
                          aria-label="Edit note"
                          value={draft}
                          onChange={(event) => setDraft(event.target.value)}
                          style={{ marginTop: 'var(--s-2)' }}
                        />
                        <div
                          className="row"
                          style={{ justifyContent: 'flex-end', marginTop: 'var(--s-2)' }}
                        >
                          <button
                            type="button"
                            className="btn btn--sm btn--quiet"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn--sm"
                            onClick={() => {
                              dispatch({ type: 'note-update', id: note.id, text: draft })
                              setEditingId(null)
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p
                          style={{
                            whiteSpace: 'pre-wrap',
                            fontSize: '0.95rem',
                            marginTop: 'var(--s-1)',
                          }}
                        >
                          {note.text}
                        </p>
                        <div
                          className="row"
                          style={{ justifyContent: 'space-between', marginTop: 'var(--s-2)' }}
                        >
                          <span className="footnote">
                            {new Date(note.updatedAt).toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="row" style={{ gap: 'var(--s-1)' }}>
                            <button
                              type="button"
                              className="btn btn--sm btn--quiet"
                              onClick={() => {
                                setEditingId(note.id)
                                setDraft(note.text)
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn--sm btn--quiet"
                              style={{ color: 'var(--c-danger)' }}
                              onClick={() => setDeleteId(note.id)}
                            >
                              Delete
                            </button>
                          </span>
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete this note?"
        body="The note will be removed from this device. This cannot be undone."
        confirmLabel="Delete note"
        danger
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId) dispatch({ type: 'note-delete', id: deleteId })
          setDeleteId(null)
        }}
      />
    </main>
  )
}
