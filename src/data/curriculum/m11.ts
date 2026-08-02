import type { Lesson, Module } from '../../types/content'

export const module11: Module = {
  id: 'm11',
  order: 11,
  title: 'Explaining Truth Through Analogy, Story, and Symbol',
  shortTitle: 'Analogy & Story',
  centralQuestion: 'How do you say a thing so that someone can hear it about themselves?',
  summary:
    'Nathan does not accuse David. He tells him about a lamb, and David convicts himself in four sentences. This module is about how that works, what separates a load-bearing analogy from a decorative one, and the four ways the technique goes wrong.',
  abilities: ['answer', 'interpret'],
  lessonIds: ['l11-1'],
}

export const lesson11_1: Lesson = {
  id: 'l11-1',
  moduleId: 'm11',
  title: 'The Parable Maker',
  subtitle: 'Why the indirect route arrives first',
  centralQuestion: 'How do you say a thing so that someone can hear it about themselves?',
  minutes: 40,
  abilities: ['answer', 'interpret', 'understand'],
  concepts: ['load-bearing-analogy', 'enthymeme', 'curse-of-knowledge', 'analogy-failure-modes'],
  passages: ['2 Samuel 12:1-7', 'Luke 10:29-37', 'Matthew 13:13', 'Proverbs 25:11'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'A story about a lamb',
      ability: 'see',
      source: '2 Samuel 12:1–7, World English Bible (public domain).',
      body: [
        {
          kind: 'p',
          text: 'David has slept with Bathsheba, discovered she is pregnant, failed to disguise it, and arranged the death of her husband Uriah at the front. Roughly a year has passed. He is king, the matter is closed, and nobody has said anything.',
        },
        {
          kind: 'scripture',
          ref: '2 Samuel 12:1-4',
          translation: 'World English Bible',
          text: 'Yahweh sent Nathan to David. He came to him, and said to him, "There were two men in one city; the one rich, and the other poor. The rich man had very many flocks and herds, but the poor man had nothing, except one little ewe lamb, which he had bought and raised. It grew up together with him, and with his children. It ate of his own food, drank of his own cup, and lay in his bosom, and was like a daughter to him. A traveler came to the rich man, and he spared to take of his own flock and of his own herd, to dress for the wayfaring man who had come to him, but took the poor man\'s lamb, and dressed it for the man who had come to him."',
        },
        {
          kind: 'scripture',
          ref: '2 Samuel 12:5-7',
          translation: 'World English Bible',
          text: 'David\'s anger burned hot against the man, and he said to Nathan, "As Yahweh lives, the man who has done this deserves to die! He shall restore the lamb fourfold, because he did this thing, and because he had no pity!" Nathan said to David, "You are the man."',
        },
        {
          kind: 'p',
          text: 'Three verses of story. One sentence of application. A king who has successfully suppressed this for a year passes sentence on himself inside four lines of his own speech.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Why did the story work when a direct accusation would not have? Be mechanical about it — what specifically does the parable do that "you murdered Uriah" does not?',
      minWords: 40,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'Look at the construction',
      ability: 'see',
      prompt: 'Select what you can point to in the parable itself.',
      options: [
        {
          id: 'o1',
          text: 'It is a legal case, and David is the supreme judge in Israel.',
          significance:
            'Nathan does not tell him a story. He brings him a case, in his professional capacity. David is not being preached at; he is working. This is why he engages rather than defends.',
        },
        {
          id: 'o2',
          text: 'The lamb is described at length — it ate his food, drank his cup, lay in his bosom, was like a daughter.',
          significance:
            "Four clauses on a sheep. The detail is not decoration; it is what converts a property dispute into a bereavement, and it is why David's anger burns rather than smoulders.",
        },
        {
          id: 'o3',
          text: 'The rich man does not need the lamb. He has flocks and herds.',
          significance:
            "The structural core. The offence is not theft; it is theft by someone who had no need — which is precisely David's case and nothing like an ordinary crime.",
        },
        {
          id: 'o4',
          text: 'There is no adultery in the parable, and no murder.',
          significance:
            'The analogy maps the *relation*, not the acts. Had Nathan included a killing, David would have recognised himself before he judged. The parable is calibrated to be exactly close enough.',
        },
        {
          id: 'o5',
          text: 'David sets the sentence himself, and sets it high.',
          significance:
            'Fourfold restoration is the penalty in Exodus 22:1 for a stolen and slaughtered sheep. He is not improvising; he applies the law. The judgement he is bound by is his own, delivered in his own voice.',
        },
        {
          id: 'o6',
          text: 'David adds a reason: "because he had no pity."',
          significance:
            "He supplies the moral characterisation himself. Nathan never used the word pity. This is the hinge — the conviction is in David's vocabulary, not the prophet's.",
        },
        {
          id: 'o7',
          text: "Nathan's application is four words long.",
          significance:
            'Having built the whole structure, he spends almost nothing on the reveal. Note how much worse it would be at three sentences.',
        },
      ],
      subtleIds: ['o1', 'o4', 'o5', 'o6'],
    },
    {
      id: 's4',
      type: 'teaching',
      title: 'What makes an analogy load-bearing',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'An analogy is **load-bearing** when the conclusion actually rests on it — when removing the analogy removes the argument. It is **decorative** when it illustrates a point that was already made and would survive without it. Most analogies in most sermons, essays and pitches are decorative. Nothing is wrong with that, and it should not be mistaken for reasoning.',
        },
        {
          kind: 'p',
          text: 'Four properties distinguish the load-bearing kind:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Relations map, not features.** What transfers is the structure — *someone with abundance took the one thing someone else had* — and not the surface. Nathan's parable has no king, no woman, no soldier, no city wall. Beginners map features; the structure is what carries the inference.",
            '**The hearer supplies the missing premise.** Aristotle called an argument with an unstated premise an **enthymeme**, and observed that it persuades more strongly than a complete syllogism precisely because the audience completes it. What you conclude yourself, you own. Nathan never states the middle term. David does.',
            "**It arrives before the defences.** Direct accusation activates the whole apparatus of justification — a year of it, in David's case, well rehearsed. A case about someone else is judged with the defences pointed elsewhere.",
            '**It can be surrendered.** *You are the man.* The analogy has done its work and is dropped. A speaker who keeps elaborating the metaphor after the point has landed is enjoying the device, and the hearer will start attacking the analogy instead of facing the claim.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The test before you use one',
          text: 'Can the hearer reach the conclusion themselves from what you have given them? If they need you to explain the analogy, it has failed — and explaining it converts a discovery into a lecture.',
        },
        {
          kind: 'h',
          text: 'The four ways it goes wrong',
        },
        {
          kind: 'list',
          items: [
            '**The flattering analogy.** It casts the hearer as the hero or the victim. Comfortable, useless, and extremely common in political and religious speech. If your story makes your listener the poor man with the lamb, ask what it is for.',
            '**The smuggling analogy.** The structure imports a conclusion the real case does not support — a country is "like a household," so its budget must balance like one. The vividness of the image substitutes for the argument that the mapping holds.',
            '**The over-extended analogy.** Pressed beyond its ground, in exactly the sense of Module 3. The moment you are explaining what the third character represents, you are past it.',
            '**The inside analogy.** It requires knowledge the hearer does not have. This is the **curse of knowledge**, and it is the commonest failure among people who understand their subject well.',
          ],
        },
        {
          kind: 'p',
          text: 'On that last one: in a 1990 study, participants tapped out the rhythm of a well-known song and predicted how many listeners would identify it. Tappers predicted around half. Listeners identified about one in forty. Once you can hear the tune in your head you cannot imagine not hearing it — which is why experts choose analogies that work beautifully for people who already understand.',
        },
      ],
    },
    {
      id: 's5',
      type: 'quiz',
      title: 'Diagnose the failure',
      ability: 'interpret',
      prompt:
        'A church leader, arguing that the congregation should accept a difficult budget decision, says: "A family sometimes has to give up the holiday to fix the roof. This is our roof." What is the primary problem?',
      options: [
        {
          id: 'a',
          text: 'It is decorative — the point was already made.',
          feedback:
            'Not quite. The analogy is doing real work: it is supplying the reason to accept the decision, so it is load-bearing.',
        },
        {
          id: 'b',
          text: 'It smuggles. The mapping assumes what is in dispute — that the cut is a roof rather than a holiday.',
          correct: true,
          feedback:
            'Yes. Everything turns on whether the thing being cut is discretionary and the thing being funded is essential, and that is exactly what the congregation disagrees about. The analogy asserts the conclusion in the form of an illustration.',
        },
        {
          id: 'c',
          text: 'It is over-extended.',
          feedback:
            'It is two sentences long, so it has not been pressed past its ground yet. The problem is at the join, not at the edges.',
        },
        {
          id: 'd',
          text: 'It flatters the congregation.',
          feedback:
            'It casts them as a sensible family, which is mildly flattering, but the defect is structural rather than tonal.',
        },
      ],
      explanation:
        'The test for smuggling: does the analogy assume the very thing being argued about? If so, it is not evidence — it is the conclusion in a costume.',
    },
    {
      id: 's6',
      type: 'lenses',
      title: 'Lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'Jesus changes the question',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'Luke 10. A lawyer, "desiring to justify himself," asks Jesus: *Who is my neighbour?* It is a boundary question — where does my obligation stop.',
            },
            {
              kind: 'p',
              text: 'Jesus tells the story of the man on the Jericho road, and then asks the lawyer something different: *Which of these three do you think was a neighbour to him who fell among the robbers?* The question has been turned inside out. Not *who qualifies for my love*, but *who acted as a neighbour*. The lawyer answers, "He who showed mercy on him," and is told to go and do likewise.',
            },
            {
              kind: 'p',
              text: "Note that Jesus does not refute the lawyer's question. He replaces it with a better one and lets the man answer his own. Note also the casting: the hero is a Samaritan, which for this audience makes the parable cost something to accept. Compare the flattering analogy — this is its exact opposite.",
            },
            {
              kind: 'scripture',
              ref: 'Matthew 13:13',
              translation: 'World English Bible',
              text: "Therefore I speak to them in parables, because seeing they don't see, and hearing, they don't hear, neither do they understand.",
            },
            {
              kind: 'p',
              text: 'This verse resists the easy reading that parables are teaching aids for simple people. In context, and more sharply in Mark 4:11–12, parables both reveal and conceal: they hand the truth to those willing to work for it and leave it opaque to those who are not. That is a hard saying, it has been debated for centuries, and it should not be smoothed over.',
            },
          ],
          passages: ['2 Samuel 12:1-7', 'Luke 10:29-37', 'Matthew 13:13'],
          tension:
            'The concealing function of parables is genuinely difficult, and interpreters differ substantially on how to read Mark 4:12. Presented here as a live question rather than a settled one.',
        },
        {
          lens: 'historical',
          heading: 'Joab borrows the technique',
          claimKind: 'history',
          body: [
            {
              kind: 'p',
              text: "2 Samuel 14. Absalom is in exile after killing his brother, and Joab wants him recalled. He hires a wise woman from Tekoa, dresses her as a mourner, and sends her to David with an invented case: two sons, one killed the other, and now the family demands the survivor's life, which would extinguish her husband's name.",
            },
            {
              kind: 'p',
              text: 'David rules in her favour. She then applies the ruling to his own son — and David, who has been here before, asks immediately whether Joab put her up to it. She admits it.',
            },
            {
              kind: 'p',
              text: "Two observations worth more than the story. First, the technique is *transferable*, which means it can be used by anyone, including a general manipulating his king for his own reasons. Second, it works less well the second time. Nathan's parable was sent by God and named a real sin; Joab's was engineered and served Joab's politics. The device is identical. What differs is everything else.",
            },
          ],
          passages: ['2 Samuel 14:1-20'],
        },
        {
          lens: 'psychological',
          heading: 'Why stories get past the guard',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: 'Green and Brock (2000) described **narrative transportation**: the absorbed state of following a story, in which readers show reduced counter-arguing and greater belief change consistent with the narrative. Roughly, the cognitive resources that would generate objections are occupied.',
            },
            {
              kind: 'p',
              text: 'This has an uncomfortable implication that should be said out loud: the same mechanism that lets Nathan reach David lets propaganda reach anyone. A story that lowers your defences is not thereby telling you the truth. The transportation literature is largely a literature about persuasion, and persuasion is neutral about content.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'What follows for you as a hearer',
              text: 'When a story has moved you toward a conclusion, that is precisely the moment to state the conclusion flatly, without the story, and ask whether you would accept it. Almost the whole art of resisting manipulation is this one habit.',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      type: 'evidence',
      title: 'Analogy audit',
      ability: 'interpret',
      claim:
        'Which of these analogies are load-bearing — that is, the argument collapses without them?',
      prompt: 'Select the load-bearing ones. Leave the decorative ones alone; they are not faults.',
      options: [
        {
          id: 'e1',
          text: '"Forgiveness is like setting down a bag you have been carrying — you only notice the weight when it is gone."',
          supports: false,
          why: 'Decorative. It illustrates relief, and it establishes nothing about whether you should forgive, whom, or when. Pleasant and inert.',
        },
        {
          id: 'e2',
          text: '"Reading a proverb as a promise is like reading a road sign that says \'Bridge May Flood\' as a guarantee that it will."',
          supports: true,
          why: 'Load-bearing. The whole genre argument from Module 3 is carried by the structural mapping between a conditional warning and a general observation.',
        },
        {
          id: 'e3',
          text: '"The church is a body, so a member who is not functioning should be removed."',
          supports: true,
          why: 'Load-bearing — and it is smuggling. The body image in 1 Corinthians 12 is used by Paul to argue the *opposite*: that the parts that seem weaker are indispensable. The analogy is doing real work and the work is illegitimate.',
        },
        {
          id: 'e4',
          text: '"Character is built the way a path is worn across a field: one crossing at a time, and one crossing changes nothing."',
          supports: true,
          why: 'Load-bearing. It supplies the actual argument of Module 6 — that the disposition is cumulative and that no single act is decisive — in a form from which the hearer can derive the conclusion themselves.',
        },
        {
          id: 'e5',
          text: '"Scripture is a lamp to our feet."',
          supports: false,
          why: 'Decorative here — though in Psalm 119:105 it is doing more, because a lamp for the *feet* implies illumination of the next step rather than the whole road, which is a real claim. Context determines this, as always.',
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        "Nathan's method got past David's defences without his consent. He was manoeuvred into passing sentence on himself before he knew what he was judging. If someone did that to you in a meeting, you would call it a trick — and you would be right to resent it. Why is this admirable rather than manipulative?",
      prompt:
        'Answer with a criterion, then apply it to Joab and the woman of Tekoa, who used the identical device.',
      helper:
        'Module 10 asked a similar question about Abigail. The answer here is related but not identical.',
      reveal: [
        {
          kind: 'p',
          text: 'Three criteria, and the Joab case is the reason you need all three.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**The conclusion must be true and the hearer must be able to verify it independently.** Nathan\'s "you are the man" is checkable by David against facts he already possesses. Manipulation depends on the hearer *not* being able to step back and confirm. This is the main criterion and it does most of the work.',
            '**The device must be surrendered at the moment of recognition.** Nathan tells him. He does not leave David convicted of an unnamed thing, and he does not extend the story for another minute. A speaker who never drops the veil is not helping someone see; they are steering someone blind.',
            "**Whose interest is served.** Joab fails here decisively. The device was identical and the beneficiary was Joab's political position. Note that David spots it instantly — *is the hand of Joab with you in all this?* — and note also that the woman had to admit it. Manipulation is generally detectable after the fact, and being detected is what it cannot survive.",
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The residue',
          text: 'Even by all three criteria, something is owed. Being reached this way is a real intrusion, and Nathan can do it because he is a prophet sent by God to a king who has murdered a man. Absent that warrant, the honest version of the technique usually needs a sentence of consent first: *can I tell you something sideways, because I do not know how to say it straight?*',
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand where Nathan stands',
      ability: 'understand',
      person: 'Nathan, walking to the palace',
      setup:
        'He has been sent to tell an absolute monarch, who has recently arranged one murder to conceal one crime, that he knows. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What you will say',
          prompt: 'You have prepared a story. Why not simply say it?',
        },
        { key: 'feeling', label: 'What you feel', prompt: 'On the walk.' },
        { key: 'fearing', label: 'What you fear', prompt: 'Two fears, at least. Name both.' },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'What outcome are you actually aiming at?',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About David — what makes you think this will work at all?',
        },
        { key: 'not-seeing', label: 'What you cannot see', prompt: 'Walking up to the palace.' },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction:',
        },
        {
          kind: 'list',
          items: [
            '**Why the story:** because a direct accusation gives David somewhere to go — denial, justification, or an order to remove the speaker. The parable gives him nowhere to go except the sentence he passes himself.',
            '**Fearing:** death, obviously. And the second fear, which is worse: that it will not work, that David will shrug, and that the man he served will turn out to be someone else entirely.',
            '**Wanting:** repentance, not punishment. Everything about the design aims at David *seeing*, which is why the parable is built to produce a judgement rather than an admission.',
            '**Assuming:** that there is still a David in there who burns at injustice. The whole method depends on it. If that man is gone, the parable fails and Nathan has walked into a palace for nothing.',
            '**Not seeing:** what it will cost David, and the child, and the household — the rest of 2 Samuel. He is aiming at a moment, and the moment opens onto years.',
          ],
        },
      ],
    },
    {
      id: 's10',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match.',
      left: [
        { id: 'l1', label: 'Enthymeme — the hearer supplies the premise' },
        { id: 'l2', label: 'Relations map, not features' },
        { id: 'l3', label: 'The smuggling analogy' },
        { id: 'l4', label: 'Surrender the device' },
      ],
      right: [
        { id: 'r1', label: '"…because he had no pity" — David\'s own word' },
        { id: 'r2', label: 'No king, no woman, no soldier in the parable' },
        { id: 'r3', label: '"The church is a body, so remove the part that does not function"' },
        { id: 'r4', label: '"You are the man." Four words, and the story is over' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The moral characterisation is produced by the hearer, which is why he cannot disown it.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'Only the structure of the offence transfers; every surface feature is changed.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'The image imports a conclusion the source text argues against.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'The moment it has worked, it is dropped — anything more and he starts arguing with the lamb.',
        },
      ],
    },
    {
      id: 's11',
      type: 'decision',
      title: 'When not to use it',
      ability: 'discern',
      situation:
        "You need to tell a colleague that his habit of finishing people's sentences in meetings is costing him — two junior staff have stopped speaking up. He is decent, oblivious, and defensive when criticised.",
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: 'Tell him plainly and privately: "In the last three meetings you finished Ola\'s sentences four times, and she has stopped starting them."',
          verdict: 'wise',
          consequence:
            'Specific, checkable, and small enough to act on. The defensiveness is real and it is mostly triggered by general character claims, not by counted instances. He can verify this himself in the next meeting.',
          cost: 'One uncomfortable exchange, and the risk that he is briefly cold with you.',
        },
        {
          id: 'd2',
          text: 'Tell him a story about a leader you once knew who did this, and let him work it out.',
          verdict: 'risky',
          consequence:
            "The technique applied where it is not needed. Nathan's parable exists because David had a year of hardened justification and absolute power; your colleague has neither. He will either miss it entirely or feel handled, and both are worse than a sentence.",
          cost: 'Clarity, spent on a device you enjoyed using.',
        },
        {
          id: 'd3',
          text: 'Raise it in the meeting itself, in the moment, lightly.',
          verdict: 'unwise',
          consequence:
            'Correction with an audience, which converts information into humiliation and guarantees he defends rather than hears. Also note it uses the junior staff as props in your intervention.',
          cost: 'His hearing, and the two people you were trying to protect.',
        },
        {
          id: 'd4',
          text: 'Ask Ola to raise it with him herself.',
          verdict: 'unwise',
          consequence:
            'It routes the risk to the person with the least power in the situation, and it is available to you as an option only because you are the one who could do it safely.',
          cost: 'Ola.',
        },
      ],
      afterword: [
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The lesson inside the lesson',
          text: 'Indirection is expensive and slightly dangerous, and it is warranted only when the direct route is genuinely blocked. Most of the time you are not Nathan, this is not a murder, and the correct instrument is one plain sentence with a number in it.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        "Build one. Choose a truth you actually believe and find hard to say — pick from: (a) that someone's generosity is being used, (b) that a person's certainty about someone else is resting on one item, (c) that doing everything for someone is preventing them from growing. Write an original analogy or short case for it, no more than 120 words, ending with the single sentence in which you surrender the device. Then, separately, state the flat conclusion in one sentence and say whether it survives without the story.",
      audience: 'One real person you have in mind. Do not write for a general audience.',
      constraints: [
        'It must map relations, not surface features.',
        'The hearer must be able to reach the conclusion before you state it.',
        'The final sentence must drop the analogy entirely.',
      ],
      rubric: ['clarity', 'evidence', 'perspective', 'usefulness', 'uncertainty', 'compassion'],
      minWords: 100,
      allowVoice: true,
    },
    {
      id: 's13',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's12',
      body: [
        { kind: 'h', text: 'The case — for (c), doing everything for someone' },
        {
          kind: 'p',
          text: '"A friend of mine kept a rescue dog that had been badly kept — thin, frightened, would not come out from under the table. She hand-fed it for a year. Every meal, on the floor, by hand, because it would not eat from a bowl. It got well. It also never learned to eat from a bowl, and when she went into hospital for a week nobody else could feed it, and it lost four kilos with a full bowl beside it. She said afterwards that she had loved that dog into a corner it could not get out of, and that the hard part was that every single meal, on its own, had been the right thing to do.',
        },
        {
          kind: 'p',
          text: 'I think that is what is happening with Ben."',
        },
        { kind: 'h', text: 'The flat conclusion' },
        {
          kind: 'p',
          text: 'Doing everything for Ben is making him unable to function without you, and each individual act of help is genuinely good, which is why it has been invisible.',
        },
        {
          kind: 'p',
          text: 'Does it survive without the story? Partly. The claim is intelligible on its own and would be resisted — it sounds like an accusation of smothering, and the hearer has a year of individually defensible acts to point to. The story is load-bearing for one specific move: the last clause, *every single meal had been the right thing to do*. That is the part a flat statement cannot make credible, and it is the part that lets her hear the rest.',
        },
      ],
      commentary: [
        {
          label: 'Relations, not features',
          text: 'No mother, no son, no adult child. A dog and a bowl. The structure that transfers is: sustained help, individually correct, that prevents a capacity from forming — and the absence is only revealed when the helper is removed.',
        },
        {
          label: 'The surrender sentence',
          text: '"I think that is what is happening with Ben." Nine words, no elaboration, no explanation of what the bowl represents. If it needs explaining, it has failed.',
        },
        {
          label: 'It pre-empts the defence',
          text: 'The line about every meal being right is not decoration — it is aimed precisely at the objection the hearer would raise, and it arrives before she raises it, in a case where she is not the defendant.',
        },
        {
          label: 'The honesty of the audit',
          text: 'Saying "partly" is the right answer. Most good analogies are load-bearing for one specific move rather than for the whole claim, and knowing which move is what keeps you from over-using it.',
        },
      ],
      limits:
        "It risks the hearer feeling compared to a dog — and if the relationship is not warm, that is exactly what will happen. Analogies about people's failings should generally use animals, machines, or strangers, never a category the hearer could feel demoted into.",
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['clarity', 'evidence', 'perspective', 'usefulness', 'uncertainty', 'compassion'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise. Cut it by a third, and check that your final sentence drops the analogy completely rather than explaining it.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'For one week, run the reverse test on yourself. Whenever a story, advert, sermon, or argument moves you toward a conclusion, write the conclusion down flatly, without the story, and ask whether you would accept it stated plainly. Do this at least three times.',
      window: 'Seven days',
      cautions: [
        'Include things you agreed with. The test is worthless if you only apply it to positions you already dislike.',
      ],
      checkIn: 'Which conclusion did not survive being stated flatly?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Is there something true you have been unable to say to someone because you cannot find the words — and is indirection actually warranted, or have you been avoiding one plain sentence?',
      prayer:
        '*A word fitly spoken is like apples of gold in settings of silver* (Proverbs 25:11). Ask for the right word, and for the willingness to say the plain one if that is what is needed.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'load-bearing-analogy',
        'enthymeme',
        'curse-of-knowledge',
        'analogy-failure-modes',
      ],
      passageRefs: ['2 Samuel 12:1-7', 'Luke 10:29-37', 'Proverbs 25:11'],
    },
  ],
}
