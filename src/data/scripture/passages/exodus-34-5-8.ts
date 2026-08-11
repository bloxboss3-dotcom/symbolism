import type { ScripturePassage } from '../../../schemas'

export const passage: ScripturePassage = {
  id: 'exodus-34-5-8',
  reference: 'Exodus 34:5–8',
  ref: { book: 'Exodus', chapter: 34, verseStart: 5, verseEnd: 8 },
  translationId: 'web',
  verses: [
    {
      v: 5,
      text: 'Yahweh descended in the cloud, and stood with him there, and proclaimed Yahweh’s name.',
    },
    {
      v: 6,
      text: 'Yahweh passed by before him, and proclaimed, “Yahweh! Yahweh, a merciful and gracious God, slow to anger, and abundant in loving kindness and truth,',
    },
    {
      v: 7,
      text: 'keeping loving kindness for thousands, forgiving iniquity and disobedience and sin; and who will by no means clear the guilty, visiting the iniquity of the fathers on the children, and on the children’s children, on the third and on the fourth generation.”',
    },
    { v: 8, text: 'Moses hurried and bowed his head toward the earth, and worshiped.' },
  ],
  retrieval: {
    source: 'World English Bible via bible-api.com',
    url: 'https://bible-api.com/exodus+34:5-8?translation=web',
    date: '2026-08-11',
  },
}
