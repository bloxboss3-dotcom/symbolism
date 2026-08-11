/**
 * The breathing guide: a softly expanding circle with optional text cues.
 * Breathing here is only a way to settle the body and attend to God — the
 * app explains that once, in the arrival segment. Timing is adjustable in
 * Settings and there is no breath-holding; the pause sits at the bottom of
 * the exhale. Reduced motion (or the "still" style) renders a static circle.
 */
import { useEffect, useMemo, useState } from 'react'
import type { UserPreferences } from '../../schemas'

type Phase = 'in' | 'out' | 'rest'

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function BreathingGuide({
  breathing,
  motion,
  active,
}: {
  breathing: UserPreferences['breathing']
  motion: UserPreferences['motion']
  active: boolean
}) {
  const still =
    breathing.style === 'still' || motion === 'reduced' || prefersReducedMotion() || !active

  const [phase, setPhase] = useState<Phase>('in')

  const durations = useMemo(
    () => ({
      in: breathing.inSeconds * 1000,
      out: breathing.outSeconds * 1000,
      rest: breathing.restSeconds * 1000,
    }),
    [breathing.inSeconds, breathing.outSeconds, breathing.restSeconds],
  )

  useEffect(() => {
    if (still) return
    let cancelled = false
    let timer = 0
    const step = (current: Phase) => {
      if (cancelled) return
      setPhase(current)
      const next: Phase =
        current === 'in' ? 'out' : current === 'out' && durations.rest > 0 ? 'rest' : 'in'
      timer = window.setTimeout(() => step(next), durations[current])
    }
    step('in')
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [still, durations])

  const cue = still
    ? 'Be still'
    : phase === 'in'
      ? 'Breathe in'
      : phase === 'out'
        ? 'Breathe out'
        : 'Rest'
  const scale = still ? 1 : phase === 'in' ? 1.26 : 0.88
  const ms = still ? 0 : durations[phase]

  return (
    <div className="breath" role="img" aria-label="A slowly breathing circle to help you settle">
      <span className="breath-ring" />
      <div
        className="breath-circle"
        style={
          {
            '--breath-scale': scale,
            '--breath-ms': `${ms}ms`,
          } as React.CSSProperties
        }
      />
      {breathing.textCues ? (
        <span className="breath-cue" aria-live="off">
          {cue}
        </span>
      ) : null}
    </div>
  )
}
