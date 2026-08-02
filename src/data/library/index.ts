import type { LibraryEntry } from '../../types/content'

/**
 * The Library is a reference, not a syllabus. Every entry carries a claim kind,
 * so a psychological finding is never dressed as a scriptural teaching, and the
 * curriculum writer's own inference is labelled as inference.
 */

const passages: LibraryEntry[] = [
  {
    id: 'p-prov-1-7',
    kind: 'passage',
    title: 'The beginning of knowledge',
    subtitle: 'Proverbs 1:7',
    summary: 'Wisdom is anchored somewhere before it is a skill.',
    claimKind: 'scripture',
    tags: ['wisdom', 'fear of the Lord', 'foundations'],
    relatedLessonIds: ['l01-1'],
    sourceNote: 'World English Bible, public domain.',
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 1:7',
        translation: 'World English Bible',
        text: 'The fear of Yahweh is the beginning of knowledge; but the foolish despise wisdom and instruction.',
      },
      {
        kind: 'p',
        text: 'Not a claim that clever people are godless, but a claim about anchoring: to fear God is to accept that you are answerable to a moral order you did not author. Everything downstream — including how you read a conversation — is shaped by whether you think you are describing reality or writing it.',
      },
    ],
  },
  {
    id: 'p-prov-18-13',
    kind: 'passage',
    title: 'Answering before hearing',
    subtitle: 'Proverbs 18:13',
    summary: 'The shortest description of the commonest failure in counsel.',
    claimKind: 'scripture',
    tags: ['listening', 'counsel', 'haste'],
    relatedLessonIds: ['l01-1', 'l09-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 18:13',
        translation: 'World English Bible',
        text: 'He who gives answer before he hears, that is folly and shame to him.',
      },
      {
        kind: 'p',
        text: 'Note that it is called folly *and shame* — not merely ineffective but disgraceful. The verse assumes that answering early is usually about the answerer.',
      },
    ],
  },
  {
    id: 'p-prov-18-17',
    kind: 'passage',
    title: 'The one who pleads first',
    subtitle: 'Proverbs 18:17',
    summary: 'A three-thousand-year-old description of the ladder of inference.',
    claimKind: 'scripture',
    tags: ['evidence', 'fairness', 'conflict'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 18:17',
        translation: 'World English Bible',
        text: 'He who pleads his cause first seems right; until another comes and questions him.',
      },
      {
        kind: 'p',
        text: 'The first coherent account is persuasive out of all proportion to its evidential weight — not because listeners are careless, but because a complete story is easier to hold than an incomplete one.',
      },
    ],
  },
  {
    id: 'p-prov-20-5',
    kind: 'passage',
    title: 'Deep water',
    subtitle: 'Proverbs 20:5',
    summary: 'What is in a person is real, and it will not come up on its own.',
    claimKind: 'scripture',
    tags: ['listening', 'understanding'],
    relatedLessonIds: ['l09-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 20:5',
        translation: 'World English Bible',
        text: 'Counsel in the heart of man is like deep water; but a man of understanding will draw it out.',
      },
      {
        kind: 'p',
        text: "A bucket does not go down and tell the water what it is. Drawing out is active and it is not the same as interpreting on someone's behalf.",
      },
    ],
  },
  {
    id: 'p-prov-26-4-5',
    kind: 'passage',
    title: 'Two adjacent contradictions',
    subtitle: 'Proverbs 26:4–5',
    summary: "The compiler's own instruction about how to read the book.",
    claimKind: 'scripture',
    tags: ['genre', 'wisdom literature', 'judgement'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 26:4-5',
        translation: 'World English Bible',
        text: "Don't answer a fool according to his folly, lest you also be like him. Answer a fool according to his folly, lest he be wise in his own conceit.",
      },
      {
        kind: 'p',
        text: 'Flatly contradictory as rules; perfectly coherent as observations that require you to judge which case you are in. Their placement side by side is deliberate and is the single best argument that Proverbs is not a book of guarantees.',
      },
    ],
  },
  {
    id: 'p-psalm-91',
    kind: 'passage',
    title: 'Psalm 91, and its most famous misuse',
    subtitle: 'Psalm 91:9–12; Matthew 4:5–7',
    summary: 'A psalm of confidence, quoted accurately in the wilderness by the wrong speaker.',
    claimKind: 'scripture',
    tags: ['genre', 'suffering', 'promises'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Psalm 91:11-12',
        translation: 'World English Bible',
        text: "For he will put his angels in charge of you, to guard you in all your ways. They will bear you up in their hands, so that you won't dash your foot against a stone.",
      },
      {
        kind: 'p',
        text: 'These verses appear once in the Gospels, on the lips of the tempter, urging Jesus to jump from the temple. Jesus does not deny the text; he denies the use — *you shall not test the Lord your God.* Scripture contains its own warning against reading this psalm as a guarantee.',
      },
      {
        kind: 'p',
        text: 'Read alongside Psalm 88, which is in the same collection and ends in unrelieved darkness. Both are given. Neither cancels the other.',
      },
    ],
  },
  {
    id: 'p-job-2-13',
    kind: 'passage',
    title: 'Seven days on the ground',
    subtitle: 'Job 2:11–13',
    summary:
      'The most competent act of friendship recorded in Scripture, immediately before its opposite.',
    claimKind: 'scripture',
    tags: ['suffering', 'presence', 'grief'],
    relatedLessonIds: ['l07-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Job 2:13',
        translation: 'World English Bible',
        text: 'So they sat down with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his grief was very great.',
      },
      {
        kind: 'p',
        text: 'The reason is given: they *saw* the size of it, and calibrated. The silence is a judgement about proportion rather than awkwardness. Everything they do right is in the body — travelling, tearing, sitting on the ground.',
      },
    ],
  },
  {
    id: 'p-job-42-7',
    kind: 'passage',
    title: 'The verdict falls on the defenders',
    subtitle: 'Job 42:7',
    summary: 'God is angry with the three men who defended him, not with the one who accused him.',
    claimKind: 'scripture',
    tags: ['suffering', 'theodicy', 'speech'],
    relatedLessonIds: ['l07-1', 'l12-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Job 42:7',
        translation: 'World English Bible',
        text: 'Yahweh said to Eliphaz the Temanite, "My wrath is kindled against you, and against your two friends; for you have not spoken of me the thing that is right, as my servant Job has."',
      },
      {
        kind: 'p',
        text: 'They were not defending God. They were defending a theory about God, and they were prepared to sacrifice Job to keep it. Under pressure the two feel identical; the test is which one you let go of when they conflict.',
      },
    ],
  },
  {
    id: 'p-micah-6-8',
    kind: 'passage',
    title: 'Justice, mercy, humility',
    subtitle: 'Micah 6:8',
    summary:
      'Not a formula for resolving conflicts between duties — a rule about what you may not become.',
    claimKind: 'scripture',
    tags: ['justice', 'mercy', 'duty'],
    relatedLessonIds: ['l08-1', 'l12-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Micah 6:8',
        translation: 'World English Bible',
        text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
      },
      {
        kind: 'p',
        text: 'It does not say what to do when justice and mercy point different ways. What it forbids is settling into being a person who has quietly dropped one of them.',
      },
    ],
  },
  {
    id: 'p-james-1-14',
    kind: 'passage',
    title: 'Conceived, then born',
    subtitle: 'James 1:14–15',
    summary: 'Temptation described as a gestation rather than a fork in the road.',
    claimKind: 'scripture',
    tags: ['temptation', 'desire', 'self-deception'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'James 1:14-15',
        translation: 'World English Bible',
        text: 'But each one is tempted when he is drawn away by his own lust and enticed. Then the lust, when it has conceived, bears sin. The sin, when it is full grown, produces death.',
      },
      {
        kind: 'p',
        text: 'By the time there is an act to resist, the process has been running for some time. This is why people are genuinely astonished by their own conduct: they meet a full-grown thing they were introduced to months earlier.',
      },
    ],
  },
  {
    id: 'p-psalm-139',
    kind: 'passage',
    title: 'Search me',
    subtitle: 'Psalm 139:23–24',
    summary: 'The remedy for a heart that cannot audit itself is not more introspection.',
    claimKind: 'scripture',
    tags: ['self-deception', 'confession', 'prayer'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Psalm 139:23-24',
        translation: 'World English Bible',
        text: 'Search me, God, and know my heart. Try me, and know my thoughts. See if there is any wicked way in me, and lead me in the everlasting way.',
      },
      {
        kind: 'p',
        text: 'The psalmist asks to be searched by someone else, because the instrument he would use to examine himself is not neutral about the result. Visibility, confession, and accountability are the load-bearing remedy for a specific epistemic problem, not optional extras.',
      },
    ],
  },
  {
    id: 'p-1-cor-13-12',
    kind: 'passage',
    title: 'In a mirror, dimly',
    subtitle: '1 Corinthians 13:12',
    summary: 'Partial knowledge given as a reason for charity, not for paralysis.',
    claimKind: 'scripture',
    tags: ['humility', 'knowledge', 'love'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'scripture',
        ref: '1 Corinthians 13:12',
        translation: 'World English Bible',
        text: 'For now we see in a mirror, dimly, but then face to face. Now I know in part, but then I will know fully, even as I was also fully known.',
      },
      {
        kind: 'p',
        text: 'Its position at the end of the love chapter is the point. Your account of another person is partial in a way theirs is not, and that fact is supposed to change how hard you hold it.',
      },
    ],
  },
  {
    id: 'p-luke-15',
    kind: 'passage',
    title: 'The son who stayed outside',
    subtitle: 'Luke 15:25–32',
    summary: 'A parable that ends with an invitation and no answer.',
    claimKind: 'scripture',
    tags: ['parable', 'resentment', 'observation'],
    relatedLessonIds: ['l02-1'],
    body: [
      {
        kind: 'p',
        text: 'Three namings of one man in eight verses: the servant says *your brother*, the elder son says *this your son*, and the father hands the word back — *this, your brother.* The elder son never addresses his father by any title; the father opens his reply with one.',
      },
      {
        kind: 'p',
        text: 'The parable does not say whether he goes in. Jesus told it to people who were complaining that he ate with sinners, and left the ending open in front of them.',
      },
    ],
  },
  {
    id: 'p-2-sam-12',
    kind: 'passage',
    title: 'You are the man',
    subtitle: '2 Samuel 12:1–7',
    summary: 'Three verses of story, four words of application, and a king convicts himself.',
    claimKind: 'scripture',
    tags: ['parable', 'confrontation', 'analogy'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'p',
        text: 'Nathan brings David a legal case, in his capacity as judge — not a sermon. The parable contains no adultery and no murder; only the structure transfers, which is what allows David to pass sentence before he recognises himself.',
      },
      {
        kind: 'p',
        text: 'David supplies the moral characterisation himself: *because he had no pity.* Nathan never used the word.',
      },
    ],
  },
  {
    id: 'p-1-sam-25',
    kind: 'passage',
    title: 'Abigail on the mountain road',
    subtitle: '1 Samuel 25:23–35',
    summary: "A woman intercepts four hundred armed men and changes a king's mind in one speech.",
    claimKind: 'scripture',
    tags: ['counsel', 'courage', 'leadership'],
    relatedLessonIds: ['l10-1'],
    body: [
      {
        kind: 'p',
        text: 'Eight moves: act before speaking; concede everything concedable; do not defend the indefensible; never accuse; appeal to what he already wants more; leave a door he can walk through without kneeling; and — later, with Nabal — wait until morning.',
      },
      {
        kind: 'p',
        text: 'David thanks her for her *discretion*, not for the provisions. He names what actually stopped him.',
      },
    ],
  },
  {
    id: 'p-1-tim-5-19',
    kind: 'passage',
    title: 'Two or three witnesses',
    subtitle: '1 Timothy 5:19, with a warning',
    summary: 'A real safeguard that has been repeatedly repurposed into a way of not looking.',
    claimKind: 'scripture',
    tags: ['justice', 'safeguarding', 'misuse'],
    relatedLessonIds: ['l12-1'],
    sourceNote:
      'Presented with a caution because this verse has caused serious harm when applied outside its scope.',
    body: [
      {
        kind: 'scripture',
        ref: '1 Timothy 5:19',
        translation: 'World English Bible',
        text: "Don't receive an accusation against an elder, except at the word of two or three witnesses.",
      },
      {
        kind: 'p',
        text: "It concerns formal charges within a congregation and exists to protect a leader from a single malicious voice. It has been used, in institutions that should have known better, to justify disregarding a child's account. Deuteronomy 19:15 governs conviction, not whether a matter is examined — and the same law commands the protection of the vulnerable with unusual force.",
      },
    ],
  },
]

