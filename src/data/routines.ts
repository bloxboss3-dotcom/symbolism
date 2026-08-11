/**
 * The four seed routines: two mornings, two evenings, each built around a
 * specific passage. Segment timings are written for the 15-minute base and
 * scale with the user's chosen length.
 */
import type { Routine } from '../schemas'

export const morningRoutine1: Routine = {
  id: 'morning-1',
  timeOfDay: 'morning',
  title: 'Earnestly I Seek You',
  subtitle: 'A morning with Psalm 63 — thirst, glory, and steadfast love.',
  passageId: 'psalm-63-1-8',
  baseMinutes: 15,
  segments: [
    {
      kind: 'arrival',
      id: 'm1-arrive',
      title: 'Arrive',
      body: [
        'Sit or kneel, and let your hands rest open.',
        'You are entering the presence of the holy God — maker of heaven and earth, majestic in holiness, rich in mercy, and nearer than your breath.',
        'There is nothing to perform here. Come as you are, and be still.',
      ],
      chime: true,
      breathing: true,
    },
    {
      kind: 'word',
      id: 'm1-behold',
      title: 'Behold',
      passageId: 'psalm-27-4',
      lead: 'Turn your eyes from yourself, and look at the Lord.',
    },
    {
      kind: 'prayer',
      id: 'm1-prayer',
      title: 'Guided Prayer',
      prayerId: 'morning-prayer-1',
    },
    {
      kind: 'your-prayer',
      id: 'm1-your-prayer',
      title: 'Your Prayer',
      prompts: [
        'Who or what do you want to place before the Lord?',
        'What does this day need from Him?',
      ],
      baseSeconds: 180,
    },
    {
      kind: 'silence',
      id: 'm1-silence',
      title: 'Silence',
      baseSeconds: 180,
      breathing: true,
    },
    {
      kind: 'scripture',
      id: 'm1-scripture',
      title: 'Scripture',
      passageId: 'psalm-63-1-8',
      commentaryId: 'psalm-63-1-8',
    },
    {
      kind: 'stretch',
      id: 'm1-stretch',
      title: 'Simple Stretch',
      stretchIds: ['standing-reach', 'shoulder-rolls'],
    },
    {
      kind: 'prayer',
      id: 'm1-sending',
      title: 'Sending',
      prayerId: 'morning-sending-1',
    },
  ],
}

export const morningRoutine2: Routine = {
  id: 'morning-2',
  timeOfDay: 'morning',
  title: 'New Every Morning',
  subtitle: 'A morning with Lamentations 3 — mercy that outlasts the night.',
  passageId: 'lamentations-3-22-26',
  baseMinutes: 15,
  segments: [
    {
      kind: 'arrival',
      id: 'm2-arrive',
      title: 'Arrive',
      body: [
        'Before the day makes its claims, sit quietly and let your shoulders drop.',
        'The Lord was faithful all night; He is faithful now. You do not begin this day alone.',
        'Open your hands. Let your breathing slow.',
      ],
      chime: true,
      breathing: true,
    },
    {
      kind: 'word',
      id: 'm2-behold',
      title: 'Behold',
      passageId: 'psalm-145-1-3',
      lead: 'Great is the Lord — begin with what is greater than the day.',
    },
    {
      kind: 'prayer',
      id: 'm2-prayer',
      title: 'Guided Prayer',
      prayerId: 'morning-prayer-2',
    },
    {
      kind: 'your-prayer',
      id: 'm2-your-prayer',
      title: 'Your Prayer',
      prompts: [
        'What are you carrying into this day? Hand it over, one thing at a time.',
        'Whose burden can you help carry today?',
      ],
      baseSeconds: 180,
    },
    {
      kind: 'silence',
      id: 'm2-silence',
      title: 'Silence',
      baseSeconds: 180,
      breathing: true,
    },
    {
      kind: 'scripture',
      id: 'm2-scripture',
      title: 'Scripture',
      passageId: 'lamentations-3-22-26',
    },
    {
      kind: 'stretch',
      id: 'm2-stretch',
      title: 'Simple Stretch',
      stretchIds: ['neck-release', 'wrist-opener'],
    },
    {
      kind: 'prayer',
      id: 'm2-sending',
      title: 'Sending',
      prayerId: 'morning-sending-2',
    },
  ],
}

