import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IconArrow, IconBack, IconCheck } from '../components/Icons'
import { Rule } from '../components/ui'
import { getCase, getTrial } from '../data/cases'
import { getLesson, moduleForLesson } from '../data/curriculum'
import { StepView } from '../features/lessons/StepView'
import { isPassiveStep } from '../features/lessons/stepKinds'
import { useWisdom } from '../features/progress/useWisdom'
import type { Track, UnitRef } from '../features/progress/reducer'
import type { LessonStep } from '../types/content'
import type { StepResponse } from '../types/progress'

interface Unit {
  id: string
  title: string
  subtitle: string
  steps: LessonStep[]
  minutes: number
  backTo: string
  backLabel: string
}

function resolveUnit(track: Track, id: string): Unit | null {
  if (track === 'lessons') {
    const lesson = getLesson(id)
    if (!lesson) return null
    const module = moduleForLesson(lesson.id)
    return {
      id: lesson.id,
      title: lesson.title,
      subtitle: lesson.subtitle,
      steps: lesson.steps,
      minutes: lesson.minutes,
      backTo: '/learn',
      backLabel: module ? `Module ${module.order}` : 'Learn',
    }
  }
  if (track === 'cases') {
    const file = getCase(id)
    if (!file) return null
    return {
      id: file.id,
      title: file.title,
      subtitle: file.premise,
      steps: file.steps,
      minutes: file.minutes,
      backTo: '/cases',
      backLabel: 'Case Lab',
    }
  }
  const trial = getTrial(id)
  if (!trial) return null
  return {
    id: trial.id,
    title: trial.title,
    subtitle: 'Transfer trial',
    steps: trial.steps,
    minutes: trial.minutes,
    backTo: '/cases',
    backLabel: 'Case Lab',
  }
}

export function PlayerPage({ track }: { track: Track }) {
  const { unitId = '' } = useParams()
  const navigate = useNavigate()
  const { state, dispatch } = useWisdom()

  const unit = useMemo(() => resolveUnit(track, unitId), [track, unitId])
  const record = unit ? state[track][unit.id] : undefined

  const [index, setIndex] = useState(() => record?.stepIndex ?? 0)
  const [finished, setFinished] = useState(() => record?.status === 'complete')

  const ref: UnitRef | null = unit ? { track, unitId: unit.id, unitTitle: unit.title } : null

  // Registering the unit on entry is what makes "Continue" work after a reload.
  useEffect(() => {
    if (ref && !record) dispatch({ type: 'begin-unit', ref })
    // Only on first arrival at a unit.
  }, [unit?.id])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [index])

  if (!unit || !ref) {
    return (
      <main className="page" id="main">
        <p className="lede">That lesson could not be found.</p>
        <Link className="btn btn--ghost" to="/learn" style={{ marginTop: 'var(--s-4)' }}>
          Back to Learn
        </Link>
      </main>
    )
  }

  const step = unit.steps[Math.min(index, unit.steps.length - 1)]
  const responses = record?.responses ?? {}
  const completedIds = record?.completedStepIds ?? []
  const revealed = completedIds.includes(step.id)
  const passive = isPassiveStep(step)
  const canAdvance = passive || revealed
  const isLast = index === unit.steps.length - 1

  const respond = (response: StepResponse) => {
    dispatch({ type: 'record-step', ref, step, stepIndex: index, response })
  }

  const advance = () => {
    if (passive && !revealed) {
      dispatch({
        type: 'record-step',
        ref,
        step,
        stepIndex: index,
        response: { kind: 'ack', updatedAt: new Date().toISOString() },
      })
    }

    if (isLast) {
      dispatch({ type: 'complete-unit', ref, stepCount: unit.steps.length })
      setFinished(true)
      return
    }

    const next = index + 1
    setIndex(next)
    dispatch({ type: 'seek-step', ref, stepIndex: next })
  }

  if (finished) {
    return <Completion unit={unit} track={track} onReview={() => setFinished(false)} />
  }

  return (
    <>
      <header className="topbar">
        <button
          type="button"
          className="iconbtn"
          onClick={() => (index === 0 ? navigate(unit.backTo) : setIndex(index - 1))}
          aria-label={index === 0 ? `Back to ${unit.backLabel}` : 'Previous step'}
        >
          <IconBack />
        </button>
        <span className="topbar__title">{unit.title}</span>
        <span className="counter numeral" aria-label={`Step ${index + 1} of ${unit.steps.length}`}>
          {index + 1}/{unit.steps.length}
        </span>
      </header>

      <main className="page page--flush" id="main" style={{ paddingTop: 'var(--s-4)' }}>
        <div className="progresstrack" aria-hidden="true">
          {unit.steps.map((candidate, position) => (
            <span
              key={candidate.id}
              className="progresstrack__tick"
              data-done={completedIds.includes(candidate.id)}
              data-current={position === index}
            />
          ))}
        </div>

        <article className="step">
          <header className="step__head">
            {step.title ? <h1 className="step__title">{step.title}</h1> : null}
          </header>

          <StepView
            step={step}
            responses={responses}
            onRespond={respond}
            revealed={revealed}
            voiceEnabled={state.settings.voiceEnabled}
          />
        </article>

        <div className="stepper">
          <div className="stepper__inner">
            <button
              type="button"
              className="btn btn--primary btn--block"
              onClick={advance}
              disabled={!canAdvance}
            >
              {isLast ? 'Finish' : 'Continue'}
              <IconArrow size={18} />
            </button>
          </div>
        </div>

        {!canAdvance ? (
          <p className="small faint" style={{ textAlign: 'center', marginTop: 'var(--s-2)' }}>
            Answer this one before moving on. Nothing is graded.
          </p>
        ) : null}
      </main>
    </>
  )
}