const concepts: LibraryEntry[] = [
  {
    id: 'knowledge-understanding-wisdom',
    kind: 'concept',
    title: 'Knowledge, understanding, wisdom',
    summary: 'Three different things, and only one of them has a *when* in it.',
    claimKind: 'inference',
    tags: ['foundations', 'wisdom'],
    relatedLessonIds: ['l01-1'],
    body: [
      {
        kind: 'list',
        items: [
          '**Knowledge:** holding what is the case.',
          '**Understanding:** seeing how what is the case hangs together.',
          '**Wisdom:** knowing what to do, with whom, in what order, at what cost, now.',
        ],
      },
      {
        kind: 'p',
        text: 'Intelligence gets you the map faster. It does not tell you that a true sentence delivered on the wrong Monday will be heard as the company talking.',
      },
    ],
  },
  {
    id: 'phronesis',
    kind: 'concept',
    title: 'Phronesis (practical wisdom)',
    subtitle: 'Aristotle, Nicomachean Ethics',
    summary: 'The excellence of deliberating well about particulars — inseparable from character.',
    claimKind: 'philosophy',
    tags: ['virtue', 'aristotle', 'judgement'],
    relatedLessonIds: ['l01-1', 'l06-1'],
    body: [
      {
        kind: 'p',
        text: 'Aristotle separates knowledge of what cannot be otherwise (*episteme*), skill at making (*techne*), theoretical wisdom (*sophia*), and practical wisdom (*phronesis*). Only the last is about what to do here.',
      },
      {
        kind: 'p',
        text: 'Two claims matter: it cannot be had in general, only about particulars — which is why the experienced are often wiser than the brilliant; and it cannot be separated from character, because good reasoning aimed at a bad target is what Aristotle calls cleverness rather than wisdom.',
      },
    ],
  },
  {
    id: 'fear-of-the-lord',
    kind: 'concept',
    title: 'The fear of the Lord',
    summary: 'Not terror. The acceptance that you are not the final measure.',
    claimKind: 'scripture',
    tags: ['foundations', 'humility'],
    relatedLessonIds: ['l01-1'],
    body: [
      {
        kind: 'p',
        text: 'Called the beginning of knowledge and of wisdom. The claim is about anchoring rather than emotion: there is a real moral order you are answerable to and did not invent, and your reading of any situation is affected by whether you think you are describing reality or authoring it.',
      },
    ],
  },
  {
    id: 'fitting-word',
    kind: 'concept',
    title: 'The fitting word',
    subtitle: 'Proverbs 25:11',
    summary: 'Rightness in speech includes timing, audience, and form — not only content.',
    claimKind: 'scripture',
    tags: ['speech', 'timing'],
    relatedLessonIds: ['l01-1', 'l11-1'],
    body: [
      {
        kind: 'scripture',
        ref: 'Proverbs 25:11',
        translation: 'World English Bible',
        text: 'A word fitly spoken is like apples of gold in settings of silver.',
      },
      {
        kind: 'p',
        text: 'The setting is part of the object. A true sentence is not yet a good one.',
      },
    ],
  },
  {
    id: 'observation-moves',
    kind: 'tool',
    title: 'The six observation moves',
    summary: 'Repetition, contrast, omission, order, voice, change.',
    claimKind: 'inference',
    tags: ['observation', 'reading', 'tool'],
    relatedLessonIds: ['l02-1'],
    body: [
      {
        kind: 'list',
        ordered: true,
        items: [
          '**Repetition** — what comes back?',
          '**Contrast** — what is set against what?',
          '**Omission** — what is missing that you would expect?',
          '**Order** — what comes first, last, and what interrupts?',
          '**Voice** — who speaks, who is silent, who is addressed?',
          '**Change** — where does something shift?',
        ],
      },
      {
        kind: 'p',
        text: 'Run two properly rather than six as a checklist. Observation is not staring harder; it is running a specific query that changes what your attention filters out.',
      },
    ],
  },
  {
    id: 'omission',
    kind: 'tool',
    title: 'Omission',
    summary: 'The hardest move, because absence does not attract attention.',
    claimKind: 'inference',
    tags: ['observation', 'tool'],
    relatedLessonIds: ['l02-1'],
    body: [
      {
        kind: 'p',
        text: 'The elder brother never says *father*. The parable never says whether he goes in. Job is never told why. In each case the largest fact is a thing that is not there.',
      },
    ],
  },
  {
    id: 'shift-in-address',
    kind: 'tool',
    title: 'Shift in address',
    summary: 'How someone names a person tells you the relationship they are claiming.',
    claimKind: 'inference',
    tags: ['observation', 'language'],
    relatedLessonIds: ['l02-1'],
    body: [
      {
        kind: 'p',
        text: '*Your brother* / *this your son* / *this, your brother.* Sustained refusal of an available word is about as strong as textual evidence gets without being stated outright.',
      },
    ],
  },
  {
    id: 'genre',
    kind: 'tool',
    title: 'Genre',
    summary: 'Not a label. A set of permissions about what a text can be asked to do.',
    claimKind: 'inference',
    tags: ['interpretation', 'tool', 'scripture'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Law binds. Narrative reports, often without endorsing. Wisdom sayings describe how life generally runs. Lament is prayer for the unresolved. Apocalyptic works in image and number, deliberately. Parable gets past your defences before you know what it is about.',
      },
      {
        kind: 'p',
        text: 'The honest test: would you have made the same genre call in a comfortable week? Genre reading that only ever loosens obligations is not genre reading.',
      },
    ],
  },
  {
    id: 'proverb-not-promise',
    kind: 'tool',
    title: 'A proverb is not a promise',
    summary: 'The single most consequential genre error in ordinary Christian life.',
    claimKind: 'inference',
    tags: ['interpretation', 'suffering', 'proverbs'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Promoting an observation into a guarantee produces a two-door dilemma when life does not comply: either the reader failed, or God did. Both doors are false, and people walk through the first one for years.',
      },
    ],
  },
  {
    id: 'tenor-vehicle-ground',
    kind: 'tool',
    title: 'Tenor, vehicle, ground',
    subtitle: 'I. A. Richards, 1936',
    summary: 'The ground of a metaphor is always smaller than the vehicle.',
    claimKind: 'literary',
    tags: ['metaphor', 'interpretation', 'tool'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Tenor: what you are talking about. Vehicle: the image. Ground: the specific respect in which the image illuminates. "Yahweh is my shepherd" carries provision, guidance, defence, individual knowledge — and not that we are livestock for slaughter.',
      },
      {
        kind: 'p',
        text: 'The commonest interpretive abuse in preaching is extending a metaphor past its ground and then treating the extension as though the text had said it.',
      },
    ],
  },
  {
    id: 'polyvalence',
    kind: 'tool',
    title: 'Polyvalence',
    summary: 'Meaning is produced by the image in this passage, not stored in the symbol.',
    claimKind: 'inference',
    tags: ['symbolism', 'interpretation'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Water is the flood and the well. A lion is Christ in Revelation 5 and the devil in 1 Peter 5. Leaven is corruption and the kingdom. A symbol dictionary is a poor instrument: ask what the symbol is doing here before asking what it usually means.',
      },
    ],
  },
  {
    id: 'ladder-of-inference',
    kind: 'tool',
    title: 'The ladder of inference',
    subtitle: 'Chris Argyris',
    summary:
      'Select data, add meaning, assume, conclude, believe, act — and the belief then chooses the data.',
    claimKind: 'leadership',
    tags: ['evidence', 'bias', 'tool'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'p',
        text: 'Each rung feels like perception rather than a step you took. The loop closes when the belief at the top starts selecting the data at the bottom.',
      },
      {
        kind: 'p',
        text: 'Diagnostic question: *what else would look exactly like this?* If nothing does, you have evidence. If several things do, you have a hypothesis wearing the clothes of a conclusion.',
      },
    ],
  },
  {
    id: 'alternative-hypotheses',
    kind: 'tool',
    title: 'Generating rivals',
    summary: 'Write out several accounts that fit the same facts, before ranking any of them.',
    claimKind: 'inference',
    tags: ['evidence', 'tool', 'humility'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'p',
        text: 'Rivals are extremely hard to produce once you have a favourite, which is why the work has to be deliberate. The discipline is not doubt — doubt is cheap and paralysing.',
      },
    ],
  },
  {
    id: 'falsifying-question',
    kind: 'tool',
    title: 'The action under every hypothesis',
    summary: 'Find what is right whichever reading is true, and do it now.',
    claimKind: 'inference',
    tags: ['decision', 'tool'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'p',
        text: 'Analysis is only avoidance when it delays an action that does not depend on its outcome. In practice this collapses a large fraction of agonising into one phone call.',
      },
      {
        kind: 'p',
        text: 'The companion test: is your uncertainty changing what you *do*, or only what you *say*?',
      },
    ],
  },
  {
    id: 'the-earlier-decision',
    kind: 'concept',
    title: 'The earlier decision',
    summary: 'The moment that felt like a decision is usually not the one that mattered.',
    claimKind: 'inference',
    tags: ['temptation', 'self-deception', 'formation'],
    relatedLessonIds: ['l05-1', 'l12-1'],
    body: [
      {
        kind: 'p',
        text: 'An email written and not sent. A file note reading "discussed informally." A rule you were going to make next week. These discharge the discomfort that would have produced the action, and everything afterwards is the working-out of a permission already granted.',
      },
      {
        kind: 'p',
        text: 'Corollary: undisclosed and undone things appreciate. Whatever it costs today is the cheapest it will ever be, and the growth is not linear.',
      },
    ],
  },
  {
    id: 'desire-recruits-reason',
    kind: 'concept',
    title: 'Desire recruits reasoning',
    summary: 'Wanting does not fight your judgement. It conscripts it.',
    claimKind: 'inference',
    tags: ['self-deception', 'temptation'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'p',
        text: 'A repayment plan written in good faith with real accounting skill. Three appraisals of a tree, every one of them of a genuine good. The better you reason, the more persuasive the permission you can construct — which is why competence is not protection.',
      },
    ],
  },
  {
    id: 'precommitment',
    kind: 'tool',
    title: 'Precommitment',
    summary: 'Bind the future self while you are still the one who can.',
    claimKind: 'psychology',
    tags: ['temptation', 'habit', 'tool'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'p',
        text: "Named a *Ulysses contract* after the mast. It works because it does not rely on the resource that will be depleted. The crew's method — removing exposure entirely — is different and equally valid; most lives need both.",
      },
      {
        kind: 'p',
        text: "The rule's value lies entirely in having been made before you needed it.",
      },
    ],
  },
  {
    id: 'habituation',
    kind: 'concept',
    title: 'Habituation',
    summary: 'We become just by doing just acts. Virtue is stored, not summoned.',
    claimKind: 'philosophy',
    tags: ['virtue', 'formation', 'aristotle'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: 'A four-second decision contains no deliberation; it contains whatever is already installed. This is why "I would speak up if it really mattered" is usually false — the moment it matters is the moment you have least access to your reasoning.',
      },
      {
        kind: 'p',
        text: 'Also: doing the generous thing while resenting it is not fraud. It is being early.',
      },
    ],
  },
  {
    id: 'the-mean',
    kind: 'concept',
    title: 'The mean, and vices past their measure',
    summary:
      'A virtue sits between two failures — and most vices are virtues without an upper bound.',
    claimKind: 'philosophy',
    tags: ['virtue', 'diagnosis'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: 'The mean is not moderation and not an average: it is the right amount, at the right time, toward the right person, for the right reason — and it is relative to the person.',
      },
      {
        kind: 'p',
        text: 'The practical corollary is the useful part. The manipulative person is often loyal without limit; the controlling person, responsible without limit. Name the measure, not the quality, or you attack something they correctly value and they will defend it.',
      },
    ],
  },
  {
    id: 'virtue-vs-mood',
    kind: 'concept',
    title: 'Virtue is not a feeling',
    summary:
      'A settled disposition, laid down by repetition, available when there is no time to think.',
    claimKind: 'philosophy',
    tags: ['virtue', 'formation'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: 'You cannot summon what you have not stored. A decision made in a calm chair on a Sunday has almost no purchase on a Wednesday at four.',
      },
    ],
  },
  {
    id: 'fruit-and-formation',
    kind: 'concept',
    title: 'Fruit and training',
    summary: 'Grace does not remove the ordinary means. You still do the reps.',
    claimKind: 'scripture',
    tags: ['formation', 'grace', 'virtue'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: "Galatians 5 describes fruit — grown, not manufactured. Hebrews 5:14 describes senses trained *by reason of use*, and 1 Timothy 4:7 uses an athlete's verb. The tradition has generally held these together: God's work and habituation are not competitors.",
      },
      {
        kind: 'p',
        text: 'How exactly they relate is genuinely disputed between traditions, and this entry does not settle it.',
      },
    ],
  },
  {
    id: 'presence-over-explanation',
    kind: 'concept',
    title: 'Presence before explanation',
    summary: 'In the room, with the person, explanation is usually not the instrument.',
    claimKind: 'inference',
    tags: ['suffering', 'counsel', 'grief'],
    relatedLessonIds: ['l07-1'],
    body: [
      {
        kind: 'p',
        text: 'Romans 12:15 says weep with those who weep. Not *explain to*, not *correct the theology of*. The instruction is to match, not to fix.',
      },
      {
        kind: 'p',
        text: 'This is a claim about the room, not a claim that suffering is inexplicable. Scripture explains suffering in several ways elsewhere; what Job restricts is the confident application to a particular person.',
      },
    ],
  },
  {
    id: 'theodicy-in-the-room',
    kind: 'concept',
    title: 'Defending God vs defending your account of God',
    summary: 'Under pressure they feel identical. The test is which one you let go of.',
    claimKind: 'inference',
    tags: ['suffering', 'theology', 'humility'],
    relatedLessonIds: ['l07-1', 'l12-1'],
    body: [
      {
        kind: 'p',
        text: "Job's friends had a live person contradicting their theory and concluded the person must be lying. That is the failure God names in 42:7 — not cruelty, and not bad theology in the abstract, but saying untrue things about him in order to keep a system standing.",
      },
    ],
  },
  {
    id: 'lament-as-faith',
    kind: 'concept',
    title: 'Lament is not a failure of faith',
    summary: 'A third of the Psalter, and the words Jesus prayed from the cross.',
    claimKind: 'scripture',
    tags: ['suffering', 'prayer', 'grief'],
    relatedLessonIds: ['l07-1'],
    body: [
      {
        kind: 'p',
        text: 'Psalm 88 ends in darkness with nothing resolved. Jeremiah accuses God of deceiving him. On the cross Jesus prays Psalm 22. When someone says something furious to God in front of you, the material they are producing is already in the canon.',
      },
    ],
  },
  {
    id: 'the-whirlwind',
    kind: 'concept',
    title: 'The whirlwind answers with questions',
    summary: 'Job asks why and receives a presence instead of a reason.',
    claimKind: 'scripture',
    tags: ['suffering', 'mystery'],
    relatedLessonIds: ['l07-1'],
    body: [
      {
        kind: 'p',
        text: 'Four chapters about wild goats, ostriches, the sea, and the storehouses of snow. Read as an argument it is a change of subject; read as an encounter it is the thing he asked for. He never learns why, and stops needing to — which is either the most profound thing in the wisdom literature or an evasion, and honest readers have said both.',
      },
    ],
  },
  {
    id: 'prima-facie-duties',
    kind: 'concept',
    title: 'Prima facie duties',
    subtitle: 'W. D. Ross, 1930',
    summary: 'Several genuine duties, none absolute; one becomes your actual duty here.',
    claimKind: 'philosophy',
    tags: ['ethics', 'duty', 'decision'],
    relatedLessonIds: ['l08-1'],
    body: [
      {
        kind: 'p',
        text: 'Fidelity, reparation, gratitude, justice, beneficence, self-improvement, non-maleficence. Each binding, none overriding. When two conflict, one is your actual duty and the other does not disappear.',
      },
    ],
  },
  {
    id: 'residue',
    kind: 'concept',
    title: 'Moral residue',
    summary: 'The overridden duty leaves a real debt.',
    claimKind: 'philosophy',
    tags: ['ethics', 'duty', 'conscience'],
    relatedLessonIds: ['l08-1', 'l12-1'],
    body: [
      {
        kind: 'p',
        text: 'Break a small promise to save a life and you did the right thing *and* you still owe the person an apology. This is why a person of good character feels something after a correct hard decision — and why feeling nothing is a warning rather than a sign of clarity.',
      },
    ],
  },
  {
    id: 'justice-and-mercy',
    kind: 'concept',
    title: 'Mercy that suppresses truth is not the biblical article',
    summary: 'In Scripture, forgiveness follows naming rather than replacing it.',
    claimKind: 'scripture',
    tags: ['justice', 'mercy', 'forgiveness'],
    relatedLessonIds: ['l08-1'],
    body: [
      {
        kind: 'p',
        text: 'Nathan tells David what he did. Jesus tells the woman at the well about her five husbands. Psalm 85 imagines mercy and truth *meeting*, which is remarkable precisely because in ordinary practice they are traded.',
      },
    ],
  },
  {
    id: 'moral-frameworks',
    kind: 'tool',
    title: 'Three frameworks, named',
    summary: 'Consequences, duty, character — and what Scripture adds to all three.',
    claimKind: 'philosophy',
    tags: ['ethics', 'tool'],
    relatedLessonIds: ['l08-1'],
    body: [
      {
        kind: 'list',
        items: [
          '**Consequences** — best outcome overall. Powerful, and it will keep arguing for concealment right up to the edge.',
          '**Duty** — required regardless of outcome. Resistant to self-interest, and silent about the people it costs.',
          '**Character** — what would a person of integrity do, and what will this make me? Best on manner and sequence, vaguest at the moment of decision.',
        ],
      },
      {
        kind: 'p',
        text: 'Scripture uses all three registers. What it adds is that the duties are owed to a person rather than derived from a principle.',
      },
    ],
  },
  {
    id: 'non-negotiable-duty',
    kind: 'concept',
    title: 'The duty that is not in the balance',
    summary:
      'Some obligations are not weighed against others. Recognising them is the first skill.',
    claimKind: 'inference',
    tags: ['ethics', 'safeguarding', 'leadership'],
    relatedLessonIds: ['l12-1'],
    body: [
      {
        kind: 'p',
        text: 'A report that a person in your care may have been harmed goes through the safeguarding process. It is not yours to weigh, investigate, or resolve, and a retraction does not close it. Referral is not accusation; a fair process protects the accused as much as the complainant.',
      },
      {
        kind: 'p',
        text: 'Everything Module 8 taught about balancing duties applies to the rest of a case like that, and not to this part of it.',
      },
    ],
  },
  {
    id: 'presenting-problem',
    kind: 'concept',
    title: 'The presenting problem',
    summary: 'What someone opens with is the most acceptable version, not the reason they came.',
    claimKind: 'psychology',
    tags: ['listening', 'counsel'],
    relatedLessonIds: ['l09-1'],
    body: [
      {
        kind: 'p',
        text: 'Four markers that something is underneath: **displacement** (asked about a third party), **disclaimers** ("this is stupid"), **return** (they come back to the same detail), and **asymmetry of energy** (a short question that took a long time to arrive).',
      },
      {
        kind: 'p',
        text: 'Having learned the markers, do not announce them. The reading determines what you say next; it is not itself said.',
      },
    ],
  },
  {
    id: 'question-under-question',
    kind: 'concept',
    title: 'The question under the question',
    summary:
      'People say things aloud to hear how they sound. A statement is not always a position.',
    claimKind: 'inference',
    tags: ['listening', 'counsel'],
    relatedLessonIds: ['l09-1'],
    body: [
      {
        kind: 'p',
        text: '"How did you work out the number?" says a question about scheduling. It does the work of asking whether guilt is survivable.',
      },
    ],
  },
  {
    id: 'drawing-out',
    kind: 'tool',
    title: 'Costly self-disclosure',
    summary: 'What most reliably opens a well is not a question.',
    claimKind: 'inference',
    tags: ['listening', 'counsel', 'tool'],
    relatedLessonIds: ['l09-1'],
    body: [
      {
        kind: 'p',
        text: 'Say something true and slightly costly about yourself, and then stop. A probe asks the other person to spend first; a disclosure spends first on their behalf.',
      },
    ],
  },
  {
    id: 'reflective-listening',
    kind: 'psychology',
    title: 'Rogers and the three conditions',
    summary:
      'Genuineness, unconditional positive regard, accurate empathy — the technique was meant as evidence of the third.',
    claimKind: 'psychology',
    tags: ['listening', 'counselling', 'research'],
    relatedLessonIds: ['l09-1'],
    sourceNote:
      'The "common factors" finding — that relationship quality predicts outcome more than method — is among the more robust results in psychotherapy research. Rogers\' broader anthropology sits awkwardly with a doctrine of sin; take the finding, not the framework.',
    body: [
      {
        kind: 'p',
        text: 'This is why parroting fails. "So what I am hearing is…" performs the technique in the absence of the condition, and people can tell instantly.',
      },
    ],
  },
  {
    id: 'righting-reflex',
    kind: 'psychology',
    title: 'The righting reflex',
    subtitle: 'Miller & Rollnick, motivational interviewing',
    summary:
      'Argue one side of an ambivalence and the person will voice — and then believe — the other.',
    claimKind: 'psychology',
    tags: ['counsel', 'persuasion', 'research'],
    relatedLessonIds: ['l10-1'],
    sourceNote:
      'Motivational interviewing has a solid trial base, strongest in substance use; effects vary by domain. Reactance theory (Brehm, 1966) is long-established.',
    body: [
      {
        kind: 'p',
        text: 'People talk themselves *into* positions by defending them. A well-meaning helper can reliably increase commitment to the thing they are opposing — which is why the most common failure in counsel is caused by caring.',
      },
    ],
  },
  {
    id: 'give-the-work-back',
    kind: 'tool',
    title: 'Give the work back',
    subtitle: 'Ronald Heifetz',
    summary: 'Solving it for them removes the only thing that would have changed them.',
    claimKind: 'leadership',
    tags: ['counsel', 'leadership', 'tool'],
    relatedLessonIds: ['l10-1', 'l12-1'],
    body: [
      {
        kind: 'p',
        text: 'Related: **technical** problems are hard but solvable with existing expertise; **adaptive** challenges require the people involved to change what they value or expect, and cannot be solved on their behalf. Leaders fail by treating adaptive challenges technically — issuing a fix and moving on.',
      },
    ],
  },
  {
    id: 'appeal-to-future-self',
    kind: 'tool',
    title: 'Appeal to the future self',
    summary: 'Do not oppose what they want. Put a larger thing they already want beside it.',
    claimKind: 'inference',
    tags: ['counsel', 'persuasion', 'tool'],
    relatedLessonIds: ['l10-1'],
    body: [
      {
        kind: 'p',
        text: "Abigail describes the king David is going to be and points out that this act will be a stone in that man's shoe. There is nothing to argue with, because she has not taken a side of his ambivalence.",
      },
    ],
  },
  {
    id: 'face-saving-exit',
    kind: 'tool',
    title: 'The face-saving exit',
    summary: 'Leave a door they can walk through without kneeling.',
    claimKind: 'inference',
    tags: ['counsel', 'conflict', 'tool'],
    relatedLessonIds: ['l10-1'],
    body: [
      {
        kind: 'p',
        text: 'David does not have to admit he was wrong; he gets to be a man who accepted wise counsel. The bishop reproaches Valjean for forgetting the candlesticks in front of the police. A correct position with no exit is a position people defend.',
      },
    ],
  },
  {
    id: 'load-bearing-analogy',
    kind: 'tool',
    title: 'Load-bearing vs decorative analogy',
    summary: 'If removing the analogy removes the argument, it is load-bearing.',
    claimKind: 'inference',
    tags: ['analogy', 'communication', 'tool'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'list',
        ordered: true,
        items: [
          'Relations map, not surface features.',
          'The hearer supplies the missing premise.',
          'It arrives before the defences.',
          'It can be surrendered — *you are the man*, and then stop.',
        ],
      },
      {
        kind: 'p',
        text: 'Test before use: can the hearer reach the conclusion themselves? If they need you to explain it, it has failed, and explaining converts a discovery into a lecture.',
      },
    ],
  },
  {
    id: 'analogy-failure-modes',
    kind: 'tool',
    title: 'Four ways an analogy goes wrong',
    summary: 'Flattering, smuggling, over-extended, inside.',
    claimKind: 'inference',
    tags: ['analogy', 'communication', 'tool'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'list',
        items: [
          '**Flattering** — casts the hearer as hero or victim. Comfortable and useless.',
          '**Smuggling** — the mapping assumes what is in dispute.',
          '**Over-extended** — pressed past its ground; you are now explaining what the third character represents.',
          '**Inside** — requires knowledge the hearer lacks. The curse of knowledge.',
        ],
      },
    ],
  },
  {
    id: 'enthymeme',
    kind: 'concept',
    title: 'Enthymeme',
    subtitle: 'Aristotle, Rhetoric',
    summary:
      'An argument with a premise left unstated — and it persuades more because the audience completes it.',
    claimKind: 'philosophy',
    tags: ['rhetoric', 'persuasion', 'analogy'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'p',
        text: 'What you conclude yourself, you own. David supplies "because he had no pity"; Nathan never used the word, and that is why the conviction sticks.',
      },
    ],
  },
  {
    id: 'curse-of-knowledge',
    kind: 'psychology',
    title: 'The curse of knowledge',
    summary: 'Once you can hear the tune, you cannot imagine not hearing it.',
    claimKind: 'psychology',
    tags: ['communication', 'teaching', 'research'],
    relatedLessonIds: ['l11-1'],
    sourceNote:
      'The tapper–listener study (Newton, 1990): tappers predicted around 50% recognition; listeners identified about 2.5%.',
    body: [
      {
        kind: 'p',
        text: 'The commonest failure among people who understand their subject well: choosing analogies that work beautifully for people who already understand.',
      },
    ],
  },
  {
    id: 'attribution-error',
    kind: 'psychology',
    title: 'The fundamental attribution error',
    subtitle: 'Lee Ross, 1977',
    summary: 'Their behaviour gets a character explanation; ours gets a situational one.',
    claimKind: 'psychology',
    tags: ['bias', 'judgement', 'research'],
    relatedLessonIds: ['l04-1'],
    sourceNote:
      'Robust in outline; effect size varies across cultures and situations, and the literature is more careful now than popular summaries are.',
    body: [
      {
        kind: 'p',
        text: 'He has not replied because he is avoidant; you have not replied because it has been a week. Note the direction: it makes the least charitable reading feel like realism.',
      },
    ],
  },
  {
    id: 'motivated-reasoning',
    kind: 'psychology',
    title: 'Motivated reasoning',
    subtitle: 'Ziva Kunda, 1990',
    summary: 'We do not simply believe what we want. We construct a justification we can believe.',
    claimKind: 'psychology',
    tags: ['bias', 'self-deception', 'research'],
    relatedLessonIds: ['l05-1'],
    sourceNote:
      'Well supported. The related "moral licensing" effect is real but contested, with weak replications and modest meta-analytic estimates.',
    body: [
      {
        kind: 'p',
        text: 'The constraint is that we must be able to believe ourselves. A person who merely wanted the money would take it; the one who needs to remain someone who does not steal writes a repayment plan first.',
      },
    ],
  },
  {
    id: 'inattentional-blindness',
    kind: 'psychology',
    title: 'Inattentional blindness',
    subtitle: 'Simons & Chabris, 1999',
    summary:
      'When attention is loaded by a task, plainly visible information is not registered at all.',
    claimKind: 'psychology',
    tags: ['observation', 'attention', 'research'],
    relatedLessonIds: ['l02-1'],
    body: [
      {
        kind: 'p',
        text: 'You do not walk past a missing word because you are careless. You walk past it because you arrived with a task, and the task set the filter. Observation moves work by changing the task, one at a time.',
      },
    ],
  },
  {
    id: 'dysrationalia',
    kind: 'psychology',
    title: 'Intelligence and rationality come apart',
    subtitle: 'Keith Stanovich',
    summary: 'High cognitive ability offers little protection against common reasoning biases.',
    claimKind: 'psychology',
    tags: ['wisdom', 'bias', 'research'],
    relatedLessonIds: ['l01-1'],
    sourceNote:
      'A live area rather than a settled one; effect sizes vary and nearby literatures have replicated poorly. Suggestive support for something Proverbs already says plainly, not proof of it.',
    body: [
      {
        kind: 'p',
        text: 'A strong reasoner produces justifications quickly. If the conclusion arrives first, fluency becomes a liability.',
      },
    ],
  },
]

