import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconBack, Mark } from '../components/Icons'
import { Rule } from '../components/ui'
import { TOTAL_CASES, TOTAL_TRIALS } from '../data/cases'
import { TOTAL_LESSONS, TOTAL_MODULES } from '../data/curriculum'
import { LIBRARY } from '../data/library'
import { useWisdom } from '../features/progress/useWisdom'
import { APP_VERSION } from '../lib/storage'
import { speechSupported } from '../lib/speech'
import type { MotionPreference, ThemePreference } from '../types/progress'

const THEMES: { id: ThemePreference; label: string }[] = [
  { id: 'system', label: 'Match device' },
  { id: 'dark', label: 'Ink' },
  { id: 'light', label: 'Parchment' },
]

const MOTION: { id: MotionPreference; label: string }[] = [
  { id: 'system', label: 'Match device' },
  { id: 'reduced', label: 'Reduce motion' },
]

const SCALES = [
  { value: 0.9, label: 'S' },
  { value: 1, label: 'M' },
  { value: 1.1, label: 'L' },
  { value: 1.2, label: 'XL' },
  { value: 1.3, label: 'XXL' },
]

export function SettingsPage() {
  const { state, dispatch } = useWisdom()
  const { settings } = state
  const [showInstall, setShowInstall] = useState(false)

  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia?.('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true)

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
          <p className="kicker">Settings</p>
          <h1 className="title">Reading and this device</h1>
        </div>
      </header>

      <div className="stack stack--loose">
        <section className="card stack">
          <h2 className="card__title">Appearance</h2>

          <div className="stack stack--tight">
            <span className="field__label">Theme</span>
            <div className="row" style={{ gap: 'var(--s-2)' }}>
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className="chip"
                  aria-pressed={settings.theme === theme.id}
                  onClick={() => dispatch({ type: 'update-settings', patch: { theme: theme.id } })}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          <div className="stack stack--tight">
            <span className="field__label">Text size</span>
            <div className="row" style={{ gap: 'var(--s-2)' }}>
              {SCALES.map((scale) => (
                <button
                  key={scale.value}
                  type="button"
                  className="chip"
                  aria-pressed={Math.abs(settings.textScale - scale.value) < 0.01}
                  onClick={() =>
                    dispatch({ type: 'update-settings', patch: { textScale: scale.value } })
                  }
                >
                  {scale.label}
                </button>
              ))}
            </div>
          </div>

          <div className="stack stack--tight">
            <span className="field__label">Motion</span>
            <div className="row" style={{ gap: 'var(--s-2)' }}>
              {MOTION.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className="chip"
                  aria-pressed={settings.motion === option.id}
                  onClick={() =>
                    dispatch({ type: 'update-settings', patch: { motion: option.id } })
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="small faint">
              Wisdom already honours your device&rsquo;s reduce-motion setting. This turns animation
              off regardless.
            </p>
          </div>
        </section>

        <section className="card stack">
          <h2 className="card__title">Dictation</h2>
          <p className="small muted">
            Some long-answer steps can accept speech instead of typing. Support is uneven —{' '}
            {speechSupported()
              ? 'this browser does appear to support it.'
              : 'this browser does not appear to support it, so the option will simply not appear.'}{' '}
            On some devices, audio is sent to the browser vendor for recognition; typing never
            leaves your phone.
          </p>
          <button
            type="button"
            className="chip"
            aria-pressed={settings.voiceEnabled}
            onClick={() =>
              dispatch({ type: 'update-settings', patch: { voiceEnabled: !settings.voiceEnabled } })
            }
          >
            {settings.voiceEnabled ? 'Dictation enabled' : 'Dictation off'}
          </button>
        </section>

        <section className="card stack">
          <h2 className="card__title">Add to your Home Screen</h2>
          {isStandalone ? (
            <p className="small" style={{ color: 'var(--c-verdigris)' }}>
              Already installed — you are running Wisdom as an app.
            </p>
          ) : (
            <>
              <p className="small muted">
                Installed, Wisdom opens full screen, keeps its own place in your lessons, and works
                offline once the curriculum has been cached.
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setShowInstall(!showInstall)}
                aria-expanded={showInstall}
              >
                {showInstall ? 'Hide instructions' : 'Show me how'}
              </button>
            </>
          )}

          {showInstall ? (
            <div className="stack">
              <div className="stack stack--tight">
                <p className="eyebrow">iPhone and iPad</p>
                <ol className="rich" style={{ paddingLeft: '1.15em' }}>
                  <li className="small">
                    Open this page in Safari — other iOS browsers cannot install it.
                  </li>
                  <li className="small">
                    Tap the <strong>Share</strong> button — the square with an arrow pointing up.
                  </li>
                  <li className="small">
                    Scroll down and tap <strong>Add to Home Screen</strong>.
                  </li>
                  <li className="small">
                    Tap <strong>Add</strong>. Wisdom appears on your Home Screen with its own icon.
                  </li>
                </ol>
              </div>
              <div className="stack stack--tight">
                <p className="eyebrow">Android</p>
                <ol className="rich" style={{ paddingLeft: '1.15em' }}>
                  <li className="small">Open the browser menu — the three dots.</li>
                  <li className="small">
                    Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.
                  </li>
                </ol>
              </div>
              <div className="stack stack--tight">
                <p className="eyebrow">Desktop</p>
                <p className="small">
                  In Chrome or Edge, an install icon appears at the right-hand end of the address
                  bar.
                </p>
              </div>
            </div>
          ) : null}
        </section>

        <section className="card stack">
          <h2 className="card__title">Your data</h2>
          <p className="small muted">
            Everything you write is stored in this browser on this device. There is no account, no
            server, and no analytics. Nothing you type — including your journal — is transmitted
            anywhere.
          </p>
          <Link className="btn btn--ghost" to="/journal?tab=data">
            Export, import, or delete
          </Link>
        </section>

        <section className="card stack">
          <h2 className="card__title">Onboarding</h2>
          <p className="small muted">
            Change what you said you wanted wisdom for, your pace, and your background. Your
            progress is not affected.
          </p>
          <Link className="btn btn--ghost" to="/welcome">
            Revisit my answers
          </Link>
        </section>

        <Rule />

        <section className="stack stack--tight" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--c-gold)', display: 'grid', justifyItems: 'center' }}>
            <Mark size={32} />
          </span>
          <p className="kicker">Wisdom</p>
          <p className="small muted">
            See truly. Judge wisely. Speak meaningfully. Live faithfully.
          </p>
          <p className="small faint numeral">
            Version {APP_VERSION} · {TOTAL_MODULES} modules · {TOTAL_LESSONS} lessons ·{' '}
            {TOTAL_CASES} case files · {TOTAL_TRIALS} transfer trials · {LIBRARY.length} library
            entries
          </p>
          <p className="small faint">
            Scripture quoted from the World English Bible, which is in the public domain. Public
            domain literature is described rather than quoted from modern translations. Research
            findings are named with their sources and flagged where they are contested.
          </p>
        </section>
      </div>
    </main>
  )
}
