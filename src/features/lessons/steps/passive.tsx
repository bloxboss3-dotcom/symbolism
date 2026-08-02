import { RichText } from '../../../components/RichText'
import { Rule } from '../../../components/ui'
import { conceptTitle } from '../../../data/library'
import type {
  EncounterStep,
  ExemplarStep,
  LensCard,
  LensesStep,
  RetrievalStep,
  TeachingStep,
} from '../../../types/content'

const LENS_LABEL: Record<LensCard['lens'], string> = {
  biblical: 'Biblical',
  psychological: 'Psychological',
  philosophical: 'Philosophical',
  mythological: 'Mythological',
  literary: 'Literary',
  historical: 'Historical',
  leadership: 'Leadership',
  pastoral: 'Pastoral',
}

const CLAIM_LABEL: Record<LensCard['claimKind'], string> = {
  scripture: 'Scripture',
  'historic-christian': 'Historic Christian teaching',
  psychology: 'Psychological research',
  philosophy: 'Philosophical argument',
  history: 'Historical claim',
  literary: 'Literary reading',
  mythology: 'Myth and story',
  leadership: 'Leadership research',
  inference: "The writer's inference",
}

const LENS_TONE: Record<LensCard['lens'], string> = {
  biblical: 'gold',
  pastoral: 'gold',
  psychological: 'lapis',
  leadership: 'lapis',
  philosophical: 'verdigris',
  historical: 'verdigris',
  literary: '',
  mythological: '',
}

export function EncounterView({ step }: { step: EncounterStep }) {
  return (
    <div className="stack">
      {step.kicker ? <p className="kicker">{step.kicker}</p> : null}
      <RichText blocks={step.body} illuminated />
      {step.source ? (
        <>
          <Rule />
          <p className="small faint">{step.source}</p>
        </>
      ) : null}
    </div>
  )
}

export function TeachingView({ step }: { step: TeachingStep }) {
  return <RichText blocks={step.body} />
}

export function LensesView({ step }: { step: LensesStep }) {
  return (
    <div className="stack stack--loose">
      {step.intro ? <p className="lede">{step.intro}</p> : null}
      {step.cards.map((card, index) => (
        <article className="lens" key={index}>
          <header className="lens__head">
            <span
              className={`chip ${LENS_TONE[card.lens] ? `chip--${LENS_TONE[card.lens]}` : ''}`.trim()}
            >
              {LENS_LABEL[card.lens]}
            </span>
            <span className="lens__kind muted">{CLAIM_LABEL[card.claimKind]}</span>
          </header>
          <div className="lens__body stack">
            <h3 className="card__title">{card.heading}</h3>
            <RichText blocks={card.body} />
            {card.tension ? (
              <p className="lens__tension">
                <strong style={{ color: 'var(--c-gold)' }}>Where this is contested: </strong>
                {card.tension}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}

export function ExemplarView({
  step,
  learnerAnswer,
}: {
  step: ExemplarStep
  learnerAnswer?: string
}) {
  return (
    <div className="stack stack--loose">
      {learnerAnswer ? (
        <details className="card card--quiet">
          <summary className="ui small" style={{ cursor: 'pointer', color: 'var(--c-gold)' }}>
            Show what you wrote
          </summary>
          <p style={{ marginTop: 'var(--s-3)', whiteSpace: 'pre-wrap' }}>{learnerAnswer}</p>
        </details>
      ) : null}

      <div className="card card--gold">
        <RichText blocks={step.body} />
      </div>

      <div className="stack">
        <p className="kicker">Why it works</p>
        {step.commentary.map((note, index) => (
          <div className="card card--quiet" key={index}>
            <p className="ui small" style={{ color: 'var(--c-gold)', fontWeight: 700 }}>
              {note.label}
            </p>
            <p className="small" style={{ marginTop: 'var(--s-2)' }}>
              {note.text}
            </p>
          </div>
        ))}
      </div>

      {step.limits ? (
        <aside className="callout callout--caution">
          <p className="callout__title">Where this exemplar is weak</p>
          <p>{step.limits}</p>
        </aside>
      ) : null}
    </div>
  )
}

export function RetrievalView({ step }: { step: RetrievalStep }) {
  return (
    <div className="stack">
      {step.intro ? <p className="lede">{step.intro}</p> : null}

      <div className="stack stack--tight">
        <p className="kicker">Concepts</p>
        <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
          {step.conceptIds.map((id) => (
            <span className="chip chip--gold" key={id}>
              {conceptTitle(id)}
            </span>
          ))}
        </div>
      </div>

      <div className="stack stack--tight">
        <p className="kicker">Passages</p>
        <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
          {step.passageRefs.map((ref) => (
            <span className="chip" key={ref}>
              {ref}
            </span>
          ))}
        </div>
      </div>

      <p className="small muted">
        These are scheduled at widening intervals. You will meet them again in later lessons and in
        transfer trials, in situations that look nothing like this one.
      </p>
    </div>
  )
}
