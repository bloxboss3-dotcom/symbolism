import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-145-1-3',
  reference: 'Psalm 145:1–3',
  ref: { book: 'Psalms', chapter: 145, verseStart: 1, verseEnd: 3 },
  translationId: 'web',
  verses: [
    { v: 1, text: 'I will exalt you, my God, the King. I will praise your name forever and ever.' },
    { v: 2, text: 'Every day I will praise you. I will extol your name forever and ever.' },
    { v: 3, text: 'Great is Yahweh, and greatly to be praised! His greatness is unsearchable.' },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+145:1-3?translation=web',
    date: '2026-08-11',
  },
}
