import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'hebrews-1-1-4',
  reference: 'Hebrews 1:1–4',
  ref: { book: 'Hebrews', chapter: 1, verseStart: 1, verseEnd: 4 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'God, having in the past spoken to the fathers through the prophets at many times and in various ways,',
    },
    {
      v: 2,
      text: 'has at the end of these days spoken to us by his Son, whom he appointed heir of all things, through whom also he made the worlds.',
    },
    {
      v: 3,
      text: 'His Son is the radiance of his glory, the very image of his substance, and upholding all things by the word of his power, who, when he had by himself purified us of our sins, sat down on the right hand of the Majesty on high;',
    },
    {
      v: 4,
      text: 'having become so much better than the angels, as he has inherited a more excellent name than they have.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/hebrews+1:1-4?translation=web',
    date: '2026-08-11',
  },
}
