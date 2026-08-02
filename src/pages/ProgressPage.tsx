import { Link } from 'react-router-dom'
import { IconBack } from '../components/Icons'
import { Bar, Ring, Rule } from '../components/ui'
import { ABILITY_LIST } from '../data/abilities'
import { MODULES, TOTAL_LESSONS, getLesson } from '../data/curriculum'
import { TOTAL_CASES, TOTAL_TRIALS } from '../data/cases'
import { RUBRIC, RUBRIC_SCALE_LABELS } from '../data/rubric'
import { useWisdom } from '../features/progress/useWisdom'
import {
  completedLessonCount,
  conceptsToRevisit,
  moduleCompletion,
  overallCompletion,
} from '../features/progress/selectors'
import { conceptTitle } from '../data/library'
import { abilityLevel, abilityProgress, countCompleted, liveStreak } from '../lib/scoring'
import { formatDay, relativeDay } from '../lib/date'
import type { RubricDimensionId } from '../types/content'

export function ProgressPage() {
  const { state } = useWisdom()
  const lessonsDone = completedLessonCount(state)
  const casesDone = countCompleted(state.cases)
  const trialsDone = countCompleted(state.trials)
  const due = conceptsToRevisit(state)
  const practicesDone = state.practices.filter((practice) => practice.status === 'done').length

  const assessments = Object.entries(state.selfAssessments)
  const averages = averageByDimension(assessments.map(([, values]) => values))

  return (
    <main className="page" id="main">
      <header
        className="row"
        style={{ marginBottom: 'var(--s-5)', gap: 'var(--s-2)', alignItems: 'flex-start' }}
      >
        <Link to="/" className="iconbtn" aria-label="Back to home">
          <IconBack />
        </Link>
        <div className="stack stack--tight">
          <p className="kicker">Progress</p>
          <h1 className="title">What you have actually done</h1>
        </div>
      </header>

      <div className="stack stack--loose">
        <div className="card card--quiet">
          <p className="small muted">
            Nothing on this page measures your character, your wisdom, or your standing before God.
            It records practice completed and judgements you made about your own answers. That is a
            much smaller claim, and it is the only honest one an app can make.
          </p>
        </div>

        {/* Abilities */}
        <section className="stack">
          <h2 className="title">The six abilities</h2>
          {ABILITY_LIST.map((ability) => {
            const score = state.abilities[ability.id]
            const level = abilityLevel(score.points)
            return (
              <article className="card stack stack--tight" key={ability.id}>
                <div className="row" style={{ gap: 'var(--s-3)' }}>
                  <Ring value={abilityProgress(score.points)} size={42} stroke={3}>
                    <span style={{ color: 'var(--c-gold)', fontSize: '1rem' }}>
                      {ability.name[0]}
                    </span>
                  </Ring>
                  <div className="stack stack--tight" style={{ flex: 1, minWidth: 0 }}>
                    <div className="row row--between">
                      <h3 className="card__title" style={{ fontSize: 'var(--t-md)' }}>
                        {ability.name}
                      </h3>
                      <span className="eyebrow">
                        {score.touches > 0 ? level.name : 'Not begun'}
                      </span>
                    </div>
                    <p className="small muted">{ability.tagline}</p>
                  </div>
                </div>
                <p className="small">{ability.description}</p>
                <p className="small faint numeral">
                  {score.points} insight · {score.touches} step{score.touches === 1 ? '' : 's'}
                </p>
                {score.touches > 0 ? (
                  <ul className="rich small" style={{ paddingLeft: '1.15em', gap: 'var(--s-2)' }}>
                    {ability.growthLooksLike.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            )
          })}
        </section>

        <Rule />

        {/* Curriculum */}
        <section className="stack">
          <h2 className="title">Curriculum</h2>
          <Bar value={overallCompletion(state)} label="Overall progress" />
          <div className="meta">
            <span className="numeral">
              {lessonsDone}/{TOTAL_LESSONS} lessons
            </span>
            <span className="meta__dot numeral">
              {casesDone}/{TOTAL_CASES} case files
            </span>
            <span className="meta__dot numeral">
              {trialsDone}/{TOTAL_TRIALS} transfer trials
            </span>
          </div>

          <div className="stack stack--tight" style={{ marginTop: 'var(--s-3)' }}>
            {MODULES.map((module) => (
              <div className="row" key={module.id} style={{ gap: 'var(--s-3)' }}>
                <span
                  className="numeral small faint"
                  style={{ width: '1.5rem', textAlign: 'right' }}
                >
                  {module.order}
                </span>
                <span className="small" style={{ flex: 1, minWidth: 0 }}>
                  {module.shortTitle}
                </span>
                <span style={{ width: '5rem' }}>
                  <Bar value={moduleCompletion(state, module.id)} label={module.title} />
                </span>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* Self-assessment */}
        <section className="stack">
          <h2 className="title">Your own scoring</h2>
          {assessments.length === 0 ? (
            <p className="small muted">
              After each wise answer you score yourself against the rubric. Those scores gather here
              once you have done at least one.
            </p>
          ) : (
            <>
              <p className="small muted">
                Averaged across {assessments.length} self-assessment
                {assessments.length === 1 ? '' : 's'}. These are your judgements about your own
                writing, not the app&rsquo;s.
              </p>
              <div className="stack stack--tight">
                {(Object.keys(averages) as RubricDimensionId[]).map((id) => (
                  <div className="row" key={id} style={{ gap: 'var(--s-3)' }}>
                    <span className="small" style={{ flex: 1, minWidth: 0 }}>
                      {RUBRIC[id].name}
                    </span>
                    <span className="eyebrow" style={{ width: '4.5rem', textAlign: 'right' }}>
                      {RUBRIC_SCALE_LABELS[Math.round(averages[id]) - 1] ?? '—'}
                    </span>
                    <span style={{ width: '4rem' }}>
                      <Bar value={averages[id] / 4} label={RUBRIC[id].name} />
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <Rule />

        {/* Practice and mastery */}
        <section className="stack">
          <h2 className="title">Out in the world</h2>
          <div className="row" style={{ gap: 'var(--s-3)', alignItems: 'stretch' }}>
            <div className="card card--quiet stack stack--tight" style={{ flex: 1 }}>
              <span className="eyebrow">Practices done</span>
              <span className="numeral" style={{ fontSize: 'var(--t-xl)', color: 'var(--c-gold)' }}>
                {practicesDone}
              </span>
            </div>
            <div className="card card--quiet stack stack--tight" style={{ flex: 1 }}>
              <span className="eyebrow">Days with work</span>
              <span className="numeral" style={{ fontSize: 'var(--t-xl)' }}>
                {state.streak.activeDays.length}
              </span>
              <span className="small faint">
                Current run {liveStreak(state.streak)} · longest {state.streak.longest}
              </span>
            </div>
          </div>

          {state.streak.lastActiveDay ? (
            <p className="small faint">
              Last worked {relativeDay(state.streak.lastActiveDay).toLowerCase()}
              {state.streak.activeDays.length > 1
                ? `, first on ${formatDay(state.streak.activeDays[0])}`
                : ''}
              .
            </p>
          ) : null}
        </section>

        {Object.keys(state.concepts).length > 0 ? (
          <section className="stack">
            <h2 className="title">Concepts you have met</h2>
            <p className="small muted">
              Scheduled at widening intervals — one day, three, eight, eighteen, forty. Due ones are
              marked.
            </p>
            <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
              {Object.values(state.concepts)
                .sort((a, b) => b.level - a.level)
                .map((concept) => (
                  <span
                    key={concept.conceptId}
                    className={`chip ${due.includes(concept.conceptId) ? 'chip--gold' : ''}`.trim()}
                    title={`Level ${concept.level + 1} of 5 · next look ${concept.dueOn}`}
                  >
                    {conceptTitle(concept.conceptId)}
                  </span>
                ))}
            </div>
          </section>
        ) : null}

        {state.profile?.intention ? (
          <section className="card card--gold stack">
            <p className="kicker">Why you said you came</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{state.profile.intention}</p>
            <p className="small muted">
              Worth re-reading. If the app has drifted away from this, the app is the thing that is
              wrong.
            </p>
          </section>
        ) : null}

        {due.length > 0 ? (
          <div className="banner">
            <span>
              {due.length} concept{due.length === 1 ? ' is' : 's are'} due another look. The first
              is <strong>{conceptTitle(due[0])}</strong>
              {getLesson('l01-1') ? '' : ''}.
            </span>
          </div>
        ) : null}
      </div>
    </main>
  )
}

function averageByDimension(records: Record<string, number>[]): Record<RubricDimensionId, number> {
  const sums: Record<string, { total: number; count: number }> = {}
  for (const record of records) {
    for (const [id, value] of Object.entries(record)) {
      if (!Number.isFinite(value)) continue
      sums[id] = sums[id] ?? { total: 0, count: 0 }
      sums[id].total += value
      sums[id].count += 1
    }
  }
  const out: Record<string, number> = {}
  for (const [id, { total, count }] of Object.entries(sums)) {
    out[id] = count ? total / count : 0
  }
  return out as Record<RubricDimensionId, number>
}