function Completion({ unit, track, onReview }: { unit: Unit; track: Track; onReview: () => void }) {
  const { state } = useWisdom()
  const record = state[track][unit.id]

  return (
    <main className="page" id="main">
      <div className="stack stack--loose" style={{ paddingTop: 'var(--s-6)' }}>
        <div style={{ position: 'relative', textAlign: 'center', padding: 'var(--s-6) 0' }}>
          <span className="constellation" />
          <span
            style={{
              display: 'inline-grid',
              placeItems: 'center',
              width: '4rem',
              height: '4rem',
              borderRadius: '999px',
              border: '1px solid var(--c-gold-line)',
              background: 'var(--c-gold-wash)',
              color: 'var(--c-gold)',
              position: 'relative',
            }}
          >
            <IconCheck size={26} />
          </span>
          <h1 className="display" style={{ marginTop: 'var(--s-4)' }}>
            Finished
          </h1>
          <p className="subtitle" style={{ marginTop: 'var(--s-2)' }}>
            {unit.title}
          </p>
        </div>

        <Rule />

        <div className="card stack">
          <div className="row row--between">
            <span className="eyebrow">Insight earned here</span>
            <span className="numeral" style={{ color: 'var(--c-gold)', fontSize: 'var(--t-lg)' }}>
              {record?.insight ?? 0}
            </span>
          </div>
          <p className="small muted">
            Earned for the work that required thought — noticing, weighing, composing, revising.
            Reading pays almost nothing, and no step pays twice.
          </p>
        </div>

        <div className="card card--gold stack">
          <p className="kicker">The part that counts</p>
          <p>
            Whatever you committed to at the end of this is in your Journal. None of the rest of it
            matters much unless that happens.
          </p>
          <Link className="btn btn--ghost" to="/journal?tab=practices">
            Open my practices
          </Link>
        </div>

        <div className="stack stack--tight">
          <Link className="btn btn--primary btn--block" to={unit.backTo}>
            Back to {unit.backLabel}
          </Link>
          <button type="button" className="btn btn--plain btn--block" onClick={onReview}>
            Review this again
          </button>
        </div>
      </div>
    </main>
  )
}
