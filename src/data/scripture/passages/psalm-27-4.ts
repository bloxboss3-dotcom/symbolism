import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-27-4',
  reference: 'Psalm 27:4',
  ref: { book: 'Psalms', chapter: 27, verseStart: 4, verseEnd: 4 },
  translationId: 'web',
  verses: [
    {
      v: 4,
      text: 'One thing I have asked of Yahweh, that I will seek after: that I may dwell in Yahweh’s house all the days of my life, to see Yahweh’s beauty, and to inquire in his temple.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+27:4?translation=web',
    date: '2026-08-11',
  },
}
