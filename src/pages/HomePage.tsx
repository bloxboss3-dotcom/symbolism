import { Link } from 'react-router-dom'
import { IconArrow, IconChart, IconFlame, IconGear, Mark } from '../components/Icons'
import { WisdomMap } from '../components/WisdomMap'
import { Bar, Rule } from '../components/ui'
import { MODULES, TOTAL_LESSONS, moduleForLesson } from '../data/curriculum'
import { useWisdom } from '../features/progress/useWisdom'
import {
  completedLessonCount,
  completedModuleCount,
  nextLesson,
  overallCompletion,
  recentJournal,
  todaysPractice,
} from '../features/progress/selectors'
import { liveStreak } from '../lib/scoring'
import { truncate } from '../lib/text'

export function HomePage() {
  const { state } = useWisdom()
  const next = nextLesson(state)
  const suggestion = todaysPractice(state)
  // The Continue card already offers the next lesson; showing it twice reads as
  // padding rather than as a suggestion.
  const today = suggestion?.kind === 'lesson' && next ? null : suggestion
  const streak = liveStreak(state.streak)
  const done = completedLessonCount(state)
  const modulesDone = completedModuleCount(state)
  const journal = recentJournal(state, 1)[0]
  const overall = overallCompletion(state)

  return (
    <main className="page" id="main">
      <header className="row row--between" style={{ marginBottom: 'var(--s-5)' }}>
        <span className="row" style={{ gap: 'var(--s-2)', color: 'var(--c-gold)' }}>
          <Mark size={24} />
          <span className="kicker">Wisdom</span>
        </span>
        <span className="row" style={{ gap: 'var(--s-1)' }}>
          <Link to="/progress" className="iconbtn" aria-label="Progress">
            <IconChart />
          </Link>
          <Link to="/settings" className="iconbtn" aria-label="Settings">
            <IconGear />
          </Link>
        </span>
      </header>

      <div className="stack stack--loose">
        {/* Continue */}
        {next ? (
          <Link to={`/learn/${next.lesson.id}`} className="card card--gold stack">
            <div className="row row--between">
              <span className="kicker">{next.status === 'in-progress' ? 'Continue' : 'Begin'}</span>
              <span className="eyebrow">
                {moduleForLesson(next.lesson.id)?.shortTitle ?? ''} · {next.lesson.minutes} min
              </span>
            </div>
            <h1 className="card__title">{next.lesson.title}</h1>
            <p className="small muted">{next.lesson.centralQuestion}</p>
            {next.completion > 0 ? <Bar value={next.completion} label="Lesson progress" /> : null}
            <span className="row ui small" style={{ color: 'var(--c-gold)', gap: 'var(--s-2)' }}>
              {next.status === 'in-progress' ? 'Pick up where you left off' : 'Open the lesson'}
              <IconArrow size={16} />
            </span>
          </Link>
        ) : (
          <div className="card card--gold stack">
            <p className="kicker">All twelve modules complete</p>
            <p>
              The lessons are finished. What is left is the part that was always the point — the
              case files, the transfer trials, and whatever you do on Tuesday.
            </p>
            <Link className="btn btn--ghost" to="/cases">
              Open the Case Lab
            </Link>
          </div>
        )}

        {/* Today's practice */}
        {today ? (
          <Link to={today.to} className="card stack">
            <div className="row row--between">
              <span className="kicker">Today&rsquo;s practice</span>
              <span className="eyebrow">{today.title}</span>
            </div>
            <p>{truncate(today.detail, 180)}</p>
            <span className="row ui small" style={{ color: 'var(--c-gold)', gap: 'var(--s-2)' }}>
              {today.cta}
              <IconArrow size={16} />
            </span>
          </Link>
        ) : null}

        {/* Streak and insight */}
        <div className="row" style={{ gap: 'var(--s-3)', alignItems: 'stretch' }}>
          <div className="card card--quiet stack stack--tight" style={{ flex: 1 }}>
            <span className="row" style={{ gap: 'var(--s-2)', color: 'var(--c-gold)' }}>
              <IconFlame size={16} />
              <span className="eyebrow" style={{ color: 'inherit' }}>
                Streak
              </span>
            </span>
            <span className="numeral" style={{ fontSize: 'var(--t-xl)' }}>
              {streak}
            </span>
            <span className="small faint">
              {streak === 0
                ? state.streak.activeDays.length > 0
                  ? `${state.streak.activeDays.length} days in total. Start another whenever.`
                  : 'Begins with your first piece of work.'
                : streak === 1
                  ? 'Day one of this run.'
                  : `Longest: ${state.streak.longest}.`}
            </span>
          </div>

          <div className="card card--quiet stack stack--tight" style={{ flex: 1 }}>
            <span className="eyebrow">Insight</span>
            <span className="numeral" style={{ fontSize: 'var(--t-xl)', color: 'var(--c-gold)' }}>
              {state.insight}
            </span>
            <span className="small faint">
              {state.connections.length} connection{state.connections.length === 1 ? '' : 's'} found
            </span>
          </div>
        </div>

        {/* Wisdom map */}
        <section className="stack">
          <div className="row row--between">
            <h2 className="title">The Wisdom Map</h2>
            <Link to="/progress" className="ui small" style={{ color: 'var(--c-gold)' }}>
              Detail
            </Link>
          </div>
          <WisdomMap abilities={state.abilities} />
          <p className="small faint">A record of practice completed, not a measurement of you.</p>
        </section>

        <Rule />

        {/* Module progress */}
        <section className="stack">
          <div className="row row--between">
            <h2 className="title">The twelve modules</h2>
            <Link to="/learn" className="ui small" style={{ color: 'var(--c-gold)' }}>
              All lessons
            </Link>
          </div>
          <Bar value={overall} label="Overall curriculum progress" />
          <p className="small muted">
            {done} of {TOTAL_LESSONS} lessons finished · {modulesDone} of {MODULES.length} modules
            complete
          </p>
        </section>

        {/* Journal */}
        {journal ? (
          <Link to="/journal" className="card stack">
            <span className="kicker">Latest from your journal</span>
            <p style={{ fontStyle: 'italic' }}>
              &ldquo;{truncate(journal.revisedBody ?? journal.body, 200)}&rdquo;
            </p>
            <span className="eyebrow">{journal.title}</span>
          </Link>
        ) : (
          <div className="card card--quiet stack stack--tight">
            <span className="kicker">Your journal</span>
            <p className="small muted">
              Everything you write in a lesson is kept here — first answers, revised answers, and
              the things you committed to. Nothing leaves this device.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
