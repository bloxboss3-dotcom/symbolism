import { describe, expect, it } from 'vitest'
import { morningRoutine1 } from '../../data/routines'
import { defaultPreferences } from '../../lib/storage'
import { planSegments, scaleSeconds } from './plan'

describe('segment planning', () => {
  it('scales timed segments linearly with the chosen length', () => {
    expect(scaleSeconds(180, 15, 15)).toBe(180)
    expect(scaleSeconds(180, 30, 15)).toBe(360)
    expect(scaleSeconds(180, 5, 15)).toBe(60)
  })

  it('never scales a timed segment below 30 seconds', () => {
    expect(scaleSeconds(60, 5, 15)).toBe(30)
  })

  it('readings are self-paced; prayer and silence are timed', () => {
    const prefs = defaultPreferences()
    const planned = planSegments(morningRoutine1, prefs)
    for (const p of planned) {
      if (p.segment.kind === 'your-prayer' || p.segment.kind === 'silence') {
        expect(p.plannedMs).toBeGreaterThan(0)
      } else {
        expect(p.plannedMs).toBeNull()
      }
    }
  })

  it('explicit overrides pin the two personal segments regardless of length', () => {
    const prefs = {
      ...defaultPreferences(),
      routineMinutes: 30 as const,
      silenceSecondsOverride: 60,
      prayerSecondsOverride: 90,
    }
    const planned = planSegments(morningRoutine1, prefs)
    const silence = planned.find((p) => p.segment.kind === 'silence')
    const prayer = planned.find((p) => p.segment.kind === 'your-prayer')
    expect(silence?.plannedMs).toBe(60_000)
    expect(prayer?.plannedMs).toBe(90_000)
  })
})
