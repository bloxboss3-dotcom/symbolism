import type { Lesson, Module } from '../../types/content'

export const module05: Module = {
  id: 'm05',
  order: 5,
  title: 'Desire, Temptation, and Self-Deception',
  shortTitle: 'Desire & Self-Deception',
  centralQuestion: 'How does a person who means well end up somewhere they never chose?',
  summary:
    'Nobody decides to become dishonest. This module traces the actual mechanism — how desire recruits reasoning, why the decisive moment is earlier than it feels, and what it takes to bind yourself in advance.',
  abilities: ['discern', 'see', 'live'],
  lessonIds: ['l05-1'],
}

export const lesson05_1: Lesson = {
  id: 'l05-1',
  moduleId: 'm05',
  title: 'The Second Email',
  subtitle: 'Where the decision actually happened',
  centralQuestion: 'How does a person who means well end up somewhere they never chose?',
  minutes: 40,
  abilities: ['discern', 'see', 'live'],
  concepts: [
    'desire-recruits-reason',
    'the-earlier-decision',
    'precommitment',
    'motivated-reasoning',
  ],
  passages: ['James 1:14-15', 'Genesis 3:1-6', 'Jeremiah 17:9', 'Psalm 139:23-24'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'Eight weeks in eleven paragraphs',
      ability: 'see',
      kicker: 'Read for the moment it became inevitable. It is not where you expect.',
      body: [
        {
          kind: 'p',
          text: 'Wren is a finance manager at a mid-sized charity. She is forty-three, has been there nine years, and has never taken so much as a pen. This is the sequence.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "In March the charity's card is used for a family dinner. It is a genuine mistake — two identical cards in one wallet. She notices on Sunday.",
            'She decides to sort it Monday. On Monday there is an audit meeting and it does not get sorted.',
            'On Wednesday she moves the £86 to a suspense line with the note "to reconcile."',
            'In April she uses the card again for petrol. This time she does not reach for the wrong card; she reaches for the card, and thinks *I will square it with the eighty-six*.',
            'She drafts an email to the finance director explaining March. She does not send it. She saves it.',
            'In May her daughter needs £400 for a school trip. She thinks about the email in her drafts for two days.',
            'She writes a second email — to herself — laying out a repayment schedule over four months. She calls the file "plan." She feels better after writing it, and notes this.',
            'She takes the £400.',
            'In June she repays £100. She feels the transaction as a vindication of the plan.',
            'In July she takes £900 for a boiler. The plan is not amended.',
            'In September the auditor asks about the suspense line.',
          ],
        },
        {
          kind: 'p',
          text: 'Wren is not a thief in her own account of herself, and this is not a rhetorical flourish. In September, sitting opposite the auditor, her overwhelming feeling is not guilt but astonishment.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'At which numbered item did this become inevitable? Name the number and defend it. Then say what Wren would have had to do at that item to stop it.',
      helper:
        'Almost everyone chooses item four or item eight. Both are defensible and neither is the answer this lesson will argue for.',
      minWords: 45,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'What is on the list',
      ability: 'see',
      prompt: 'Select what you noticed.',
      options: [
        {
          id: 'o1',
          text: 'The email in item five is written and saved but not sent.',
          significance:
            'The most important item on the list. Writing it discharged the discomfort that would have made her send it. She got the relief of confession without the exposure of it.',
        },
        {
          id: 'o2',
          text: 'She notes that she feels better after writing the repayment plan.',
          significance:
            'She observed the mechanism operating in herself and did not act on the observation. Feeling better after documenting an intention is the warning, not the resolution.',
        },
        {
          id: 'o3',
          text: 'The £86 changes character between items three and four.',
          significance:
            'At item three it is an error awaiting correction. At item four it becomes a credit line — "I will square it with the eighty-six." The same sum has been silently repurposed.',
        },
        {
          id: 'o4',
          text: 'The plan is never amended after July.',
          significance:
            'It had stopped being an instrument and become a talisman. Its function was to make the first withdrawal permissible, and it had already performed that function.',
        },
        {
          id: 'o5',
          text: 'Item nine — repaying £100 — makes her feel vindicated.',
          significance:
            'A partial repayment that confirms the story. It cost £100 and bought several months of self-permission. In pure financial terms it was the most expensive thing she did.',
        },
        {
          id: 'o6',
          text: 'The amounts escalate: 86, 400, 900.',
          significance:
            'True and less interesting than it looks. The escalation is a symptom. The mechanism was fully installed by item seven, and after that the amounts are limited only by opportunity.',
        },
        {
          id: 'o7',
          text: 'Every use of the card has a legitimate-sounding occasion: a mistake, petrol, a school trip, a boiler.',
          significance:
            'None of it is spent on luxury. Self-deception runs on defensible occasions; a person who needed to justify a holiday would have stopped.',
        },
      ],
      subtleIds: ['o1', 'o2', 'o5', 'o7'],
      afterword: [
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The answer this lesson defends',
          text: 'The decisive item is five — the unsent email — with item two as its rehearsal. Everything after five is the working-out of a permission already granted. Item eight, the £400, feels like the decision because it is the first one that looks like one.',
        },
      ],
    },
    {
      id: 's4',
      type: 'teaching',
      title: 'How the mechanism actually runs',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'The folk model of temptation is a fork in the road: you see the wrong thing clearly, want it, and choose it. On that model the interesting moment is the choice, and the remedy is willpower at the fork.',
        },
        {
          kind: 'p',
          text: 'That model is wrong about most real cases, and the New Testament says so with unusual precision.',
        },
        {
          kind: 'scripture',
          ref: 'James 1:14-15',
          translation: 'World English Bible',
          text: 'But each one is tempted when he is drawn away by his own lust and enticed. Then the lust, when it has conceived, bears sin. The sin, when it is full grown, produces death.',
        },
        {
          kind: 'p',
          text: "Four stages, and note where they sit. *Drawn away* and *enticed* precede any act. The image is gestational: something is conceived, grows, and is only then born as sin. By the time there is an act to resist, the process has been running for some time — which is exactly Wren's September astonishment. She is meeting a full-grown thing she was introduced to in March.",
        },
        {
          kind: 'p',
          text: "The critical move is that desire does not fight reasoning. It **recruits** it. Wren's repayment plan is not an excuse she offered to someone else; it is a genuine document she wrote to herself, in good faith, using real accounting skill. Her competence was conscripted.",
        },
        {
          kind: 'p',
          text: 'Genesis 3 has the same structure, and the details reward attention:',
        },
        {
          kind: 'scripture',
          ref: 'Genesis 3:6',
          translation: 'World English Bible',
          text: 'When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took some of its fruit, and ate.',
        },
        {
          kind: 'p',
          text: 'Three appraisals before the hand moves: nutrition, beauty, wisdom. Every one of them is a *good* — food is good, beauty is good, wisdom is emphatically good. Nothing false has been believed. The trouble is not that the fruit was misrepresented; it is that a real good was pursued outside the one boundary given. And the reasoning that got her there is not stupid. It is careful.',
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'The distinction to keep',
          text: 'Self-deception is not lying to yourself, which would require knowing the truth and stating otherwise. It is arranging not to be in a position to see. The unsent email is not a lie. It is a structure.',
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
          heading: 'A heart that cannot audit itself',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: 'Jeremiah 17:9',
              translation: 'World English Bible',
              text: 'The heart is deceitful above all things and it is exceedingly corrupt. Who can know it?',
            },
            {
              kind: 'p',
              text: 'Read this carefully, because it is routinely used as a blunt instrument. The claim is not that your feelings are always wrong or your judgement worthless. The claim is about a specific failure: the heart is the instrument you would use to examine the heart, and it is not neutral about the result. *Who can know it* is a real question, not a rhetorical one.',
            },
            {
              kind: 'p',
              text: 'The answer given elsewhere is not "try harder at introspection." It is external:',
            },
            {
              kind: 'scripture',
              ref: 'Psalm 139:23-24',
              translation: 'World English Bible',
              text: 'Search me, God, and know my heart. Try me, and know my thoughts. See if there is any wicked way in me, and lead me in the everlasting way.',
            },
            {
              kind: 'p',
              text: 'The psalmist asks to be searched by someone else. This is why confession to a person, accountability, and plain visibility are not optional extras of the Christian life but the load-bearing remedy for a specific epistemic problem. Wren had one instrument that would have worked and it was sitting in her drafts folder.',
            },
          ],
          passages: ['Jeremiah 17:9', 'Psalm 139:23-24', 'James 1:14-15'],
        },
        {
          lens: 'psychological',
          heading: 'Motivated reasoning has a shape',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: "Ziva Kunda's 1990 review of motivated reasoning described the mechanism well: we do not simply believe what we want. We construct a justification that would persuade a dispassionate observer — and we search memory and evidence selectively until we have one. The constraint is that we must be able to believe ourselves.",
            },
            {
              kind: 'p',
              text: 'This explains the repayment plan exactly. A person who merely wanted the money would take it. Wren needed a document, because she needed to remain someone who does not steal, and the document made that available.',
            },
            {
              kind: 'p',
              text: 'Related, and worth naming: **moral licensing** — evidence that after doing something we regard as good, we become more permissive with ourselves. Item nine, the £100 repayment, is a textbook instance.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'Weight',
              text: 'Motivated reasoning is well-supported. Moral licensing is a real but contested effect; several licensing findings have replicated weakly and meta-analyses give modest estimates. Take it as a pattern worth watching in yourself, not as a demonstrated law.',
            },
          ],
        },
        {
          lens: 'mythological',
          heading: 'Odysseus at the mast',
          claimKind: 'mythology',
          body: [
            {
              kind: 'p',
              text: 'The Sirens episode from Module 3 returns here for its real point. Odysseus does not resist the song. He arranges, in advance and while still sane, to be unable to act on his own judgement at the moment his judgement will be compromised. He orders the crew to tighten the ropes if he begs them to be loosened — and he does beg.',
            },
            {
              kind: 'p',
              text: "That is **precommitment**, and it is a genuinely different strategy from willpower. It accepts as a premise that the future self will be someone whose reasoning cannot be trusted, and it removes that self's options rather than appealing to its resolve.",
            },
            {
              kind: 'p',
              text: "What would this have looked like for Wren? A rule made in March, before anything was at stake: *I do not carry both cards.* Or better: *any personal use of the charity card, of any amount, gets an email to Anneke the same day, and if I have not sent it by six I send it late rather than not at all.* The rule's value lies entirely in being made before she needed it.",
            },
          ],
          tension:
            'Homer offers no account of why Odysseus is the sort of man who needs the mast. Scripture does, and adds that binding yourself is a help rather than a cure — the ropes constrain the hands, not the heart.',
        },
        {
          lens: 'historical',
          heading: 'Augustine and the pears',
          claimKind: 'historic-christian',
          body: [
            {
              kind: 'p',
              text: 'In Book II of the *Confessions*, Augustine devotes an extraordinary amount of attention to a trivial adolescent theft: he and some friends stripped a pear tree and threw the fruit to pigs. He returns to it repeatedly, and readers have found the emphasis disproportionate for sixteen centuries.',
            },
            {
              kind: 'p',
              text: 'His reason is that the case is *clean*. He did not want the pears — he had better at home. He did not eat them. Strip away every ordinary motive and something remains, and what remains is what he wants to look at: the pleasure of the transgression itself, and the fact that he would not have done it alone.',
            },
            {
              kind: 'p',
              text: "The method is worth stealing. Examine the case where you cannot tell yourself the usual story. Wren's petrol in item four is her pear tree: she was not confused about which card it was, the sum was small, and she could have paid it herself. It is the item that has no cover.",
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      type: 'certainty',
      title: 'Claims about Wren',
      ability: 'interpret',
      prompt: 'Sort by what the account actually supports.',
      claims: [
        {
          id: 'c1',
          text: 'Wren wrote an email to the finance director and did not send it.',
          tier: 'stated',
          why: 'Item five.',
        },
        {
          id: 'c2',
          text: 'Writing the plan reduced her discomfort.',
          tier: 'stated',
          why: 'Item seven says she felt better and noticed it. Easy to read past because it looks like colour rather than evidence.',
        },
        {
          id: 'c3',
          text: 'The unsent email was the point at which the outcome became likely.',
          tier: 'reasonable',
          why: 'A strong reading, argued for above and consistent with James 1. Still an interpretation, and someone could reasonably locate the hinge at item four instead.',
        },
        {
          id: 'c4',
          text: 'Wren intended from March to take money.',
          tier: 'unsupported',
          why: 'Nothing supports it and the whole shape of the account runs against it. This is the reading a prosecutor needs and a wise reader should resist — not out of charity, but because it makes the case useless as a warning. A story about a woman who planned it teaches nobody anything.',
        },
        {
          id: 'c5',
          text: 'She would have stopped if someone had asked her a direct question in April.',
          tier: 'possible',
          why: 'Plausible and unknowable. Worth holding as a possibility precisely because of what it implies about the value of asking.',
        },
        {
          id: 'c6',
          text: 'Her competence with numbers made this worse rather than better.',
          tier: 'reasonable',
          why: 'The plan required real skill, and its persuasiveness to her depended on that skill. Compare the Module 1 finding that fluent reasoners produce fluent justifications.',
        },
      ],
    },
    {
      id: 's7',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'This lesson has been generous to Wren. She stole nearly fourteen hundred pounds from a charity over six months and the account is written to make her comprehensible. There is a name for extending this much understanding to someone who did something plainly wrong, and it is not wisdom. Meanwhile there are beneficiaries who did not get that money.',
      prompt:
        "Where is the line between understanding a mechanism and excusing an act? Answer in a way that would still hold if you were the charity's trustee rather than a reader.",
      helper: 'A good answer will say what should now happen to Wren.',
      reveal: [
        {
          kind: 'p',
          text: 'The line is drawn in the right place by keeping two questions separate and answering both.',
        },
        {
          kind: 'list',
          items: [
            '**What happened, and what does it cost?** She took the money. It must be repaid, the trustees must be told, and she cannot hold that role. Understanding the mechanism changes none of this. If it did, you would have an excuse rather than an explanation.',
            '**How did it happen, and what does that teach?** Here understanding is not optional — it is the only thing that protects the next person in that chair. A charity that concludes "Wren was dishonest" learns nothing and will hire someone else in March.',
          ],
        },
        {
          kind: 'p',
          text: 'The two questions run on different tracks, and moral seriousness requires both. Collapsing them in one direction gives you sentimentality; in the other, it gives you a punitive culture that cannot learn. Notice that Scripture routinely does both at once: David is confronted by Nathan with "you are the man," the consequences fall, and the psalm of repentance is preserved in the canon.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: "The trustee's version",
          text: 'A wise trustee says: this is theft, it is reported, she goes; *and* we are changing the process so that no future postholder can hold an unreconciled suspense line for six months without someone else seeing it. The second half is not leniency. It is the recognition that a system which requires everyone in it to be incorruptible is badly designed.',
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where Wren stands',
      ability: 'understand',
      person: 'Wren, in May, with the drafts folder open',
      setup:
        'It is Tuesday evening. The school trip deposit is due Friday. The email to Anneke has been in drafts for four weeks. Answer as her.',
      fields: [
        {
          key: 'saying',
          label: 'What you would say if asked',
          prompt:
            'A colleague asks casually how the suspense line is going. What comes out of your mouth?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'Opening the drafts folder. Be specific.',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'What exactly would sending the email cost you? Name the worst image.',
        },
        { key: 'desiring', label: 'What you want', prompt: 'Not the money. Underneath.' },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About what Anneke would think, and about what kind of person you are.',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'From inside May, what is invisible?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction:',
        },
        {
          kind: 'list',
          items: [
            "**Fearing:** not prosecution — that is not real to her yet. The image is Anneke's face changing. Nine years of being the reliable one, ending in a single expression. The disproportion between that fear and the £86 is the whole engine.",
            '**Wanting:** to remain the person she has been. Every action from item two onward is in service of that, including the theft.',
            '**Assuming:** that the email would be received as a confession rather than as an admin correction. In April it would almost certainly have been the latter — "oh, easily done, put it through as a personal expense." She is defending against a scene that would not have happened.',
            '**Not seeing:** that the cost of sending has been rising every week, and that this is a curve rather than a plateau. In March it was awkward. In May it is a disclosure. In September it is a police matter. The one asset she has been spending is time.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The transferable finding',
          text: 'Undisclosed things appreciate. Whatever it costs you to say a thing today is the cheapest it will ever be, and the growth rate is not linear. This applies to £86, to a lie told at a dinner party, and to an affair.',
        },
      ],
    },
    {
      id: 's9',
      type: 'decision',
      title: 'It is May. You are Wren.',
      ability: 'discern',
      situation: 'The deposit is due Friday. The draft is open.',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: 'Send the email as written, tonight, and pay the £86 back tomorrow.',
          verdict: 'wise',
          consequence:
            'Ninety seconds of acute discomfort, one slightly awkward conversation, and the entire subsequent story does not happen. Anneke almost certainly says it is fine. Wren pays for the school trip herself or does not, and either way she is still the finance manager in September.',
          cost: 'The image of herself as someone who never gets anything wrong — which was never true and was expensive to maintain.',
        },
        {
          id: 'd2',
          text: 'Tell her husband tonight, and let him be the one who knows.',
          verdict: 'defensible',
          consequence:
            "Better than silence and weaker than disclosure. It breaks the isolation, which is the mechanism's main requirement, and someone now exists who can ask her about it in June. But it does not correct the record with the party that has been wronged, and it can substitute for doing so.",
          cost: 'Possibly the whole benefit, if the telling relieves enough pressure to make the email unnecessary. Watch for that — it is item five in a different costume.',
        },
        {
          id: 'd3',
          text: 'Do not take the £400. Delete the plan. Sort the £86 quietly at year end.',
          verdict: 'risky',
          consequence:
            'Stops the escalation, which is real. Leaves the structure intact: a discrepancy she is managing alone, a private timetable, and a demonstrated willingness to defer. The next pressure finds all the machinery still assembled.',
          cost: 'Nothing now, and an unknown amount later. This is the option that feels like repentance and is actually postponement.',
        },
        {
          id: 'd4',
          text: 'Take the £400 and stick to the four-month plan rigorously.',
          verdict: 'unwise',
          consequence:
            "The plan's function was never repayment. Note that in the actual sequence she does repay £100 — the plan was partly honoured, and it made everything worse, because partial compliance is what let the story survive contact with reality.",
          cost: 'Everything, over four more months, in instalments she will experience as reasonable.',
        },
      ],
      afterword: [
        {
          kind: 'callout',
          tone: 'caution',
          title: 'Notice option three',
          text: 'It is the one most readers would actually take, and it is the most dangerous on the list precisely because it involves not doing the wrong thing. Stopping an act while leaving the structure standing is the commonest form of false repentance.',
        },
      ],
    },
    {
      id: 's10',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match the principle to the moment.',
      left: [
        { id: 'l1', label: 'Desire recruits reasoning rather than defeating it' },
        { id: 'l2', label: 'Precommitment: bind the future self' },
        { id: 'l3', label: 'Every appraisal was of a real good (Genesis 3:6)' },
        { id: 'l4', label: 'The heart cannot audit itself' },
      ],
      right: [
        { id: 'r1', label: 'The repayment plan, written with real accounting skill' },
        { id: 'r2', label: '"I do not carry both cards" — a rule made in March' },
        { id: 'r3', label: 'A school trip, petrol, a boiler' },
        { id: 'r4', label: 'The email that would have let someone else look' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'Competence conscripted: the better she was with numbers, the more persuasive the permission.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'Made while nothing was at stake, and worthless if made in May.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'Nothing she wanted was bad. A real good pursued outside its boundary is the ordinary shape of the thing.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Psalm 139 asks to be searched by someone else, because the instrument is compromised.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'It is October. Wren has resigned, is repaying, and has not been prosecuted. She asks to meet you — you are a friend from church, not a trustee — and says: "I keep going over it and I cannot find the moment I decided. I do not know what to do with that. Everyone keeps telling me to forgive myself and it means nothing to me." Write what you say. Eight to twelve sentences.',
      audience:
        'A truthful, humiliated, intelligent woman who is not minimising and does not want to be comforted with a formula.',
      constraints: [
        'Do not tell her to forgive herself.',
        'Do not soften what she did.',
        'Give her something true about *why* she cannot find the moment.',
      ],
      rubric: ['grounding', 'compassion', 'perspective', 'clarity', 'usefulness', 'uncertainty'],
      minWords: 110,
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
          text: 'You cannot find the moment because there was not one. That is not a comfort and I am not offering it as one — it is just true, and I think the searching is costing you something it will never repay.',
        },
        {
          kind: 'p',
          text: 'James describes it as something conceived, that grows, and is only born later as the act. On that picture, by the time you did anything you would recognise as a decision, the thing was already grown. The moment you are looking for is an email you wrote in April and did not send. It did not feel like a decision. It was the only one.',
        },
        {
          kind: 'p',
          text: 'What I would not do is downgrade any of it. You took money from a charity, and the fact that you got there gradually is an explanation, not a discount. I think you know that, and I think the people telling you to forgive yourself are, without meaning to, asking you to stop saying something true — which is why it means nothing to you. It would mean nothing to me either.',
        },
        {
          kind: 'p',
          text: 'Here is what I think is actually available. Not self-forgiveness, which you cannot issue to yourself in any case. Being known. The whole mechanism ran on one condition — that nobody else could see the file — and the psalm that fits your situation is the one that asks God to search and know, because the psalmist has worked out that he cannot do it himself. Confession is not a performance of remorse. It is getting an instrument that works.',
        },
        {
          kind: 'p',
          text: 'And practically: I do not think you should be alone with your finances again. Not as a punishment. As a design decision, the way someone who has broken an ankle does not go back to running on ice. Would you let me be the person who asks you about it, badly, every couple of months?',
        },
      ],
      commentary: [
        {
          label: 'The first line does the heavy lifting',
          text: 'It answers her actual question — why she cannot find the moment — and refuses to convert the answer into consolation. Naming that refusal explicitly ("I am not offering it as one") is what makes it land as honesty.',
        },
        {
          label: 'It explains why the standard advice failed her',
          text: '"They are asking you to stop saying something true." This validates her resistance without attacking the people who love her, and it is almost certainly correct.',
        },
        {
          label: 'It substitutes a better category',
          text: 'Self-forgiveness out, being known in — grounded in Psalm 139 rather than asserted. Note the reasoning is structural, not sentimental: the mechanism required isolation, so the remedy is visibility.',
        },
        {
          label: 'It ends with an offer, not an instruction',
          text: 'And a modest one — "badly, every couple of months." Overpromising here would be its own kind of dishonesty.',
        },
      ],
      limits:
        'It says nothing about the beneficiaries who lost the money, and there may be a point at which that has to be said. It also assumes a friendship close enough to make the final offer natural.',
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['grounding', 'compassion', 'perspective', 'clarity', 'usefulness', 'uncertainty'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise. Find the place where you were most tempted to make her feel better, and replace it with something true instead.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Identify one thing currently sitting in your equivalent of a drafts folder — something true you have not said to the person who should hear it, on the grounds that you will get to it. Send it, or say it, this week. If you genuinely cannot, tell one other human being that it exists.',
      window: 'Within seven days',
      cautions: [
        'Undisclosed things appreciate. Whatever this costs today is the cheapest it will ever be.',
        'If disclosure would endanger you or someone else, that is a real exception. Speak to someone qualified first — this exercise is not for that situation.',
      ],
      checkIn: 'Was the reception anything like the scene you had been defending against?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'What rule could you make this week, while nothing is at stake, that a future version of you will resent? Write it as a sentence beginning "I do not…"',
      prayer:
        'Pray Psalm 139:23–24 as it stands, and mean the second half — *see if there is any wicked way in me* is a request to be shown something you do not currently see.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'desire-recruits-reason',
        'the-earlier-decision',
        'precommitment',
        'motivated-reasoning',
      ],
      passageRefs: ['James 1:14-15', 'Genesis 3:1-6', 'Jeremiah 17:9', 'Psalm 139:23-24'],
    },
  ],
}