const virtues: LibraryEntry[] = [
  {
    id: 'v-prudence',
    kind: 'virtue',
    title: 'Prudence',
    subtitle: 'auriga virtutum — the charioteer of the virtues',
    summary: 'The virtue that tells the others when, how much, and toward whom.',
    claimKind: 'historic-christian',
    tags: ['virtue', 'aquinas', 'judgement'],
    relatedLessonIds: ['l01-1', 'l06-1'],
    body: [
      {
        kind: 'p',
        text: 'Not caution. In modern English "prudent" has drifted toward low-risk and slow; classically it is the capacity to get the right action out of a true understanding, and sometimes the right action is fast and frightening.',
      },
      {
        kind: 'p',
        text: 'Courage without prudence is recklessness. Justice without prudence is rigidity. Prudence is also the one virtue that four seconds cannot supply, which is why the true sentence has to be practised in advance.',
      },
    ],
  },
  {
    id: 'v-courage',
    kind: 'virtue',
    title: 'Courage',
    summary: 'The most over-praised virtue among people who admire virtue.',
    claimKind: 'philosophy',
    tags: ['virtue', 'risk'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: 'Between recklessness and cowardice, and dangerous without prudence. When you feel the surge, the useful question is not *am I brave enough* but *what is the true sentence available to me right now*.',
      },
    ],
  },
  {
    id: 'v-honesty',
    kind: 'virtue',
    title: 'Truthfulness',
    summary: 'Not merely the absence of false statements.',
    claimKind: 'inference',
    tags: ['virtue', 'speech'],
    relatedLessonIds: ['l12-1'],
    body: [
      {
        kind: 'p',
        text: 'The category to watch for: a statement defensible word by word and designed to produce a false belief. Surviving an audit is not the same as being honest.',
      },
    ],
  },
  {
    id: 'v-patience',
    kind: 'virtue',
    title: 'Patience',
    summary: 'Mostly a discipline about sequence rather than about waiting.',
    claimKind: 'inference',
    tags: ['virtue', 'timing'],
    relatedLessonIds: ['l01-1', 'l10-1'],
    body: [
      {
        kind: 'p',
        text: 'Abigail holds a fact for ten hours because the man she must tell is drunk. Most false dilemmas in relationships are sequencing problems wearing the costume of a choice.',
      },
    ],
  },
]

