import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'psalm-8-1-9',
  reference: 'Psalm 8:1–9',
  ref: { book: 'Psalms', chapter: 8, verseStart: 1, verseEnd: 9 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'Yahweh, our Lord, how majestic is your name in all the earth, who has set your glory above the heavens!',
    },
    {
      v: 2,
      text: 'From the lips of babes and infants you have established strength, because of your adversaries, that you might silence the enemy and the avenger.',
    },
    {
      v: 3,
      text: 'When I consider your heavens, the work of your fingers, the moon and the stars, which you have ordained;',
    },
    {
      v: 4,
      text: 'what is man, that you think of him? What is the son of man, that you care for him?',
    },
    {
      v: 5,
      text: 'For you have made him a little lower than the angels, and crowned him with glory and honor.',
    },
    {
      v: 6,
      text: 'You make him ruler over the works of your hands. You have put all things under his feet:',
    },
    { v: 7, text: 'All sheep and cattle, yes, and the animals of the field,' },
    {
      v: 8,
      text: 'The birds of the sky, the fish of the sea, and whatever passes through the paths of the seas.',
    },
    { v: 9, text: 'Yahweh, our Lord, how majestic is your name in all the earth!' },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/psalm+8:1-9?translation=web',
    date: '2026-08-11',
  },
}
