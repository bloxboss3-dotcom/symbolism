/**
 * Settings: rhythm, reminders (with the honest platform note), audio,
 * breathing, appearance, Scripture provider, and privacy — including the
 * delete-everything action.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Segmented, SwitchRow, ConfirmDialog } from '../components/ui'
import { audioEngine } from '../lib/audio'
import { notifyCapability, requestNotifyPermission } from '../lib/notifications'
import { clearState } from '../lib/storage'
import { DAY_LABELS } from '../lib/time'
import { useAppState } from '../features/state/useAppState'
import { ROUTINE_MINUTE_CHOICES } from '../schemas'
import { webTranslation } from '../data/registry'

const OVERRIDE_CHOICES = [
  { value: 'auto', label: 'Scale with session length' },
  { value: '60', label: '1 minute' },
  { value: '120', label: '2 minutes' },
  { value: '180', label: '3 minutes' },
  { value: '300', label: '5 minutes' },
  { value: '480', label: '8 minutes' },
  { value: '600', label: '10 minutes' },
] as const

export function SettingsPage() {
  const { state, dispatch } = useAppState()
  const prefs = state.preferences
  const reminders = state.reminders
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [permission, setPermission] = useState(notifyCapability())
  const [previewing, setPreviewing] = useState(false)

  const enableSlot = async (slot: 'morning' | 'evening', enabled: boolean) => {
    dispatch({ type: 'reminder-slot', slot, patch: { enabled } })
    // Permission is requested only here — after the user explicitly asked
    // for a reminder — and never on first load.
    if (enabled && permission === 'default') {
      setPermission(await requestNotifyPermission())
    }
  }

  return (
    <main className="page" id="main">
      <header className="page-head">
        <p className="kicker">Settings</p>
        <h1>Make it yours</h1>
      </header>

      <div className="stack stack--loose">
        {/* ------------------------------------------------------- rhythm ---- */}
        <section className="card stack" aria-labelledby="rhythm-head">
          <h2 id="rhythm-head" style={{ fontSize: '1.05rem' }}>
            Rhythm
          </h2>
          <div className="field">
            <span className="field-label">Session length</span>
            <Segmented
              label="Default session length in minutes"
              options={ROUTINE_MINUTE_CHOICES.map((m) => ({ value: m, label: `${m}m` }))}
              value={prefs.routineMinutes}
              onChange={(m) => dispatch({ type: 'prefs', patch: { routineMinutes: m } })}
            />
          </div>
          <label className="field">
            <span className="field-label">Silence</span>
            <select
              value={
                prefs.silenceSecondsOverride === null
                  ? 'auto'
                  : String(prefs.silenceSecondsOverride)
              }
              onChange={(event) =>
                dispatch({
                  type: 'prefs',
                  patch: {
                    silenceSecondsOverride:
                      event.target.value === 'auto' ? null : Number(event.target.value),
                  },
                })
              }
            >
              {OVERRIDE_CHOICES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field-label">Your prayer</span>
            <select
              value={
                prefs.prayerSecondsOverride === null ? 'auto' : String(prefs.prayerSecondsOverride)
              }
              onChange={(event) =>
                dispatch({
                  type: 'prefs',
                  patch: {
                    prayerSecondsOverride:
                      event.target.value === 'auto' ? null : Number(event.target.value),
                  },
                })
              }
            >
              {OVERRIDE_CHOICES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </section>

        {/* ---------------------------------------------------- reminders ---- */}
        <section className="card stack" aria-labelledby="reminders-head">
          <h2 id="reminders-head" style={{ fontSize: '1.05rem' }}>
            Reminders
          </h2>
          {(['morning', 'evening'] as const).map((slot) => {
            const cfg = reminders[slot]
            return (
              <div key={slot} className="stack--tight stack">
                <SwitchRow
                  title={slot === 'morning' ? 'Morning reminder' : 'Evening reminder'}
                  sub={cfg.enabled ? undefined : 'Off'}
                  checked={cfg.enabled}
                  onChange={(next) => void enableSlot(slot, next)}
                />
                {cfg.enabled ? (
                  <div className="stack--tight stack" style={{ paddingLeft: 'var(--s-2)' }}>
                    <label className="field">
                      <span className="field-label">Time</span>
                      <input
                        type="time"
                        value={cfg.time}
                        onChange={(event) =>
                          dispatch({
                            type: 'reminder-slot',
                            slot,
                            patch: { time: event.target.value },
                          })
                        }
                      />
                    </label>
                    <div
                      className="row row--wrap"
                      role="group"
                      aria-label={`${slot} reminder days`}
                    >
                      {DAY_LABELS.map((label, day) => {
                        const on = cfg.days.includes(day)
                        return (
                          <button
                            key={label}
                            type="button"
                            className="btn btn--sm"
                            aria-pressed={on}
                            style={
                              on
                                ? {
                                    background: 'var(--c-accent)',
                                    color: 'var(--c-accent-ink)',
                                    borderColor: 'var(--c-accent)',
                                  }
                                : undefined
                            }
                            onClick={() =>
                              dispatch({
                                type: 'reminder-slot',
                                slot,
                                patch: {
                                  days: on
                                    ? cfg.days.filter((d) => d !== day)
                                    : [...cfg.days, day].sort(),
                                },
                              })
                            }
                          >
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
          <SwitchRow
            title="Reminder sound"
            checked={reminders.sound}
            onChange={(sound) => dispatch({ type: 'reminders', patch: { sound } })}
          />
          <SwitchRow
            title="Pause all reminders"
            sub="A rest, not a reset — your times are kept."
            checked={reminders.paused}
            onChange={(paused) => dispatch({ type: 'reminders', patch: { paused } })}
          />
          {permission === 'denied' ? (
            <div className="banner" role="note">
              Notifications are blocked for this site in your browser, so reminders will appear only
              inside the app. To change that, allow notifications in your browser's site settings.
            </div>
          ) : null}
          {permission === 'unsupported' ? (
            <div className="banner" role="note">
              This browser does not support notifications; reminders will appear inside the app
              while it is open.
            </div>
          ) : null}
          <p className="footnote">
            Honesty about platforms: reminders ring reliably while the app is open or installed and
            running. A fully closed browser cannot ring without push infrastructure or a native app
            — both on the roadmap.
          </p>
        </section>

        {/* -------------------------------------------------------- audio ---- */}
        <section className="card stack" aria-labelledby="audio-head">
          <h2 id="audio-head" style={{ fontSize: '1.05rem' }}>
            Sound
          </h2>
          <div className="field">
            <span className="field-label">Ambience</span>
            <Segmented
              label="Ambient sound"
              options={[
                { value: 'off', label: 'Off' },
                { value: 'rain', label: 'Rain' },
                { value: 'night', label: 'Night' },
                { value: 'pad', label: 'Tone' },
              ]}
              value={prefs.audio.ambience}
              onChange={(ambience) => {
                dispatch({ type: 'audio', patch: { ambience } })
                if (previewing) audioEngine.setAmbience(ambience)
              }}
            />
            <p className="field-hint">
              All sound is synthesized quietly on your device — nothing is streamed or licensed.
            </p>
          </div>
          <label className="field">
            <span className="field-label">Ambience volume</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={prefs.audio.ambienceVolume}
              onChange={(event) => {
                const ambienceVolume = Number(event.target.value)
                dispatch({ type: 'audio', patch: { ambienceVolume } })
                audioEngine.setVolumes(ambienceVolume, prefs.audio.chimeVolume)
              }}
            />
          </label>
          <SwitchRow
            title="Chime"
            sub="A single soft bell at thresholds."
            checked={prefs.audio.chimeEnabled}
            onChange={(chimeEnabled) => dispatch({ type: 'audio', patch: { chimeEnabled } })}
          />
          <label className="field">
            <span className="field-label">Chime volume</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={prefs.audio.chimeVolume}
              onChange={(event) => {
                const chimeVolume = Number(event.target.value)
                dispatch({ type: 'audio', patch: { chimeVolume } })
                audioEngine.setVolumes(prefs.audio.ambienceVolume, chimeVolume)
              }}
            />
          </label>
          <div className="row">
            <button
              type="button"
              className="btn btn--sm"
              onClick={async () => {
                await audioEngine.unlock()
                audioEngine.setVolumes(prefs.audio.ambienceVolume, prefs.audio.chimeVolume)
                if (previewing) {
                  audioEngine.stop()
                  setPreviewing(false)
                } else {
                  audioEngine.setAmbience(prefs.audio.ambience)
                  audioEngine.chime()
                  setPreviewing(true)
                }
              }}
            >
              {previewing ? 'Stop preview' : 'Preview sound'}
            </button>
          </div>
        </section>

        {/* ---------------------------------------------------- breathing ---- */}
        <section className="card stack" aria-labelledby="breathing-head">
          <h2 id="breathing-head" style={{ fontSize: '1.05rem' }}>
            Breathing guide
          </h2>
          <div className="field">
            <span className="field-label">Style</span>
            <Segmented
              label="Breathing guide style"
              options={[
                { value: 'guided', label: 'Moving circle' },
                { value: 'still', label: 'Still circle' },
              ]}
              value={prefs.breathing.style}
              onChange={(style) => dispatch({ type: 'breathing', patch: { style } })}
            />
            <p className="field-hint">
              Breathing is only a way to settle the body and attend to God — never the point. No
              step asks you to hold your breath.
            </p>
          </div>
          <label className="field">
            <span className="field-label">Breathe in — {prefs.breathing.inSeconds}s</span>
            <input
              type="range"
              min={3}
              max={8}
              step={1}
              value={prefs.breathing.inSeconds}
              onChange={(event) =>
                dispatch({ type: 'breathing', patch: { inSeconds: Number(event.target.value) } })
              }
            />
          </label>
          <label className="field">
            <span className="field-label">Breathe out — {prefs.breathing.outSeconds}s</span>
            <input
              type="range"
              min={3}
              max={10}
              step={1}
              value={prefs.breathing.outSeconds}
              onChange={(event) =>
                dispatch({ type: 'breathing', patch: { outSeconds: Number(event.target.value) } })
              }
            />
          </label>
          <label className="field">
            <span className="field-label">
              Rest after the exhale — {prefs.breathing.restSeconds}s
            </span>
            <input
              type="range"
              min={0}
              max={4}
              step={1}
              value={prefs.breathing.restSeconds}
              onChange={(event) =>
                dispatch({ type: 'breathing', patch: { restSeconds: Number(event.target.value) } })
              }
            />
          </label>
          <SwitchRow
            title="Text cues"
            sub='"Breathe in · Breathe out · Rest"'
            checked={prefs.breathing.textCues}
            onChange={(textCues) => dispatch({ type: 'breathing', patch: { textCues } })}
          />
        </section>

        {/* --------------------------------------------------- appearance ---- */}
        <section className="card stack" aria-labelledby="appearance-head">
          <h2 id="appearance-head" style={{ fontSize: '1.05rem' }}>
            Appearance
          </h2>
          <div className="field">
            <span className="field-label">Theme</span>
            <Segmented
              label="Color theme"
              options={[
                { value: 'system', label: 'System' },
                { value: 'light', label: 'Dawn' },
                { value: 'dark', label: 'Night' },
              ]}
              value={prefs.theme}
              onChange={(theme) => dispatch({ type: 'prefs', patch: { theme } })}
            />
          </div>
          <div className="field">
            <span className="field-label">Motion</span>
            <Segmented
              label="Motion preference"
              options={[
                { value: 'system', label: 'System' },
                { value: 'reduced', label: 'Reduced' },
              ]}
              value={prefs.motion}
              onChange={(motion) => dispatch({ type: 'prefs', patch: { motion } })}
            />
          </div>
          <label className="field">
            <span className="field-label">Text size — {Math.round(prefs.textScale * 100)}%</span>
            <input
              type="range"
              min={0.9}
              max={1.3}
              step={0.05}
              value={prefs.textScale}
              onChange={(event) =>
                dispatch({ type: 'prefs', patch: { textScale: Number(event.target.value) } })
              }
            />
          </label>
        </section>

        {/* ---------------------------------------------------- scripture ---- */}
        <section className="card stack" aria-labelledby="scripture-head">
          <h2 id="scripture-head" style={{ fontSize: '1.05rem' }}>
            Scripture &amp; content
          </h2>
          <label className="field">
            <span className="field-label">Translation</span>
            <select value="web" onChange={() => undefined}>
              <option value="web">
                {webTranslation.name} ({webTranslation.abbreviation}) — public domain
              </option>
            </select>
            <span className="field-hint">
              Licensed translations can be added later; the app is built for it.
            </span>
          </label>
          <label className="field">
            <span className="field-label">Content perspective</span>
            <select value="ecumenical" onChange={() => undefined}>
              <option value="ecumenical">Broadly orthodox / ecumenical</option>
            </select>
            <span className="field-hint">
              Tradition-specific content packs are a roadmap item; the schema already supports them.
            </span>
          </label>
          <p className="footnote">
            Every quotation and commentary source is inspectable on the{' '}
            <Link to="/sources">Sources page</Link>.
          </p>
        </section>

        {/* ------------------------------------------------------ privacy ---- */}
        <section className="card stack" aria-labelledby="privacy-head">
          <h2 id="privacy-head" style={{ fontSize: '1.05rem' }}>
            Privacy &amp; data
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--c-ink-soft)' }}>
            Prayers are never recorded. Notes, bookmarks, history, and settings stay in this
            browser's local storage. There are no analytics, no accounts, and no servers.
          </p>
          <div>
            <button
              type="button"
              className="btn btn--danger"
              onClick={() => setConfirmDelete(true)}
            >
              Delete my local data
            </button>
          </div>
        </section>

        <p className="footnote" style={{ textAlign: 'center' }}>
          Still Before Him is a devotional aid — not a substitute for Scripture, the church,
          pastoral counsel, or professional care. If you are in crisis or considering harming
          yourself, please reach out now: in the US, call or text 988; elsewhere, contact your local
          emergency services or a trusted person near you.
        </p>
      </div>

      <ConfirmDialog
        open={confirmDelete}
        title="Delete everything on this device?"
        body="Notes, bookmarks, history, reminders, and settings will be permanently removed from this browser. Nothing exists anywhere else, so this cannot be undone."
        confirmLabel="Delete it all"
        danger
        onCancel={() => setConfirmDelete(false)}
        onConfirm={() => {
          clearState()
          dispatch({ type: 'reset' })
          setConfirmDelete(false)
        }}
      />
    </main>
  )
}