const vices: LibraryEntry[] = [
  {
    id: 'vc-self-deception',
    kind: 'vice',
    title: 'Self-deception',
    summary: 'Not lying to yourself. Arranging not to be in a position to see.',
    claimKind: 'inference',
    tags: ['vice', 'temptation'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'p',
        text: 'The unsent email is not a lie. It is a structure. Lying would require knowing the truth and stating otherwise; this is more like architecture.',
      },
    ],
  },
  {
    id: 'vc-soft-cruelty',
    kind: 'vice',
    title: 'The kindness that cannot be refused',
    summary:
      'A hard consequence delivered in soft language, so the recipient cannot object without seeming ungrateful.',
    claimKind: 'inference',
    tags: ['vice', 'power', 'leadership'],
    relatedLessonIds: ['l01-1'],
    body: [
      {
        kind: 'p',
        text: 'Moving someone to lower-stakes work "until things settle." Its most damaging feature is unfalsifiability: there is no moment at which the person can be judged to have recovered. It appears constantly in families, churches, and workplaces, and it is almost always chosen by people who mean well.',
      },
    ],
  },
  {
    id: 'vc-clean-hands',
    kind: 'vice',
    title: 'Clean hands',
    summary: 'Moral care that is really self-protection.',
    claimKind: 'inference',
    tags: ['vice', 'leadership', 'ethics'],
    relatedLessonIds: ['l08-1'],
    body: [
      {
        kind: 'p',
        text: 'Identifiable by two marks: it prefers the decision easiest to defend over the one that is best, and its responsibility ends at the announcement.',
      },
    ],
  },
  {
    id: 'vc-adjudicating',
    kind: 'vice',
    title: 'The urge to adjudicate',
    summary: 'Finding out who is right, when the facts were never in dispute.',
    claimKind: 'inference',
    tags: ['vice', 'conflict'],
    relatedLessonIds: ['l04-1'],
    body: [
      {
        kind: 'p',
        text: 'In most conflicts the disagreement is about significance, and significance is not established by investigation. The pull toward a verdict is strongest exactly where a verdict would help least.',
      },
    ],
  },
]