export const eveningRoutine1: Routine = {
  id: 'evening-1',
  timeOfDay: 'evening',
  title: 'In Peace I Will Lie Down',
  subtitle: 'An evening with Psalm 4 — honesty, gladness, and safe sleep.',
  passageId: 'psalm-4-1-8',
  baseMinutes: 15,
  segments: [
    {
      kind: 'arrival',
      id: 'e1-still',
      title: 'Become Still',
      body: [
        'The day is done, whether or not it went as you hoped.',
        'Set down what you are holding. Dim the lights if you can, and let your body arrive where you are.',
        'God has been present in every hour you are about to remember.',
      ],
      chime: true,
      breathing: true,
    },
    {
      kind: 'word',
      id: 'e1-remember',
      title: 'Remember His Presence',
      passageId: 'zephaniah-3-17',
      lead: 'Before you review the day, remember who was with you in it.',
    },
    {
      kind: 'review',
      id: 'e1-review',
      title: 'Review the Day',
      lead: 'Walk back through the day slowly, without judgment. Nothing you find will surprise God, and nothing is beyond His grace.',
      prompts: [
        'Where did you notice goodness today — a gift, a mercy, a small kindness?',
        'Where was joy? Where was sorrow?',
        'Was there a moment you acted or spoke in a way you regret? Name it honestly, and hear: there is mercy.',
        'Where did you see grace at work in someone else?',
      ],
    },
    {
      kind: 'your-prayer',
      id: 'e1-your-prayer',
      title: 'Your Prayer',
      prompts: ['Speak to God about what the day held — gratitude first, then whatever remains.'],
      baseSeconds: 180,
    },
    {
      kind: 'silence',
      id: 'e1-silence',
      title: 'Silence',
      baseSeconds: 180,
      breathing: true,
    },
    {
      kind: 'scripture',
      id: 'e1-scripture',
      title: 'Scripture',
      passageId: 'psalm-4-1-8',
    },
    {
      kind: 'stretch',
      id: 'e1-stretch',
      title: 'Simple Stretch',
      stretchIds: ['neck-release', 'soft-fold'],
    },
    {
      kind: 'prayer',
      id: 'e1-close',
      title: 'Compline',
      prayerId: 'evening-compline-1',
    },
  ],
}

export const eveningRoutine2: Routine = {
  id: 'evening-2',
  timeOfDay: 'evening',
  title: 'He Who Keeps You',
  subtitle: 'An evening with Psalm 121 — the Keeper who never sleeps.',
  passageId: 'psalm-121-1-8',
  baseMinutes: 15,
  segments: [
    {
      kind: 'arrival',
      id: 'e2-still',
      title: 'Become Still',
      body: [
        'Night has come. The work that is unfinished will keep until tomorrow.',
        'Sit comfortably and let the quiet settle around you.',
        'The One who kept you today will keep you tonight.',
      ],
      chime: true,
      breathing: true,
    },
    {
      kind: 'word',
      id: 'e2-remember',
      title: 'Remember His Presence',
      passageId: 'psalm-16-8-9',
      lead: 'The Lord has been at your right hand all day, whether you noticed or not.',
    },
    {
      kind: 'review',
      id: 'e2-review',
      title: 'Review the Day',
      lead: 'Let the day pass before you like a road already walked. God saw all of it, and He is not scowling.',
      prompts: [
        'What are you most thankful for from this day?',
        'Which conversation or relationship needs God’s touch tonight?',
        'Is there anything to confess? Say it simply; His mercy is not reluctant.',
        'Where were you kept today — protected, provided for, carried?',
      ],
    },
    {
      kind: 'your-prayer',
      id: 'e2-your-prayer',
      title: 'Your Prayer',
      prompts: ['Entrust to God the people and the unfinished things on your heart tonight.'],
      baseSeconds: 180,
    },
    {
      kind: 'silence',
      id: 'e2-silence',
      title: 'Silence',
      baseSeconds: 180,
      breathing: true,
    },
    {
      kind: 'scripture',
      id: 'e2-scripture',
      title: 'Scripture',
      passageId: 'psalm-121-1-8',
      commentaryId: 'psalm-121-1-8',
    },
    {
      kind: 'stretch',
      id: 'e2-stretch',
      title: 'Simple Stretch',
      stretchIds: ['seated-side-body', 'shoulder-rolls'],
    },
    {
      kind: 'prayer',
      id: 'e2-close',
      title: 'Compline',
      prayerId: 'evening-compline-2',
    },
  ],
}

export const routines: Routine[] = [
  morningRoutine1,
  morningRoutine2,
  eveningRoutine1,
  eveningRoutine2,
]
