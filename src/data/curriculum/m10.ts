import type { Lesson, Module } from '../../types/content'

export const module10: Module = {
  id: 'm10',
  order: 10,
  title: 'Giving Counsel Without Controlling or Oversimplifying',
  shortTitle: 'Counsel',
  centralQuestion: 'How do I help someone decide without deciding for them?',
  summary:
    "Abigail intercepts four hundred armed men and changes a king's mind in one speech. This module takes that speech apart move by move, alongside the research on why advice usually fails, and builds a way of counselling that leaves the decision where it belongs.",
  abilities: ['answer', 'understand', 'discern'],
  lessonIds: ['l10-1'],
}

export const lesson10_1: Lesson = {
  id: 'l10-1',
  moduleId: 'm10',
  title: 'Abigail and the Angry Man',
  subtitle: 'Eight moves in a single intervention',
  centralQuestion: 'How do I help someone decide without deciding for them?',
  minutes: 42,
  abilities: ['answer', 'understand', 'discern'],
  concepts: ['righting-reflex', 'give-the-work-back', 'appeal-to-future-self', 'face-saving-exit'],
  passages: ['1 Samuel 25:23-35', 'Proverbs 27:6', 'Galatians 6:1', 'Proverbs 15:1'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'Four hundred men on the road',
      ability: 'see',
      source:
        '1 Samuel 25, summarised, with brief quotations from the World English Bible (public domain).',
      body: [
        {
          kind: 'p',
          text: 'David is not yet king. He is a fugitive with six hundred men, camped in the wilderness, and his company has been protecting the flocks of a wealthy sheep-farmer named Nabal at no charge. At shearing time — a feast, a moment of surplus — David sends ten men to ask for provision.',
        },
        {
          kind: 'p',
          text: 'Nabal refuses, and does it with contempt: *Who is David? Who is the son of Jesse?* He characterises them as runaway servants and asks why he should take his bread and his meat and give it to men who come from he does not know where.',
        },
        {
          kind: 'p',
          text: "David's response is four words: *Every man gird on his sword.* He takes four hundred men and vows that by morning he will not leave a single male of Nabal's household alive. This is not a raid. It is a massacre, planned by the man Israel will call its greatest king, over an insult.",
        },
        {
          kind: 'p',
          text: "A servant runs to Nabal's wife, Abigail — described as a woman of good understanding — and tells her what is coming. He adds that Nabal is such a son of Belial that no one can speak to him.",
        },
        {
          kind: 'h',
          text: 'What she does',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'She loads donkeys with two hundred loaves, wine, five dressed sheep, roasted grain, raisins, and figs — immediately, and in quantity.',
            'She does not tell her husband.',
            'She rides out and meets David coming down the mountain.',
            'She dismounts, falls on her face, and speaks.',
          ],
        },
        {
          kind: 'p',
          text: 'Her speech is one of the longest by a woman in the Hebrew Bible. Its central passage:',
        },
        {
          kind: 'scripture',
          ref: '1 Samuel 25:24-25',
          translation: 'World English Bible',
          text: 'She fell at his feet, and said, "On me, my lord, on me be the iniquity; and please let your servant speak in your ears. Hear the words of your servant. Please don\'t let my lord pay attention to this worthless fellow, Nabal; for as his name is, so is he. Nabal is his name, and folly is with him…"',
        },
        {
          kind: 'scripture',
          ref: '1 Samuel 25:30-31',
          translation: 'World English Bible',
          text: '"It will come to pass, when Yahweh has done to my lord according to all the good that he has spoken concerning you, and has appointed you prince over Israel, that this shall be no grief to you, nor offense of heart to my lord, either that you have shed blood without cause, or that my lord has avenged himself."',
        },
        {
          kind: 'p',
          text: "David's answer begins: *Blessed be Yahweh, the God of Israel, who sent you today to meet me* — and goes on to bless her discretion, and to say that she has kept him from bloodguiltiness and from avenging himself with his own hand.",
        },
        {
          kind: 'p',
          text: 'One further detail. Nabal is holding a feast and is very drunk. Abigail tells him nothing until the morning, when he is sober.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Why did this work? Name the single move you think was decisive, and say why the others would have failed without it.',
      helper: 'Most readers name the food or the humility. Both are real. Neither is the hinge.',
      minWords: 45,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'Take the speech apart',
      ability: 'see',
      prompt: 'Select the moves you can point to in the account above.',
      options: [
        {
          id: 'o1',
          text: 'She acts before she speaks — the provisions are loaded and on the road first.',
          significance:
            "David's stated grievance is material. She removes it before opening her mouth, which means the conversation is no longer about whether he was wronged.",
        },
        {
          id: 'o2',
          text: 'She takes blame she does not owe: "on me be the iniquity."',
          significance:
            'It is not true and it is not a lie in the ordinary sense — it is the opening of a channel. An angry man needs somewhere to put the offence, and she offers herself as the place, which costs her and disarms him.',
        },
        {
          id: 'o3',
          text: 'She does not defend Nabal.',
          significance:
            "The commonest error in intervening for someone is to argue that they are better than they appear. She agrees with David's assessment entirely — Nabal is a fool, it is what his name means — and thereby removes the argument David was braced for.",
        },
        {
          id: 'o4',
          text: 'She never tells David he is wrong.',
          significance:
            'Read the whole speech and look for the accusation. It is not there. She never says "this is murder," though it is.',
        },
        {
          id: 'o5',
          text: 'She speaks about his future rather than his present.',
          significance:
            "The hinge. She describes the king he is going to be and points out that this act will be a stone in that man's shoe. She does not oppose his desire; she puts it next to a larger one he already has.",
        },
        {
          id: 'o6',
          text: 'She gives him a way to stop without losing face.',
          significance:
            'He does not have to admit he was wrong. He gets to be a man who accepted wise counsel and spared a household — which is a better story than the one he was riding toward, and it is available immediately.',
        },
        {
          id: 'o7',
          text: 'She waits until morning to tell Nabal.',
          significance:
            "The same judgement applied a second time. Truth delivered to a drunk man at a feast accomplishes nothing except the speaker's relief. She has a fact and she holds it for ten hours.",
        },
        {
          id: 'o8',
          text: 'David thanks her for her *discretion*, not for the food.',
          significance:
            'He names what actually stopped him. The provisions got her a hearing; the reframing changed his mind.',
        },
      ],
      subtleIds: ['o3', 'o4', 'o5', 'o7'],
      afterword: [
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The pattern',
          text: 'Remove the material grievance. Concede everything you can concede. Do not accuse. Attach the decision to something he already wants more. Leave a door he can walk through without kneeling.',
        },
      ],
    },
    {
      id: 's4',
      type: 'teaching',
      title: 'Why most counsel fails',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Advice fails for a reason that has very little to do with whether it is correct.',
        },
        {
          kind: 'p',
          text: "In motivational interviewing, William Miller and Stephen Rollnick named the **righting reflex**: the helper's impulse, on seeing someone heading somewhere harmful, to argue them out of it. The trouble is what argument does to the other person. Ambivalence has two sides, and if you take one of them, the person takes the other — and then hears themselves defending it out loud. People talk themselves *into* positions by arguing for them. A well-meaning helper can reliably increase commitment to the thing they are opposing.",
        },
        {
          kind: 'p',
          text: 'The related finding from social psychology is **reactance** (Brehm, 1966): when a freedom is threatened, people act to restore it, including by wanting the forbidden option more. Direct instruction to a person who has already decided is often counter-productive rather than merely ineffective.',
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'Weight',
          text: 'Motivational interviewing has a solid trial base, particularly for substance use, though effects vary by domain and are modest in some. Reactance theory is long-established and well-supported in outline. Neither entitles anyone to claim that a technique makes people change.',
        },
        {
          kind: 'p',
          text: "Abigail does none of the things that trigger either mechanism. She does not oppose David's judgement of Nabal; she agrees with it. She does not tell him he may not do this; she describes what it will be like to have done it. She gives him no position to defend, so there is nothing for him to argue himself deeper into.",
        },
        {
          kind: 'h',
          text: 'The other failure: taking the decision',
        },
        {
          kind: 'p',
          text: "Ronald Heifetz's phrase for the corrective is **giving the work back**. A leader — or a friend — who solves the problem on someone's behalf has removed the only thing that would have changed them, and has usually taken on a responsibility they cannot carry. The person now owns an outcome they did not choose, and if it goes badly, they own it without having learned anything.",
        },
        {
          kind: 'p',
          text: 'Scripture has the same instinct, expressed as a constraint on the counsellor rather than as a technique:',
        },
        {
          kind: 'scripture',
          ref: 'Galatians 6:1',
          translation: 'World English Bible',
          text: "Brothers, even if a man is caught in some fault, you who are spiritual must restore such a one in a spirit of gentleness; looking to yourself so that you also aren't tempted.",
        },
        {
          kind: 'p',
          text: '*Looking to yourself.* The correction is aimed at the corrector. It assumes that the act of putting someone right is itself dangerous to the one doing it — which is a strange thing to say unless you have noticed how good it feels.',
        },
        {
          kind: 'p',
          text: 'And on the other side, so this does not collapse into never saying anything hard:',
        },
        {
          kind: 'scripture',
          ref: 'Proverbs 27:6',
          translation: 'World English Bible',
          text: 'The wounds of a friend are faithful, although the kisses of an enemy are profuse.',
        },
        {
          kind: 'p',
          text: 'Wounds are permitted. What the passage specifies is who is entitled to inflict them: a friend. Not a bystander, not someone discharging their own discomfort, not someone who will not be there next month.',
        },
      ],
    },
    {
      id: 's5',
      type: 'lenses',
      title: 'Lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'literary',
          heading: 'The bishop and the candlesticks',
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: "In Hugo's *Les Misérables* (1862), Jean Valjean — nineteen years on the chain gang, refused everywhere — is fed and given a bed by Bishop Myriel. He steals the silver in the night and is caught. The gendarmes bring him back.",
            },
            {
              kind: 'p',
              text: 'The bishop says the silver was a gift, and then reproaches Valjean for forgetting the candlesticks, which he presses on him as well. In front of the police. He then says quietly that Valjean must use the silver to become an honest man.',
            },
            {
              kind: 'p',
              text: 'Structurally this is Abigail. The bishop does not argue, does not accuse, and does not extract a promise. He makes a claim about who Valjean is going to be, and backs it with something expensive, and leaves. Valjean spends the rest of an enormous novel trying to become the man the sentence described.',
            },
            {
              kind: 'aside',
              label: 'And the honest caveat',
              text: 'This is a novel, written by a man with a thesis, and real people frequently take the silver and do not return. The device is powerful and it is not a method. Hugo himself shows Valjean commit one more theft immediately afterwards.',
            },
          ],
        },
        {
          lens: 'leadership',
          heading: 'The counsel Rehoboam did not take',
          claimKind: 'history',
          body: [
            {
              kind: 'p',
              text: "1 Kings 12. Solomon is dead. Rehoboam inherits a kingdom under heavy taxation, and the people ask him to lighten the load. He consults the old men who served his father, who tell him: serve them today, and they will serve you always. He then consults the young men he grew up with, who tell him to answer that his little finger is thicker than his father's waist.",
            },
            {
              kind: 'p',
              text: 'He takes the second counsel. Ten tribes secede. The kingdom never reunites.',
            },
            {
              kind: 'p',
              text: "What is worth noticing is not that he chose badly but *how the two councils were framed*. The elders described what the people would become in response to him. The young men described what he would look like. Advice that centres the adviser's standing is almost always advice about the leader's image, and it is the sweeter of the two on the day.",
            },
          ],
          passages: ['1 Kings 12:1-16'],
        },
        {
          lens: 'pastoral',
          heading: 'The four questions before you speak',
          claimKind: 'inference',
          body: [
            {
              kind: 'p',
              text: "A practical checklist, offered as the curriculum writer's synthesis rather than as anything taught by a source above. Before offering counsel:",
            },
            {
              kind: 'list',
              ordered: true,
              items: [
                '**Am I the right person?** Proverbs 27:6 licenses wounds from a friend. Standing is not a formality; it determines whether the same sentence lands as care or as judgement.',
                '**Have they asked?** Unasked counsel is a much heavier thing and needs a much higher bar. "Do you want me to say what I think, or do you want me to just listen?" is one of the most useful sentences in existence and costs four seconds.',
                "**What do they already want that this connects to?** Abigail's move. If you cannot find it, you are about to argue.",
                '**What will I do if they ignore me?** If the answer is "withdraw," or "say I told you so," or "keep raising it," then what you are about to give is not counsel. Decide in advance to stay.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      type: 'ranking',
      title: 'Order the intervention',
      ability: 'discern',
      prompt:
        'A friend is about to send a resignation email at 11pm, in fury, with a paragraph about his manager he will not be able to unsend. Rank your moves.',
      items: [
        { id: 'r1', text: 'Ask him to read it to you out loud.' },
        { id: 'r2', text: 'Tell him the third paragraph will follow him for ten years.' },
        { id: 'r3', text: 'Ask what he wants to be true in six months.' },
        { id: 'r4', text: 'Agree with him about the manager, in specific terms.' },
        { id: 'r5', text: 'Tell him not to send it tonight.' },
      ],
      idealOrder: ['r4', 'r1', 'r3', 'r2', 'r5'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Agree about the manager.** Abigail's first move. He is braced for you to defend the company, and until that expectation is disconfirmed he will not hear anything else. It must be specific to be credible.",
            '**Read it out loud.** The single most effective intervention available, and it is not an argument. Roughly half the time, he stops halfway through the third paragraph on his own. You have given the work back.',
            '**What do you want to be true in six months?** The appeal to the future self. Note it is a question, not a claim, so there is nothing to resist.',
            '**Name what the third paragraph costs.** Now it is information rather than opposition, and it arrives after he has heard it aloud.',
            '**"Do not send it tonight."** Correct advice, ranked last, because as an opening move it is an instruction to a man whose freedom is the thing he is currently asserting. Given fifth, it is often unnecessary.',
          ],
        },
        {
          kind: 'p',
          text: 'If you ranked "do not send it" first, you are in good company and you would probably lose. Being right about the content and wrong about the order is the failure this whole curriculum keeps circling.',
        },
      ],
    },
    {
      id: 's7',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'Everything above can be described less flatteringly. Abigail flattered a violent man, told him a lie about whose fault it was, gave him goods, and managed him into a decision by appealing to his ambition. Reframe it and it is manipulation with a better vocabulary. What exactly separates what she did from a skilled operator handling a volatile boss?',
      prompt: 'Give the distinction, and make it something an observer could actually check.',
      helper:
        'Consider what she risked, what she was aiming at, and whether David could have seen the whole of what she was doing.',
      reveal: [
        {
          kind: 'p',
          text: 'The objection is serious and the distinction is real. Four tests, all checkable from outside:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Transparency under disclosure.** Could she have shown David the whole plan without it collapsing? Yes — and in effect she did. He names her discretion, meaning he sees the craft and blesses it. Manipulation is defined by requiring concealment of its own structure. If the person would feel used on learning what you did, it was manipulation.',
            "**Whose interest.** She is not saving her own life; she is riding *toward* four hundred armed men, and the thing she prevents is damage to David's conscience and record. The main beneficiary of the intervention is the person being intervened on.",
            '**What she risked.** A great deal, immediately. Manipulators arrange to be safe. She dismounts in front of a man who has sworn to kill every male in her household by morning.',
            '**Truthfulness of the content.** Nothing she says is false. Nabal genuinely is a fool; David genuinely is going to be king; the blood genuinely would have been a grief to him later. The only line that strains is "on me be the iniquity," and that is a legal formula for accepting liability, not a false statement of fact.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The test to keep',
          text: 'Would this person, shown the whole of what you did and why, thank you or feel handled? You cannot always ask. You can always answer honestly.',
        },
        {
          kind: 'p',
          text: 'One more thing, and it is uncomfortable: skill in this is genuinely dangerous, and the same eight moves work in the service of self-interest. That is why Galatians 6:1 puts the warning where it does. *Looking to yourself.*',
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where David stands',
      ability: 'understand',
      person: 'David, on the mountain road, sword already girded',
      setup: "He is perhaps twenty minutes from Nabal's household. Answer as him.",
      fields: [
        {
          key: 'saying',
          label: 'What you have said',
          prompt: '"Every man gird on his sword." What did you mean by it?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'Under the anger. Be specific — anger is a second feeling.',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt:
            'What happens to a man in your position who is publicly insulted and does nothing?',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'What do you actually want from tonight?',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About what this act will look like afterwards.',
        },
        { key: 'not-seeing', label: 'What you cannot see', prompt: 'From the saddle.' },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction:',
        },
        {
          kind: 'list',
          items: [
            '**Under the anger:** humiliation, and something worse — the fear that Nabal is right. *Who is David?* is a genuinely dangerous question to a man with no throne, no land, and six hundred dependents.',
            '**Fearing:** that if this insult stands, the next one is cheaper, and his men are watching. This is not vanity; it is a real calculation about whether six hundred men will still be there in a month.',
            "**Wanting:** to stop being a man who can be spoken to like that. Note that killing Nabal's shepherds would not achieve it.",
            '**Assuming:** that this will read as justice. He has framed it as payment for services rendered, and in the saddle it feels like an account being settled.',
            '**Not seeing:** what it will look like from a throne. He is about to become the king Israel remembers, and the memory will include this. Abigail supplies exactly the vantage point he lacks, which is why one speech is enough.',
          ],
        },
      ],
    },
    {
      id: 's9',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match.',
      left: [
        { id: 'l1', label: 'The righting reflex' },
        { id: 'l2', label: 'Appeal to the future self' },
        { id: 'l3', label: 'A face-saving exit' },
        { id: 'l4', label: "Advice that centres the adviser's image" },
      ],
      right: [
        { id: 'r1', label: 'Argue one side of an ambivalence; they voice the other' },
        { id: 'r2', label: '"When Yahweh has appointed you prince over Israel…"' },
        { id: 'r3', label: 'The bishop reproaches Valjean for forgetting the candlesticks' },
        { id: 'r4', label: '"Your little finger is thicker than your father\'s waist"' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The helper takes one position and hands the person the job of defending the other.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'Not opposition to what he wants — a larger thing he already wants, placed alongside.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'In front of the police, he is given a version of events he can live inside.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Counsel about how the leader will look, which is always the sweeter of the two.',
        },
      ],
    },
    {
      id: 's10',
      type: 'decision',
      title: 'Unasked',
      ability: 'discern',
      situation:
        'Your brother-in-law is putting most of his savings into a business with a man you are fairly sure is dishonest — not certainly, fairly. He has not asked your opinion. He mentions it happily at a family lunch. You will see him roughly eight times a year for the rest of your life.',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: 'Say nothing at lunch. Ask him a week later, privately, what due diligence he has done — as a genuine question.',
          verdict: 'wise',
          consequence:
            'It respects the setting, it does not oppose the decision, and a real question about process often surfaces the problem without you having to name it. If he has done none, he now knows that, and it is his finding rather than your accusation.',
          cost: 'A week, and the possibility that a week matters. Also the discipline of asking a question you do not already know the answer to.',
        },
        {
          id: 'd2',
          text: 'Tell him privately what you know about the man, plainly, once, and then leave it.',
          verdict: 'defensible',
          consequence:
            'If what you have is a *fact* rather than an impression, this is right and the week may be too long. The whole weight rests on "fairly sure." Naming specifics you can stand behind is counsel; passing on an impression as a warning is something else.',
          cost: "If you are wrong, you have damaged a man's reputation with his family and you will not be able to unsay it.",
        },
        {
          id: 'd3',
          text: 'Say it at the lunch, so your sister hears too.',
          verdict: 'unwise',
          consequence:
            'Recruiting an audience converts counsel into pressure, and he will now defend the decision in front of people. Reactance and public commitment, working together, in the worst possible room.',
          cost: 'The decision itself, most likely — he is now less able to change course than he was before you spoke.',
        },
        {
          id: 'd4',
          text: 'Nothing. He did not ask, and it is his money.',
          verdict: 'risky',
          consequence:
            'It has the shape of respect and often functions as convenience. Proverbs 27:6 permits wounds from a friend, and the relationship is close enough to qualify. The real question is whether the silence is for him or for you.',
          cost: 'If it goes badly and you knew, you will have to live with having chosen a comfortable eight lunches a year over one difficult conversation.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Notice how much turns on whether you have a fact or an impression. Most of the agony in unasked counsel comes from treating an impression as though it obliged you to speak, and then speaking as though it were a fact.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Your closest friend is about to end a fifteen-year friendship over something real but not unforgivable — she has been badly let down and is finished. She has asked you directly: "Tell me honestly. Am I being unreasonable?" Write your answer. Eight to twelve sentences. She is not asking for permission; she is asking you to tell her the truth.',
      audience:
        'Someone who trusts you, who is hurt, and who will know instantly if you are managing her.',
      constraints: [
        'She asked a direct question. Answer it.',
        'Do not tell her what to do about the friendship.',
        "Use at least one of Abigail's moves, and do not name it.",
      ],
      rubric: ['perspective', 'compassion', 'clarity', 'action', 'usefulness', 'grounding'],
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
          text: 'No. I do not think you are being unreasonable, and I want to be specific about why, because I think you have been told you are.',
        },
        {
          kind: 'p',
          text: 'What she did was not a misunderstanding. She knew what it would cost you and she did it anyway, and then she was annoyed at you for minding. Any of those three on its own you would have absorbed — you have absorbed worse. It is the third one that broke it, and I do not think you are wrong about that.',
        },
        {
          kind: 'p',
          text: 'So that is the honest answer to what you asked. Here is the only other thing I have, and it is not an argument for staying.',
        },
        {
          kind: 'p',
          text: "You are going to be somebody's friend for the next fifteen years too, and one day you will do something careless that costs someone more than you realised. What you decide here is partly a decision about what you would want to be possible then. I am not saying that means you forgive her — you may well not, and it may well be right not to. I am saying you should make the decision with that in the room rather than only with this month in the room.",
        },
        {
          kind: 'p',
          text: 'And whatever you decide, I am not going to think less of you for it, and I am not going to bring it up again. If you want to talk it through, I am here for as long as it takes, and if you want to just be finished, that is allowed too.',
        },
      ],
      commentary: [
        {
          label: 'It answers the question first',
          text: 'A single word, in the first line. She asked whether she was being unreasonable and any delay in answering would have been heard as a soft no. Everything else is earned by that.',
        },
        {
          label: 'The Abigail move, unnamed',
          text: 'The fourth paragraph is the appeal to the future self — placing the decision next to something she already wants (to be the kind of person who is forgiven) without opposing what she wants now. It is explicitly labelled "not an argument for staying," which is what keeps it from being manipulation.',
        },
        {
          label: 'The specificity in paragraph two',
          text: '"It is the third one that broke it." Naming precisely what happened is the difference between agreement and flattery — and it is Abigail conceding that Nabal really is a fool.',
        },
        {
          label: 'The last paragraph is the counsel',
          text: 'Deciding in advance to stay, and saying so. Compare the fourth pastoral question: what will I do if they ignore me?',
        },
      ],
      limits:
        'The fourth paragraph is a risk and would be wrong if delivered a day after the injury — it is only bearable because she asked a considered question. Delivered too early it becomes exactly the thing it disclaims.',
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['perspective', 'compassion', 'clarity', 'action', 'usefulness', 'grounding'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise. Find any sentence that quietly tells her what to do about the friendship, and remove it. Then check whether you actually answered her question in the first two lines.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'The next time someone brings you a problem, ask one question before anything else: "Do you want me to say what I think, or do you want me to just listen?" Then do exactly what they answer, even if it is the harder one for you.',
      window: 'Within seven days',
      cautions: [
        'If they say "just listen" and you offer advice anyway, note that. It is the most informative thing you will learn this week.',
      ],
      checkIn: 'What did they choose, and were you able to do it?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Who is currently receiving your counsel without having asked for it? And what would you do if they ignored you — honestly?',
      prayer:
        '*Looking to yourself, so that you also are not tempted.* Ask about the pleasure you take in being right about someone, and name the person it is about.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'righting-reflex',
        'give-the-work-back',
        'appeal-to-future-self',
        'face-saving-exit',
      ],
      passageRefs: ['1 Samuel 25:23-35', 'Proverbs 27:6', 'Galatians 6:1'],
    },
  ],
}
