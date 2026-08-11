/**
 * A calm first arrival: what this is, how long you'd like, and — only if
 * asked for — reminders. Three quiet steps, no accounts, no permissions
 * until explicitly requested.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BRAND } from '../brand'
import { Segmented } from '../components/ui'
import { requestNotifyPermission } from '../lib/notifications'
import { localDay } from '../lib/time'
import { slotTimePassedToday } from '../features/reminders/useReminderEngine'
import { useAppState } from '../features/state/useAppState'
import { ROUTINE_MINUTE_CHOICES } from '../schemas'

export function OnboardingPage() {
  const { state, dispatch } = useAppState()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const prefs = state.preferences

  const finish = () => {
    dispatch({ type: 'prefs', patch: { onboarded: true } })
    navigate('/', { replace: true })
  }

  return (
    <div className="player" data-ambient-page="true">
      <main className="player-main" id="main" style={{ textAlign: 'center', maxWidth: '30rem' }}>
        {step === 0 ? (
          <div className="stack stack--loose">
            <p className="segment-kicker">{BRAND.name}</p>
            <h1 className="segment-title" style={{ marginBottom: 0 }}>
              Be still, and know that I am God.
            </h1>
            <p className="footnote">Psalm 46:10</p>
            <p style={{ color: 'var(--c-ink-soft)' }}>
              A morning and evening rhythm: behold God's glory, pray honestly, read Scripture
              slowly, sit in silence, and stretch gently — then get on with your day.
            </p>
            <p className="footnote">
              Everything you do here stays on this device. No account, no tracking, nothing
              recorded.
            </p>
            <div>
              <button
                type="button"
                className="btn btn--gold"
                data-testid="onboard-next"
                onClick={() => setStep(1)}
              >
                Begin
              </button>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="stack stack--loose">
            <p className="segment-kicker">One question</p>
            <h1 className="segment-title" style={{ marginBottom: 0 }}>
              How long would you like a session to be?
            </h1>
            <p style={{ color: 'var(--c-ink-soft)', fontSize: '0.95rem' }}>
              You can change this any time — even at the start of each session.
            </p>
            <Segmented
              label="Session length in minutes"
              options={ROUTINE_MINUTE_CHOICES.map((m) => ({ value: m, label: `${m}m` }))}
              value={prefs.routineMinutes}
              onChange={(m) => dispatch({ type: 'prefs', patch: { routineMinutes: m } })}
            />
            <div>
              <button
                type="button"
                className="btn btn--gold"
                data-testid="onboard-next-2"
                onClick={() => setStep(2)}
              >
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="stack stack--loose">
            <p className="segment-kicker">Optional</p>
            <h1 className="segment-title" style={{ marginBottom: 0 }}>
              A gentle reminder?
            </h1>
            <p style={{ color: 'var(--c-ink-soft)', fontSize: '0.95rem' }}>
              If you'd like, the app can nudge you at morning and evening. You can set exact times
              in Settings. Choosing this will ask your browser's permission — nothing is requested
              otherwise.
            </p>
            <div className="stack--tight stack">
              <button
                type="button"
                className="btn btn--primary btn--block"
                onClick={async () => {
                  for (const slot of ['morning', 'evening'] as const) {
                    dispatch({ type: 'reminder-slot', slot, patch: { enabled: true } })
                    // A slot whose time already passed today begins tomorrow —
                    // enabling reminders at 3pm must not ring "Morning prayer".
                    if (slotTimePassedToday(state.reminders[slot].time)) {
                      dispatch({
                        type: 'reminder-fired',
                        key: `${localDay()}:${slot}`,
                        value: 'skipped',
                      })
                    }
                  }
                  await requestNotifyPermission()
                  finish()
                }}
              >
                Yes — remind me morning and evening
              </button>
              <button
                type="button"
                className="btn btn--quiet btn--block"
                data-testid="onboard-skip"
                onClick={finish}
              >
                Not now
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  )
}
