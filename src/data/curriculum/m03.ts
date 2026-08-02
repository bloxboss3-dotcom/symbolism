import type { Lesson, Module } from '../../types/content'

export const module03: Module = {
  id: 'm03',
  order: 3,
  title: 'Context, Genre, Metaphor, and Symbolism',
  shortTitle: 'Genre & Symbol',
  centralQuestion: 'What kind of thing is this, and what is it therefore able to mean?',
  summary:
    'A promise, a proverb, a lament, and a parable can all be true and none of them can be read the same way. This module trains genre recognition, the limits of a metaphor, and how to investigate a symbol without turning it into a code.',
  abilities: ['interpret', 'see'],
  lessonIds: ['l03-1'],
}

export const lesson03_1: Lesson = {
  id: 'l03-1',
  moduleId: 'm03',
  title: 'What Kind of Thing Am I Holding?',
  subtitle: 'Genre, metaphor, and the honest reading of symbols',
  centralQuestion: 'What kind of thing is this, and what is it therefore able to mean?',
  minutes: 45,
  abilities: ['interpret', 'see', 'answer'],
  concepts: ['genre', 'tenor-vehicle-ground', 'polyvalence', 'proverb-not-promise'],
  passages: ['Psalm 91:9-12', 'Matthew 4:5-7', 'Proverbs 26:4-5', 'John 4:13-14'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'The chapel on the fourth floor',
      ability: 'see',
      kicker: 'A scene, then a text, then a problem.',
      body: [
        {
          kind: 'p',
          text: 'Tomas has been sitting in the hospital chapel for forty minutes with his phone face-up on his knee. His wife Ines was given a diagnosis on Tuesday with a five-year survival figure he has now read nineteen times. Their daughter is six.',
        },
        {
          kind: 'p',
          text: 'His friend Bogdan — decent, faithful, and genuinely praying — has sent him a screenshot of Psalm 91 with three words underneath: *Claim this, brother.*',
        },
        {
          kind: 'scripture',
          ref: 'Psalm 91:9-12',
          translation: 'World English Bible',
          text: "Because you have made Yahweh your refuge, and the Most High your dwelling place, no evil shall happen to you, neither shall any plague come near your dwelling. For he will put his angels in charge of you, to guard you in all your ways. They will bear you up in their hands, so that you won't dash your foot against a stone.",
        },
        {
          kind: 'p',
          text: "Tomas has read it four times. The first time it helped. By the fourth time a different thought has arrived and he cannot get rid of it: *if this is a promise, then either it is not for me, or I have not made him my refuge properly, or it is not true.* He is aware that all three of those are worse than where he was at nine o'clock this morning.",
        },
        {
          kind: 'p',
          text: 'The hospital chaplain comes in, sees him, and sits two rows back without saying anything.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Was Bogdan wrong to send it? Answer carefully — the easy answers in both directions are available and both are worse than the situation deserves.',
      helper:
        'Note what you are tempted to do with the psalm itself. Most readers either defend it by softening it or rescue Tomas by quietly setting it aside.',
      minWords: 40,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'Genre is not a label. It is a set of permissions.',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Every text does a particular kind of work, and the kind of work sets the limits of what it can be asked to do. This is not a modern imposition on Scripture; it is how the Bible is built, and the writers assume you know it.',
        },
        {
          kind: 'list',
          items: [
            '**Law** binds. It creates obligation.',
            '**Narrative** reports. It shows what happened, and often withholds comment on whether it was right — the text can describe Jacob deceiving his father without endorsing it.',
            '**Wisdom sayings** describe how life generally runs under God\'s ordering. They are true the way "a dropped glass breaks" is true.',
            '**Lament** is prayer given to people whose situation has not resolved. It is not a report on how things turned out.',
            '**Prophecy** addresses a real historical moment with a real address, and often carries beyond it.',
            '**Apocalyptic** works in image and number, deliberately, to say things about power that plain speech could not safely say.',
            '**Parable** works by getting past your defences before you know what it is about.',
            '**Epistle** is one letter to one situation, from which general teaching is drawn carefully.',
          ],
        },
        {
          kind: 'p',
          text: 'Read the wrong genre and you get a category error, not a mild imprecision. Reading a proverb as a contract turns "generally, this is how it goes" into "God has guaranteed me this," and when life does not deliver, the reader concludes that God broke a promise he never made.',
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'The book warns you itself',
          text: "Proverbs 26:4 says: *Don't answer a fool according to his folly, lest you also be like him.* Proverbs 26:5 says: *Answer a fool according to his folly, lest he be wise in his own conceit.* Two adjacent verses, flatly contradictory as rules — and perfectly coherent as wisdom sayings, which give you two true observations and require you to judge which applies here. The compiler placed them side by side. That is a genre instruction, embedded in the text.",
        },
        {
          kind: 'p',
          text: 'So what is Psalm 91? It is a psalm of confidence — the settled speech of trust, in the same book that contains Psalm 88, which ends in darkness with nothing resolved. Both are given to us. Neither cancels the other. A psalm of confidence tells the truth about who God is and what it is to shelter in him; it is not an insurance schedule, and the Psalter itself refuses to let you read it as one, because it puts Psalm 88 in the same collection.',
        },
        {
          kind: 'p',
          text: 'And there is a sharper safeguard still. Psalm 91:11–12 is quoted, word for word, exactly once in the Gospels — by Satan, in the wilderness, urging Jesus to throw himself from the temple.',
        },
        {
          kind: 'scripture',
          ref: 'Matthew 4:6-7',
          translation: 'World English Bible',
          text: '"…for it is written, ‘He will put his angels in charge of you.\' and, ‘On their hands they will bear you up, so that you don\'t dash your foot against a stone.\'" Jesus said to him, "Again, it is written, ‘You shall not test the Lord, your God.\'"',
        },
        {
          kind: 'p',
          text: 'Jesus does not deny the text. He denies the use. The most famous misquotation of Scripture in the Bible is an accurate quotation of this psalm, deployed as a guarantee. If Scripture itself flags the misuse, an interpreter is not being clever or liberal to flag it too.',
        },
      ],
    },
    {
      id: 's4',
      type: 'quiz',
      title: 'What kind of thing is it?',
      ability: 'interpret',
      prompt:
        '"A gentle answer turns away wrath, but a harsh word stirs up anger." (Proverbs 15:1, WEB). What kind of claim is this?',
      options: [
        {
          id: 'a',
          text: 'A guarantee: gentleness will defuse any angry person.',
          feedback:
            'This is the reading that gets people hurt. Some angry people escalate at gentleness, and abusers routinely exploit it. The verse never claimed universality.',
        },
        {
          id: 'b',
          text: 'An observation about how anger generally works, offered to shape your instincts.',
          correct: true,
          feedback:
            'Yes. It is a wisdom saying: a reliable generalisation about the created order, given so that your default is right, while leaving you responsible for the exceptions.',
        },
        {
          id: 'c',
          text: 'A command: you must always answer gently.',
          feedback:
            'It is not phrased as a command, and Scripture contains a great deal of ungentle speech from prophets and from Jesus. Wisdom literature shapes judgement rather than issuing rules.',
        },
        {
          id: 'd',
          text: 'A description of how things will be in the age to come.',
          feedback: 'Nothing in Proverbs signals an eschatological frame. It is about Tuesday.',
        },
      ],
      explanation:
        'Genre first, meaning second. Almost every misuse of Proverbs comes from promoting an observation into a promise.',
    },
    {
      id: 's5',
      type: 'teaching',
      title: 'Metaphor: the ground is smaller than the vehicle',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'The literary critic I. A. Richards gave us the standard vocabulary in 1936. A metaphor has a **tenor** (what you are talking about), a **vehicle** (the image you are using), and a **ground** (the specific respect in which the vehicle illuminates the tenor).',
        },
        {
          kind: 'p',
          text: '"Yahweh is my shepherd" (Psalm 23:1). Tenor: God. Vehicle: a shepherd. Ground: he provides, leads, defends, and knows the flock individually. What the ground does *not* include: that we are stupid, that we are livestock destined for slaughter, or that God carries a stick to hit us with — even though all of those are true of shepherds and sheep.',
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The commonest interpretive abuse in preaching',
          text: 'Extending a metaphor past its ground, and then treating the extension as though the text had said it. Once you can name the move you will see it constantly, including in things you have said yourself.',
        },
        {
          kind: 'p',
          text: 'Now the harder half. Symbols in Scripture are usually **polyvalent** — the same image carries different, sometimes opposite, freight in different settings.',
        },
        {
          kind: 'list',
          items: [
            '**Water** is chaos and death: the flood, the sea, the deep. It is also life: a well, a spring, a river in a dry land. In John 4, Jesus offers a woman at a well "living water" — and the phrase in ordinary use simply meant *running water*, which is the joke the conversation turns on.',
            '**A lion** is Christ (Revelation 5:5) and the devil (1 Peter 5:8), inside one canon.',
            '**Leaven** is corruption spreading (1 Corinthians 5:6) and the kingdom of God spreading (Matthew 13:33).',
          ],
        },
        {
          kind: 'p',
          text: 'This is why a symbol dictionary is a poor instrument. The meaning is not stored in the image; it is produced by the image *in this passage*. Ask what the symbol is doing here, and what the immediate context makes of it, before you ask what it usually means.',
        },
      ],
    },
    {
      id: 's6',
      type: 'lenses',
      title: 'Lenses on symbol',
      ability: 'interpret',
      cards: [
        {
          lens: 'mythological',
          heading: 'What the Sirens actually offer',
          claimKind: 'mythology',
          body: [
            {
              kind: 'p',
              text: "In Book XII of the *Odyssey*, Circe warns Odysseus about the Sirens, and he takes two precautions: he stops his crew's ears with wax, and has himself bound to the mast so that he can hear and not act.",
            },
            {
              kind: 'p',
              text: 'The detail most retellings drop is what the Sirens sing. They do not offer pleasure, or beauty, or sex. They offer **knowledge** — they claim to know everything that happens on the earth, and they offer to tell him. The bones on their shore belong to men who wanted to know.',
            },
            {
              kind: 'p',
              text: 'That changes the symbol considerably. Read as a temptation to lust, the episode is a minor moral tale. Read as written, it is about a man whose defining trait is curiosity, offered exactly the thing he cannot refuse, and who survives only because he arranged in advance to be unable to act on his own judgement in the moment.',
            },
            {
              kind: 'aside',
              label: 'Two strategies, both used',
              text: 'The crew are protected by not hearing. Odysseus is protected by prior commitment. Homer gives both without ranking them, which is more honest than most modern advice about temptation.',
            },
          ],
          tension:
            'Homer is not a Christian source and does not need to be baptised. The Odyssey has no category for sin, and its virtues include a cunning that Scripture would judge. Take the observation; do not import the framework.',
        },
        {
          lens: 'biblical',
          heading: 'Living water, at noon, in the wrong place',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'John 4: a Samaritan woman comes to a well at midday — the hot hour, when nobody comes — and Jesus asks her for a drink. He then offers her "living water."',
            },
            {
              kind: 'scripture',
              ref: 'John 4:13-14',
              translation: 'World English Bible',
              text: 'Jesus answered her, "Everyone who drinks of this water will thirst again, but whoever drinks of the water that I will give him will never thirst again; but the water that I will give him will become in him a well of water springing up to eternal life."',
            },
            {
              kind: 'p',
              text: 'The phrase *living water* was ordinary Greek and Hebrew usage for running water as opposed to cistern water. She hears the ordinary meaning first and answers practically — you have no bucket. The conversation proceeds by her gradually discovering the second register. Jesus does not correct her; he lets the ambiguity do the work.',
            },
            {
              kind: 'p',
              text: 'Note the method. He does not begin with a doctrine and illustrate it. He begins inside her situation — thirst, a well, a bucket, the hour she chose to come — and the symbol grows out of the facts on the ground. Module 11 comes back to this at length.',
            },
          ],
          passages: ['John 4:7-15'],
        },
        {
          lens: 'historical',
          heading: 'Proverbs had neighbours',
          claimKind: 'history',
          body: [
            {
              kind: 'p',
              text: "Israel's wisdom literature sits inside a wider ancient Near Eastern tradition of instruction texts. The best-known comparison is the Egyptian *Instruction of Amenemope*, whose resemblance to a section of Proverbs (roughly 22:17–24:22) has been discussed by scholars since the 1920s. The extent and direction of the relationship remain debated.",
            },
            {
              kind: 'p',
              text: "Why this matters for reading: it confirms from outside that this material *is* a genre with conventions — collected sayings for the formation of the young — rather than a list of divine guarantees. The Bible's wisdom books are recognisably doing what wisdom books in that world did, with a decisively different foundation: the fear of Yahweh.",
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'What this card does not claim',
              text: 'It does not claim Proverbs is derivative, or that the parallels settle any question of inspiration. Scholars disagree about the direction of influence. It is offered as evidence about *genre*, which is the narrow point.',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      type: 'certainty',
      title: 'Reading the Sirens',
      ability: 'interpret',
      prompt:
        'Interpretations of the Sirens episode, sorted by what the text of the Odyssey actually supports.',
      claims: [
        {
          id: 'c1',
          text: 'Odysseus has himself bound to the mast so he can hear the song and survive it.',
          tier: 'stated',
          why: 'This is the plain content of the episode.',
        },
        {
          id: 'c2',
          text: 'The Sirens tempt by offering knowledge rather than pleasure.',
          tier: 'implied',
          why: 'It is what their song says. Called "implied" rather than "stated" only because the significance — that this is a temptation fitted to Odysseus specifically — is the reader\'s to draw.',
        },
        {
          id: 'c3',
          text: 'The episode dramatises the value of binding yourself in advance against a temptation you know you cannot resist in the moment.',
          tier: 'reasonable',
          why: 'A fair reading, and one taken up seriously in modern decision theory. Still a reading: Homer offers no such generalisation, and the crew are saved by a completely different method.',
        },
        {
          id: 'c4',
          text: "The wax in the crew's ears represents the simple faith of ordinary believers, while the mast represents the cross.",
          tier: 'possible',
          why: "Christian allegorisers from the second century onward did read the mast as the cross, so this has a real interpretive history and is not absurd. But it is something read *into* Homer, and should be presented as the church's later use of the image rather than as the meaning of the passage.",
        },
        {
          id: 'c5',
          text: 'Homer intended the Sirens as a warning about the pursuit of scientific knowledge.',
          tier: 'unsupported',
          why: 'This imports a category that did not exist and an intention we have no access to. "The text supports X" and "the author meant X" are different claims, and the second is usually the weaker one.',
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'This all looks like a sophisticated technique for not being bound by anything. Psalm 91 is inconvenient, so it becomes "a psalm of confidence." Proverbs 22:6 fails, so it becomes "a generalisation." You have built a system in which no text can ever contradict your experience, because any text that does gets reclassified. How is this different from unbelief with better vocabulary?',
      prompt:
        'Answer it seriously. What stops genre-awareness from becoming a universal escape hatch? Give at least one concrete test that a reader could fail.',
      helper:
        'A good answer will name something that genre-reading forbids you from doing, not just what it permits.',
      reveal: [
        {
          kind: 'p',
          text: 'The objection has force, and there are readers of whom it is simply true. Three tests separate honest genre-reading from motivated reclassification.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "**The classification must be made from the text's own features, not from the outcome you want.** Psalm 91 is a psalm — it is poetry, in a book of poetry, with parallelism and imagery throughout — before anyone got a diagnosis. Proverbs is a collection of sayings, announced as such in its first verse. If the genre call is one you would have made in a comfortable week, it is doing honest work.",
            '**It must cost you something.** Genre reading also removes escape routes. It means the imprecatory psalms cannot be quietly downgraded to metaphor because they are uncomfortable. It means the narrative sections of the Gospels are read as claims about events. It means Jesus\' hard sayings, delivered in direct speech to disciples, cannot be softened into "wisdom sayings" the way Proverbs can. A genre argument that only ever loosens obligations is not a genre argument.',
            '**It must submit to the tradition.** The church has read these books for two thousand years, and the broad genre judgements here are not novel — that Proverbs states general truths, that psalms of lament and confidence coexist, that parables are not allegories to be decoded item by item. If your reading requires you to be the first person to notice something convenient, that is data.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What is really being protected',
          text: 'The alternative is not more faith; it is a God who has broken a promise. Tomas\'s three o\'clock thought — *either it is not for me, or I did it wrong, or it is not true* — is what "claim this" produces when the world does not comply. Genre-reading is not a way of expecting less from God. It is a way of not accusing him of something he did not say.',
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand where Bogdan stands',
      ability: 'understand',
      person: 'Bogdan, who sent the screenshot',
      setup:
        'He heard on Tuesday. He has prayed for Tomas every morning since. He sent the psalm at 6:40am, before work, and then had a strange, flat feeling for the rest of the day that he has not examined.',
      fields: [
        {
          key: 'saying',
          label: 'What he said',
          prompt: 'Three words and a screenshot. What did he intend them to do?',
        },
        {
          key: 'feeling',
          label: 'What he feels',
          prompt: 'Including the flat feeling afterwards. What was that?',
        },
        {
          key: 'fearing',
          label: 'What he fears',
          prompt: 'What is he afraid of, in himself, about this diagnosis?',
        },
        { key: 'desiring', label: 'What he wants', prompt: 'For Tomas — and for himself.' },
        {
          key: 'assuming',
          label: 'What he assumes',
          prompt: 'About what a friend is supposed to supply at a moment like this.',
        },
        {
          key: 'not-seeing',
          label: 'What he cannot see',
          prompt: 'What is invisible from where he is standing?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'One reconstruction:',
        },
        {
          kind: 'list',
          items: [
            "**Feeling:** genuine grief, and underneath it something closer to panic. Ines is forty-one. If this can happen to her it can happen to Bogdan's wife, and the psalm is doing work for the sender as well as the recipient.",
            '**Fearing:** helplessness, and the silence that would follow if he sent nothing. Most bad pastoral texts are written by people who could not bear to send nothing.',
            "**Assuming:** that a friend's job here is to supply hope, and that hope means a stated outcome. This is the assumption to name gently, because it is the load-bearing one.",
            '**Not seeing:** that "claim this" transfers the burden. It quietly makes the outcome depend on Tomas\'s faith, which means that if Ines dies, Tomas has been handed a reason to think it was his fault. Bogdan would be appalled to know he had done that.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Before you correct anyone',
          text: 'Bogdan is not the villain of this scene and treating him as one will cost you a friend and change nothing. He made a well-meant category error under fear. Almost everyone reading this has made the same one.',
        },
      ],
    },
    {
      id: 's10',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match each principle to the case that demonstrates it.',
      left: [
        { id: 'l1', label: "A metaphor's ground is narrower than its vehicle" },
        { id: 'l2', label: 'Symbols are polyvalent' },
        { id: 'l3', label: 'Accurate quotation, illegitimate use' },
        { id: 'l4', label: 'Genre sets what a text can promise' },
      ],
      right: [
        { id: 'r1', label: '"Yahweh is my shepherd" does not imply we are livestock' },
        { id: 'r2', label: 'A lion is Christ in Revelation 5 and the devil in 1 Peter 5' },
        { id: 'r3', label: 'Satan quotes Psalm 91 accurately in the wilderness' },
        { id: 'r4', label: 'Proverbs 26:4 and 26:5 sit side by side and contradict as rules' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The image supplies care and provision; pressing it further imports what the text never claimed.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'The same image, opposite freight, inside one canon — so meaning is produced by context, not stored in the symbol.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'Jesus does not dispute the text. He disputes what is being done with it.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Read as rules they cancel; read as wisdom sayings they equip you to judge which case you are in.',
        },
      ],
    },
    {
      id: 's11',
      type: 'decision',
      title: 'The chaplain has sat down two rows back',
      ability: 'discern',
      situation:
        'Suppose the chaplain is you. Tomas turns round and says, holding up the phone: "Is this true or not?"',
      prompt: 'Choose your first move. Not your eventual position — your first move.',
      options: [
        {
          id: 'd1',
          text: '"It is true. It is a psalm of confidence, not a guarantee — that is a genre distinction, and it matters here."',
          verdict: 'risky',
          consequence:
            'Accurate, and probably the content he needs eventually. Delivered as a first move to a man forty minutes into the worst week of his life, it arrives as a technicality. He will hear: *even the chaplain is explaining why it does not apply to me.*',
          cost: 'Correct content spent at the wrong moment, which is roughly what Module 1 was about.',
        },
        {
          id: 'd2',
          text: '"What happened at three o\'clock this morning?"',
          verdict: 'defensible',
          consequence:
            'A real question and a good instinct, but it is a technique aimed at a man who did not ask for one. He asked you something. Answering a direct question with a probe can read as evasion, especially from a professional.',
          cost: "A small deposit of trust, spent on a move that would work better in ten minutes' time.",
        },
        {
          id: 'd3',
          text: '"Which part are you asking about — whether God is a refuge, or whether Ines will live?"',
          verdict: 'wise',
          consequence:
            'It answers him by taking the question seriously enough to find out which question it is. It does not soften the psalm, does not promise an outcome, and hands him a distinction he can use rather than a verdict he must accept. Very often he will say the second, out loud, for the first time.',
          cost: 'You must then stay for the answer, which will not be short, and you may have to say "I do not know" about the part he cares most about.',
        },
        {
          id: 'd4',
          text: '"I would not read that psalm this week. Try Psalm 88."',
          verdict: 'risky',
          consequence:
            "There is something in this — Psalm 88 is exactly the text for a man in his position, and offering it later may be the most useful thing you do. As an opening move it overrides his question and prescribes his interior state on four minutes' acquaintance.",
          cost: 'You have replaced his question with your diagnosis before establishing that they are the same.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Options one, two and four all contain something right. What separates the third is that it does the interpretive work *with* him rather than for him, and it makes the genre distinction usable without ever using the word genre.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Three weeks later. Tomas has asked you directly, in a coffee shop, calmly: "So what do I do with Psalm 91? Because Bogdan still sends me things, and I do not want to lose him, and I also cannot keep reading verses that make me feel like it depends on me." Write your reply. Eight to twelve sentences.',
      audience:
        'An intelligent, exhausted man who has been reading carefully and is asking a genuine interpretive question, not looking for comfort.',
      constraints: [
        'Do not soften the psalm into vagueness. It says what it says.',
        'Do not make Bogdan the problem.',
        'Give him something he can do with the next screenshot.',
      ],
      rubric: ['context', 'grounding', 'uncertainty', 'compassion', 'clarity', 'usefulness'],
      minWords: 110,
      allowVoice: true,
    },
    {
      id: 's13',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's12',
      body: [
        {
          kind: 'p',
          text: 'I think the psalm is true and I think "claim this" is a misuse of it, and I want to keep both of those in one sentence because separating them is what has been hurting you.',
        },
        {
          kind: 'p',
          text: 'Here is the thing that settled it for me. Psalm 91:11–12 is quoted once in the Gospels, and the one who quotes it is Satan, on the temple, telling Jesus to jump. He quotes it accurately. Jesus does not say the psalm is wrong; he says *you shall not test the Lord your God*. So Scripture itself contains the exact misuse — a true promise turned into a guarantee you can act on — and names it as a temptation. You are not being faithless. You are noticing something the text already flagged.',
        },
        {
          kind: 'p',
          text: "What the psalm is doing is telling the truth about who God is for the person sheltering in him. What it is not doing is issuing a schedule. In the same book, Psalm 88 ends with the line about darkness being the psalmist's closest friend, and nothing gets fixed. Whoever assembled the Psalter put both in, deliberately, and gave you both to pray. That is not the behaviour of a book making guarantees.",
        },
        {
          kind: 'p',
          text: 'What I do not know is the part you actually care about, and I am not going to dress that up. I do not know what happens to Ines. Anyone who tells you they do is telling you about their own discomfort.',
        },
        {
          kind: 'p',
          text: 'On Bogdan: I would not correct him. He is frightened and he sends things because he cannot bear to send nothing, which is a fault on the right side. If you want something to say, try — *keep sending them, and pray Psalm 88 for me on the bad days*. It tells him you are still in the same book, it gives him something to do, and it will quietly teach him more than an argument would.',
        },
      ],
      commentary: [
        {
          label: 'It leads with the strongest evidence',
          text: 'The wilderness temptation is the single most persuasive thing available here, and it is *internal* to Scripture — no appeal to scholarship, no genre vocabulary. Tomas is handed a fact he can verify.',
        },
        {
          label: 'It marks its own limits',
          text: '"What I do not know is the part you actually care about." Placed fourth, after credibility has been earned, and stated without softening. Compare the rubric line on uncertainty.',
        },
        {
          label: 'It gives him a usable move',
          text: 'The suggested reply to Bogdan is concrete, kind, and does the pastoral work in the friendship without requiring a confrontation. The rubric calls this practical usefulness; note that it also protects a relationship the exemplar was told not to damage.',
        },
        {
          label: 'What it deliberately avoids',
          text: 'No use of the word "genre," no "the Hebrew here means," no explanation of Psalm 91\'s form-critical classification. All of that was in the reasoning and none of it is in the reply.',
        },
      ],
      limits:
        'It does very little with Ines herself, and a real conversation would probably need to. It also assumes Tomas has the appetite for an argument from the wilderness narrative — on a worse day, the first paragraph alone might be all that should be said.',
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['context', 'grounding', 'uncertainty', 'compassion', 'clarity', 'usefulness'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise. Specifically: find the sentence where you were most tempted to claim more certainty than you have, and rewrite that sentence.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        "Find one verse you have personally used as a promise — on yourself or on someone else. Read the whole chapter it sits in and identify its genre from the text's own features. Then write two sentences: what it does claim, and what you had been asking it to claim.",
      window: 'Within seven days',
      cautions: [
        'Choose one that has actually done work in your life. An academic example teaches nothing.',
        "This exercise is for your own reading. Do not begin by auditing someone else's verses.",
      ],
      checkIn:
        'Did the passage turn out to say less than you thought, or something different from what you thought?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Is there something you have quietly been holding God to that he did not actually say? Name it plainly — not to dismiss it, but so that what you are grieving can be the real thing.',
      prayer:
        'Pray Psalm 91 and Psalm 88 in the same sitting, in that order, without resolving the difference between them.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: ['genre', 'tenor-vehicle-ground', 'polyvalence', 'proverb-not-promise'],
      passageRefs: ['Psalm 91:9-12', 'Matthew 4:5-7', 'Proverbs 26:4-5', 'John 4:13-14'],
    },
  ],
}
