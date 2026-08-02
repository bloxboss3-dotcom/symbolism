import type { Lesson, Module } from '../../types/content'

export const module12: Module = {
  id: 'm12',
  order: 12,
  title: 'The Final Wisdom Trial: A Complex Leadership and Relationship Case',
  shortTitle: 'The Final Trial',
  centralQuestion:
    'Can you hold all of it at once — the facts, the people, the duties, and the one thing that is not negotiable?',
  summary:
    'One case, eight days, six people, and no clean option. Everything from the previous eleven modules is in here, and one thing is present that none of them prepared you to trade away.',
  abilities: ['see', 'interpret', 'discern', 'understand', 'answer', 'live'],
  lessonIds: ['l12-1'],
}

export const lesson12_1: Lesson = {
  id: 'l12-1',
  moduleId: 'm12',
  title: 'The House on Ash Street',
  subtitle: 'The final trial',
  centralQuestion: 'Can you hold all of it at once?',
  minutes: 55,
  abilities: ['see', 'interpret', 'discern', 'understand', 'answer', 'live'],
  concepts: [
    'non-negotiable-duty',
    'sequence-vs-priority',
    'the-earlier-decision',
    'give-the-work-back',
  ],
  passages: ['Micah 6:8', '1 Timothy 5:19', 'Proverbs 18:13', 'James 1:19'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'Eight months in',
      ability: 'see',
      kicker:
        'Long. Read it once through without deciding anything. There is no correct answer waiting at the end, but there is one wrong one that everything else depends on.',
      body: [
        {
          kind: 'p',
          text: 'Ash Street House takes eight young men at a time, aged sixteen to twenty-one, leaving the care system. It has been running for twenty-two years. You have been its director for eight months. Before you, there were two directors in twenty-two years.',
        },
        {
          kind: 'h',
          text: 'Marius',
        },
        {
          kind: 'p',
          text: 'Marius is sixty-one and has been house manager for nineteen years. Former residents come back to see him — at Christmas, when they get jobs, when they have children. Two of them named sons after him. He is, in every sense that a place like this measures, the house.',
        },
        {
          kind: 'p',
          text: 'In the last five months: three missed handovers. A medication error logged in April — the right drug, the wrong resident, caught by the receiving pharmacy, no harm done. Twice found asleep during a waking night shift. A rota he built in June that had one member of staff covering two sites simultaneously, which he did not notice and which someone else caught.',
        },
        {
          kind: 'p',
          text: 'He has not been spoken to about any of it. Your predecessor logged the medication error and wrote "discussed informally" with no record of a discussion.',
        },
        {
          kind: 'h',
          text: 'Kian',
        },
        {
          kind: 'p',
          text: 'Kian is eighteen, has been in the house five months, and has a history in his file of allegations against three previous placements, two of which were investigated and unsubstantiated and one of which was never concluded because he moved.',
        },
        {
          kind: 'p',
          text: 'On Tuesday, to Tolu — a support worker, twenty-four, ten months in the job — Kian said: "Marius was being weird the other night. In my room." Tolu asked him what he meant. Kian said "nothing, forget it, I\'m not doing this again," and left the room. On Wednesday he told Tolu he had made it up because he was angry about his phone being taken.',
        },
        {
          kind: 'p',
          text: 'Tolu came to you on Wednesday evening, having already written it down on Tuesday night, including the exact words. She is frightened. She asked you twice whether she had done the right thing.',
        },
        {
          kind: 'h',
          text: 'What else is true',
        },
        {
          kind: 'list',
          items: [
            "The Ainsworth Trust provides about thirty per cent of the house's income. Its chair, Grace Ainsworth, is Marius's cousin, and has said in a trustees' meeting that Marius is \"the reason we fund it.\"",
            'Three staff have told you separately that people are saying the new director is "clearing out the old guard." You have dismissed no one.',
            "Marius's wife Delia has early-onset dementia. He is her sole carer. He has told nobody at work. You know because you saw them in a hospital car park in February and he asked you not to mention it.",
            'You have cancelled two anniversaries this year. Your wife said something on Sunday that you have not stopped thinking about, and you did not answer it.',
            'Tolu is deciding, this week, what kind of organisation this is.',
          ],
        },
        {
          kind: 'p',
          text: 'It is Wednesday, 9:40pm. Marius is on shift tomorrow at seven.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Before anything else: what do you do tonight, and what do you do first tomorrow? Write it as actions with times attached. Then name what you are most afraid of.',
      helper:
        'This is the last unaided judgement in the curriculum. Everything you have learned is available; nothing has been pointed at this yet.',
      minWords: 70,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'One duty is not in the balance',
      ability: 'discern',
      body: [
        {
          kind: 'p',
          text: 'Module 8 taught you to weigh competing duties, find the sequence, and accept the residue. Almost everything in this case is that kind of problem. One thing is not, and getting this wrong makes every other good judgement worthless.',
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The non-negotiable',
          text: 'A young person in your care has said something that may indicate harm. That goes into the safeguarding process, tonight, through whoever your designated safeguarding lead and local authority procedures specify. It is not yours to weigh, investigate, resolve, or interpret. A retraction does not close it — retraction is one of the most common features of genuine disclosure, and it is also consistent with a false report, which is exactly why the assessment belongs to people trained to make it and not to you.',
        },
        {
          kind: 'p',
          text: 'Notice what this removes from the case. You are not deciding whether Kian is telling the truth. You are not weighing his file against Marius\'s nineteen years. You are not deciding whether "being weird" means anything. Every one of those is a judgement you are unqualified to make and structurally incapable of making fairly, because you know both people and one of them is the reason your funding exists.',
        },
        {
          kind: 'p',
          text: 'The file matters here, and not in the direction instinct suggests. Three previous allegations is a fact that a trained assessor must have — and it is also exactly what a young person who has been harmed repeatedly would have. Both readings are live. That is precisely why the reading is not yours.',
        },
        {
          kind: 'h',
          text: 'The passage that gets misused here',
        },
        {
          kind: 'scripture',
          ref: '1 Timothy 5:19',
          translation: 'World English Bible',
          text: "Don't receive an accusation against an elder, except at the word of two or three witnesses.",
        },
        {
          kind: 'p',
          text: "This verse has done an enormous amount of damage in exactly this situation. It concerns formal church discipline — a public charge against a leader within a congregation — and it exists to prevent a leader being destroyed by one malicious voice. It is a genuine safeguard and it has been repeatedly repurposed, in institutions that should have known better, into a rule that a child's single account may be disregarded.",
        },
        {
          kind: 'p',
          text: "Read it alongside the rest of the same Scripture: the requirement of two witnesses in Deuteronomy 19:15 governs *conviction and punishment*, not whether a matter is looked into. And the same law commands the protection of the fatherless with unusual force. A reading of 1 Timothy 5:19 that leaves a young man in a house with an unexamined report is not a high view of Scripture. It is a use of Scripture to avoid a duty — which is the exact failure Job's friends were condemned for in Module 7.",
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'What this does not mean',
          text: 'It does not mean Marius is guilty, and it does not mean he should be treated as though he were. Referral is not accusation, suspension is not a verdict, and a fair process protects the accused as much as the complainant. What you owe Marius is a process that could exonerate him. What you owe him is not concealment.',
        },
      ],
    },
    {
      id: 's3b',
      type: 'lenses',
      title: 'Three lenses on a week like this',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'The vulnerable have a particular claim',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: 'Psalm 82:3-4',
              translation: 'World English Bible',
              text: 'Defend the weak, the poor, and the fatherless. Maintain the rights of the poor and oppressed. Rescue the weak and needy. Deliver them out of the hand of the wicked.',
            },
            {
              kind: 'p',
              text: 'Scripture returns to this group — the fatherless, the widow, the foreigner — with a persistence that is hard to miss once you look for it. God is described as executing justice for them (Deuteronomy 10:18); the mark of undefiled religion is visiting them in their affliction (James 1:27); and the sharpest warning Jesus gives about anyone concerns causing one of the little ones to stumble (Matthew 18:6).',
            },
            {
              kind: 'p',
              text: 'Kian is eighteen, has been through the care system, and has three prior allegations behind him. Every one of those facts makes him easier to disbelieve and none of them makes him less the person these passages are about. The pattern in Scripture is that the one with the fewest resources to be heard gets the most explicit protection.',
            },
            {
              kind: 'p',
              text: 'This does not tell you what happened in that room. It tells you what the referral is for.',
            },
          ],
          passages: ['Psalm 82:3-4', 'James 1:27', 'Matthew 18:6'],
        },
        {
          lens: 'leadership',
          heading: 'What institutional failures have in common',
          claimKind: 'inference',
          body: [
            {
              kind: 'p',
              text: 'Public inquiries into safeguarding failures across churches, schools, sports bodies and care providers have produced findings that rhyme with each other to an uncomfortable degree. The recurring features are not exotic:',
            },
            {
              kind: 'list',
              items: [
                'A concern was handled *informally*, by someone who knew both parties.',
                'The person concerned was long-serving, well-liked, and central to the organisation.',
                "A retraction, or the complainant's history, was treated as closing the matter.",
                'The reputational consequences of reporting were weighed against the harm of not reporting.',
                'Nobody involved thought of themselves as covering anything up.',
              ],
            },
            {
              kind: 'p',
              text: 'That last line is the one to sit with. The failure mode is not villainy. It is a series of individually defensible judgements made by decent people who each believed they were exercising discretion — which is precisely why the safeguarding duty is removed from discretion.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'How much weight this card carries',
              text: "This is the curriculum writer's summary of a broad pattern, not a citation of a specific report, and safeguarding law and procedure vary by country and sector. Follow your own jurisdiction's process and your organisation's designated lead — not this app.",
            },
          ],
        },
        {
          lens: 'pastoral',
          heading: 'You are the exhausted one too',
          claimKind: 'inference',
          body: [
            {
              kind: 'p',
              text: "Marius is depleted, carrying something alone, and has been making worse decisions for months without noticing the slope. So is the director. Two cancelled anniversaries, eleven o'clock emails, and a question on Sunday that went unanswered.",
            },
            {
              kind: 'p',
              text: 'This is not a sentimental aside. A leader running at that level makes exactly the kind of decision this week requires them not to make: fast, isolated, and interpreted through fear. Every failure mode in the case above — deferring the hard conversation, keeping a confidence instead of offering help, treating a rumour as data — gets more likely, not less, in a depleted person.',
            },
            {
              kind: 'p',
              text: 'The practical form of this is unglamorous. Before Thursday, tell one person outside the organisation that this is happening and that you are frightened. Not for support in a general sense — because Module 5 established that the heart cannot audit itself, and this is the week you most need an instrument that works.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      type: 'certainty',
      title: 'What do you actually know?',
      ability: 'interpret',
      prompt:
        'Sort by the support the case gives. Do this carefully; it is the whole discipline of Module 4 under pressure.',
      claims: [
        {
          id: 'c1',
          text: 'Kian said "Marius was being weird the other night. In my room."',
          tier: 'stated',
          why: 'Contemporaneously recorded by Tolu on Tuesday night, in his exact words. This is the strongest fact you have and it is a fact about what was said, not about what happened.',
        },
        {
          id: 'c2',
          text: 'Marius is exhausted.',
          tier: 'implied',
          why: 'Sole carer for a wife with early-onset dementia, plus asleep twice on waking nights. As close to established as anything here.',
        },
        {
          id: 'c3',
          text: 'The retraction was caused by the phone.',
          tier: 'possible',
          why: 'It is what he said. It is also what someone says when they have decided that this will go the way the last three went. Two readings, equally consistent, and neither is yours to choose between.',
        },
        {
          id: 'c4',
          text: "Marius's performance decline is explained by his caring responsibilities.",
          tier: 'reasonable',
          why: 'A fair inference and the humane one. Be careful with it: an explanation that accounts for the missed handovers does not thereby account for anything else, and the pull to let one explanation cover everything is very strong when you like someone.',
        },
        {
          id: 'c5',
          text: 'The "clearing out the old guard" rumour is about Marius.',
          tier: 'possible',
          why: 'Probably. And notice how it operates: it is already in the building, so any action you take will be read through it. That is a fact about your constraints, not evidence about anything.',
        },
        {
          id: 'c6',
          text: 'Grace Ainsworth would withdraw funding over this.',
          tier: 'unsupported',
          why: 'Nothing supports it. She has said Marius is why she funds it — which is not the same claim, and the fear of it is doing far more work in your reasoning than the evidence for it. Compare the funder in Module 8, where the imagined worst outcome was treated as certain and the better one as unavailable.',
        },
      ],
    },
    {
      id: 's5',
      type: 'ranking',
      title: 'Wednesday night into Thursday',
      ability: 'discern',
      prompt: 'Put these in the order you would do them.',
      helper:
        'Sequence, not importance. Recall from Module 8 that these two orderings differ and that confusing them is a failure in both directions.',
      items: [
        {
          id: 'a1',
          text: 'Refer to the designated safeguarding lead and follow local authority procedure.',
        },
        {
          id: 'a2',
          text: 'Ensure Marius is not on shift tomorrow, and that this is arranged tonight.',
        },
        { id: 'a3', text: 'Tell Tolu she did exactly the right thing, in writing, tonight.' },
        {
          id: 'a4',
          text: 'Tell Marius there is a safeguarding referral concerning him and what happens next.',
        },
        { id: 'a5', text: 'Tell your chair of trustees.' },
        { id: 'a6', text: "Address Marius's performance record and the missing supervision." },
      ],
      idealOrder: ['a1', 'a2', 'a3', 'a5', 'a4', 'a6'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Refer, tonight.** Before anything, before advice, before your chair. Delay is the one thing that cannot be justified afterwards, and it is the thing every institutional failure of this kind has in common.',
            '**Cover the shift, tonight.** Not as a judgement — as the ordinary precaution that a fair process requires. Arranging it tonight rather than at 6:50am is the difference between a decision and a scramble.',
            '**Tolu, in writing, tonight.** She asked twice. She is deciding what kind of place this is, and the answer she gets will govern whether the next person writes it down. It costs you four minutes and it is one of the highest-return acts available to you all year.',
            '**Your chair.** Before you speak to Marius, because what you say to him is constrained by the process, and because a chair who learns this from Grace Ainsworth is a chair who cannot help you.',
            '**Marius.** Guided by the safeguarding lead on what may be said, and said by you rather than by a letter. This is the hardest conversation of your career and it is fifth, which will feel wrong all night.',
            '**Performance.** Last, and separately, and not until the safeguarding matter is concluded. Merging them would be catastrophic in both directions: it would look like building a case, and it would let a genuine and long-overdue supervision failure hide inside a safeguarding process.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The two things that must never merge',
          text: 'The safeguarding matter and the performance matter are separate processes about separate facts, and the fact that they concern the same man is the reason to keep them apart rather than a reason to combine them. If you find yourself putting the medication error into the safeguarding referral as context, stop.',
        },
      ],
    },
    {
      id: 's6',
      type: 'observation',
      title: 'What has been in front of you for eight months',
      ability: 'see',
      prompt: 'Select what you can see now, looking back at the case as written.',
      options: [
        {
          id: 'o1',
          text: 'Marius has never had a supervision conversation about any of the five incidents.',
          significance:
            'Nineteen years and an accumulating record with no correction. Whatever happens now lands on a man who has never once been told there was a problem — which is a failure by two directors, one of whom is you.',
        },
        {
          id: 'o2',
          text: '"Discussed informally" with no record of a discussion.',
          significance:
            "Your predecessor's unsent email, in the sense of Module 5. A discomfort discharged by writing something down. The phrase exists to close a file, not to record an event.",
        },
        {
          id: 'o3',
          text: 'You have known about Delia since February and have told no one.',
          significance:
            'He asked you not to, and you agreed, and it was a kind thing to agree to. It also means you have been holding the explanation for his decline privately for six months while his record accumulated — which has now become a fact about you that will be asked about.',
        },
        {
          id: 'o4',
          text: 'Tolu wrote it down on Tuesday night and came to you on Wednesday evening.',
          significance:
            "A day's gap. She wrote it immediately and then took twenty-four hours to decide whether reporting it was safe. That gap is the single most informative fact about the culture of the house, and it is not about Marius.",
        },
        {
          id: 'o5',
          text: 'The rumour arrived before any dismissal.',
          significance:
            'Something is being managed in the building that you are not part of. Note that any correct action you now take will be received as confirmation, and that this cannot be allowed to affect the action.',
        },
        {
          id: 'o6',
          text: 'You did not answer your wife on Sunday.',
          significance:
            'It is in the case for a reason. A director who is running at this level of depletion makes exactly the kind of decision this week requires him not to make. This is the same fact about Marius, one rung up, and you are as blind to it as he is.',
        },
        {
          id: 'o7',
          text: 'Kian said "I\'m not doing this again."',
          significance:
            'The most easily missed sentence in the case, and possibly the most important. Whatever it refers to, he has a history of this going somewhere he did not want it to go. It is evidence about his expectations, not about the truth of the report.',
        },
      ],
      subtleIds: ['o2', 'o4', 'o6', 'o7'],
    },
    {
      id: 's7',
      type: 'perspective',
      title: 'Stand where Marius stands',
      ability: 'understand',
      person: 'Marius, Thursday morning',
      setup:
        'He gets a call at 6:20am asking him not to come in, and to meet you at nine. He has been awake since four with Delia. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What he says',
          prompt: 'On the phone at 6:20am. Then in the room at nine.',
        },
        { key: 'feeling', label: 'What he feels', prompt: 'In the order the feelings arrive.' },
        { key: 'fearing', label: 'What he fears', prompt: 'Not the allegation. The other thing.' },
        { key: 'desiring', label: 'What he wants', prompt: 'Right now, more than anything.' },
        {
          key: 'assuming',
          label: 'What he assumes',
          prompt: 'About you, about the last eight months, about why this is happening now.',
        },
        { key: 'not-seeing', label: 'What he cannot see', prompt: 'From inside nineteen years.' },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction. Note how much of it is not about the allegation at all.',
        },
        {
          kind: 'list',
          items: [
            '**Feelings, in order:** confusion, then a specific cold fear, then — and this is the one to be ready for — relief that something has finally happened, followed immediately by shame at the relief. He has been drowning since roughly November.',
            '**Fearing:** not primarily the outcome. That Delia will have to go into care because he cannot afford to be suspended, and that this was always going to happen and he has just been outrunning it.',
            '**Wanting:** to be believed. And underneath that, to be asked how he is, by someone, for the first time in a year.',
            '**Assuming:** that this is the clearing-out. He has heard the rumour too. From inside his position, a new director with eight months in post, a performance file he has never been shown, and now this, resolves into one obvious story — and it is the wrong story, and it is not a stupid one.',
            '**Not seeing:** that no one has ever corrected him, and that this is why the accumulation feels like an ambush. Nineteen years of being the house means he has never been managed. That is a gift that has been slowly turning into a trap.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: "What this changes about nine o'clock",
          text: 'You cannot discuss the allegation with him beyond what the process permits. You can — and should — say the true thing about the eight months: that he has never been given supervision, that this is a failure of the organisation and partly yours, and that it is separate from why he is here today. Saying it does not compromise the process and it is the only thing available to you that is both true and load-bearing.',
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where Kian stands',
      ability: 'understand',
      person: 'Kian, Wednesday night',
      setup:
        'He retracted this morning. He is in his room. He does not know Tolu wrote anything down. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What he said',
          prompt: 'Tuesday, then Wednesday. Why the second one?',
        },
        { key: 'feeling', label: 'What he feels', prompt: 'Wednesday night, in the room.' },
        {
          key: 'fearing',
          label: 'What he fears',
          prompt: 'Two things, and they point in opposite directions.',
        },
        {
          key: 'desiring',
          label: 'What he wants',
          prompt: 'What would a good outcome look like from where he is?',
        },
        {
          key: 'assuming',
          label: 'What he assumes',
          prompt: 'About what happens to people like him when they say things like this.',
        },
        {
          key: 'not-seeing',
          label: 'What he cannot see',
          prompt: 'At eighteen, five months in, with that file behind him.',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction, offered with a warning attached.',
        },
        {
          kind: 'list',
          items: [
            '**Fearing, in both directions:** that nothing will happen, and that everything will happen. That he will be moved again — the fourth placement — and that he will be the reason the house loses the person everyone loves.',
            '**Assuming:** that this ends with him somewhere else. Three previous times, this is what happened. "I\'m not doing this again" is not a retraction; it is a prediction based on his entire experience of the system.',
            '**Wanting:** to stay. Whatever is or is not true, he has been in the house five months and has not run, which is not nothing.',
            '**Not seeing:** that this time, one person wrote it down within an hour.',
          ],
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The warning',
          text: 'This reconstruction is written as though the report were true, and Module 9 would tell you that is what perspective-taking requires. Be very clear with yourself: this is an exercise in understanding, not a finding. It is equally possible to construct a serious, sympathetic account of an angry eighteen-year-old who said something in temper and immediately regretted it. Both must remain live in you, and neither is your decision to resolve.',
        },
      ],
    },
    {
      id: 's9',
      type: 'decision',
      title: 'Friday: Grace Ainsworth calls',
      ability: 'discern',
      situation:
        'She has heard. She is warm, direct, and upset. "I have known Marius forty years. What on earth is going on over there? And be honest with me — is this really about the allegation, or is it about the fact that he is sixty-one?"',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: '"There is a safeguarding process running. I cannot discuss it with you, including with you. I can tell you exactly what our process is and when the trustees will be informed."',
          verdict: 'wise',
          consequence:
            'It refuses the conversation without refusing her, and it offers the one thing you can legitimately give — the shape of the process. Including *with you* is the crucial clause: it names her position without accusing her of anything, and it protects Marius as much as Kian.',
          cost: 'She will be angry, and she may well say something about funding. You will not sleep.',
        },
        {
          id: 'd2',
          text: 'Reassure her that Marius is not in trouble and that it is a formality.',
          verdict: 'unwise',
          consequence:
            'Untrue, unknowable, and it makes her a person who has been told something. When the process concludes either way, she has been misled, and every subsequent thing you say to a funder is worth less. It also, quietly, tells her the process is theatre.',
          cost: 'Your credibility, and the integrity of the process, spent to end a difficult phone call four minutes early.',
        },
        {
          id: 'd3',
          text: 'Answer her second question honestly — that his performance record is a real and separate issue — to show you are not hiding anything.',
          verdict: 'risky',
          consequence:
            'Honest, and it merges the two things you have just spent a week keeping apart. She will hear "so it *is* about his age and his mistakes," and she will be entitled to. You have handed the confusion to the one person who will repeat it.',
          cost: 'The separation, which was the whole discipline of the week.',
        },
        {
          id: 'd4',
          text: 'Refer her to the chair of trustees and end the call.',
          verdict: 'defensible',
          consequence:
            'Procedurally clean and relationally expensive. She is a forty-year friend of the accused calling in distress; being routed is what she will remember. There are organisations where this is the right answer, and it is worth knowing that it costs something real.',
          cost: 'A relationship that is not only about money, treated as though it were only about money.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Note that the wise answer does not protect you. It leaves you holding her anger with nothing to offer in exchange. That is very often what the right answer looks like from inside — and if an option in a case like this leaves you comfortable, that is information about the option.',
        },
      ],
    },
    {
      id: 's10',
      type: 'socratic',
      title: 'The final challenge',
      ability: 'discern',
      challenge:
        "Suppose it concludes as unsubstantiated. Marius has been off for eleven weeks. Delia has gone into respite care because he could not pay. Two residents have asked repeatedly where he is. Tolu has left for a job at a school. Grace Ainsworth has reduced the grant. And there is a real possibility that an angry eighteen-year-old said six words and a good man's life was taken apart by a process you started — a process you have spent this entire lesson being told was non-negotiable.",
      prompt:
        'Was it worth it? Answer honestly. Then say what, if anything, you would do differently — being precise about whether your answer changes the referral or only what surrounds it.',
      helper:
        'A good answer will distinguish between the decision and its consequences, and will not use the consequences to reopen the decision.',
      reveal: [
        {
          kind: 'p',
          text: 'The honest answer has several parts and they do not comfort each other.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "**The referral was right and the cost was real.** This is Module 8's residue in its hardest form. You did not escape the duty to Marius; you were unable to pay it, and the debt is genuine. If you feel nothing at the end of eleven weeks, something has gone wrong in you.",
            '**The alternative is not "none of this happened."** It is a house in which a report was assessed by the director on the basis of a file and a friendship. Run that policy for twenty years and it produces the institutional failures whose names you already know. The comparison is never between this outcome and a good outcome; it is between this system and the other system.',
            "**Almost everything that went wrong is upstream of the referral.** Eleven weeks is a process failure. Delia going into respite is a support failure — nothing prevented the house from helping with that, and nobody did. Tolu leaving is a culture failure that predates all of this by a day, as her twenty-four hours told you. Grace's grant is a governance failure: a trustee whose cousin is staff was a structural problem for nineteen years and no one named it.",
            "**Unsubstantiated is not exonerated, and it is not condemned either.** Learn to sit with a category that does not resolve. Most of the hardest things you will handle end here, and the desire to convert it into a verdict — in either direction — is the desire Job's friends had.",
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What you would do differently',
          text: 'Not the referral. Everything around it: supervision from month one, so a record does not accumulate in silence; a conversation about Delia in February that offered something instead of only keeping a confidence; a governance fix on the Ainsworth relationship; a culture in which Tolu takes twenty minutes rather than twenty-four hours. Every one of those is the earlier decision from Module 5 — the point where it was still cheap, and where nobody was looking.',
        },
      ],
    },
    {
      id: 's11',
      type: 'connection',
      title: 'The whole curriculum, in one case',
      ability: 'interpret',
      prompt: "Match each module's central move to where it appeared this week.",
      left: [
        { id: 'l1', label: 'Module 1 — the twenty minutes before the meeting' },
        { id: 'l2', label: 'Module 4 — the action that is right under every hypothesis' },
        { id: 'l3', label: 'Module 5 — the decision was earlier than it felt' },
        { id: 'l4', label: "Module 7 — defending God's reputation with something untrue" },
        { id: 'l5', label: 'Module 8 — sequence is not priority' },
        { id: 'l6', label: 'Module 10 — give the work back' },
      ],
      right: [
        {
          id: 'r1',
          label: 'Telling Marius the supervision failure is yours, before anything else',
        },
        { id: 'r2', label: 'Refer — right whether or not the report is true' },
        { id: 'r3', label: '"Discussed informally," written eleven months ago' },
        { id: 'r4', label: 'Using 1 Timothy 5:19 to avoid looking into it' },
        { id: 'r5', label: 'Marius is fifth on Thursday, and it feels wrong all night' },
        { id: 'r6', label: 'Telling Grace the shape of the process, not the content' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The true, costly, personal thing said first, so everything after it is audible.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'You never had to decide whether Kian was telling the truth. The action was invariant.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'The moment this became inevitable was a phrase typed to close a file.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: "A passage repurposed to protect an institution is the friends' error in modern dress.",
        },
        {
          leftId: 'l5',
          rightId: 'r5',
          why: 'He matters most and comes fifth, because doing it well requires the other four.',
        },
        {
          leftId: 'l6',
          rightId: 'r6',
          why: 'You cannot resolve her question and you can hand her something real to hold.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'The final wise answer',
      ability: 'answer',
      brief:
        "Write two things. **(1)** The first ninety seconds of what you say to Marius at nine o'clock on Thursday morning. **(2)** The message you send to Tolu on Wednesday night. Both short. Both will be remembered verbatim by their recipient for years, which is the standard they have to meet.",
      audience:
        'A sixty-one-year-old man who has given nineteen years and is about to lose his footing, and a twenty-four-year-old deciding whether integrity is survivable in this profession.',
      constraints: [
        'To Marius: do not discuss the allegation beyond the fact of the process. Do say the true thing about supervision. Do not promise an outcome.',
        'To Tolu: answer the question she asked twice, without making her responsible for what follows.',
        'Neither may contain a sentence whose main function is to make you feel better.',
      ],
      rubric: ['perspective', 'grounding', 'compassion', 'clarity', 'action', 'uncertainty'],
      minWords: 140,
      allowVoice: true,
    },
    {
      id: 's13',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's12',
      body: [
        { kind: 'h', text: 'To Marius, Thursday, 9am' },
        {
          kind: 'p',
          text: '"Marius, sit down. I am going to say three things and then I am going to stop and you can say whatever you want.',
        },
        {
          kind: 'p',
          text: 'The first is that a safeguarding referral has been made concerning an interaction with a resident, and I cannot tell you more than that — not because I am protecting myself, but because the process protects you as much as him, and if I start telling you things it stops being able to. You will be told what you are entitled to be told, by the people whose job that is, and I will make sure it is not slow.',
        },
        {
          kind: 'p',
          text: "The second is separate and I want to say it today rather than in three months. In nineteen years nobody has ever given you supervision. There is a file with five things in it and you have never been shown one of them, and that is not your failure, it is the organisation's, and eight months of it is mine. I should have been sitting with you every month since I arrived and I was not.",
        },
        {
          kind: 'p',
          text: 'The third is Delia. I have known since February and I have said nothing because you asked me not to, and I now think that was the wrong kind of kindness — I kept your confidence and I did not offer you anything. That was mine to fix and I did not fix it. Whatever happens with the rest of this, I want that sorted this week.',
        },
        {
          kind: 'p',
          text: 'I am not going to tell you it will be fine. I do not know that. I am going to be here at the end of it either way."',
        },
        { kind: 'h', text: 'To Tolu, Wednesday, 10:15pm' },
        {
          kind: 'p',
          text: '"Tolu — you asked me twice tonight whether you did the right thing, so I want it in writing. You did exactly the right thing. You wrote it down within the hour, you kept his words rather than your interpretation, and you brought it to me. That is the job done properly, and it is the hardest version of it.',
        },
        {
          kind: 'p',
          text: 'What happens next is not yours to carry. It is a process, it is run by people trained for it, and no part of the outcome belongs to you. If anyone in the house makes you feel otherwise, tell me and I will deal with it.',
        },
        {
          kind: 'p',
          text: 'One more thing. You waited a day. I am not asking you why — I think I know, and if it is what I think, that is something wrong with this place and not with you. I would like to fix it. Not this week."',
        },
      ],
      commentary: [
        {
          label: 'The structure announced first',
          text: '"Three things and then I stop." It gives an overwhelmed man a shape to hold, and it commits the speaker to stopping — which is the hardest part and the reason to say it out loud.',
        },
        {
          label: 'Why the process refusal is explained',
          text: '"The process protects you as much as him." Without that clause the refusal is a wall. With it, it is the first evidence that this is not the clearing-out he assumes it is.',
        },
        {
          label: 'The supervision admission',
          text: 'It is the Module 1 move in its final form: the true, costly, personal thing said before anything is asked for. Note that it does not soften the referral in any way, which is exactly why it can be said.',
        },
        {
          label: 'Delia',
          text: 'The riskiest paragraph and the most important. "The wrong kind of kindness" names something real about the last six months without theatre. It also converts the confidence from a secret into a support, which is what it should always have been.',
        },
        {
          label: 'The message to Tolu',
          text: "Three moves: an unambiguous answer to her actual question, an explicit release from the outcome, and — last, and deliberately deferred — the observation about the twenty-four hours, framed as the organisation's fault and postponed so it does not land as criticism tonight.",
        },
        {
          label: '"Not this week."',
          text: 'Two words that do more than any reassurance could. They say: this is real, I have seen it, and I am not going to make you deal with it while you are frightened.',
        },
      ],
      limits:
        'The Delia paragraph could go wrong. If Marius hears it as leverage — you kept my secret and now you are producing it — it will poison everything before it. It is included because the alternative is another six months of silence, but a director who knew the man well might reasonably hold it for the second conversation.',
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your final answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['perspective', 'grounding', 'compassion', 'clarity', 'action', 'uncertainty'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise both. In the Marius passage, find any sentence whose function is to make you look fair, and cut it. In the Tolu message, check that you answered her question in the first line.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'The final practice',
      ability: 'live',
      assignment:
        'Two things. First: find the "discussed informally" in your own life — the thing you recorded as handled that you have not actually handled — and handle it this week. Second: answer the person you did not answer. In the case it was a wife on a Sunday. In yours it is someone specific, and you knew who it was while you were reading.',
      window: 'Within seven days',
      cautions: [
        'The second half is the assignment. The first half is the one you will do instead if you let yourself.',
      ],
      checkIn: 'Who did you answer, and what did you say?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'The end of the beginning',
      ability: 'live',
      prompt:
        'Look back at what you wrote in the first step of Module 1, before any of this. What would you now add to it — and what, honestly, has actually changed in how you see rather than in what you know?',
      prayer:
        'Solomon asked for a hearing heart to discern between good and evil, and said plainly that he was not able for what he had been given. Ask for the same thing, about the specific responsibility you are carrying now, and name it.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Carried forward',
      ability: 'interpret',
      intro:
        'These are the load-bearing ideas of the whole curriculum. They will return in transfer trials at widening intervals — in situations that look nothing like the ones they came from, which is the only real test of whether you have them.',
      conceptIds: [
        'phronesis',
        'observation-moves',
        'genre',
        'ladder-of-inference',
        'the-earlier-decision',
        'habituation',
        'presence-over-explanation',
        'prima-facie-duties',
        'presenting-problem',
        'righting-reflex',
        'load-bearing-analogy',
        'non-negotiable-duty',
      ],
      passageRefs: ['Micah 6:8', 'Proverbs 18:13', '1 Kings 3:9', 'James 3:17'],
    },
  ],
}
