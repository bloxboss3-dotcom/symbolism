import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-63-1-8',
  reference: 'Psalm 63:1–8',
  ref: { book: 'Psalms', chapter: 63, verseStart: 1, verseEnd: 8 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'God, you are my God. I will earnestly seek you. My soul thirsts for you. My flesh longs for you, in a dry and weary land, where there is no water.',
    },
    { v: 2, text: 'So I have seen you in the sanctuary, watching your power and your glory.' },
    { v: 3, text: 'Because your loving kindness is better than life, my lips shall praise you.' },
    { v: 4, text: 'So I will bless you while I live. I will lift up my hands in your name.' },
    {
      v: 5,
      text: 'My soul shall be satisfied as with the richest food. My mouth shall praise you with joyful lips,',
    },
    { v: 6, text: 'when I remember you on my bed, and think about you in the night watches.' },
    { v: 7, text: 'For you have been my help. I will rejoice in the shadow of your wings.' },
    { v: 8, text: 'My soul stays close to you. Your right hand holds me up.' },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+63:1-8?translation=web',
    date: '2026-08-11',
  },
}
