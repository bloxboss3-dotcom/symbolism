import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'isaiah-40-25-31',
  reference: 'Isaiah 40:25–31',
  ref: { book: 'Isaiah', chapter: 40, verseStart: 25, verseEnd: 31 },
  translationId: 'web',
  verses: [
    { v: 25, text: '“To whom then will you liken me? Who is my equal?” says the Holy One.' },
    {
      v: 26,
      text: 'Lift up your eyes on high, and see who has created these, who brings out their army by number. He calls them all by name. by the greatness of his might, and because he is strong in power, Not one is lacking.',
    },
    {
      v: 27,
      text: 'Why do you say, Jacob, and speak, Israel, “My way is hidden from Yahweh, and the justice due me is disregarded by my God?”',
    },
    {
      v: 28,
      text: 'Haven’t you known? Haven’t you heard? The everlasting God, Yahweh, The Creator of the ends of the earth, doesn’t faint. He isn’t weary. His understanding is unsearchable.',
    },
    {
      v: 29,
      text: 'He gives power to the weak. He increases the strength of him who has no might.',
    },
    { v: 30, text: 'Even the youths faint and get weary, and the young men utterly fall;' },
    {
      v: 31,
      text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/isaiah+40:25-31?translation=web',
    date: '2026-08-11',
  },
}
