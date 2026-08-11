import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'john-1-1-14',
  reference: 'John 1:1–14',
  ref: { book: 'John', chapter: 1, verseStart: 1, verseEnd: 14 },
  translationId: 'web',
  verses: [
    {
      v: 1,
      text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    },
    { v: 2, text: 'The same was in the beginning with God.' },
    {
      v: 3,
      text: 'All things were made through him. Without him was not anything made that has been made.',
    },
    { v: 4, text: 'In him was life, and the life was the light of men.' },
    { v: 5, text: 'The light shines in the darkness, and the darkness hasn’t overcome it.' },
    { v: 6, text: 'There came a man, sent from God, whose name was John.' },
    {
      v: 7,
      text: 'The same came as a witness, that he might testify about the light, that all might believe through him.',
    },
    { v: 8, text: 'He was not the light, but was sent that he might testify about the light.' },
    { v: 9, text: 'The true light that enlightens everyone was coming into the world.' },
    {
      v: 10,
      text: 'He was in the world, and the world was made through him, and the world didn’t recognize him.',
    },
    { v: 11, text: 'He came to his own, and those who were his own didn’t receive him.' },
    {
      v: 12,
      text: 'But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:',
    },
    {
      v: 13,
      text: 'who were born not of blood, nor of the will of the flesh, nor of the will of man, but of God.',
    },
    {
      v: 14,
      text: 'The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.',
    },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/john+1:1-14?translation=web',
    date: '2026-08-11',
  },
}
