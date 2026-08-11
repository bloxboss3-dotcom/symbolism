import { describe, expect, it } from 'vitest'
import { eveningRoutine1, morningRoutine1 } from '../../data/routines'
import { buildNarrationScript } from './narrationScript'

const segment = (routine: typeof morningRoutine1, kind: string) => {
  const found = routine.segments.find((s) => s.kind === kind)
  if (!found) throw new Error(`routine ${routine.id} has no ${kind} segment`)
  return found
}

describe('narration script', () => {
  it('silence is silent — the voice gets out of the way', () => {
    expect(buildNarrationScript(segment(morningRoutine1, 'silence'))).toEqual([])
  })

  it('a prayer is read line by line, with longer rests between movements, ending in Amen', () => {
    const script = buildNarrationScript(segment(morningRoutine1, 'prayer'))
    expect(script.length).toBeGreaterThan(10)
    expect(script[script.length - 1].text).toBe('Amen.')
    const pauses = new Set(script.map((l) => l.pauseAfterMs))
    expect(pauses.size).toBeGreaterThan(1)
  })

  it('scripture is announced by reference and read verse by verse', () => {
    const script = buildNarrationScript(segment(morningRoutine1, 'scripture'))
    expect(script[0].text).toContain('Psalm 63')
    expect(script.length).toBe(1 + 8) // announcement + eight verses
  })

  it('your-prayer introduces the time, offers the prompts, then goes quiet', () => {
    const seg = segment(eveningRoutine1, 'your-prayer')
    const script = buildNarrationScript(seg)
    expect(script[0].text).toMatch(/This time is yours/)
    // Nothing after the prompts: the rest of the timer belongs to the user.
    expect(script.length).toBe(1 + (seg.kind === 'your-prayer' ? seg.prompts.length : 0))
  })

  it('every segment of every routine builds a valid script', () => {
    for (const routine of [morningRoutine1, eveningRoutine1]) {
      for (const seg of routine.segments) {
        const script = buildNarrationScript(seg)
        for (const line of script) {
          expect(line.text.trim().length).toBeGreaterThan(0)
          expect(line.pauseAfterMs).toBeGreaterThanOrEqual(0)
        }
      }
    }
  })
})
