import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-4-1-8',
  reference: 'Psalm 4:1–8',
  ref: { book: 'Psalms', chapter: 4, verseStart: 1, verseEnd: 8 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'Answer me when I call, God of my righteousness. Give me relief from my distress. Have mercy on me, and hear my prayer.',
    },
    {
      v: 2,
      text: 'You sons of men, how long shall my glory be turned into dishonor? Will you love vanity, and seek after falsehood? Selah.',
    },
    {
      v: 3,
      text: 'But know that Yahweh has set apart for himself him who is godly: Yahweh will hear when I call to him.',
    },
    {
      v: 4,
      text: 'Stand in awe, and don’t sin. Search your own heart on your bed, and be still. Selah.',
    },
    { v: 5, text: 'Offer the sacrifices of righteousness. Put your trust in Yahweh.' },
    {
      v: 6,
      text: 'Many say, “Who will show us any good?” Yahweh, let the light of your face shine on us.',
    },
    {
      v: 7,
      text: 'You have put gladness in my heart, more than when their grain and their new wine are increased.',
    },
    {
      v: 8,
      text: 'In peace I will both lay myself down and sleep, for you, Yahweh alone, make me live in safety.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+4:1-8?translation=web',
    date: '2026-08-11',
  },
}
