/**
 * Voice guidance through the Web Speech API — the device's own speech
 * engine. Everything happens locally: no audio leaves the device, nothing is
 * streamed, no keys, no cost, works offline. Quality follows the platform's
 * installed voices (on iOS/macOS the enhanced system voices are genuinely
 * calm; users can install better voices in their OS settings).
 *
 * The engine speaks a script — lines with per-line pauses — one utterance at
 * a time, so a long prayer never stalls mobile speech queues and a pause or
 * cancel lands between lines within a moment.
 */

export type NarrationLine = {
  text: string
  /** Silence after this line, before the next begins. */
  pauseAfterMs: number
}

export function narrationSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/**
 * Voices load asynchronously on some platforms; resolve once they exist (or
 * after a short grace period with whatever is there, possibly none).
 */
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!narrationSupported()) return Promise.resolve([])
  const synth = window.speechSynthesis
  const now = synth.getVoices()
  if (now.length > 0) return Promise.resolve(now)
  return new Promise((resolve) => {
    let done = false
    const finish = () => {
      if (done) return
      done = true
      resolve(synth.getVoices())
    }
    synth.addEventListener('voiceschanged', finish, { once: true })
    window.setTimeout(finish, 1500)
  })
}

/** English voices first, local engines before network ones. */
export function rankVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return [...voices].sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) =>
      (v.lang.toLowerCase().startsWith('en') ? 2 : 0) + (v.localService ? 1 : 0)
    return score(b) - score(a)
  })
}

type SpeakOptions = {
  voiceURI: string | null
  rate: number
  volume: number
}

class NarrationEngine {
  private timer: number | null = null
  /** Set while paused inside a between-lines gap, so resume can pick it up. */
  private pendingNext: (() => void) | null = null
  private generation = 0
  private voicesCache: SpeechSynthesisVoice[] = []

  private resolveVoice(voiceURI: string | null): SpeechSynthesisVoice | null {
    if (!narrationSupported()) return null
    if (this.voicesCache.length === 0) this.voicesCache = window.speechSynthesis.getVoices()
    if (voiceURI) {
      const chosen = this.voicesCache.find((v) => v.voiceURI === voiceURI)
      if (chosen) return chosen
    }
    return null // platform default
  }

  /** Speak a script from the top, replacing anything already speaking. */
  speak(script: NarrationLine[], options: SpeakOptions): void {
    if (!narrationSupported()) return
    this.stop()
    const generation = this.generation
    const synth = window.speechSynthesis
    const voice = this.resolveVoice(options.voiceURI)

    const speakFrom = (index: number) => {
      if (generation !== this.generation) return
      if (index >= script.length) return
      const line = script[index]
      const utterance = new SpeechSynthesisUtterance(line.text)
      if (voice) utterance.voice = voice
      utterance.rate = options.rate
      utterance.volume = options.volume
      const next = () => {
        if (generation !== this.generation) return
        const advance = () => {
          this.pendingNext = null
          speakFrom(index + 1)
        }
        this.pendingNext = advance
        this.timer = window.setTimeout(advance, line.pauseAfterMs)
      }
      utterance.onend = next
      // An error on one line (voice hiccup, tab switch) skips to the next
      // rather than falling silent for the rest of the segment.
      utterance.onerror = next
      synth.speak(utterance)
    }

    speakFrom(0)
  }

  pause(): void {
    if (!narrationSupported()) return
    // Freeze a between-lines gap (keep pendingNext) or the utterance itself.
    if (this.timer !== null) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    window.speechSynthesis.pause()
  }

  resume(): void {
    if (!narrationSupported()) return
    if (this.pendingNext) {
      const advance = this.pendingNext
      this.timer = window.setTimeout(advance, 600)
    }
    window.speechSynthesis.resume()
  }

  stop(): void {
    this.generation += 1
    this.pendingNext = null
    if (this.timer !== null) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    if (narrationSupported()) window.speechSynthesis.cancel()
  }
}

export const narrationEngine = new NarrationEngine()