const stories: LibraryEntry[] = [
  {
    id: 's-sirens',
    kind: 'story',
    title: 'The Sirens',
    subtitle: 'Homer, Odyssey XII',
    summary:
      'They offer knowledge, not pleasure — and the bones on the shore belong to men who wanted to know.',
    claimKind: 'mythology',
    tags: ['temptation', 'myth', 'precommitment'],
    relatedLessonIds: ['l03-1', 'l05-1'],
    sourceNote:
      'The poem is public domain; modern translations are not, so episodes are described rather than quoted.',
    body: [
      {
        kind: 'p',
        text: 'Two strategies, both used and neither ranked: the crew are protected by not hearing, Odysseus by prior commitment. Read as a temptation to lust it is a minor moral tale; read as written it is about a man offered exactly the thing he cannot refuse.',
      },
    ],
  },
  {
    id: 's-ithaca',
    kind: 'story',
    title: 'The scar, the bed, and the dog',
    subtitle: 'Homer, Odyssey XIX and XXIII',
    summary: 'A homecoming proved by a boyhood injury and a bed rooted in a living olive tree.',
    claimKind: 'mythology',
    tags: ['identity', 'homecoming', 'myth'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Odysseus must prove he is himself. In Luke 15 the son is recognised at a distance and not permitted to finish his speech. The two homecomings are structurally opposite — one earned, one not — and the contrast is worth sitting with rather than resolving.',
      },
    ],
  },
  {
    id: 's-lear',
    kind: 'story',
    title: "Lear's question",
    subtitle: 'Shakespeare, King Lear I.i',
    summary:
      'A badly framed question rewards the wrong ability, and the quality of the answers is what blinds him.',
    claimKind: 'literary',
    tags: ['literature', 'speech', 'wisdom'],
    relatedLessonIds: ['l01-1'],
    body: [
      {
        kind: 'p',
        text: 'He asks his daughters to say how much they love him and gets the best performances. Cordelia, who loves him, says almost nothing. The play is not saying eloquence is bad — it is saying he asked for a performance.',
      },
    ],
  },
  {
    id: 's-valjean',
    kind: 'story',
    title: 'The bishop and the candlesticks',
    subtitle: 'Hugo, Les Misérables',
    summary:
      'Counsel delivered as a claim about who someone is going to be, backed with something expensive.',
    claimKind: 'literary',
    tags: ['literature', 'mercy', 'counsel'],
    relatedLessonIds: ['l10-1'],
    body: [
      {
        kind: 'p',
        text: 'No argument, no accusation, no promise extracted. Structurally it is Abigail. Hugo also shows Valjean steal again immediately afterwards, which is the caveat the story usually loses.',
      },
    ],
  },
  {
    id: 's-antigone',
    kind: 'story',
    title: 'Antigone',
    subtitle: 'Sophocles, c. 441 BC',
    summary: "Two duties, no arbiter, and each side hearing the other's obligation as a pretext.",
    claimKind: 'literary',
    tags: ['ethics', 'duty', 'tragedy'],
    relatedLessonIds: ['l08-1'],
    body: [
      {
        kind: 'p',
        text: 'Creon has a real duty: a city that honours its attackers will not survive. Antigone has a real duty: the dead must be buried. The collapse is caused not by the conflict but by the deafness — Creon hears anarchy, Antigone hears tyranny.',
      },
    ],
  },
  {
    id: 's-ivan',
    kind: 'story',
    title: 'Ivan returns the ticket',
    subtitle: 'Dostoevsky, The Brothers Karamazov',
    summary:
      'A Christian novelist writes the strongest case against his own position and gives it to the better talker.',
    claimKind: 'literary',
    tags: ['suffering', 'literature', 'theodicy'],
    relatedLessonIds: ['l07-1'],
    body: [
      {
        kind: 'p',
        text: "Ivan does not deny God; he refuses to accept a harmony purchased at the price of a child's suffering. Alyosha does not answer with an argument — he kisses him. The book does not fear the objection, does not shorten it, and does not answer it with a syllogism.",
      },
    ],
  },
  {
    id: 's-rehoboam',
    kind: 'story',
    title: "Rehoboam's two councils",
    subtitle: '1 Kings 12',
    summary:
      'The elders describe what the people will become. The young men describe how he will look.',
    claimKind: 'scripture',
    tags: ['leadership', 'counsel', 'history'],
    relatedLessonIds: ['l10-1'],
    body: [
      {
        kind: 'p',
        text: "He takes the second counsel; ten tribes secede and the kingdom never reunites. Advice that centres the leader's image is always the sweeter of the two on the day.",
      },
    ],
  },
  {
    id: 's-tekoa',
    kind: 'story',
    title: 'The wise woman of Tekoa',
    subtitle: '2 Samuel 14',
    summary: "Nathan's technique, borrowed by Joab for his own politics.",
    claimKind: 'scripture',
    tags: ['analogy', 'manipulation', 'counsel'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'p',
        text: 'The device is identical; everything else differs. David spots it immediately — *is the hand of Joab with you in all this?* — and she admits it. Manipulation is generally detectable after the fact, and being detected is what it cannot survive.',
      },
    ],
  },
  {
    id: 's-augustine-pears',
    kind: 'story',
    title: 'Augustine and the pears',
    subtitle: 'Confessions, Book II',
    summary: 'He examines the theft where no ordinary motive can explain it.',
    claimKind: 'historic-christian',
    tags: ['self-examination', 'sin', 'method'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'p',
        text: 'He did not want the pears; he had better at home, and did not eat them. Strip away every motive and what remains is what he wants to look at. The method is worth stealing: examine the case where you cannot tell yourself the usual story.',
      },
    ],
  },
]

