import type { Lesson, Module } from '../../types/content'

export const module07: Module = {
  id: 'm07',
  order: 7,
  title: 'Suffering, Uncertainty, Job, and the Limits of Formulas',
  shortTitle: 'Suffering & Limits',
  centralQuestion: 'What do you say when the true explanation is not available?',
  summary:
    "Job's friends get seven days exactly right and then talk for thirty chapters. This module is about the point at which explanation stops helping, what Scripture does instead, and how to stay in a room where nothing can be fixed.",
  abilities: ['understand', 'answer', 'live'],
  lessonIds: ['l07-1'],
}

export const lesson07_1: Lesson = {
  id: 'l07-1',
  moduleId: 'm07',
  title: 'Seven Days of Silence',
  subtitle: 'Where explanation stops and presence begins',
  centralQuestion: 'What do you say when the true explanation is not available?',
  minutes: 42,
  abilities: ['understand', 'answer', 'live'],
  concepts: [
    'presence-over-explanation',
    'theodicy-in-the-room',
    'lament-as-faith',
    'the-whirlwind',
  ],
  passages: ['Job 2:11-13', 'Job 13:4-5', 'Job 38:2-4', 'Job 42:7', 'Romans 12:15'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'The friends arrive',
      ability: 'see',
      source: 'Job 2:11–13 and 13:4–5, World English Bible (public domain).',
      body: [
        {
          kind: 'p',
          text: 'Job has lost his property, his ten children, and his health, in that order, in a matter of days. Three friends hear about it and travel to him.',
        },
        {
          kind: 'scripture',
          ref: 'Job 2:12-13',
          translation: 'World English Bible',
          text: "When they lifted up their eyes from a distance, and didn't recognize him, they raised their voices, and wept; and they each tore his robe, and sprinkled dust on their heads toward the sky. So they sat down with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his grief was very great.",
        },
        {
          kind: 'p',
          text: 'Seven days. They travelled, they wept, they tore their clothes, they sat on the ground, and they said nothing. It is one of the most competent acts of friendship recorded anywhere.',
        },
        {
          kind: 'p',
          text: 'Then Job speaks — a long, terrible speech cursing the day he was born — and the friends answer. They answer for roughly thirty chapters. Eliphaz, Bildad, Zophar, in three cycles, with increasing heat.',
        },
        {
          kind: 'p',
          text: 'Their theology is largely orthodox for their setting. God is just. God does not punish the innocent. Suffering of this magnitude implies sin of some magnitude. Therefore: search yourself, repent, and be restored. It is coherent, it is well-intentioned, and each of them says things that appear elsewhere in Scripture as true.',
        },
        {
          kind: 'p',
          text: 'By chapter thirteen Job has had enough:',
        },
        {
          kind: 'scripture',
          ref: 'Job 13:4-5',
          translation: 'World English Bible',
          text: 'But you are forgers of lies. You are all physicians of no value. Oh that you would be completely silent! Then you would be wise.',
        },
        {
          kind: 'p',
          text: 'And at the end, after God has spoken from the whirlwind, the verdict falls — not on Job, who has said furious and near-blasphemous things throughout, but on the three men who defended God:',
        },
        {
          kind: 'scripture',
          ref: 'Job 42:7',
          translation: 'World English Bible',
          text: 'It was so, that after Yahweh had spoken these words to Job, Yahweh said to Eliphaz the Temanite, "My wrath is kindled against you, and against your two friends; for you have not spoken of me the thing that is right, as my servant Job has."',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'The friends said things that are, in other parts of Scripture, true. God says they did not speak rightly. What exactly did they get wrong? Be precise — "they lacked compassion" is not yet an answer.',
      helper:
        'The most useful answers here are about what kind of speech act they were performing, not about their tone.',
      minWords: 45,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'What is on the page',
      ability: 'see',
      prompt: 'Select what you noticed in the passages above.',
      options: [
        {
          id: 'o1',
          text: 'They did not recognise him from a distance.',
          significance:
            'The suffering has changed his appearance beyond recognition. Whatever they came prepared for, they arrived to something worse.',
        },
        {
          id: 'o2',
          text: 'They sat on the ground with him — not on chairs, and not opposite.',
          significance:
            'Physical alignment. They put themselves in his posture rather than in the posture of visitors. This is not a small detail; almost everything good they do is in the body.',
        },
        {
          id: 'o3',
          text: 'The text gives a reason for the silence: "for they saw that his grief was very great."',
          significance:
            'The silence is not awkwardness or a technique. It is a judgement about proportion — a response calibrated to the size of what they were looking at.',
        },
        {
          id: 'o4',
          text: 'They speak only after Job speaks first.',
          significance:
            'Correct order, and it is the last thing they get right. Note that their failure begins not with speaking but with what they do once given the opening.',
        },
        {
          id: 'o5',
          text: "Job's complaint is that they are physicians, not that they are enemies.",
          significance:
            '"Physicians of no value" concedes that they came to heal. His charge is incompetence in the role, and specifically that their remedy is a lie.',
        },
        {
          id: 'o6',
          text: "God's anger is directed at the friends and not at Job.",
          significance:
            'The most disorienting fact in the book. Job has said, among other things, that God torments him without cause. The three who defended divine justice are the ones indicted.',
        },
        {
          id: 'o7',
          text: "God's speeches from the whirlwind never explain Job's suffering.",
          significance:
            'Four chapters of questions about wild goats, ostriches, the sea, and the storehouses of snow. The reader knows about the prologue in heaven; Job never does. He is never told why.',
        },
      ],
      subtleIds: ['o3', 'o5', 'o6', 'o7'],
    },
    {
      id: 's4',
      type: 'teaching',
      title: 'What the friends actually did wrong',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Three failures, in ascending order of seriousness. Only the third is the one God names.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**They converted a person into a case.** Job needed a friend and was given a diagnosis. The moment his suffering became a problem to be solved, he became the site of the problem.',
            '**They ran a formula backwards.** "The wicked suffer" is a generalisation with real support in wisdom literature. Read forwards it is a warning. Read backwards — *this man suffers, therefore he is wicked* — it becomes an instrument for accusing the afflicted. This is the identical error to Module 3\'s promotion of an observation into a promise, in a crueller application.',
            '**They defended God with things that were not true.** This is the charge in 42:7. They said untrue things *about God* — that his ways are legible, that his justice runs on a schedule visible from a chair, that a sufferer can always locate the cause. They were not defending God. They were defending a theory about God, and they were willing to sacrifice Job to keep it.',
          ],
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'The distinction that costs the most to learn',
          text: 'Defending God and defending your account of God are different acts, and under pressure they feel identical. The test: when the two conflict, which one do you let go of? The friends had a live person contradicting their theory, and they concluded the person must be lying.',
        },
        {
          kind: 'p',
          text: "Now the harder question: what does the book offer instead? Not an answer. God's speeches from the whirlwind (chapters 38–41) are almost entirely questions, and they are about weather, animals, and the sea.",
        },
        {
          kind: 'scripture',
          ref: 'Job 38:2-4',
          translation: 'World English Bible',
          text: 'Who is this who darkens counsel by words without knowledge? Brace yourself like a man, for I will question you, then you answer me! Where were you when I laid the foundations of the earth? Declare, if you have understanding.',
        },
        {
          kind: 'p',
          text: 'Read as an argument, this is a change of subject and a rather brutal one. Read as what it is — an encounter — something else is happening. Job asked to see God and stated repeatedly that if he could only put his case, things would be different. He gets the meeting. He does not get the explanation, and he stops needing it.',
        },
        {
          kind: 'p',
          text: "Job 42:5, his response: *I had heard of you by the hearing of the ear, but now my eye sees you.* The book's resolution is a relationship, not an argument. That is either the most profound thing in the wisdom literature or an evasion, and honest readers have said both.",
        },
        {
          kind: 'aside',
          label: 'A note on what this lesson will not do',
          text: "This is not a solution to the problem of evil. Christian philosophers have serious things to say about that, and the cross says something the book of Job does not. What is claimed here is narrower and more practical: that in the room, with the person, explanation is usually not the instrument — and that the Bible's longest treatment of suffering ends without one.",
        },
      ],
    },
    {
      id: 's5',
      type: 'lenses',
      title: 'Four lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'Lament is not a failure of faith',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'Roughly a third of the Psalter is lament. Psalm 88 ends in darkness with nothing resolved. Jeremiah accuses God of deceiving him. Habakkuk opens by demanding how long. And on the cross, Jesus prays Psalm 22 — *my God, my God, why have you forsaken me* — which means that the last recorded words of the incarnate Son include a lament that Scripture had already given him to pray.',
            },
            {
              kind: 'p',
              text: 'The pastoral implication is direct. When someone says something furious to God in front of you, the wise response is almost never to correct them, because the material they are producing is already in the canon. Job is vindicated in 42:7 having spent thirty chapters saying things that would get him removed from most small groups.',
            },
            {
              kind: 'scripture',
              ref: 'Romans 12:15',
              translation: 'World English Bible',
              text: 'Rejoice with those who rejoice. Weep with those who weep.',
            },
            {
              kind: 'p',
              text: 'Note what is not said: *explain to those who weep*, or *correct the theology of those who weep*. The instruction is to match, not to fix.',
            },
          ],
          passages: ['Job 42:7', 'Psalm 88', 'Romans 12:15'],
        },
        {
          lens: 'psychological',
          heading: 'What actually helps the bereaved',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: "Grief research has moved a long way from the popular model. Kübler-Ross's five stages were derived from work with dying patients, not the bereaved, and the evidence does not support them as a sequence anyone passes through. Stroebe and Schut's **dual process model** fits the data better: mourners oscillate between loss-oriented and restoration-oriented coping, and the oscillation is functional rather than avoidant. A grieving person laughing at lunch is not in denial.",
            },
            {
              kind: 'p',
              text: "On what helps: George Bonanno's work on resilience found that most bereaved people do not follow a prolonged trajectory of intense distress, and that routine grief counselling for ordinary bereavement shows small or null effects — while support for the minority with complicated or prolonged grief does help. The practical reading is that presence, practical help, and not pathologising the ordinary do more than intervention.",
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'Weight',
              text: "The rejection of the five-stage model is well established. The dual process model is widely used and still debated. Bonanno's resilience finding is robust in outline and argued about in detail. None of this tells you what to say to your friend; it tells you which confident popular claims to stop repeating.",
            },
          ],
        },
        {
          lens: 'philosophical',
          heading: 'The Stoic answer, taken seriously',
          claimKind: 'philosophy',
          body: [
            {
              kind: 'p',
              text: "Epictetus, in the *Enchiridion*, teaches that we are disturbed not by events but by our judgements about events, and that peace lies in distinguishing what is up to us from what is not. Of a child's death he advises the mourner to remember that they never possessed the child in the first place — it was returned, not taken.",
            },
            {
              kind: 'p',
              text: 'This deserves better than the usual dismissal. It is a genuine discipline, it has helped real people under torture and imprisonment, and its core observation — that a great deal of our suffering is produced by our demands on reality — is true and useful. Marcus Aurelius wrote it down while running an empire and burying children.',
            },
            {
              kind: 'p',
              text: "Where it parts from Scripture: it treats grief as an error to be corrected. Jesus wept at Lazarus's tomb knowing he was about to raise him, which on the Stoic account is straightforwardly a mistake. The biblical position is that the loss is *real*, that death is an enemy rather than a category error, and that lament is the appropriate response to a genuinely wrong thing.",
            },
          ],
          tension:
            'Stoicism offers something Christianity does not: an achievable technique for immediate relief. Christianity offers something Stoicism does not: permission for the grief to be true. Do not pretend the trade is costless.',
        },
        {
          lens: 'literary',
          heading: "Ivan's objection",
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: "In Dostoevsky's *The Brothers Karamazov* (1880), Ivan tells his believing brother a series of documented atrocities against children and then says something more dangerous than atheism: he does not deny God, he *returns the ticket*. Even if the final harmony is real, he refuses to accept a universe whose harmony was purchased at that price.",
            },
            {
              kind: 'p',
              text: 'Dostoevsky, a Christian, wrote the strongest case against his own position and gave it to the more articulate brother. Alyosha does not answer it with an argument. He kisses him.',
            },
            {
              kind: 'p',
              text: "The novel's answer, such as it is, comes later and in a different register — through the elder Zosima and through active, particular, unromantic love. Whether that constitutes an answer is exactly the question. But the structure is worth learning from: the book does not fear the objection, does not shorten it, and does not answer it with a syllogism.",
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      type: 'certainty',
      title: 'Claims about Job',
      ability: 'interpret',
      prompt: 'Sort these by what the book supports.',
      claims: [
        {
          id: 'c1',
          text: 'The friends sat with Job for seven days without speaking.',
          tier: 'stated',
          why: 'Job 2:13.',
        },
        {
          id: 'c2',
          text: 'God is angry with the friends for what they said about him.',
          tier: 'stated',
          why: "Job 42:7, and it is worth reading twice because most readers remember the book as being about Job's vindication rather than the friends' indictment.",
        },
        {
          id: 'c3',
          text: 'Job is never told the reason for his suffering.',
          tier: 'implied',
          why: 'The reader is told, in chapters 1–2. Job is not, anywhere in the book. Nearly certain, and structurally the most important fact in it.',
        },
        {
          id: 'c4',
          text: 'The book teaches that all attempts to explain suffering are wrong.',
          tier: 'possible',
          why: 'It is a common takeaway and it overreaches. The book condemns a particular use of a particular explanation by particular people in a particular room. Elsewhere Scripture does explain suffering in various ways — discipline, consequence, the cost of faithfulness. The book restricts the confident application, not the category.',
        },
        {
          id: 'c5',
          text: 'The friends were insincere.',
          tier: 'unsupported',
          why: 'They travelled a long way, wept, and tore their clothes. Everything indicates they meant it. Insincerity would make the book far less useful — the whole point is that sincere, orthodox, well-meaning people did this.',
        },
        {
          id: 'c6',
          text: 'Silence is always the right response to grief.',
          tier: 'unsupported',
          why: "The friends' silence is praised for seven days and their speech is condemned; but Job also complains bitterly of being abandoned, and God ends the book by speaking. A rule extracted here would be exactly the kind of formula the book exists to break.",
        },
      ],
    },
    {
      id: 's7',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'Suppose a friend, grieving, says to you: "God took her because he needed another angel." That is false. It is also comforting them. On the account above you are to weep and not explain — which means watching someone build their grief on something untrue, and saying nothing. At what point does refusing to correct become its own kind of abandonment?',
      prompt:
        'Answer with a rule you could actually follow at a graveside, and name the cost of your rule.',
      helper:
        'Consider the difference between what is said in the first week and what is said in the eighth month.',
      reveal: [
        {
          kind: 'p',
          text: 'A rule that survives contact with real rooms:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Do not correct anything that is load-bearing while the person is still standing on it.** In the first weeks, false comfort is scaffolding. Kicking it away does not give them truth; it gives them a collapse plus a lecture.',
            '**Do correct what will hurt them later, and do it later.** "God needed another angel" is comparatively harmless. "God took her because of my sin" is not — that one is Job\'s friends in the sufferer\'s own mouth, and it will still be there in five years. Note the difference: correct what is being used to accuse, not what is being used to survive.',
            '**Never say the false thing yourself.** You are not obliged to correct their sentence; you are obliged not to add to it. There is a great deal of room between contradiction and endorsement, and it is mostly occupied by questions and silence.',
            '**Do not answer a question that was not asked.** In grief people say things aloud to hear how they sound. A statement is not always a position.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The cost of the rule',
          text: "You will sit for months with someone believing something you think is untrue, and some of them will never ask, and you will have to be at peace with that. This is a real cost and it is the one that people who love truth find hardest. It is worth naming that Job's friends were not wrong to want him to have a true account. They were wrong about the timing, the certainty, and the willingness to sacrifice him for it.",
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where Eliphaz stands',
      ability: 'understand',
      person: 'Eliphaz the Temanite, on the eighth day',
      setup:
        'You have travelled a long way. You have sat on the ground for a week. Your friend has just cursed the day he was born, in front of you. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What you say',
          prompt: 'You are about to speak for the first time in seven days. Why now?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'Hearing him curse his birth. Be specific.',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'What are you afraid is true, if Job is innocent?',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'For Job — and for the world to remain a particular kind of place.',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About the relationship between suffering and desert.',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'What is invisible from the eighth day?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction, and it is the most sympathetic reading available — deliberately, because Eliphaz is the character readers most need to be able to see from inside.',
        },
        {
          kind: 'list',
          items: [
            '**Feeling:** fear. Not irritation. His friend is saying things that, in his world, are dangerous to say, and he wants to stop him before it gets worse.',
            '**Fearing:** that if Job is innocent, then this can happen to anyone — including Eliphaz, including his children. The theory under attack is the only thing standing between him and a universe where catastrophe is unallocated. Every word he says for thirty chapters is spoken into that fear.',
            '**Wanting:** genuinely, for Job to be restored. The formula has an exit in it: repent and be healed. He is offering his friend a door.',
            "**Assuming:** that God's justice must be legible on a human timescale. This is not a stupid assumption. It is most of Proverbs, read carelessly.",
            '**Not seeing:** that his comfort requires Job to be guilty, and that he will therefore keep needing Job to be guilty as the evidence mounts. By chapter 22 he is inventing specific sins.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Why this matters',
          text: "Almost everyone who has said something terrible to a sufferer did it out of Eliphaz's fear, not out of cruelty. If you can see that, you can be corrected when you do it — and you will do it.",
        },
      ],
    },
    {
      id: 's9',
      type: 'decision',
      title: 'A hospital corridor',
      ability: 'discern',
      situation:
        'Your friend\'s son died three weeks ago, at eight, after an illness. You are the third visitor today. She says, without looking up: "Everyone keeps telling me he is in a better place. I want to scream. Is that wrong of me?"',
      prompt: 'Choose your response.',
      options: [
        {
          id: 'd1',
          text: '"No. It is not wrong. A third of the Psalms are people screaming."',
          verdict: 'wise',
          consequence:
            'Answers her actual question, which was about permission, and grounds the permission in something outside your opinion. It does not defend the other visitors, does not correct her theology, and does not require her to do anything with it.',
          cost: 'Almost nothing — which is why it is the right answer. Note that it is two sentences.',
        },
        {
          id: 'd2',
          text: '"No. And for what it is worth, I think people say that because they cannot bear the silence."',
          verdict: 'defensible',
          consequence:
            'The first half is right. The second half is a small, true, generous observation — and it also quietly asks her to extend charity to people who have been hurting her, three weeks in. That is a lot to ask today. It would be a good thing to say in April.',
          cost: 'A little of her energy, spent on managing your discomfort about the other visitors.',
        },
        {
          id: 'd3',
          text: '"He is in a better place, though. That part is true, even if the way people say it is unbearable."',
          verdict: 'unwise',
          consequence:
            'You have taken a question about whether her rage is permitted and answered it with a doctrinal correction. Whatever its truth, its function here is to close the conversation she was opening. She will not ask you again.',
          cost: 'The next eight months of being someone she can say things to.',
        },
        {
          id: 'd4',
          text: 'Say nothing. Sit down.',
          verdict: 'defensible',
          consequence:
            'Sometimes exactly right and it is never a disaster. But she asked a direct question, and a direct question in grief is rare and costly to ask. Silence in response to a specific request for permission can be received as the answer being yes, it is wrong of you.',
          cost: 'A moment she opened, left unanswered. The seven days were before Job spoke.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'The friends\' silence is praised in a context where Job had not asked anything. When he asks, they answer badly. The lesson is not "be silent" — it is "be governed by what the person is actually doing."',
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
        { id: 'l1', label: 'A formula run backwards becomes an accusation' },
        { id: 'l2', label: 'Defending God vs defending your account of God' },
        { id: 'l3', label: 'Lament is in the canon' },
        { id: 'l4', label: 'Presence before explanation' },
      ],
      right: [
        { id: 'r1', label: '"This man suffers, therefore he sinned"' },
        { id: 'r2', label: 'Job 42:7 — the defenders are the ones indicted' },
        { id: 'r3', label: 'Jesus prays Psalm 22 from the cross' },
        { id: 'r4', label: 'Seven days on the ground, saying nothing' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The same generalisation that warns when read forwards, accuses when read backwards.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'They protected the theory and sacrificed the man, and God calls that speaking wrongly about him.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: "The words of desolation on the cross are quoted from Israel's prayer book.",
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'The single most competent thing anyone does in the entire book.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Eight months after her son died, your friend asks you something different: "Do you think God did this? Not allowed — did. Because I have decided I would rather he did it for a reason than that it just happened and he watched." Write your reply. Eight to twelve sentences.',
      audience:
        'Someone no longer in acute shock, thinking hard, asking a real theological question and entitled to a real answer.',
      constraints: [
        'She has asked directly. Do not deflect into presence — that was three weeks ago.',
        'Do not pretend to a certainty you do not have.',
        'Do not leave her with nothing.',
      ],
      rubric: ['grounding', 'uncertainty', 'compassion', 'perspective', 'clarity', 'usefulness'],
      minWords: 120,
      allowVoice: true,
    },
    {
      id: 's12',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's11',
      body: [
        {
          kind: 'p',
          text: 'I want to answer that properly, so I am going to say what I think and also where I stop knowing.',
        },
        {
          kind: 'p',
          text: "What I believe: nothing happens outside God's knowledge or his reach, and I do not think your son slipped through. So I cannot give you the version where God was elsewhere. I also do not believe he did it *to* you, in the sense of choosing your family for a lesson, and I would not accept that from anyone who told you it.",
        },
        {
          kind: 'p',
          text: 'Where I stop: how those two things fit is genuinely beyond me, and I have stopped pretending otherwise. The longest book in the Bible about exactly this ends without an explanation. Job asks, God arrives, and the answer he gets is not an answer — it is a presence, and four chapters of questions about ostriches. What is astonishing is that it seems to have been enough for Job, and I do not fully understand why.',
        },
        {
          kind: 'p',
          text: 'But I understand the thing you said about preferring a reason, and I do not think it is a failure of faith. I think it is the most human sentence there is. A reason would mean the universe is answerable. The alternative you are imagining is unbearable and I am not going to argue you out of it with a syllogism.',
        },
        {
          kind: 'p',
          text: "The one thing I would say against the version where he did it for a reason: it is a short road from there to what your son's death was *for*, and then to what it was supposed to teach you, and I have watched that road end in people believing their child was spent on their improvement. I would rather leave you with an unanswered question than take you down it.",
        },
        {
          kind: 'p',
          text: 'What I keep coming back to is that when God finally shows up in Job, he does not explain. He turns up. And the thing Christians say about the cross is not that suffering has been justified but that God has been in it. I do not know what to do with that as an argument. As a fact about who is with you, it is the only thing I have that has held.',
        },
      ],
      commentary: [
        {
          label: 'It marks the boundary explicitly and early',
          text: '"What I think and also where I stop knowing." Announcing the structure lets her hear the confident parts as confident and the uncertain parts as uncertain, rather than averaging the whole thing into hedging.',
        },
        {
          label: 'It refuses one option on her behalf',
          text: '"I would not accept that from anyone who told you it." She is offered protection from a reading she might otherwise be handed by someone else, which is a service rather than a correction.',
        },
        {
          label: 'The strongest paragraph is the fifth',
          text: 'It gives a *reason* not to take the comforting road, drawn from having seen where it ends. That is far more useful than asserting the road is wrong.',
        },
        {
          label: 'It ends without resolving',
          text: '"I do not know what to do with that as an argument." The exemplar declines the tidy landing, which is what the book of Job does and what the rubric\'s uncertainty dimension is asking for.',
        },
      ],
      limits:
        'It is heavy, and it assumes she has the capacity for it — eight months is a guess, not a rule. It also leans on the cross in the last line without unpacking it, which for some friends would be the most important sentence and for others would be the one that lands as a formula.',
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['grounding', 'uncertainty', 'compassion', 'perspective', 'clarity', 'usefulness'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise. Find the sentence where you were protecting yourself rather than serving her, and change it.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Contact someone whose loss is now old enough that people have stopped mentioning it — six months, two years, ten. Say the name of the person they lost out loud, or write it. Ask nothing. The most common thing the bereaved report is that people stop saying the name.',
      window: 'Within seven days',
      cautions: [
        'Do not explain that you are doing this because of an exercise.',
        'Do not ask how they are coping. Say the name and offer something ordinary.',
      ],
      checkIn: 'What happened when you said the name?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Where in your own life have you been quietly running a formula backwards — treating some difficulty as evidence of a fault you have not identified?',
      prayer:
        'Pray a lament. Not a request: a complaint. Psalm 88 or Job 3 will give you the words if you do not have your own. Do not resolve it at the end.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'presence-over-explanation',
        'theodicy-in-the-room',
        'lament-as-faith',
        'the-whirlwind',
      ],
      passageRefs: ['Job 2:11-13', 'Job 42:7', 'Romans 12:15', 'Psalm 88'],
    },
  ],
}
