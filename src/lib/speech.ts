/**
 * Optional dictation for long-answer steps.
 *
 * Browser speech recognition is uneven — Safari on iOS supports it behind a
 * prefix and may route audio through a vendor service, which the interface says
 * plainly before the microphone opens. Typing is always the default; this is a
 * convenience that degrades to nothing at all.
 */

interface RecognitionAlternative {
  transcript: string
}
interface RecognitionResult {
  0: RecognitionAlternative
  isFinal: boolean
  length: number
}
interface RecognitionEvent {
  resultIndex: number
  results: { length: number; [index: number]: RecognitionResult }
}

interface SpeechRecognitionLike {
  lang: string
  continuous: boolean
  interimResults: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((event: RecognitionEvent) => void) | null
  onerror: ((event: { error?: string }) => void) | null
  onend: (() => void) | null
}

type RecognitionConstructor = new () => SpeechRecognitionLike

function constructorFor(): RecognitionConstructor | null {
  if (typeof window === 'undefined') return null
  const scope = window as unknown as {
    SpeechRecognition?: RecognitionConstructor
    webkitSpeechRecognition?: RecognitionConstructor
  }
  return scope.SpeechRecognition ?? scope.webkitSpeechRecognition ?? null
}

export function speechSupported(): boolean {
  return constructorFor() !== null
}

export interface DictationHandle {
  stop(): void
}

export interface DictationCallbacks {
  /** Fires with the settled text of each phrase, ready to append. */
  onFinal(text: string): void
  /** Live text for the current phrase; replaced as the speaker continues. */
  onInterim?(text: string): void
  onError?(message: string): void
  onEnd?(): void
}

export function startDictation(callbacks: DictationCallbacks): DictationHandle | null {
  const Recognition = constructorFor()
  if (!Recognition) return null

  let recognition: SpeechRecognitionLike
  try {
    recognition = new Recognition()
  } catch {
    return null
  }

  recognition.lang = typeof navigator !== 'undefined' ? navigator.language || 'en-US' : 'en-US'
  recognition.continuous = true
  recognition.interimResults = true

  recognition.onresult = (event) => {
    let interim = ''
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i]
      const text = result[0]?.transcript ?? ''
      if (result.isFinal) callbacks.onFinal(text.trim())
      else interim += text
    }
    if (interim) callbacks.onInterim?.(interim.trim())
  }

  recognition.onerror = (event) => {
    const message =
      event.error === 'not-allowed'
        ? 'Microphone access was declined. You can keep typing.'
        : event.error === 'no-speech'
          ? 'Nothing was heard. Try again, or type your answer.'
          : 'Dictation stopped unexpectedly. You can keep typing.'
    callbacks.onError?.(message)
  }

  recognition.onend = () => callbacks.onEnd?.()

  try {
    recognition.start()
  } catch {
    return null
  }

  return {
    stop() {
      try {
        recognition.stop()
      } catch {
        recognition.abort()
      }
    },
  }
}
