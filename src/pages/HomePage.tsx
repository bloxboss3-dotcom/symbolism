/**
 * Home: two doorways — morning and evening — plus continue-reading and a
 * gentle handle back into an unfinished session. No metrics, no streaks.
 */
import { Link } from 'react-router-dom'
import { MoonIcon, SunriseIcon } from '../components/Icons'
import { BRAND } from '../brand'
import { passageById, planById, routineById } from '../data/registry'
import { suggestRoutine } from '../features/session/suggest'
import { useAppState } from '../features/state/useAppState'

export function HomePage() {
  const { state } = useAppState()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  const morning = suggestRoutine('morning')
  const evening = suggestRoutine('evening')

  const saved = state.session ? routineById.get(state.session.routineId) : undefined

  const reading = state.reading
  const readingPlan = reading ? planById.get(reading.planId) : undefined
  const nextDay = readingPlan?.days.find((d) => d.day === (reading?.day ?? 0) + 1)
  const continueDay = nextDay ?? readingPlan?.days.find((d) => d.day === reading?.day)

  return (
    <main className="page" id="main">
      <header className="page-head" style={{ textAlign: 'center', marginTop: 'var(--s-5)' }}>
        <p className="kicker">{BRAND.name}</p>
        <h1>{greeting}.</h1>
        <p className="lede" style={{ margin: '0 auto', marginTop: 'var(--s-2)' }}>
          “{BRAND.tagline}” <span style={{ whiteSpace: 'nowrap' }}>— {BRAND.taglineRef}</span>
        </p>
      </header>

      <div className="stack stack--loose">
        {saved && state.session ? (
          <div className="banner banner--attention" role="status">
            <span style={{ flex: 1 }}>
              You have an unfinished {saved.timeOfDay} session — {saved.title}, part{' '}
              {state.session.segmentIndex + 1}.
            </span>
            <Link className="btn btn--sm" to={`/session/${saved.id}`}>
              Continue
            </Link>
          </div>
        ) : null}

        <Link className="doorway" to={`/session/${morning.id}`} data-testid="doorway-morning">
          <span className="kicker">
            <SunriseIcon size={14} /> Morning
          </span>
          <h2>{morning.title}</h2>
          <p>{morning.subtitle}</p>
        </Link>

        <Link className="doorway doorway--evening" to={`/session/${evening.id}`}>
          <span className="kicker">
            <MoonIcon size={14} /> Evening
          </span>
          <h2>{evening.title}</h2>
          <p>{evening.subtitle}</p>
        </Link>

        {readingPlan && continueDay ? (
          <Link
            className="card card--flush"
            to={`/read/${continueDay.passageId}?plan=${readingPlan.id}&day=${continueDay.day}`}
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <p className="kicker" style={{ marginBottom: 'var(--s-1)' }}>
              Continue reading
            </p>
            <h2 style={{ fontSize: '1.1rem' }}>
              Day {continueDay.day}: {continueDay.title}
            </h2>
            <p className="footnote" style={{ marginTop: 'var(--s-1)' }}>
              {passageById.get(continueDay.passageId)?.reference} · {readingPlan.title}
            </p>
          </Link>
        ) : (
          <Link
            className="card card--flush"
            to="/study"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <p className="kicker" style={{ marginBottom: 'var(--s-1)' }}>
              Scripture
            </p>
            <h2 style={{ fontSize: '1.1rem' }}>Begin the seven days of Behold</h2>
            <p className="footnote" style={{ marginTop: 'var(--s-1)' }}>
              A week of passages on the character and glory of God.
            </p>
          </Link>
        )}

        <p
          className="footnote"
          style={{ textAlign: 'center', maxWidth: '30rem', margin: '0 auto' }}
        >
          This app is a devotional aid. It cannot replace Scripture, your church, pastoral counsel,
          or the quiet work of the Holy Spirit — it only makes room for them.
        </p>
      </div>
    </main>
  )
}
