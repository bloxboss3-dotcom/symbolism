import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'lamentations-3-22-26',
  reference: 'Lamentations 3:22–26',
  ref: { book: 'Lamentations', chapter: 3, verseStart: 22, verseEnd: 26 },
  translationId: 'web',
  verses: [
    {
      v: 22,
      text: 'It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail.',
    },
    { v: 23, text: 'They are new every morning. Great is your faithfulness.' },
    { v: 24, text: '“Yahweh is my portion,” says my soul. “Therefore I will hope in him.”' },
    { v: 25, text: 'Yahweh is good to those who wait for him, to the soul who seeks him.' },
    {
      v: 26,
      text: 'It is good that a man should hope and quietly wait for the salvation of Yahweh.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/lamentations+3:22-26?translation=web',
    date: '2026-08-11',
  },
}
