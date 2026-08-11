/**
 * The guided session player. One room, one segment at a time: begin (or
 * resume), move through the routine, and end in quiet. The palette follows
 * the routine's hour via `data-ambient` regardless of app theme.
 */
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { BackIcon, CloseIcon, PauseIcon, PlayIcon } from '../components/Icons'
import { Segmented } from '../components/ui'
import { routineById } from '../data/registry'
import { audioEngine } from '../lib/audio'
import { formatClock } from '../lib/time'
import {
  ArrivalView,
  PrayerView,
  ReviewView,
  ScriptureView,
  SilenceView,
  StretchView,
  WordView,
  YourPrayerView,
} from '../features/session/SegmentViews'
import { useSessionController } from '../features/session/useSessionController'
import { useAppState } from '../features/state/useAppState'
import {
  ROUTINE_MINUTE_CHOICES,
  type Routine,
  type RoutineSegment,
  type UserPreferences,
} from '../schemas'

export function SessionPage() {
  const { routineId } = useParams()
  const routine = routineId ? routineById.get(routineId) : undefined
  if (!routine) return <Navigate to="/" replace />
  return <Player routine={routine} />
}

function Player({ routine }: { routine: Routine }) {
  const navigate = useNavigate()
  const { state, dispatch } = useAppState()
  const prefs = state.preferences
  const controller = useSessionController(routine)
  const { session, planned, current, remainingMs } = controller
  const [leaveOpen, setLeaveOpen] = useState(false)

  // The routine's hour paints the whole viewport.
  useEffect(() => {
    document.documentElement.dataset.ambient = routine.timeOfDay
    return () => {
      delete document.documentElement.dataset.ambient
    }
  }, [routine.timeOfDay])

  const running = session?.status === 'running'

  // Ambience follows the running state, fading rather than cutting.
  useEffect(() => {
    if (running && prefs.audio.ambience !== 'off' && audioEngine.unlocked) {
      audioEngine.setAmbience(prefs.audio.ambience)
    } else {
      audioEngine.setAmbience('off')
    }
    return () => audioEngine.stop()
  }, [running, prefs.audio.ambience])

  useEffect(() => {
    audioEngine.setVolumes(prefs.audio.ambienceVolume, prefs.audio.chimeVolume)
  }, [prefs.audio.ambienceVolume, prefs.audio.chimeVolume])

  const totalPlannedMinutes = useMemo(() => {
    const timedMs = planned.reduce((sum, p) => sum + (p.plannedMs ?? 0), 0)
    return Math.round(timedMs / 60000)
  }, [planned])

  /* ------------------------------------------------------------- states ---- */

  if (!session) {
    return (
      <StartScreen
        routine={routine}
        minutes={prefs.routineMinutes}
        timedMinutes={totalPlannedMinutes}
        onMinutes={(m) => dispatch({ type: 'prefs', patch: { routineMinutes: m } })}
        beginLabel="Begin"
        onBegin={async () => {
          await audioEngine.unlock()
          if (prefs.audio.chimeEnabled) audioEngine.chime()
          controller.begin()
        }}
      />
    )
  }

  if (session.status === 'complete') {
    return (
      <div className="player" data-testid="session-done">
        <main className="player-main session-done" id="main">
          <div className="halo" aria-hidden="true" />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>
            {routine.timeOfDay === 'morning' ? 'Go in peace.' : 'Rest well.'}
          </h1>
          <p style={{ color: 'var(--c-ink-soft)', marginTop: 'var(--s-3)' }}>
            {routine.timeOfDay === 'morning'
              ? 'The day is consecrated. Walk through it with Him.'
              : 'The night is entrusted to the One who neither slumbers nor sleeps.'}
          </p>
          <div style={{ marginTop: 'var(--s-6)' }}>
            <Link className="btn btn--primary" to="/">
              Return home
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const paused = session.status === 'paused'
  const isFirst = session.segmentIndex === 0
  const timed = current?.plannedMs != null

  return (
    <div className="player">
      <header className="player-top">
        <button
          type="button"
          className="btn btn--icon btn--quiet"
          aria-label="Leave this session"
          onClick={() => setLeaveOpen(true)}
        >
          <CloseIcon />
        </button>
        <span className="player-title">{routine.title}</span>
        <button
          type="button"
          className="btn btn--icon btn--quiet"
          aria-label={paused ? 'Resume' : 'Pause'}
          onClick={() => controller.send(paused ? 'RESUME' : 'PAUSE')}
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </header>

      <div className="player-beads" aria-hidden="true">
        {planned.map((p, i) => (
          <i
            key={p.segment.id}
            className={
              i < session.segmentIndex ? 'done' : i === session.segmentIndex ? 'now' : undefined
            }
          />
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        {`${current?.segment.title ?? ''}, part ${session.segmentIndex + 1} of ${planned.length}`}
        {paused ? ', paused' : ''}
      </p>

      <main className="player-main" id="main">
        {current ? (
          <div className="segment-body" key={current.segment.id}>
            <p className="segment-kicker">
              Part {session.segmentIndex + 1} of {planned.length}
            </p>
            <h1 className="segment-title">{current.segment.title}</h1>
            {paused ? (
              <div className="stack" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--c-ink-soft)' }}>
                  Paused
                  {timed && remainingMs != null
                    ? ` — ${formatClock(remainingMs / 1000)} remaining`
                    : ''}
                  . Take the time you need.
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => controller.send('RESUME')}
                  >
                    Resume
                  </button>
                </div>
              </div>
            ) : (
              <SegmentBody
                segment={current.segment}
                remainingMs={remainingMs}
                prefs={prefs}
                active={running}
              />
            )}
          </div>
        ) : null}
      </main>

      <footer className="player-controls">
        <button
          type="button"
          className="btn btn--quiet"
          onClick={() => controller.send('BACK')}
          aria-label={isFirst ? 'Restart this part' : 'Go back a part'}
        >
          <BackIcon size={18} />
          {isFirst ? 'Restart part' : 'Back'}
        </button>
        <button
          type="button"
          className="btn btn--primary"
          data-testid="continue"
          onClick={() => controller.send('NEXT')}
        >
          {timed ? 'Continue early' : 'Continue'}
        </button>
      </footer>

      {leaveOpen ? (
        <LeaveDialog
          onStay={() => setLeaveOpen(false)}
          onSaveLeave={() => {
            if (running) controller.send('PAUSE')
            navigate('/')
          }}
          onEnd={() => {
            setLeaveOpen(false)
            controller.send('END_EARLY')
          }}
        />
      ) : null}
    </div>
  )
}

function SegmentBody({
  segment,
  remainingMs,
  prefs,
  active,
}: {
  segment: RoutineSegment
  remainingMs: number | null
  prefs: UserPreferences
  active: boolean
}) {
  switch (segment.kind) {
    case 'arrival':
      return <ArrivalView segment={segment} prefs={prefs} active={active} />
    case 'word':
      return <WordView segment={segment} />
    case 'prayer':
      return <PrayerView segment={segment} />
    case 'your-prayer':
      return <YourPrayerView segment={segment} remainingMs={remainingMs} />
    case 'silence':
      return (
        <SilenceView segment={segment} remainingMs={remainingMs} prefs={prefs} active={active} />
      )
    case 'scripture':
      return <ScriptureView segment={segment} />
    case 'review':
      return <ReviewView segment={segment} />
    case 'stretch':
      return <StretchView segment={segment} />
  }
}

function StartScreen({
  routine,
  minutes,
  timedMinutes,
  beginLabel,
  onMinutes,
  onBegin,
}: {
  routine: Routine
  minutes: (typeof ROUTINE_MINUTE_CHOICES)[number]
  timedMinutes: number
  beginLabel: string
  onMinutes: (m: (typeof ROUTINE_MINUTE_CHOICES)[number]) => void
  onBegin: () => void
}) {
  return (
    <div className="player">
      <header className="player-top">
        <Link className="btn btn--icon btn--quiet" aria-label="Back to home" to="/">
          <CloseIcon />
        </Link>
        <span className="player-title">
          {routine.timeOfDay === 'morning' ? 'Morning' : 'Evening'}
        </span>
        <span style={{ width: 44 }} aria-hidden="true" />
      </header>
      <main className="player-main" id="main" style={{ textAlign: 'center' }}>
        <p className="segment-kicker">{routine.timeOfDay === 'morning' ? 'Dawn' : 'Nightfall'}</p>
        <h1 className="segment-title" style={{ marginBottom: 'var(--s-3)' }}>
          {routine.title}
        </h1>
        <p style={{ color: 'var(--c-ink-soft)', maxWidth: '28rem', margin: '0 auto' }}>
          {routine.subtitle}
        </p>
        <div style={{ margin: 'var(--s-6) auto 0', maxWidth: '24rem' }}>
          <p className="field-label" id="length-label" style={{ marginBottom: 'var(--s-2)' }}>
            How long do you have?
          </p>
          <Segmented
            label="Session length in minutes"
            options={ROUTINE_MINUTE_CHOICES.map((m) => ({ value: m, label: `${m}` }))}
            value={minutes}
            onChange={onMinutes}
          />
          <p className="footnote" style={{ marginTop: 'var(--s-3)' }}>
            Minutes. Prayer and silence adjust to fit; readings are unhurried and self-paced
            {timedMinutes > 0
              ? ` (about ${timedMinutes} timed minute${timedMinutes === 1 ? '' : 's'})`
              : ''}
            .
          </p>
        </div>
        <div style={{ marginTop: 'var(--s-6)' }}>
          <button type="button" className="btn btn--gold" data-testid="begin" onClick={onBegin}>
            {beginLabel}
          </button>
        </div>
      </main>
    </div>
  )
}

function LeaveDialog({
  onStay,
  onSaveLeave,
  onEnd,
}: {
  onStay: () => void
  onSaveLeave: () => void
  onEnd: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="leave-title"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--c-veil)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 50,
        padding: 'var(--s-4)',
      }}
    >
      <div className="card card--raise stack" style={{ maxWidth: '24rem', width: '100%' }}>
        <h2 id="leave-title" style={{ fontSize: '1.2rem' }}>
          Leave this session?
        </h2>
        <p style={{ color: 'var(--c-ink-soft)', fontSize: '0.95rem' }}>
          Your place is saved either way. There is no failure here — prayer can end early and still
          be prayer.
        </p>
        <div className="stack--tight stack">
          <button type="button" className="btn btn--primary btn--block" onClick={onStay}>
            Keep praying
          </button>
          <button type="button" className="btn btn--block" onClick={onSaveLeave}>
            Save my place and leave
          </button>
          <button type="button" className="btn btn--quiet btn--block" onClick={onEnd}>
            End here
          </button>
        </div>
      </div>
    </div>
  )
}
