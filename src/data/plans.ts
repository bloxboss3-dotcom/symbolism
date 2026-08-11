/**
 * The seed reading plan: seven days of beholding God's character and glory,
 * moving from the Name proclaimed at Sinai to the renewal of all things.
 */
import type { ReadingPlan } from '../schemas'

export const beholdPlan: ReadingPlan = {
  id: 'behold',
  title: 'Behold: Seven Days on the Character and Glory of God',
  description:
    'One passage a day, chosen to lift your eyes: who God says He is, what creation says about Him, and how His glory has a face in Jesus Christ.',
  days: [
    {
      day: 1,
      title: 'The Name Proclaimed',
      passageId: 'exodus-34-5-8',
      commentaryId: 'exodus-34-5-8',
      invitation: 'God introduces Himself in His own words. Listen as if for the first time.',
    },
    {
      day: 2,
      title: 'Majesty, Mindful of Us',
      passageId: 'psalm-8-1-9',
      invitation:
        'Stand under the night sky of this psalm and let both truths land: His majesty, and His care.',
    },
    {
      day: 3,
      title: 'To Whom Will You Compare Me?',
      passageId: 'isaiah-40-25-31',
      invitation:
        'Let the questions of this passage measure everything that has felt too big this week.',
    },
    {
      day: 4,
      title: 'The Word Became Flesh',
      passageId: 'john-1-1-14',
      commentaryId: 'john-1-1-14',
      invitation: 'The glory of God has a face. Read slowly enough to be astonished.',
    },
    {
      day: 5,
      title: 'The Image of the Invisible God',
      passageId: 'colossians-1-15-20',
      commentaryId: 'colossians-1-15-20',
      invitation: 'Everything was made through Him and for Him — including this ordinary day.',
    },
    {
      day: 6,
      title: 'The Radiance of His Glory',
      passageId: 'hebrews-1-1-4',
      invitation:
        'God has spoken by a Son. Consider what it means that He still upholds all things.',
    },
    {
      day: 7,
      title: 'Behold, I Make All Things New',
      passageId: 'revelation-21-1-5',
      invitation:
        'End the week where history ends: God dwelling with His people, every tear wiped away.',
    },
  ],
}

export const plans: ReadingPlan[] = [beholdPlan]
