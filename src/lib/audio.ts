/**
 * Synthesized sound. Every sound the app makes — ambience and the chime — is
 * generated with the Web Audio API at runtime: there are no recordings to
 * license, nothing heavy to cache, and the palette stays deliberately sparse.
 *
 * Autoplay policy is honored by design: the engine does nothing until
 * `unlock()` is called from a real user gesture, and the app only calls it
 * from explicit controls. Ambience changes cross-fade rather than cut.
 */
import type { UserPreferences } from '../schemas'

export type AmbienceKind = UserPreferences['audio']['ambience']

type AmbienceVoice = {
  kind: AmbienceKind
  gain: GainNode
  stop: () => void
}

const FADE_S = 1.6

function makeNoiseBuffer(ctx: AudioContext, color: 'white' | 'brown'): AudioBuffer {
  const seconds = 4
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  let last = 0
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1
    if (color === 'white') {
      data[i] = white * 0.6
    } else {
      // Leaky integrator: dark, sea-like noise.
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.2
    }
  }
  return buffer
}

class AudioEngine {
  private ctx: AudioContext | null = null
  private ambienceBus: GainNode | null = null
  private chimeBus: GainNode | null = null
  private voice: AmbienceVoice | null = null
  private volumes = { ambience: 0.5, chime: 0.6 }

  get unlocked(): boolean {
    return this.ctx !== null && this.ctx.state === 'running'
  }

  /** Must be called from a user gesture before any sound can play. */
  async unlock(): Promise<boolean> {
    try {
      if (!this.ctx) {
        const Ctor =
          window.AudioContext ??
          (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
        if (!Ctor) return false
        this.ctx = new Ctor()
        this.ambienceBus = this.ctx.createGain()
        this.ambienceBus.gain.value = this.volumes.ambience
        this.ambienceBus.connect(this.ctx.destination)
        this.chimeBus = this.ctx.createGain()
        this.chimeBus.gain.value = this.volumes.chime
        this.chimeBus.connect(this.ctx.destination)
      }
      if (this.ctx.state === 'suspended') await this.ctx.resume()
      return this.ctx.state === 'running'
    } catch {
      return false
    }
  }

  setVolumes(ambience: number, chime: number): void {
    this.volumes = { ambience, chime }
    const now = this.ctx?.currentTime ?? 0
    this.ambienceBus?.gain.setTargetAtTime(ambience, now, 0.1)
    this.chimeBus?.gain.setTargetAtTime(chime, now, 0.1)
  }

  /** Cross-fades to the requested ambience; 'off' fades to silence. */
  setAmbience(kind: AmbienceKind): void {
    if (!this.ctx || !this.ambienceBus) return
    if (this.voice?.kind === kind) return

    const old = this.voice
    if (old) {
      const now = this.ctx.currentTime
      old.gain.gain.setTargetAtTime(0, now, FADE_S / 3)
      const stop = old.stop
      window.setTimeout(() => stop(), FADE_S * 1500)
      this.voice = null
    }
    if (kind === 'off') return

    this.voice = this.startVoice(kind)
  }

  private startVoice(kind: Exclude<AmbienceKind, 'off'>): AmbienceVoice | null {
    const ctx = this.ctx
    const bus = this.ambienceBus
    if (!ctx || !bus) return null

    const gain = ctx.createGain()
    gain.gain.value = 0
    gain.connect(bus)
    const now = ctx.currentTime
    gain.gain.setTargetAtTime(1, now, FADE_S / 3)

    const stops: Array<() => void> = []
    const stopAll = () => {
      for (const stop of stops) {
        try {
          stop()
        } catch {
          // A node that already ended is fine.
        }
      }
      gain.disconnect()
    }

    if (kind === 'rain') {
      const src = ctx.createBufferSource()
      src.buffer = makeNoiseBuffer(ctx, 'white')
      src.loop = true
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = 2600
      lp.Q.value = 0.4
      const hp = ctx.createBiquadFilter()
      hp.type = 'highpass'
      hp.frequency.value = 320
      const level = ctx.createGain()
      level.gain.value = 0.32
      // A slow swell so the rain breathes instead of hissing statically.
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.07
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 0.05
      lfo.connect(lfoGain)
      lfoGain.connect(level.gain)
      src.connect(lp)
      lp.connect(hp)
      hp.connect(level)
      level.connect(gain)
      src.start()
      lfo.start()
      stops.push(() => src.stop())
      stops.push(() => lfo.stop())
    } else if (kind === 'night') {
      const src = ctx.createBufferSource()
      src.buffer = makeNoiseBuffer(ctx, 'brown')
      src.loop = true
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = 480
      const level = ctx.createGain()
      level.gain.value = 0.4
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.045
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 0.08
      lfo.connect(lfoGain)
      lfoGain.connect(level.gain)
      src.connect(lp)
      lp.connect(level)
      level.connect(gain)
      src.start()
      lfo.start()
      stops.push(() => src.stop())
      stops.push(() => lfo.stop())
    } else {
      // 'pad': two soft detuned voices on a low fifth, barely there.
      const level = ctx.createGain()
      level.gain.value = 0.055
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = 900
      for (const [freq, detune] of [
        [110, -4],
        [110, 5],
        [165, -3],
        [220, 6],
      ] as const) {
        const osc = ctx.createOscillator()
        osc.type = 'triangle'
        osc.frequency.value = freq
        osc.detune.value = detune
        osc.connect(lp)
        osc.start()
        stops.push(() => osc.stop())
      }
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.06
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 0.02
      lfo.connect(lfoGain)
      lfoGain.connect(level.gain)
      lfo.start()
      stops.push(() => lfo.stop())
      lp.connect(level)
      level.connect(gain)
    }

    return { kind, gain, stop: stopAll }
  }

  /** A single struck bell: a few inharmonic partials, long soft decay. */
  chime(): void {
    const ctx = this.ctx
    const bus = this.chimeBus
    if (!ctx || !bus) return
    const now = ctx.currentTime
    const partials: Array<[ratio: number, level: number, decay: number]> = [
      [1, 0.5, 3.4],
      [2.01, 0.22, 2.4],
      [2.92, 0.1, 1.7],
      [4.16, 0.05, 1.1],
    ]
    const base = 392 // G4 — low enough to be warm, high enough to carry.
    for (const [ratio, level, decay] of partials) {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = base * ratio
      const env = ctx.createGain()
      env.gain.setValueAtTime(0, now)
      env.gain.linearRampToValueAtTime(level, now + 0.012)
      env.gain.exponentialRampToValueAtTime(0.0001, now + decay)
      osc.connect(env)
      env.connect(bus)
      osc.start(now)
      osc.stop(now + decay + 0.1)
    }
  }

  /** Fade everything out (session end, leaving the player). */
  stop(): void {
    this.setAmbience('off')
  }
}

export const audioEngine = new AudioEngine()