const analogies: LibraryEntry[] = [
  {
    id: 'a-bowl',
    kind: 'analogy',
    title: 'The dog that never learned the bowl',
    summary: 'Help that is individually right and cumulatively disabling.',
    claimKind: 'inference',
    tags: ['analogy', 'care', 'dependence'],
    relatedLessonIds: ['l11-1'],
    body: [
      {
        kind: 'p',
        text: 'Hand-fed for a year because it would not eat from a bowl. It got well; it never learned the bowl, and when she went into hospital it lost four kilos beside a full one. Every single meal had been the right thing to do.',
      },
    ],
  },
  {
    id: 'a-path',
    kind: 'analogy',
    title: 'The path across the field',
    summary: 'Character is cumulative and no single crossing is decisive.',
    claimKind: 'inference',
    tags: ['analogy', 'habit', 'formation'],
    relatedLessonIds: ['l06-1'],
    body: [
      {
        kind: 'p',
        text: 'One crossing changes nothing and the path is made of nothing else. Load-bearing rather than decorative: the conclusion about formation rests on the structure.',
      },
    ],
  },
  {
    id: 'a-mast',
    kind: 'analogy',
    title: 'Tied to the mast',
    summary: 'The decision made earlier, by a self competent to make it, and made binding.',
    claimKind: 'inference',
    tags: ['analogy', 'temptation', 'precommitment'],
    relatedLessonIds: ['l05-1'],
    body: [
      {
        kind: 'p',
        text: 'He was not stronger than the song. He begged to be untied and they tied him tighter. Useful precisely because it concedes that the craving wins in the moment.',
      },
    ],
  },
  {
    id: 'a-bridge-sign',
    kind: 'analogy',
    title: 'Bridge may flood',
    summary: 'A conditional warning read as a guarantee.',
    claimKind: 'inference',
    tags: ['analogy', 'genre', 'interpretation'],
    relatedLessonIds: ['l03-1'],
    body: [
      {
        kind: 'p',
        text: 'Nobody reads a flood warning as a promise that the bridge will flood. Load-bearing for the whole genre argument, and short enough to use in a car park.',
      },
    ],
  },
]

export const LIBRARY: LibraryEntry[] = [
  ...passages,
  ...concepts,
  ...virtues,
  ...vices,
  ...stories,
  ...analogies,
]

const entryById = new Map(LIBRARY.map((entry) => [entry.id, entry]))

export function getLibraryEntry(id: string): LibraryEntry | undefined {
  return entryById.get(id)
}

/** Concept ids used by retrieval steps resolve to Library entries where they exist. */
export function conceptTitle(conceptId: string): string {
  return entryById.get(conceptId)?.title ?? conceptId.replace(/-/g, ' ')
}

export const LIBRARY_TAGS: string[] = Array.from(
  new Set(LIBRARY.flatMap((entry) => entry.tags)),
).sort()
