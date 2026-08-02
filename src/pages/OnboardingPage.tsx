import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconArrow, IconCheck, Mark } from '../components/Icons'
import { Rule } from '../components/ui'
import { FAMILIARITY_OPTIONS, GOALS, STUDY_PREFERENCES, startingSummary } from '../data/goals'
import { TOTAL_LESSONS, TOTAL_MODULES } from '../data/curriculum'
import { useWisdom } from '../features/progress/useWisdom'
import type { Familiarity, GoalId, StudyPreference } from '../types/progress'

type Stage = 'welcome' | 'goals' | 'pace' | 'background' | 'summary'

const ORDER: Stage[] = ['welcome', 'goals', 'pace', 'background', 'summary']

export function OnboardingPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useWisdom()
  const [stage, setStage] = useState<Stage>(state.profile ? 'summary' : 'welcome')
  const [goals, setGoals] = useState<GoalId[]>(state.profile?.goals ?? [])
  const [pace, setPace] = useState<StudyPreference>(state.profile?.studyPreference ?? 'standard')
  const [familiarity, setFamiliarity] = useState<Familiarity>(state.profile?.familiarity ?? 'some')
  const [intention, setIntention] = useState(state.profile?.intention ?? '')

  const position = ORDER.indexOf(stage)
  const toggleGoal = (id: GoalId) =>
    setGoals((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )

  const finish = () => {
    dispatch({
      type: 'onboard',
      profile: {
        goals,
        studyPreference: pace,
        familiarity,
        intention: intention.trim() || undefined,
        startedAt: state.profile?.startedAt ?? new Date().toISOString(),
        onboardedAt: new Date().toISOString(),
      },
    })
    navigate('/', { replace: true })
  }

  const summary = startingSummary(goals, pace, familiarity)

  return (
    <main className="page" id="main">
      <div className="progresstrack" aria-hidden="true" style={{ marginBottom: 'var(--s-6)' }}>
        {ORDER.map((entry, index) => (
          <span
            key={entry}
            className="progresstrack__tick"
            data-done={index < position}
            data-current={index === position}
          />
        ))}
      </div>

      {stage === 'welcome' ? (
        <section className="stack stack--loose enter" style={{ position: 'relative' }}>
          <span className="constellation" />
          <div style={{ position: 'relative', color: 'var(--c-gold)' }}>
            <Mark size={44} />
          </div>
          <div className="stack stack--tight" style={{ position: 'relative' }}>
            <h1 className="display">Wisdom</h1>
            <p className="subtitle">
              See truly. Judge wisely. Speak meaningfully. Live faithfully.
            </p>
          </div>
          <Rule />
          <div className="stack">
            <p className="lede">
              This is a school of practical wisdom, not a quiz app. It trains six things: noticing
              what is actually there, reading it honestly, judging well, understanding a person
              before advising them, saying the true thing so it lands, and doing something about it
              outside the app.
            </p>
            <p>
              Scripture governs the account of truth and human nature here. Philosophy, psychology,
              history, literature and myth are taken seriously and are not treated as equally
              authoritative — every claim is labelled with where it comes from.
            </p>
            <p className="small muted">
              {TOTAL_MODULES} modules, {TOTAL_LESSONS} full lessons, six case files, and four
              transfer trials. Everything you write stays on this device. There is no account, no
              server, and nothing to pay for.
            </p>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => setStage('goals')}
          >
            Begin <IconArrow size={18} />
          </button>
        </section>
      ) : null}

      {stage === 'goals' ? (
        <section className="stack stack--loose enter">
          <div className="stack stack--tight">
            <p className="kicker">One of five</p>
            <h1 className="title">What do you most want wisdom for?</h1>
            <p className="muted small">Choose as many as are true. This orders what comes first.</p>
          </div>

          <div className="list">
            {GOALS.map((goal) => {
              const chosen = goals.includes(goal.id)
              return (
                <button
                  key={goal.id}
                  type="button"
                  className="option"
                  aria-pressed={chosen}
                  onClick={() => toggleGoal(goal.id)}
                >
                  <span className="option__mark" aria-hidden="true">
                    <IconCheck size={13} />
                  </span>
                  <span>
                    <span style={{ display: 'block', fontWeight: 600 }}>{goal.label}</span>
                    <span className="small muted">{goal.description}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <button
            type="button"
            className="btn btn--primary btn--block"
            disabled={goals.length === 0}
            onClick={() => setStage('pace')}
          >
            Next <IconArrow size={18} />
          </button>
        </section>
      ) : null}

      {stage === 'pace' ? (
        <section className="stack stack--loose enter">
          <div className="stack stack--tight">
            <p className="kicker">Two of five</p>
            <h1 className="title">How long is a realistic sitting?</h1>
            <p className="muted small">
              Lessons save after every step, so this only changes what gets suggested.
            </p>
          </div>

          <div className="list">
            {STUDY_PREFERENCES.map((option) => (
              <button
                key={option.id}
                type="button"
                className="option"
                data-selected={pace === option.id}
                onClick={() => setPace(option.id)}
              >
                <span className="option__mark option__mark--round" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>
                  <span style={{ display: 'block', fontWeight: 600 }}>{option.label}</span>
                  <span className="small muted">{option.detail}</span>
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => setStage('background')}
          >
            Next <IconArrow size={18} />
          </button>
        </section>
      ) : null}

      {stage === 'background' ? (
        <section className="stack stack--loose enter">
          <div className="stack stack--tight">
            <p className="kicker">Three of five</p>
            <h1 className="title">How much ground have you covered?</h1>
          </div>

          <div className="list">
            {FAMILIARITY_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className="option"
                data-selected={familiarity === option.id}
                onClick={() => setFamiliarity(option.id)}
              >
                <span className="option__mark option__mark--round" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>
                  <span style={{ display: 'block', fontWeight: 600 }}>{option.label}</span>
                  <span className="small muted">{option.detail}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="intention">
              In your own words — optional
            </label>
            <p className="field__hint">
              What situation, decision, or person is behind your being here? Only you will ever see
              this.
            </p>
            <textarea
              id="intention"
              className="textarea"
              style={{ minHeight: '6rem' }}
              value={intention}
              onChange={(event) => setIntention(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => setStage('summary')}
          >
            Next <IconArrow size={18} />
          </button>
        </section>
      ) : null}

      {stage === 'summary' ? (
        <section className="stack stack--loose enter">
          <div className="stack stack--tight">
            <p className="kicker">Where you are starting</p>
            <h1 className="title">{summary.headline}</h1>
          </div>

          <Rule />

          <div className="card card--gold stack">
            <p>{summary.body}</p>
          </div>

          {intention.trim() ? (
            <div className="card card--quiet">
              <p className="eyebrow">You wrote</p>
              <p style={{ marginTop: 'var(--s-2)', whiteSpace: 'pre-wrap' }}>{intention.trim()}</p>
            </div>
          ) : null}

          <div className="card stack stack--tight">
            <p className="eyebrow">Two honest warnings</p>
            <p className="small">
              This app is fifth on its own list of what actually forms a person. Everything here is
              designed to be discharged into something you do outside it, which is why every lesson
              ends with an assignment.
            </p>
            <p className="small">
              Nothing here measures your soul or your spiritual maturity. It records the practice
              you have done, and that is a much smaller claim.
            </p>
          </div>

          <button type="button" className="btn btn--primary btn--block" onClick={finish}>
            Start with Module One <IconArrow size={18} />
          </button>
          <button
            type="button"
            className="btn btn--plain btn--block"
            onClick={() => setStage('goals')}
          >
            Change my answers
          </button>
        </section>
      ) : null}
    </main>
  )
}
