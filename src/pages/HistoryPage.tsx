/**
 * A gentle history: a month of small marks, and recent sessions. No streaks,
 * no failure states, no scores — rhythm as invitation, not achievement.
 */
import { useState } from 'react'
import { localDay } from '../lib/time'
import { routineById } from '../data/registry'
import { useAppState } from '../features/state/useAppState'

const MONTH_FORMAT: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }

export function HistoryPage() {
  const { state } = useAppState()
  const [monthStart, setMonthStart] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })

  const today = localDay()
  const byDay = new Map<string, { morning: boolean; evening: boolean }>()
  for (const completion of state.history) {
    const entry = byDay.get(completion.localDate) ?? { morning: false, evening: false }
    entry[completion.timeOfDay] = true
    byDay.set(completion.localDate, entry)
  }

  const firstWeekday = monthStart.getDay()
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate()
  const cells: Array<{ date: string; day: number } | null> = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), i + 1)
      return { date: localDay(date), day: i + 1 }
    }),
  ]

  const recent = [...state.history].reverse().slice(0, 14)

  return (
    <main className="page" id="main">
      <header className="page-head">
        <p className="kicker">History</p>
        <h1>A quiet record</h1>
        <p className="lede">
          Days you prayed, kept simply. A missed day is not a debt; every morning His mercies are
          new.
        </p>
      </header>

      <div className="stack stack--loose">
        <section className="card" aria-label="Calendar of completed sessions">
          <div className="row row--between" style={{ marginBottom: 'var(--s-3)' }}>
            <button
              type="button"
              className="btn btn--sm btn--quiet"
              onClick={() =>
                setMonthStart(new Date(monthStart.getFullYear(), monthStart.getMonth() - 1, 1))
              }
            >
              ← Previous
            </button>
            <h2 style={{ fontSize: '1rem' }}>
              {monthStart.toLocaleDateString(undefined, MONTH_FORMAT)}
            </h2>
            <button
              type="button"
              className="btn btn--sm btn--quiet"
              onClick={() =>
                setMonthStart(new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 1))
              }
            >
              Next →
            </button>
          </div>
          <div
            className="cal-grid"
            role="img"
            aria-label="Days this month with completed morning or evening prayer"
          >
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <span key={i} className="footnote" style={{ textAlign: 'center' }} aria-hidden="true">
                {d}
              </span>
            ))}
            {cells.map((cell, index) =>
              cell ? (
                <span
                  key={cell.date}
                  className={`cal-cell${cell.date === today ? ' cal-cell--today' : ''}`}
                >
                  {cell.day}
                  {byDay.has(cell.date) ? (
                    <span className="cal-dot" aria-hidden="true">
                      {byDay.get(cell.date)?.morning ? <i className="dot-morning" /> : null}
                      {byDay.get(cell.date)?.evening ? <i className="dot-evening" /> : null}
                    </span>
                  ) : null}
                </span>
              ) : (
                <span key={`pad-${index}`} className="cal-cell cal-cell--out" aria-hidden="true" />
              ),
            )}
          </div>
          <p className="footnote" style={{ marginTop: 'var(--s-3)' }}>
            <span style={{ color: 'var(--c-gold-bright)' }}>●</span> morning ·{' '}
            <span style={{ color: 'var(--c-accent)' }}>●</span> evening
          </p>
        </section>

        <section className="card" aria-labelledby="recent-head">
          <h2 id="recent-head" style={{ fontSize: '1.05rem' }}>
            Recent
          </h2>
          {recent.length === 0 ? (
            <p className="footnote" style={{ marginTop: 'var(--s-3)' }}>
              Completed sessions will appear here. Whenever you are ready.
            </p>
          ) : (
            <ul className="list-plain" style={{ marginTop: 'var(--s-3)' }}>
              {recent.map((completion) => {
                const routine = routineById.get(completion.routineId)
                return (
                  <li key={completion.id} className="row" style={{ minHeight: 44 }}>
                    <span style={{ flex: 1 }}>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                        {routine?.title ?? completion.routineId}
                      </span>
                      <span className="footnote" style={{ display: 'block' }}>
                        {new Date(completion.completedAt).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })}
                        {' · '}
                        {completion.timeOfDay}
                        {completion.endedEarly ? ' · ended early — still prayer' : ''}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
