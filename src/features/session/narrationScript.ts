/**
 * What the voice says for each segment, and how it breathes between lines.
 *
 * Principles: the voice leads into each part and then gets out of the way.
 * It reads the written prayers, Scripture, and prompts slowly, with real
 * pauses; it says nothing during silence, and only introduces the user's own
 * prayer time before going quiet. It never adds words of its own beyond
 * brief spoken stage directions, and it never speaks for God.
 */
import type { RoutineSegment } from '../../schemas'
import type { NarrationLine } from '../../lib/narration'
import { passageById, prayerById, stretchById } from '../../data/registry'

const LINE_PAUSE = 1100
const MOVEMENT_PAUSE = 2400
const VERSE_PAUSE = 900
const PROMPT_PAUSE = 3200

const line = (text: string, pauseAfterMs = LINE_PAUSE): NarrationLine => ({ text, pauseAfterMs })

export function buildNarrationScript(segment: RoutineSegment): NarrationLine[] {
  switch (segment.kind) {
    case 'arrival':
      return segment.body.map((text, i) =>
        line(text, i === segment.body.length - 1 ? MOVEMENT_PAUSE : LINE_PAUSE),
      )

    case 'word': {
      const passage = passageById.get(segment.passageId)
      if (!passage) return []
      return [
        ...(segment.lead ? [line(segment.lead, MOVEMENT_PAUSE)] : []),
        line(`From ${passage.reference}.`, LINE_PAUSE),
        ...passage.verses.map((v) => line(v.text, VERSE_PAUSE)),
      ]
    }

    case 'prayer': {
      const prayer = prayerById.get(segment.prayerId)
      if (!prayer) return []
      const lines: NarrationLine[] = []
      prayer.movements.forEach((movement, mIndex) => {
        movement.lines.forEach((text, lIndex) => {
          const last = lIndex === movement.lines.length - 1
          lines.push(line(text, last ? MOVEMENT_PAUSE : LINE_PAUSE))
        })
        if (mIndex === prayer.movements.length - 1 && prayer.endsWithAmen) {
          lines.push(line('Amen.', LINE_PAUSE))
        }
      })
      return lines
    }

    case 'your-prayer':
      // Introduce the time, offer the prompts once, then go quiet.
      return [
        line('This time is yours. Speak aloud, or pray inwardly.', MOVEMENT_PAUSE),
        ...segment.prompts.map((p) => line(p, PROMPT_PAUSE)),
      ]

    case 'silence':
      // The voice's gift here is absence.
      return []

    case 'scripture': {
      const passage = passageById.get(segment.passageId)
      if (!passage) return []
      return [
        line(`A reading from ${passage.reference}.`, MOVEMENT_PAUSE),
        ...passage.verses.map((v) => line(v.text, VERSE_PAUSE)),
      ]
    }

    case 'review':
      return [
        line(segment.lead, MOVEMENT_PAUSE),
        ...segment.prompts.map((p) => line(p, PROMPT_PAUSE)),
      ]

    case 'stretch': {
      const lines: NarrationLine[] = []
      for (const id of segment.stretchIds) {
        const stretch = stretchById.get(id)
        if (!stretch) continue
        lines.push(line(`${stretch.name}.`, 700))
        lines.push(line(stretch.instruction, Math.max(2000, stretch.seconds * 250)))
      }
      if (lines.length > 0) {
        lines.push(line('Stop if anything hurts. This part is always free to skip.', LINE_PAUSE))
      }
      return lines
    }
  }
}
