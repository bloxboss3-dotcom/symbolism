import { useEffect, useRef, useState } from 'react'
import { IconMic } from '../../../components/Icons'
import { countWords } from '../../../lib/scoring'
import { speechSupported, startDictation, type DictationHandle } from '../../../lib/speech'

/**
 * The shared writing surface. Every long-form step uses it, so dictation,
 * word-count feedback, and the save affordance behave identically everywhere.
 *
 * The word target is shown, never enforced: a short answer that someone
 * actually thought about beats a padded one, and blocking progress on a word
 * count would teach the wrong thing.
 */
export function LongAnswer({
  value,
  onChange,
  onCommit,
  placeholder,
  minWords,
  allowVoice = false,
  voiceEnabled = false,
  committed,
  commitLabel = 'Save and continue',
  autoFocus = false,
}: {
  value: string
  onChange: (next: string) => void
  onCommit: () => void
  placeholder?: string
  minWords?: number
  allowVoice?: boolean
  voiceEnabled?: boolean
  committed: boolean
  commitLabel?: string
  autoFocus?: boolean
}) {
  const [dictating, setDictating] = useState(false)
  const [interim, setInterim] = useState('')
  const [voiceError, setVoiceError] = useState<string | null>(null)
  const handle = useRef<DictationHandle | null>(null)
  const latest = useRef(value)
  latest.current = value

  useEffect(() => () => handle.current?.stop(), [])

  const words = countWords(value)
  const target = minWords ?? 0
  const enough = words >= Math.min(target, 12) && words > 4
  const showVoice = allowVoice && voiceEnabled && speechSupported()

  const toggleDictation = () => {
    if (dictating) {
      handle.current?.stop()
      handle.current = null
      setDictating(false)
      setInterim('')
      return
    }

    const started = startDictation({
      onFinal: (text) => {
        if (!text) return
        const joiner = latest.current && !/\s$/.test(latest.current) ? ' ' : ''
        onChange(`${latest.current}${joiner}${text}`)
        setInterim('')
      },
      onInterim: setInterim,
      onError: (message) => {
        setVoiceError(message)
        setDictating(false)
        setInterim('')
      },
      onEnd: () => {
        setDictating(false)
        setInterim('')
      },
    })

    if (!started) {
      setVoiceError('Dictation is not available in this browser. You can keep typing.')
      return
    }
    handle.current = started
    setVoiceError(null)
    setDictating(true)
  }

  return (
    <div className="stack">
      <textarea
        className="textarea"
        value={dictating && interim ? `${value}${value ? ' ' : ''}${interim}` : value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? 'Take your time.'}
        aria-label="Your answer"
        autoFocus={autoFocus}
        spellCheck
      />

      <div className="row row--between">
        <span className={`counter ${enough ? 'counter--met' : ''}`.trim()}>
          {words} {words === 1 ? 'word' : 'words'}
          {target ? ` · about ${target} suggested` : ''}
        </span>

        {showVoice ? (
          <button
            type="button"
            className={`btn btn--sm ${dictating ? 'btn--primary' : 'btn--ghost'}`}
            onClick={toggleDictation}
            aria-pressed={dictating}
          >
            <IconMic size={16} />
            {dictating ? 'Stop' : 'Dictate'}
          </button>
        ) : null}
      </div>

      {voiceError ? (
        <p className="small" style={{ color: 'var(--c-vermilion)' }}>
          {voiceError}
        </p>
      ) : null}

      {allowVoice && voiceEnabled && !speechSupported() ? (
        <p className="small faint">
          This browser has no speech recognition, so dictation is unavailable here. Typing works
          everywhere.
        </p>
      ) : null}

      <button
        type="button"
        className="btn btn--primary btn--block"
        onClick={onCommit}
        disabled={!enough}
      >
        {committed ? 'Update my answer' : commitLabel}
      </button>

      {!enough ? (
        <p className="small faint" style={{ textAlign: 'center' }}>
          Write a few sentences first. Nothing is graded — this is saved so you can see it later.
        </p>
      ) : null}
    </div>
  )
}
