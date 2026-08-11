/**
 * Scripture outside a routine: the reading plan, the studies with full
 * notes, and a way back to wherever you stopped.
 */
import { Link } from 'react-router-dom'
import { CheckIcon } from '../components/Icons'
import { commentaries, passageById, plans } from '../data/registry'
import { useAppState } from '../features/state/useAppState'

export function StudyPage() {
  const { state } = useAppState()
  const reading = state.reading

  return (
    <main className="page" id="main">
      <header className="page-head">
        <p className="kicker">Scripture</p>
        <h1>Reading &amp; study</h1>
        <p className="lede">
          A small library, read slowly. Commentary is labeled, sourced, and honest about where
          faithful readers differ.
        </p>
      </header>

      <div className="stack stack--loose">
        {plans.map((plan) => (
          <section key={plan.id} className="card" aria-labelledby={`plan-${plan.id}`}>
            <h2 id={`plan-${plan.id}`}>{plan.title}</h2>
            <p style={{ color: 'var(--c-ink-soft)', marginTop: 'var(--s-2)', fontSize: '0.95rem' }}>
              {plan.description}
            </p>
            <ol className="list-plain" style={{ marginTop: 'var(--s-4)' }}>
              {plan.days.map((day) => {
                const passage = passageById.get(day.passageId)
                const isRead = reading?.planId === plan.id && reading.day >= day.day
                const isNext =
                  (reading?.planId === plan.id && reading.day + 1 === day.day) ||
                  (!reading && day.day === 1)
                return (
                  <li key={day.day}>
                    <Link
                      to={`/read/${day.passageId}?plan=${plan.id}&day=${day.day}`}
                      className="row"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        minHeight: 44,
                        padding: 'var(--s-2) 0',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '1.9rem',
                          height: '1.9rem',
                          flex: 'none',
                          borderRadius: '50%',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          border: '1px solid var(--c-border)',
                          background: isRead ? 'var(--c-gold)' : 'transparent',
                          color: isRead ? 'var(--c-surface-raise)' : 'var(--c-ink-faint)',
                        }}
                      >
                        {isRead ? <CheckIcon size={14} /> : day.day}
                      </span>
                      <span style={{ flex: 1 }}>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                          {day.title}
                          {isNext ? (
                            <span className="chip chip--gold" style={{ marginLeft: 'var(--s-2)' }}>
                              Next
                            </span>
                          ) : null}
                        </span>
                        <span className="footnote" style={{ display: 'block' }}>
                          {passage?.reference}
                          {isRead ? ' · read' : ''}
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}

        <section className="card" aria-labelledby="studies-head">
          <h2 id="studies-head">Studies with full notes</h2>
          <p style={{ color: 'var(--c-ink-soft)', marginTop: 'var(--s-2)', fontSize: '0.95rem' }}>
            Passages with literary and historical context, themes, questions, and sources.
          </p>
          <ul className="list-plain" style={{ marginTop: 'var(--s-4)' }}>
            {commentaries.map((entry) => {
              const passage = passageById.get(entry.passageId)
              if (!passage) return null
              return (
                <li key={entry.id}>
                  <Link
                    to={`/read/${entry.passageId}`}
                    className="row"
                    style={{ textDecoration: 'none', color: 'inherit', minHeight: 44 }}
                  >
                    <span style={{ flex: 1, fontWeight: 600, fontSize: '0.95rem' }}>
                      {passage.reference}
                    </span>
                    <span className="footnote">{entry.themes[0]?.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}
