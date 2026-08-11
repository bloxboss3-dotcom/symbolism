import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'revelation-21-1-5',
  reference: 'Revelation 21:1–5',
  ref: { book: 'Revelation', chapter: 21, verseStart: 1, verseEnd: 5 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'I saw a new heaven and a new earth: for the first heaven and the first earth have passed away, and the sea is no more.',
    },
    {
      v: 2,
      text: 'I saw the holy city, New Jerusalem, coming down out of heaven from God, prepared like a bride adorned for her husband.',
    },
    {
      v: 3,
      text: 'I heard a loud voice out of heaven saying, “Behold, God’s dwelling is with people, and he will dwell with them, and they will be his people, and God himself will be with them as their God.',
    },
    {
      v: 4,
      text: 'He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away.”',
    },
    {
      v: 5,
      text: 'He who sits on the throne said, “Behold, I am making all things new.” He said, “Write, for these words of God are faithful and true.”',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/revelation+21:1-5?translation=web',
    date: '2026-08-11',
  },
}
