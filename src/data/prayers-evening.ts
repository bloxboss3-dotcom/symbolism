/**
 * Evening prayers, in the spirit of compline: entrusting the night, loved
 * ones, and unfinished things to God. Allusions are recorded for audit.
 */
import type { PrayerContent } from '../schemas'

export const evensongClose1: PrayerContent = {
  id: 'evening-compline-1',
  title: 'Entrusting the Night',
  kind: 'compline',
  movements: [
    {
      label: 'Entrusting',
      lines: [
        'Lord, the day is ending, and I did not finish it. You did not ask me to.',
        'What was left undone, I leave in Your hands. What was done poorly, I leave to Your mercy. What was done well, I leave to Your glory.',
        'Into Your hands I commit my spirit — and my family, my friends, my work, my worries.',
      ],
    },
    {
      label: 'Shelter',
      lines: [
        'Keep those I love this night, near and far. Watch over the sick, the frightened, and those who must work while others sleep.',
        'Give Your angels charge over the weary; let the lonely know they are not unseen.',
        'Be our light in the darkness, O Lord, and in Your great mercy defend us from all perils and dangers of this night.',
      ],
    },
    {
      label: 'Rest',
      lines: [
        'You give sleep to Your beloved, and You Yourself neither slumber nor sleep.',
        'So I can close my eyes. The world will be kept — not by me.',
        'In peace I will lie down and sleep, for You alone, Lord, make me dwell in safety.',
      ],
    },
  ],
  allusions: [
    { phrase: 'Into Your hands I commit my spirit', reference: 'Psalm 31:5; Luke 23:46' },
    {
      phrase: 'Be our light in the darkness … perils and dangers of this night',
      reference:
        'after the third collect of Compline / Evening Prayer, Book of Common Prayer (1662, public domain)',
    },
    { phrase: 'You give sleep to Your beloved', reference: 'Psalm 127:2' },
    { phrase: 'neither slumber nor sleep', reference: 'Psalm 121:4' },
    {
      phrase: 'In peace I will lie down and sleep…',
      reference: 'Psalm 4:8',
    },
  ],
  endsWithAmen: true,
}

export const evensongClose2: PrayerContent = {
  id: 'evening-compline-2',
  title: 'Kept by the Keeper',
  kind: 'compline',
  movements: [
    {
      label: 'Entrusting',
      lines: [
        'Keeper of Israel, the night is Yours; You made both darkness and light.',
        'I bring You the conversations I cannot re-run, the outcomes I cannot control, and the people I cannot protect.',
        'You keep them better than my worrying ever has.',
      ],
    },
    {
      label: 'Shelter',
      lines: [
        'Father, gather under Your wings the ones I named tonight and the ones I forgot.',
        'Lord Jesus, stay with us, for it is evening, and the day is far spent.',
        'Holy Spirit, pray within us when we no longer have words.',
      ],
    },
    {
      label: 'Rest',
      lines: [
        'The sun shall not strike me by day, nor the moon by night; my Keeper does not close His eyes.',
        'Guard my going out and my coming in, from this time forth and forevermore.',
        'I am Yours. That is enough. Good night, Lord.',
      ],
    },
  ],
  allusions: [
    { phrase: 'You made both darkness and light', reference: 'Psalm 74:16' },
    { phrase: 'under Your wings', reference: 'Psalm 91:4' },
    {
      phrase: 'stay with us, for it is evening, and the day is far spent',
      reference: 'Luke 24:29',
    },
    { phrase: 'pray within us when we no longer have words', reference: 'Romans 8:26' },
    { phrase: 'The sun shall not strike me by day…', reference: 'Psalm 121:6' },
    {
      phrase: 'Guard my going out and my coming in…',
      reference: 'Psalm 121:8',
    },
  ],
  endsWithAmen: true,
}
