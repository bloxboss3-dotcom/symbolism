import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'zephaniah-3-17',
  reference: 'Zephaniah 3:17',
  ref: { book: 'Zephaniah', chapter: 3, verseStart: 17, verseEnd: 17 },
  translationId: 'web',
  verses: [
    {
      v: 17,
      text: 'Yahweh, your God, is among you, a mighty one who will save. He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/zephaniah+3:17?translation=web',
    date: '2026-08-11',
  },
}
