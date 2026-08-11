/**
 * One renderer per segment kind. Each receives its segment plus what it
 * needs from the controller, and stays deliberately quiet: one idea on
 * screen, generous space, a single clear way forward.
 */
import { useState } from 'react'
import { PassageText } from '../../components/PassageText'
import { commentaryById, passageById, prayerById, stretchById } from '../../data/registry'
import { formatClock } from '../../lib/time'
import type { RoutineSegment, UserPreferences } from '../../schemas'
import { BreathingGuide } from './Breathing'
import { StretchFigure } from './StretchFigure'

function MissingContent({ id }: { id: string }) {
  return (
    <div className="banner" role="alert">
      This part of the routine referenced content that could not be found ({id}). You can skip ahead
      — the rest of the session is unaffected.
    </div>
  )
}

export function TimerReadout({ remainingMs }: { remainingMs: number | null }) {
  if (remainingMs == null) return null
  return (
    <p className="player-clock" aria-live="off">
      {formatClock(remainingMs / 1000)}
    </p>
  )
}

export function ArrivalView({
  segment,
  prefs,
  active,
}: {
  segment: Extract<RoutineSegment, { kind: 'arrival' }>
  prefs: UserPreferences
  active: boolean
}) {
  return (
    <div className="stack--loose stack">
      {segment.breathing ? (
        <BreathingGuide breathing={prefs.breathing} motion={prefs.motion} active={active} />
      ) : null}
      <div className="prayer-text stack">
        {segment.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="footnote" style={{ textAlign: 'center' }}>
        The breathing circle is only a help for settling the body so your attention can rest on God.
        He is the point, not the breath.
      </p>
    </div>
  )
}

export function WordView({ segment }: { segment: Extract<RoutineSegment, { kind: 'word' }> }) {
  const passage = passageById.get(segment.passageId)
  if (!passage) return <MissingContent id={segment.passageId} />
  return (
    <div className="stack stack--loose">
      {segment.lead ? (
        <p style={{ textAlign: 'center', color: 'var(--c-ink-soft)' }}>{segment.lead}</p>
      ) : null}
      <PassageText passage={passage} />
    </div>
  )
}

export function PrayerView({ segment }: { segment: Extract<RoutineSegment, { kind: 'prayer' }> }) {
  const prayer = prayerById.get(segment.prayerId)
  if (!prayer) return <MissingContent id={segment.prayerId} />
  return (
    <div className="prayer-text">
      {prayer.movements.map((movement, index) => (
        <div className="prayer-move" key={index}>
          {movement.label ? <p className="move-label">{movement.label}</p> : null}
          {movement.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
      {prayer.endsWithAmen ? <p className="amen">Amen.</p> : null}
    </div>
  )
}

export function YourPrayerView({
  segment,
  remainingMs,
}: {
  segment: Extract<RoutineSegment, { kind: 'your-prayer' }>
  remainingMs: number | null
}) {
  return (
    <div className="stack stack--loose" style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--c-ink-soft)' }}>
        This time is yours. Speak aloud or pray inwardly — nothing is recorded, here or anywhere.
      </p>
      <TimerReadout remainingMs={remainingMs} />
      {segment.prompts.length > 0 ? (
        <div className="stack--tight stack">
          {segment.prompts.map((prompt) => (
            <p className="footnote" key={prompt} style={{ fontSize: '0.92rem' }}>
              {prompt}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function SilenceView({
  segment,
  remainingMs,
  prefs,
  active,
}: {
  segment: Extract<RoutineSegment, { kind: 'silence' }>
  remainingMs: number | null
  prefs: UserPreferences
  active: boolean
}) {
  return (
    <div className="stack stack--loose" style={{ textAlign: 'center' }}>
      {segment.breathing ? (
        <BreathingGuide breathing={prefs.breathing} motion={prefs.motion} active={active} />
      ) : null}
      <TimerReadout remainingMs={remainingMs} />
      <p className="footnote">Nothing is required of you here. Rest in His presence.</p>
    </div>
  )
}

export function ScriptureView({
  segment,
}: {
  segment: Extract<RoutineSegment, { kind: 'scripture' }>
}) {
  const passage = passageById.get(segment.passageId)
  const commentary = segment.commentaryId ? commentaryById.get(segment.commentaryId) : undefined
  const [open, setOpen] = useState(false)
  if (!passage) return <MissingContent id={segment.passageId} />
  return (
    <div className="stack stack--loose">
      <PassageText passage={passage} />
      {commentary ? (
        <div>
          <button
            type="button"
            className="btn btn--quiet btn--sm"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide notes' : 'Read the notes on this passage'}
          </button>
          {open ? (
            <div className="card card--flush stack" style={{ marginTop: 'var(--s-3)' }}>
              <h3 style={{ fontSize: '1rem' }}>Themes</h3>
              {commentary.themes.map((theme) => (
                <p key={theme.title} style={{ fontSize: '0.92rem', color: 'var(--c-ink-soft)' }}>
                  <strong>{theme.title}.</strong> {theme.body}
                </p>
              ))}
              <p className="footnote">
                Full context, sources, and reflection questions are in the Scripture tab.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export function ReviewView({ segment }: { segment: Extract<RoutineSegment, { kind: 'review' }> }) {
  return (
    <div className="stack stack--loose">
      <p style={{ color: 'var(--c-ink-soft)' }}>{segment.lead}</p>
      <ol className="stack list-plain" style={{ counterReset: 'none' }}>
        {segment.prompts.map((prompt) => (
          <li className="prayer-text" key={prompt} style={{ fontSize: '1.08rem' }}>
            {prompt}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function StretchView({
  segment,
}: {
  segment: Extract<RoutineSegment, { kind: 'stretch' }>
}) {
  const items = segment.stretchIds.flatMap((id) => {
    const stretch = stretchById.get(id)
    return stretch ? [stretch] : []
  })
  if (items.length === 0) return <MissingContent id={segment.stretchIds.join(', ')} />
  return (
    <div className="stack stack--loose">
      {items.map((stretch) => (
        <div className="card card--flush" key={stretch.id} style={{ textAlign: 'center' }}>
          <StretchFigure figure={stretch.figure} />
          <span className="visually-hidden">{stretch.figureDescription}</span>
          <h3 style={{ fontSize: '1.05rem' }}>{stretch.name}</h3>
          <p style={{ color: 'var(--c-ink-soft)', fontSize: '0.95rem', marginTop: 'var(--s-2)' }}>
            {stretch.instruction}
          </p>
          <p className="footnote" style={{ marginTop: 'var(--s-2)' }}>
            About {stretch.seconds} seconds
            {stretch.posture === 'either' ? ' · seated or standing' : ` · ${stretch.posture}`}
          </p>
        </div>
      ))}
      <p className="footnote" style={{ textAlign: 'center' }}>
        Stop if anything hurts. If you have an injury, pain, balance concerns, or a condition that
        limits movement (including pregnancy), choose only what is safe for you — or simply skip
        this. When in doubt, ask a qualified professional.
      </p>
    </div>
  )
}
