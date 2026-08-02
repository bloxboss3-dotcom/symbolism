import { useState } from 'react'
import { IconCheck, IconDown, IconUp } from '../../../components/Icons'
import { RichText } from '../../../components/RichText'
import { rankAgreement } from '../../../lib/scoring'
import type {
  CertaintyStep,
  CertaintyTier,
  ConnectionStep,
  DecisionStep,
  EvidenceStep,
  ObservationStep,
  QuizStep,
  RankingStep,
} from '../../../types/content'
import type { StepResponse } from '../../../types/progress'

const now = () => new Date().toISOString()

interface ChoiceProps {
  response: StepResponse | undefined
  onRespond: (response: StepResponse) => void
  revealed: boolean
}

/* ----------------------------------------------------------- observation --- */

export function ObservationView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: ObservationStep }) {
  const initial = response?.kind === 'multi' ? response.values : []
  const [selected, setSelected] = useState<string[]>(initial)

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      <div className="list">
        {step.options.map((option) => {
          const chosen = selected.includes(option.id)
          return (
            <div key={option.id}>
              <button
                type="button"
                className="option"
                aria-pressed={chosen}
                onClick={() => !revealed && toggle(option.id)}
                disabled={revealed}
              >
                <span className="option__mark" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>{option.text}</span>
              </button>
              {revealed ? (
                <p
                  className="option__feedback"
                  style={{
                    borderTop: 0,
                    paddingLeft: 'var(--s-4)',
                    color: chosen ? 'var(--c-text-soft)' : 'var(--c-text-muted)',
                  }}
                >
                  {chosen ? '' : 'Missed — '}
                  {option.significance}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          disabled={selected.length === 0}
          onClick={() => onRespond({ kind: 'multi', values: selected, updatedAt: now() })}
        >
          Show what each one signals
        </button>
      ) : null}

      {revealed && step.afterword ? <RichText blocks={step.afterword} /> : null}
    </div>
  )
}

/* ------------------------------------------------------------- certainty --- */

const TIERS: { id: CertaintyTier; label: string }[] = [
  { id: 'stated', label: 'Stated' },
  { id: 'implied', label: 'Implied' },
  { id: 'reasonable', label: 'Reasonable' },
  { id: 'possible', label: 'Possible' },
  { id: 'unsupported', label: 'Unsupported' },
]

export function CertaintyView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: CertaintyStep }) {
  const initial = response?.kind === 'map' ? response.values : {}
  const [values, setValues] = useState<Record<string, string>>(initial)
  const complete = step.claims.every((claim) => values[claim.id])

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      <div className="stack stack--loose">
        {step.claims.map((claim) => {
          const given = values[claim.id]
          return (
            <div className="stack stack--tight" key={claim.id}>
              <p>{claim.text}</p>
              <div className="ladder__rung" role="group" aria-label="How well supported is this?">
                {TIERS.map((tier) => {
                  const chosen = given === tier.id
                  const state = revealed
                    ? tier.id === claim.tier
                      ? 'right'
                      : chosen
                        ? 'wrong'
                        : undefined
                    : undefined
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      className="tierbtn"
                      aria-pressed={chosen}
                      data-state={state}
                      disabled={revealed}
                      onClick={() => setValues({ ...values, [claim.id]: tier.id })}
                    >
                      {tier.label}
                    </button>
                  )
                })}
              </div>
              {revealed ? (
                <p className="small muted">
                  <strong style={{ color: 'var(--c-gold)' }}>
                    {TIERS.find((tier) => tier.id === claim.tier)?.label}.{' '}
                  </strong>
                  {claim.why}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          disabled={!complete}
          onClick={() => onRespond({ kind: 'map', values, updatedAt: now() })}
        >
          Check my sorting
        </button>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ quiz --- */

export function QuizView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: QuizStep }) {
  const chosen = response?.kind === 'choice' ? response.value : null

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>

      <div className="list">
        {step.options.map((option) => {
          const isChosen = chosen === option.id
          const state = revealed
            ? option.correct
              ? 'correct'
              : isChosen
                ? 'incorrect'
                : undefined
            : undefined
          return (
            <div key={option.id}>
              <button
                type="button"
                className="option"
                data-selected={isChosen}
                data-state={state}
                disabled={revealed}
                onClick={() => onRespond({ kind: 'choice', value: option.id, updatedAt: now() })}
              >
                <span className="option__mark option__mark--round" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>{option.text}</span>
              </button>
              {revealed && (isChosen || option.correct) ? (
                <p className="option__feedback" style={{ borderTop: 0, paddingLeft: 'var(--s-4)' }}>
                  {option.feedback}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      {revealed && step.explanation ? (
        <div className="callout callout--insight">
          <p>{step.explanation}</p>
        </div>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------- evidence --- */

export function EvidenceView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: EvidenceStep }) {
  const initial = response?.kind === 'multi' ? response.values : []
  const [selected, setSelected] = useState<string[]>(initial)

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )

  return (
    <div className="stack stack--loose">
      <div className="card card--gold">
        <p>{step.claim}</p>
      </div>
      <p className="lede">{step.prompt}</p>

      <div className="list">
        {step.options.map((option) => {
          const chosen = selected.includes(option.id)
          const state = revealed
            ? option.supports === chosen
              ? 'correct'
              : 'incorrect'
            : undefined
          return (
            <div key={option.id}>
              <button
                type="button"
                className="option"
                aria-pressed={chosen}
                data-state={state}
                disabled={revealed}
                onClick={() => toggle(option.id)}
              >
                <span className="option__mark" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>{option.text}</span>
              </button>
              {revealed ? (
                <p className="option__feedback" style={{ borderTop: 0, paddingLeft: 'var(--s-4)' }}>
                  <strong
                    style={{ color: option.supports ? 'var(--c-verdigris)' : 'var(--c-gold)' }}
                  >
                    {option.supports ? 'Supports. ' : 'Does not support. '}
                  </strong>
                  {option.why}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          disabled={selected.length === 0}
          onClick={() => onRespond({ kind: 'multi', values: selected, updatedAt: now() })}
        >
          Check my selection
        </button>
      ) : null}
    </div>
  )
}

/* --------------------------------------------------------------- ranking --- */

export function RankingView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: RankingStep }) {
  const initial =
    response?.kind === 'order' && response.values.length === step.items.length
      ? response.values
      : step.items.map((item) => item.id)
  const [order, setOrder] = useState<string[]>(initial)

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction
    if (target < 0 || target >= order.length) return
    const next = [...order]
    ;[next[index], next[target]] = [next[target], next[index]]
    setOrder(next)
  }

  const agreement = revealed ? rankAgreement(order, step.idealOrder) : 0
  const byId = new Map(step.items.map((item) => [item.id, item]))

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>
      {step.helper ? <p className="small muted">{step.helper}</p> : null}

      <ol className="rank" style={{ listStyle: 'none', padding: 0 }}>
        {order.map((id, index) => (
          <li className="rank__item" key={id}>
            <span className="rank__pos numeral">{index + 1}</span>
            <span className="rank__text">{byId.get(id)?.text}</span>
            {!revealed ? (
              <span className="rank__moves">
                <button
                  type="button"
                  className="rank__move"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label={`Move up: ${byId.get(id)?.text ?? ''}`}
                >
                  <IconUp />
                </button>
                <button
                  type="button"
                  className="rank__move"
                  onClick={() => move(index, 1)}
                  disabled={index === order.length - 1}
                  aria-label={`Move down: ${byId.get(id)?.text ?? ''}`}
                >
                  <IconDown />
                </button>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          onClick={() => onRespond({ kind: 'order', values: order, updatedAt: now() })}
        >
          Lock in my order
        </button>
      ) : (
        <div className="stack stack--loose">
          <div className="card card--quiet">
            <p className="small">
              Your ordering agrees with the one argued for below by about{' '}
              <strong style={{ color: 'var(--c-gold)' }}>{Math.round(agreement * 100)}%</strong>.
              There is no single correct sequence — the reasoning matters more than the match.
            </p>
          </div>
          <ol className="rank" style={{ listStyle: 'none', padding: 0 }}>
            {step.idealOrder.map((id, index) => (
              <li className="rank__item" key={id}>
                <span className="rank__pos numeral">{index + 1}</span>
                <span className="rank__text">{byId.get(id)?.text}</span>
              </li>
            ))}
          </ol>
          <RichText blocks={step.rationale} />
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------- decision --- */

export function DecisionView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: DecisionStep }) {
  const chosen = response?.kind === 'choice' ? response.value : null

  return (
    <div className="stack stack--loose">
      <div className="card card--gold">
        <p>{step.situation}</p>
      </div>
      <p className="lede">{step.prompt}</p>

      <div className="list">
        {step.options.map((option) => {
          const isChosen = chosen === option.id
          return (
            <div key={option.id}>
              <button
                type="button"
                className="option"
                data-selected={isChosen}
                disabled={revealed}
                onClick={() => onRespond({ kind: 'choice', value: option.id, updatedAt: now() })}
              >
                <span className="option__mark option__mark--round" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                <span>{option.text}</span>
              </button>

              {revealed ? (
                <div
                  className="stack stack--tight option__feedback"
                  style={{
                    borderTop: 0,
                    paddingLeft: 'var(--s-4)',
                    opacity: isChosen ? 1 : 0.82,
                  }}
                >
                  <span className={`verdict verdict--${option.verdict}`}>
                    {option.verdict}
                    {isChosen ? ' · your choice' : ''}
                  </span>
                  <p className="small">{option.consequence}</p>
                  <p className="small muted">
                    <strong>What it costs: </strong>
                    {option.cost}
                  </p>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>

      {revealed && step.afterword ? <RichText blocks={step.afterword} /> : null}
    </div>
  )
}

/* ------------------------------------------------------------ connection --- */

export function ConnectionView({
  step,
  response,
  onRespond,
  revealed,
}: ChoiceProps & { step: ConnectionStep }) {
  const initial = response?.kind === 'map' ? response.values : {}
  const [values, setValues] = useState<Record<string, string>>(initial)
  const complete = step.left.every((item) => values[item.id])

  return (
    <div className="stack stack--loose">
      <p className="lede">{step.prompt}</p>

      <div className="stack stack--loose">
        {step.left.map((item) => {
          const pair = step.pairs.find((candidate) => candidate.leftId === item.id)
          const given = values[item.id]
          return (
            <div className="stack stack--tight" key={item.id}>
              <p style={{ fontWeight: 600 }}>{item.label}</p>
              <label className="visually-hidden" htmlFor={`conn-${item.id}`}>
                Match for {item.label}
              </label>
              <select
                id={`conn-${item.id}`}
                className="input"
                value={given ?? ''}
                disabled={revealed}
                onChange={(event) => setValues({ ...values, [item.id]: event.target.value })}
              >
                <option value="">Choose the moment that shows it…</option>
                {step.right.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              {revealed && pair ? (
                <p className="small muted">
                  <strong
                    style={{
                      color: given === pair.rightId ? 'var(--c-verdigris)' : 'var(--c-gold)',
                    }}
                  >
                    {given === pair.rightId ? 'Found. ' : 'The pair was: '}
                  </strong>
                  {given === pair.rightId
                    ? pair.why
                    : `${step.right.find((r) => r.id === pair.rightId)?.label} — ${pair.why}`}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      {!revealed ? (
        <button
          type="button"
          className="btn btn--primary btn--block"
          disabled={!complete}
          onClick={() => onRespond({ kind: 'map', values, updatedAt: now() })}
        >
          Check my connections
        </button>
      ) : (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Every connection you found is kept in your collection.
        </p>
      )}
    </div>
  )
}
