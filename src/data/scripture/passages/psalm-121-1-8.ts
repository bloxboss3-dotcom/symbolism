import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-121-1-8',
  reference: 'Psalm 121:1–8',
  ref: { book: 'Psalms', chapter: 121, verseStart: 1, verseEnd: 8 },
  translationId: 'web',
  verses: [
    { v: 1, text: 'I will lift up my eyes to the hills. Where does my help come from?' },
    { v: 2, text: 'My help comes from Yahweh, who made heaven and earth.' },
    {
      v: 3,
      text: 'He will not allow your foot to be moved. He who keeps you will not slumber.',
    },
    { v: 4, text: 'Behold, he who keeps Israel will neither slumber nor sleep.' },
    { v: 5, text: 'Yahweh is your keeper. Yahweh is your shade on your right hand.' },
    { v: 6, text: 'The sun will not harm you by day, nor the moon by night.' },
    { v: 7, text: 'Yahweh will keep you from all evil. He will keep your soul.' },
    {
      v: 8,
      text: 'Yahweh will keep your going out and your coming in, from this time forward, and forever more.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+121:1-8?translation=web',
    date: '2026-08-11',
  },
}
