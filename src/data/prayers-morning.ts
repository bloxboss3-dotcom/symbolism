/**
 * Morning prayers: written for this app, grounded in Scripture.
 *
 * Editorial notes: every substantial biblical phrase is recorded in
 * `allusions` with its reference so the sourcing of the language can be
 * audited. These prayers guide and invite; they never speak for God.
 */
import type { PrayerContent } from '../schemas'

export const morningPrayer1: PrayerContent = {
  id: 'morning-prayer-1',
  title: 'A Morning Prayer of Consecration',
  kind: 'guided',
  movements: [
    {
      label: 'Adoration',
      lines: [
        'Holy God — Father, Son, and Holy Spirit — before the day had a name, You were.',
        'The heavens declare Your glory; the morning light is Yours before it is ours.',
        'You are high above all nations, and yet You are not far from any one of us: in You we live and move and have our being.',
        'We rise to say what is true: You are God, and there is no other.',
      ],
    },
    {
      label: 'Surrender',
      lines: [
        'Before I reach for anything this day asks of me, I open my hands to You.',
        'What I have planned, I hold loosely. What I fear, I will not carry alone.',
        'Take my hours and order them. Take my will and steady it.',
        'Not my will, but Yours, be done.',
      ],
    },
    {
      label: 'Gratitude',
      lines: [
        'Thank You for sleep, and for waking; for breath, and bread, and the people I did not earn.',
        'Your mercies are new every morning — not because the world is new, but because You are faithful.',
        'Let me spend this day as one who has received it.',
      ],
    },
    {
      label: 'Confession',
      lines: [
        'Search me, O God, and know my heart.',
        'I have loved my own way. I have been quick to speak and slow to listen; quick to judge and slow to bless.',
        'Forgive me, for the sake of Jesus Christ, who gave Himself for me.',
        'Create in me a clean heart, and renew a right spirit within me.',
      ],
    },
    {
      label: 'Dependence',
      lines: [
        'I do not know what this day holds, but I know that apart from You I can do nothing that lasts.',
        'Give me this day my daily bread — enough strength, enough wisdom, enough love for the work and the people in front of me.',
        'When I am hurried, still me. When I am anxious, remind me whose I am.',
      ],
    },
    {
      label: 'Intercession',
      lines: [
        'I bring before You the people You have given me to love — name them now, slowly, one by one.',
        'Be near to the weary and the grieving; provide for the poor; give courage to Your church; give wisdom to those who lead.',
        'Let Your kingdom come and Your will be done, in my small corner of the earth as it is in heaven.',
      ],
    },
    {
      label: 'Consecration',
      lines: [
        'Now, Lord, this day is Yours before it is mine.',
        'Whatever I meet in it — welcome or unwelcome — let me meet it in Your presence.',
        'Through Jesus Christ our Lord, who lives and reigns with You and the Holy Spirit, one God, now and forever.',
      ],
    },
  ],
  allusions: [
    { phrase: 'The heavens declare Your glory', reference: 'Psalm 19:1' },
    { phrase: 'high above all nations', reference: 'Psalm 113:4' },
    {
      phrase: 'not far from any one of us … live and move and have our being',
      reference: 'Acts 17:27–28',
    },
    { phrase: 'You are God, and there is no other', reference: 'Isaiah 45:22' },
    { phrase: 'Not my will, but Yours, be done', reference: 'Luke 22:42' },
    {
      phrase: 'Your mercies are new every morning … You are faithful',
      reference: 'Lamentations 3:22–23',
    },
    { phrase: 'Search me, O God, and know my heart', reference: 'Psalm 139:23' },
    { phrase: 'I have loved my own way', reference: 'Isaiah 53:6' },
    { phrase: 'gave Himself for me', reference: 'Galatians 2:20' },
    { phrase: 'Create in me a clean heart…', reference: 'Psalm 51:10' },
    { phrase: 'apart from You I can do nothing', reference: 'John 15:5' },
    { phrase: 'Give me this day my daily bread', reference: 'Matthew 6:11' },
    { phrase: 'Your kingdom come and Your will be done…', reference: 'Matthew 6:10' },
  ],
  endsWithAmen: true,
}

