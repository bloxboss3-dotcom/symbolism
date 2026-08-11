import { describe, expect, it } from 'vitest'
import { createSession, reduce, rehydrate, segmentElapsedMs } from './machine'

const COUNT = 5

describe('session machine', () => {
  it('starts running at the first segment', () => {
    const s = createSession('morning-1', 15, 1000)
    expect(s.segmentIndex).toBe(0)
    expect(s.status).toBe('running')
    expect(segmentElapsedMs(s, 6000)).toBe(5000)
  })

  it('pause freezes elapsed time; resume continues from the same point', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'PAUSE', now: 10_000 }, COUNT)
    expect(s.status).toBe('paused')
    // Time passing while paused does not count.
    expect(segmentElapsedMs(s, 99_000)).toBe(10_000)
    s = reduce(s, { type: 'RESUME', now: 100_000 }, COUNT)
    expect(segmentElapsedMs(s, 103_000)).toBe(13_000)
  })

  it('NEXT advances and resets the segment clock', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'NEXT', now: 60_000 }, COUNT)
    expect(s.segmentIndex).toBe(1)
    expect(segmentElapsedMs(s, 61_000)).toBe(1000)
  })

  it('NEXT on the last segment completes the session', () => {
    let s = createSession('morning-1', 15, 0)
    for (let i = 0; i < COUNT - 1; i++) s = reduce(s, { type: 'NEXT', now: i }, COUNT)
    expect(s.segmentIndex).toBe(COUNT - 1)
    s = reduce(s, { type: 'NEXT', now: 99 }, COUNT)
    expect(s.status).toBe('complete')
    expect(s.endedEarly).toBe(false)
  })

  it('BACK returns to the previous segment; at the start it restarts the segment', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'NEXT', now: 10 }, COUNT)
    s = reduce(s, { type: 'BACK', now: 20 }, COUNT)
    expect(s.segmentIndex).toBe(0)
    s = reduce(s, { type: 'BACK', now: 30 }, COUNT)
    expect(s.segmentIndex).toBe(0)
    expect(segmentElapsedMs(s, 35)).toBe(5)
  })

  it('BACK while paused resumes running at the previous segment', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'NEXT', now: 10 }, COUNT)
    s = reduce(s, { type: 'PAUSE', now: 20 }, COUNT)
    s = reduce(s, { type: 'BACK', now: 30 }, COUNT)
    expect(s.status).toBe('running')
    expect(s.segmentIndex).toBe(0)
  })

  it('RESTART returns to a fresh first segment', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'NEXT', now: 10 }, COUNT)
    s = reduce(s, { type: 'RESTART', now: 50 }, COUNT)
    expect(s.segmentIndex).toBe(0)
    expect(s.startedAt).toBe(50)
    expect(segmentElapsedMs(s, 60)).toBe(10)
  })

  it('END_EARLY completes and flags the session', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'END_EARLY', now: 10 }, COUNT)
    expect(s.status).toBe('complete')
    expect(s.endedEarly).toBe(true)
    // A complete session ignores further events.
    expect(reduce(s, { type: 'NEXT', now: 20 }, COUNT)).toBe(s)
  })

  it('rehydrate after reload resumes paused with accumulated time intact', () => {
    let s = createSession('morning-1', 15, 0)
    s = reduce(s, { type: 'PAUSE', now: 42_000 }, COUNT)
    const back = rehydrate(s, 1_000_000)
    expect(back.status).toBe('paused')
    expect(segmentElapsedMs(back, 2_000_000)).toBe(42_000)
    const resumed = reduce(back, { type: 'RESUME', now: 2_000_000 }, COUNT)
    expect(segmentElapsedMs(resumed, 2_001_000)).toBe(43_000)
  })

  it('rehydrating a running snapshot does not bill closed-tab time', () => {
    let s = createSession('morning-1', 15, 0)
    // Ran for 30s, then persisted while running (tab killed at t=30s).
    s = { ...s, segmentAccumulatedMs: 30_000, segmentStartedAt: 30_000 }
    const back = rehydrate(s, 500_000)
    expect(segmentElapsedMs(back, 500_000)).toBe(30_000)
  })
})
