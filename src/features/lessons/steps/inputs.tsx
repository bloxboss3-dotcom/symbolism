import { useState } from 'react'
import { RichText } from '../../../components/RichText'
import { RUBRIC, RUBRIC_SCALE_LABELS } from '../../../data/rubric'
import { getMentor } from '../../../lib/mentor'
import type {
  FirstJudgmentStep,
  PerspectiveStep,
  PracticeStep,
  ReflectionStep,
  RevisionStep,
  SelfAssessStep,
  SocraticStep,
  WiseAnswerStep,
} from '../../../types/content'
import type { StepResponse } from '../../../types/progress'
import { LongAnswer } from './LongAnswer'

const now = () => new Date().toISOString()

interface TextStepProps {
  response: StepResponse | undefined
  onRespond: (response: StepResponse) => void
  revealed: boolean
  voiceEnabled?: boolean
}

function textValue(response: StepResponse | undefined): string {
  return response?.kind === 'text' ? response.value : ''
}

/* ------------------------------------------------------- first judgment ---- */

export function FirstJudgmentView({
  step,
  response,
  onRespond,
  revealed,
}: TextStepProps & { step: FirstJudgmentStep }) {
  const [draft, setDraft] = useState(() => textValue(response))

  return (
    <div className="stack stack--loose">
      <div className="card card--gold">
        <p className="lede">{step.prompt}</p>
      </div>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      <LongAnswer
        value={draft}
        onChange={setDraft}
        onCommit={() => onRespond({ kind: 'text', value: draft, updatedAt: now() })}
        placeholder={step.placeholder}
        minWords={step.minWords}
        committed={revealed}
        commitLabel="Save my first judgment"
      />

      {revealed ? (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Saved. You will be able to compare this with what you think at the end.
        </p>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------- socratic --- */

export function SocraticView({
  step,
  response,
  onRespond,
  revealed,
}: TextStepProps & { step: SocraticStep }) {
  const [draft, setDraft] = useState(() => textValue(response))

  return (
    <div className="stack stack--loose">
      <div className="callout callout--caution">
        <p className="callout__title">The challenge</p>
        <p>{step.challenge}</p>
      </div>

      <p className="lede">{step.prompt}</p>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      {!revealed ? (
        <LongAnswer
          value={draft}
          onChange={setDraft}
          onCommit={() => onRespond({ kind: 'text', value: draft, updatedAt: now() })}
          minWords={50}
          committed={false}
          commitLabel="Answer, then see one reply"
        />
      ) : (
        <div className="stack stack--loose">
          <details className="card card--quiet">
            <summary className="ui small" style={{ cursor: 'pointer', color: 'var(--c-gold)' }}>
              Show what you wrote
            </summary>
            <p style={{ marginTop: 'var(--s-3)', whiteSpace: 'pre-wrap' }}>{draft}</p>
          </details>
          <div className="card">
            <RichText blocks={step.reveal} />
          </div>
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------- perspective --- */

export function PerspectiveView({
  step,
  response,
  onRespond,
  revealed,
}: TextStepProps & { step: PerspectiveStep }) {
  const initial = response?.kind === 'map' ? response.values : {}
  const [values, setValues] = useState<Record<string, string>>(initial)

  const filled = step.fields.filter((field) => (values[field.key] ?? '').trim().length > 2).length
  const ready = filled >= Math.min(3, step.fields.length)

  return (
    <div className="stack stack--loose">
      <div className="card card--gold">
        <p className="kicker">Become</p>
        <p className="title" style={{ marginTop: 'var(--s-2)' }}>
          {step.person}
        </p>
        <p style={{ marginTop: 'var(--s-3)' }}>{step.setup}</p>
      </div>

      {step.fields.map((field) => (
        <div className="field" key={field.key}>
          <label className="field__label" htmlFor={`persp-${field.key}`}>
            {field.label}
          </label>
          <p className="field__hint">{field.prompt}</p>
          <textarea
            id={`persp-${field.key}`}
            className="textarea"
            style={{ minHeight: '5rem' }}
            value={values[field.key] ?? ''}
            onChange={(event) => setValues({ ...values, [field.key]: event.target.value })}
            disabled={revealed}
          />
        </div>
      ))}

      {!revealed ? (
        <>
          <button
            type="button"
            className="btn btn--primary btn--block"
            disabled={!ready}
            onClick={() => onRespond({ kind: 'map', values, updatedAt: now() })}
          >
            Save and compare
          </button>
          {!ready ? (
            <p className="small faint" style={{ textAlign: 'center' }}>
              Answer at least three of these before comparing.
            </p>
          ) : null}
        </>
      ) : (
        <div className="card">
          <p className="kicker" style={{ marginBottom: 'var(--s-3)' }}>
            One reconstruction
          </p>
          <RichText blocks={step.reveal} />
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------- wise answer --- */

export function WiseAnswerView({
  step,
  response,
  onRespond,
  revealed,
  voiceEnabled = false,
}: TextStepProps & { step: WiseAnswerStep }) {
  const [draft, setDraft] = useState(() => textValue(response))
  const [prompts, setPrompts] = useState<string[] | null>(null)

  return (
    <div className="stack stack--loose">
      <div className="card card--gold stack">
        <p className="kicker">The brief</p>
        <p className="lede">{step.brief}</p>
      </div>

      <div className="stack stack--tight">
        <p className="eyebrow">Who you are speaking to</p>
        <p className="small">{step.audience}</p>
      </div>

      {step.constraints?.length ? (
        <div className="stack stack--tight">
          <p className="eyebrow">Constraints</p>
          <ul className="rich" style={{ paddingLeft: '1.15em' }}>
            {step.constraints.map((constraint, index) => (
              <li key={index} className="small">
                {constraint}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="stack stack--tight">
        <p className="eyebrow">You will be scored against</p>
        <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
          {step.rubric.map((id) => (
            <span className="chip" key={id}>
              {RUBRIC[id].name}
            </span>
          ))}
        </div>
      </div>

      <LongAnswer
        value={draft}
        onChange={setDraft}
        onCommit={() => onRespond({ kind: 'text', value: draft, updatedAt: now() })}
        minWords={step.minWords}
        allowVoice={step.allowVoice}
        voiceEnabled={voiceEnabled}
        committed={revealed}
        commitLabel="Save my answer"
      />

      <div className="card card--quiet stack stack--tight">
        <button
          type="button"
          className="btn btn--plain"
          onClick={async () => {
            const mentor = getMentor()
            const reply = await mentor.respond({
              lessonId: step.id,
              stepId: step.id,
              answer: '',
              rubric: step.rubric,
            })
            setPrompts(reply.questions)
          }}
        >
          Stuck? Show three questions to ask yourself
        </button>
        {prompts ? (
          <>
            <ul className="rich" style={{ paddingLeft: '1.15em' }}>
              {prompts.map((question, index) => (
                <li key={index} className="small">
                  {question}
                </li>
              ))}
            </ul>
            <p className="small faint">
              These were written in advance for this step. Nothing you typed was read or sent
              anywhere — Wisdom has no server.
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------- revision --- */

export function RevisionView({
  step,
  response,
  onRespond,
  revealed,
  originalAnswer,
}: TextStepProps & { step: RevisionStep; originalAnswer?: string }) {
  const [draft, setDraft] = useState(() => textValue(response) || (originalAnswer ?? ''))

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      {originalAnswer ? (
        <details className="card card--quiet">
          <summary className="ui small" style={{ cursor: 'pointer', color: 'var(--c-gold)' }}>
            Show your first version
          </summary>
          <p style={{ marginTop: 'var(--s-3)', whiteSpace: 'pre-wrap' }}>{originalAnswer}</p>
        </details>
      ) : null}

      <LongAnswer
        value={draft}
        onChange={setDraft}
        onCommit={() => onRespond({ kind: 'text', value: draft, updatedAt: now() })}
        minWords={60}
        committed={revealed}
        commitLabel="Save the revision"
      />

      {revealed ? (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Both versions are in your journal, side by side.
        </p>
      ) : null}
    </div>
  )
}

/* ----------------------------------------------------------- self-assess --- */

export function SelfAssessView({
  step,
  response,
  onRespond,
  revealed,
  answer,
}: TextStepProps & { step: SelfAssessStep; answer?: string }) {
  const initial = response?.kind === 'ratings' ? response.values : {}
  const [ratings, setRatings] = useState<Record<string, number>>(initial)
  const complete = step.rubric.every((id) => ratings[id])

  return (
    <div className="stack stack--loose">
      <p className="small muted">
        You score this, not the app. Judgement of this kind cannot be automated honestly, and
        pretending otherwise would teach the opposite of what the rubric measures.
      </p>

      {answer ? (
        <details className="card card--quiet">
          <summary className="ui small" style={{ cursor: 'pointer', color: 'var(--c-gold)' }}>
            Show your answer while you score
          </summary>
          <p style={{ marginTop: 'var(--s-3)', whiteSpace: 'pre-wrap' }}>{answer}</p>
        </details>
      ) : null}

      <div className="rubric">
        {step.rubric.map((id) => {
          const dimension = RUBRIC[id]
          const current = ratings[id]
          return (
            <fieldset className="rubric__row" key={id} style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ padding: 0 }}>
                <span className="field__label">{dimension.name}</span>
              </legend>
              <p className="field__hint">{dimension.question}</p>
              <div className="rubric__scale">
                {RUBRIC_SCALE_LABELS.map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    className="rubric__opt"
                    aria-pressed={current === index + 1}
                    onClick={() => setRatings({ ...ratings, [id]: index + 1 })}
                    disabled={revealed}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {current ? <p className="small muted">{dimension.levels[current - 1]}</p> : null}
            </fieldset>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          disabled={!complete}
          onClick={() => onRespond({ kind: 'ratings', values: ratings, updatedAt: now() })}
        >
          Save my scores
        </button>
      ) : (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Saved. These appear on your Progress screen as a record of your own judgement over time.
        </p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------- practice --- */

export function PracticeView({
  step,
  onRespond,
  revealed,
}: TextStepProps & { step: PracticeStep }) {
  return (
    <div className="stack stack--loose">
      <div className="card card--gold stack">
        <p className="kicker">{step.window}</p>
        <p className="lede">{step.assignment}</p>
      </div>

      {step.cautions?.length ? (
        <div className="stack stack--tight">
          <p className="eyebrow">Before you do it</p>
          <ul className="rich" style={{ paddingLeft: '1.15em' }}>
            {step.cautions.map((caution, index) => (
              <li key={index} className="small">
                {caution}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="card card--quiet">
        <p className="eyebrow">When you report back</p>
        <p className="small" style={{ marginTop: 'var(--s-2)' }}>
          {step.checkIn}
        </p>
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          onClick={() => onRespond({ kind: 'ack', updatedAt: now() })}
        >
          I commit to this
        </button>
      ) : (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Added to your Journal under Practices. Nobody will chase you about it.
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------ reflection --- */

export function ReflectionView({
  step,
  response,
  onRespond,
  revealed,
}: TextStepProps & { step: ReflectionStep }) {
  const [draft, setDraft] = useState(() => textValue(response))

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>

      <LongAnswer
        value={draft}
        onChange={setDraft}
        onCommit={() => onRespond({ kind: 'text', value: draft, updatedAt: now() })}
        minWords={25}
        committed={revealed}
        commitLabel="Keep this"
        placeholder="This is saved to your journal. Write as little or as much as you want."
      />

      {step.prayer ? (
        <div className="card card--gold">
          <p className="kicker">Prayer prompt</p>
          <p style={{ marginTop: 'var(--s-3)' }}>{step.prayer}</p>
        </div>
      ) : null}
    </div>
  )
}
