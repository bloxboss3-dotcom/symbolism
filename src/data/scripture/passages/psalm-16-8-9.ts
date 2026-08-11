import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-16-8-9',
  reference: 'Psalm 16:8–9',
  ref: { book: 'Psalms', chapter: 16, verseStart: 8, verseEnd: 9 },
  translationId: 'web',
  verses: [
    {
      v: 8,
      text: 'I have set Yahweh always before me. Because he is at my right hand, I shall not be moved.',
    },
    {
      v: 9,
      text: 'Therefore my heart is glad, and my tongue rejoices. My body shall also dwell in safety.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+16:8-9?translation=web',
    date: '2026-08-11',
  },
}
