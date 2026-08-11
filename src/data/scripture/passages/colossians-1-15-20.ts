import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'colossians-1-15-20',
  reference: 'Colossians 1:15–20',
  ref: { book: 'Colossians', chapter: 1, verseStart: 15, verseEnd: 20 },
  translationId: 'web',
  verses: [
    { v: 15, text: 'who is the image of the invisible God, the firstborn of all creation.' },
    {
      v: 16,
      text: 'For by him all things were created, in the heavens and on the earth, things visible and things invisible, whether thrones or dominions or principalities or powers; all things have been created through him, and for him.',
    },
    { v: 17, text: 'He is before all things, and in him all things are held together.' },
    {
      v: 18,
      text: 'He is the head of the body, the assembly, who is the beginning, the firstborn from the dead; that in all things he might have the preeminence.',
    },
    { v: 19, text: 'For all the fullness was pleased to dwell in him;' },
    {
      v: 20,
      text: 'and through him to reconcile all things to himself, by him, whether things on the earth, or things in the heavens, having made peace through the blood of his cross.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/colossians+1:15-20?translation=web',
    date: '2026-08-11',
  },
}