export const morningSending1: PrayerContent = {
  id: 'morning-sending-1',
  title: 'Sending',
  kind: 'sending',
  movements: [
    {
      lines: [
        'Go now into the hours ahead.',
        'The Lord goes before you; He will not leave you nor forsake you.',
        'Walk gently. Speak honestly. Work faithfully.',
        'And may the peace of God, which passes all understanding, keep your heart and mind in Christ Jesus.',
      ],
    },
  ],
  allusions: [
    { phrase: 'The Lord goes before you; He will not leave you', reference: 'Deuteronomy 31:8' },
    { phrase: 'the peace of God, which passes all understanding…', reference: 'Philippians 4:7' },
  ],
  endsWithAmen: true,
}

export const morningPrayer2: PrayerContent = {
  id: 'morning-prayer-2',
  title: 'A Morning Prayer of Trust',
  kind: 'guided',
  movements: [
    {
      label: 'Adoration',
      lines: [
        'Father of lights, every good gift comes down from You, and with You there is no shadow of turning.',
        'While I slept, You kept the world. The sun rose without my help; Your faithfulness needed nothing from me.',
        'Great is Your faithfulness — morning by morning new mercies I see.',
        'You are good, and what You do is good; teach me to begin here.',
      ],
    },
    {
      label: 'Surrender',
      lines: [
        'Lord Jesus, You emptied Yourself and took the form of a servant. I want to begin my day the way You began Yours — given, not grasping.',
        'I lay down my need to be impressive. I lay down my rehearsals of yesterday and my anxieties about tomorrow.',
        'Today has enough in it; let me live it with You.',
      ],
    },
    {
      label: 'Gratitude and Confession',
      lines: [
        'Thank You for what I did not choose and could not make: this body, this breath, this light.',
        'And forgive me for how easily I treat Your gifts as my possessions and Your people as my audience.',
        'Have mercy on me, O God, according to Your steadfast love.',
      ],
    },
    {
      label: 'Dependence and Intercession',
      lines: [
        'Holy Spirit, be my strength when the day grows heavy and my honesty when it would be easier to hide.',
        'I remember before You now the ones who wake to grief today, the ones who wake to fear, and the ones who do not know You keep them.',
        'Hold them in the everlasting arms.',
      ],
    },
    {
      label: 'Consecration',
      lines: [
        'The steadfast love of the Lord never ceases; His mercies never come to an end.',
        'So I will wait for You, and I will walk with You, this day and all my days.',
        'Through Jesus Christ our Lord.',
      ],
    },
  ],
  allusions: [
    {
      phrase: 'Father of lights … no shadow of turning',
      reference: 'James 1:17',
    },
    { phrase: 'Great is Your faithfulness … new mercies', reference: 'Lamentations 3:22–23' },
    { phrase: 'You are good, and what You do is good', reference: 'Psalm 119:68' },
    { phrase: 'emptied Yourself … form of a servant', reference: 'Philippians 2:7' },
    { phrase: 'Today has enough in it', reference: 'Matthew 6:34' },
    {
      phrase: 'Have mercy on me, O God, according to Your steadfast love',
      reference: 'Psalm 51:1',
    },
    { phrase: 'the everlasting arms', reference: 'Deuteronomy 33:27' },
    {
      phrase: 'The steadfast love of the Lord never ceases…',
      reference: 'Lamentations 3:22',
    },
  ],
  endsWithAmen: true,
}

export const morningSending2: PrayerContent = {
  id: 'morning-sending-2',
  title: 'Sending',
  kind: 'sending',
  movements: [
    {
      lines: [
        'The day is before you, and the Lord is before the day.',
        'Whatever it brings, His mercy will be there first.',
        'Go in peace, to love and serve the Lord — and the people He puts in your path.',
      ],
    },
  ],
  allusions: [
    { phrase: 'Go in peace, to love and serve', reference: 'traditional dismissal; cf. Luke 7:50' },
  ],
  endsWithAmen: true,
}
