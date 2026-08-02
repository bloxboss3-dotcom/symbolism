import type { CaseFile } from '../../types/content'

/**
 * Standalone case files. Shorter than a lesson and reusable: no new teaching,
 * only application. Each unlocks once the learner has done the lesson that
 * makes it a fair test rather than a guess.
 */

export const caseFriend: CaseFile = {
  id: 'c-friend',
  title: 'Should I Leave Him?',
  kind: 'counsel',
  premise:
    'A friend asks you a question she has already answered. Working out which answer she has reached — and whether she is asking you to confirm it or to stop her — is the whole case.',
  minutes: 18,
  abilities: ['understand', 'answer'],
  unlockAfterLessonId: 'l09-1',
  steps: [
    {
      id: 'c1s1',
      type: 'encounter',
      title: "Eleven o'clock, at your kitchen table",
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Halina has been with Dan for six years. They are not married. She has come round after work, twice this month, and tonight she has stayed past eleven.',
        },
        {
          kind: 'dialogue',
          lines: [
            { speaker: 'Halina', text: 'Do you think I should leave him?' },
            { speaker: 'You', text: '…' },
            {
              speaker: 'Halina',
              text: 'Sorry. That is a lot. It is not — nothing has happened. He is not a bad person. Everyone keeps saying he is a lovely man and he is, he genuinely is.',
            },
            {
              speaker: 'Halina',
              beat: 'Turning the mug.',
              text: 'It is just that I said in February that I wanted to know where we were going and he said he needed to think about it, and it is October.',
            },
            {
              speaker: 'Halina',
              text: 'And I keep thinking, is that a reason? People wait longer than that.',
            },
            {
              speaker: 'Halina',
              text: 'My mum thinks I am being impatient. She might be right. She was right about the flat.',
            },
            {
              speaker: 'Halina',
              beat: 'A pause, then quickly.',
              text: 'I turned down the Leeds job in March. I did not tell you that.',
            },
          ],
        },
      ],
    },
    {
      id: 'c1s2',
      type: 'first-judgment',
      title: 'What is she asking?',
      ability: 'discern',
      prompt:
        'One sentence: what is the actual question? Then one sentence: what would happen if you answered the one she said out loud?',
      minWords: 30,
    },
    {
      id: 'c1s3',
      type: 'observation',
      title: 'The transcript',
      ability: 'see',
      prompt: 'Select what is on the page.',
      options: [
        {
          id: 'o1',
          text: 'She asks the biggest possible question first, then immediately shrinks it.',
          significance:
            'Ask, retreat, justify. The retreat tells you the question was real and that she is frightened of the answer.',
        },
        {
          id: 'o2',
          text: 'She defends Dan before anyone has attacked him.',
          significance:
            "Pre-emptive defence, three times. She is arguing with a voice already in the room — probably her mother's, possibly her own.",
        },
        {
          id: 'o3',
          text: 'She has the date. February to October.',
          significance:
            'People carry precise timelines about things they have thought about constantly. This is not a woman who has been vaguely dissatisfied.',
        },
        {
          id: 'o4',
          text: "She cites her mother's judgement and immediately supplies evidence for it.",
          significance:
            '"She was right about the flat." She is building the case against her own perception in front of you.',
        },
        {
          id: 'o5',
          text: 'The Leeds job arrives last, quickly, and unprompted.',
          significance:
            'The real disclosure, in the position real disclosures occupy: late, fast, and framed as an aside. She has already paid for this relationship with something concrete and told no one.',
        },
        {
          id: 'o6',
          text: '"Everyone keeps saying he is a lovely man."',
          significance:
            'Note *everyone* and note *keeps*. She has been told this repeatedly, which means she has been raising it repeatedly, and being answered with a character reference.',
        },
      ],
      subtleIds: ['o4', 'o5', 'o6'],
    },
    {
      id: 'c1s4',
      type: 'certainty',
      title: 'What can you claim?',
      ability: 'interpret',
      prompt: 'Sort.',
      claims: [
        {
          id: 'cc1',
          text: 'She asked in February and has had no answer.',
          tier: 'stated',
          why: 'Her account, plainly given.',
        },
        {
          id: 'cc2',
          text: 'She has already decided something and is testing whether it is allowed.',
          tier: 'reasonable',
          why: 'The precision of the timeline, the pre-emptive defences, and the undisclosed job point one way. Hold it as a working reading, not a finding.',
        },
        {
          id: 'cc3',
          text: 'Dan is avoiding the conversation deliberately.',
          tier: 'possible',
          why: 'You have heard one side. Proverbs 18:17. He may be frightened, or dealing with something she has not mentioned, or simply not have noticed that eight months passed.',
        },
        {
          id: 'cc4',
          text: 'She wants you to tell her to leave.',
          tier: 'possible',
          why: 'The most tempting reading and the most dangerous to act on. She may equally want someone to say the relationship is worth the wait — and if you guess wrong out loud, she will comply with your guess.',
        },
        {
          id: 'cc5',
          text: 'Her mother is the reason she is still there.',
          tier: 'unsupported',
          why: 'One sentence about a flat. You have built a mother.',
        },
      ],
    },
    {
      id: 'c1s5',
      type: 'decision',
      title: 'What do you say next?',
      ability: 'discern',
      situation: 'She has stopped talking. It is your turn.',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: '"Tell me about the Leeds job."',
          verdict: 'wise',
          consequence:
            'It follows what she brought rather than what she asked, and it goes to the only thing on the table that is a fact rather than a feeling. It is also the item she has told nobody, which means it is the one carrying weight.',
          cost: 'You are not answering her question, and you will have to be comfortable with that for a while.',
        },
        {
          id: 'd2',
          text: '"What did he say in February, exactly?"',
          verdict: 'defensible',
          consequence:
            "Useful, factual, and it moves toward Dan's side of the account. It also risks organising the conversation around building a case against him, which is not what she needs and will feel good to both of you.",
          cost: 'A drift toward litigation.',
        },
        {
          id: 'd3',
          text: '"I think you already know what you want to do."',
          verdict: 'risky',
          consequence:
            'Probably true and it asserts the subtext, which Module 9 warns against. She will either agree because you said it — and now it is your reading she is acting on — or deny it and close the subject.',
          cost: 'The chance for her to arrive at it herself, which is the only version that will hold at three in the morning.',
        },
        {
          id: 'd4',
          text: '"Honestly? Eight months is an answer. He has told you."',
          verdict: 'unwise',
          consequence:
            'The sentence she may most need to hear, delivered at the moment it does the least good. You have taken the decision, and if it goes badly you now own it — and she will remember that you were the one who said it.',
          cost: 'The decision itself, moved from her to you.',
        },
      ],
    },
    {
      id: 'c1s6',
      type: 'perspective',
      title: 'Stand where Halina stands',
      ability: 'understand',
      person: 'Halina, driving home',
      setup: 'It is nearly midnight. Answer as her.',
      fields: [
        {
          key: 'saying',
          label: 'What you said',
          prompt: 'Why did you open with the biggest version of the question?',
        },
        { key: 'feeling', label: 'What you feel', prompt: 'In the car.' },
        { key: 'fearing', label: 'What you fear', prompt: 'Not being alone. The other thing.' },
        { key: 'desiring', label: 'What you want', prompt: 'From tonight specifically.' },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About what leaving would say about the last six years.',
        },
        { key: 'not-seeing', label: 'What you cannot see', prompt: 'From inside it.' },
      ],
      reveal: [
        {
          kind: 'list',
          items: [
            '**Fearing:** that she is the unreasonable one. Everything about the six years has been arranged so that leaving would make her the person who left a lovely man over a timeline.',
            '**Wanting:** a witness. Someone who has heard the whole thing including the job, so that whatever she decides is not decided entirely alone in her own head.',
            '**Assuming:** that leaving retroactively converts six years into a mistake. It does not, and she cannot see that from here.',
            '**Not seeing:** that she has already started paying. The Leeds job was the first instalment, and she made that decision in March without telling anyone, which tells her more than February does.',
          ],
        },
      ],
    },
    {
      id: 'c1s7',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'She texts the next morning: "Sorry about last night. Ignore me. I was tired." Write what you send back. Four sentences maximum.',
      audience:
        'Someone retreating from something she meant, who needs the door to stay open without being pushed through it.',
      constraints: [
        'Do not accept the retraction and do not challenge it.',
        'Do not give an opinion about Dan.',
        'Leave her something to come back to.',
      ],
      rubric: ['perspective', 'compassion', 'clarity', 'action'],
      minWords: 50,
      allowVoice: true,
    },
    {
      id: 'c1s8',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c1s7',
      body: [
        {
          kind: 'p',
          text: 'You were not tired, and I am glad you said it. I am not going to have an opinion about Dan, because it is not mine to have and you would not trust it anyway. But you turned down Leeds in March and did not tell me, and I would like to hear about that whenever you want to — no agenda, no follow-up questions from me. Same table, any night this week.',
        },
      ],
      commentary: [
        {
          label: 'The first clause',
          text: '"You were not tired" refuses the retraction gently and without argument. It is a statement of fact, not a challenge, and it takes four words.',
        },
        {
          label: 'Declining the opinion, and saying why',
          text: '"You would not trust it anyway" is both true and disarming — it tells her the abstention is respect rather than evasion.',
        },
        {
          label: 'It names the real item',
          text: 'Leeds, not Dan. This is the whole judgement of the case expressed as an invitation rather than an interpretation.',
        },
        {
          label: 'The offer is specific and declinable',
          text: '"Same table, any night this week" — concrete enough to accept, loose enough to ignore.',
        },
      ],
      limits:
        'If she is in an unsafe relationship rather than a stalled one, this is far too light. Nothing in the scene suggests that; if anything did, the case would be a different one entirely and would need a direct question.',
    },
    {
      id: 'c1s9',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c1s7',
      rubric: ['perspective', 'compassion', 'clarity', 'action'],
    },
    {
      id: 'c1s10',
      type: 'practice',
      title: 'Carry it out',
      ability: 'live',
      assignment:
        'Someone has told you something recently and then retreated from it. Go back to the thing they retreated from, once, without pressure.',
      window: 'Within seven days',
      checkIn: 'Did they take it up?',
    },
  ],
}

export const caseLeader: CaseFile = {
  id: 'c-leader',
  title: 'The Quiet Version',
  kind: 'leadership',
  premise:
    'A leader can end the disruption today with a sentence that is not quite false. Everyone would be relieved. This case is about what that sentence costs and who pays for it.',
  minutes: 18,
  abilities: ['discern', 'answer'],
  unlockAfterLessonId: 'l08-1',
  steps: [
    {
      id: 'c2s1',
      type: 'encounter',
      title: 'Ninety seconds before the all-hands',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Yusuf runs a 40-person engineering org. Six weeks ago the company decided to wind down a product line. Eleven people work on it. The decision is made; the timing is not — HR says announcements in nine weeks, after the quarter closes, for reasons Yusuf believes are partly legal and partly convenience.',
        },
        {
          kind: 'p',
          text: 'Rumours started ten days ago. This morning, in the all-hands Q&A, an engineer named Priti types into the chat, publicly: *Is Atlas being cancelled? Straight answer please.*',
        },
        {
          kind: 'p',
          text: 'Four hundred people can see it. Yusuf has about ninety seconds.',
        },
        {
          kind: 'p',
          text: 'The sentence available to him: "No decision has been made about Atlas." It is technically true in the sense HR means it — the wind-down plan is unsigned. It is false in every sense Priti means it. It would end the disruption today.',
        },
      ],
    },
    {
      id: 'c2s2',
      type: 'first-judgment',
      title: 'What does he say?',
      ability: 'discern',
      prompt: 'Write the actual words. Then say what they cost and who pays.',
      minWords: 40,
    },
    {
      id: 'c2s3',
      type: 'ranking',
      title: 'The options',
      ability: 'discern',
      prompt: 'Rank from best to worst.',
      items: [
        { id: 'r1', text: '"No decision has been made about Atlas."' },
        {
          id: 'r2',
          text: '"I cannot answer that here. I am not going to pretend that is not an answer of a kind. I will say more as soon as I am able to, and I will not let it be a surprise."',
        },
        { id: 'r3', text: '"Yes, Atlas is being wound down."' },
        { id: 'r4', text: '"Let\'s take that offline."' },
        { id: 'r5', text: '"I know there are rumours. I am not going to comment on rumours."' },
      ],
      idealOrder: ['r2', 'r3', 'r4', 'r5', 'r1'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '**The honest refusal.** It says nothing false, acknowledges that the refusal is informative, and makes one keepable promise. Eleven people will correctly conclude a great deal, and they will be right, and Yusuf will not have lied to get there.',
            '**Telling the truth outright.** Ranked second, not first, only because it may not be his to disclose and may cause real harm to colleagues mid-process. If he is authorised, this is first.',
            '**"Take it offline."** Transparently an evasion, and everyone knows it — but it does not assert anything false. Weak, not corrupt.',
            '**"I will not comment on rumours."** Worse, because it reframes a true concern as gossip, which insults the asker.',
            '**"No decision has been made."** Last. It is the only option that trades on a technicality to create a false belief, and its cost is not the disruption — it is that in nine weeks, eleven people will know exactly what he did, and the other twenty-nine will know that his true statements are a category with a footnote.',
          ],
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The category to name',
          text: 'A statement that is defensible word by word and designed to produce a false belief. Once you can name it you will find it in appraisals, in sermons, in political speech, and in your own mouth. Being able to survive an audit is not the same as being honest.',
        },
      ],
    },
    {
      id: 'c2s4',
      type: 'socratic',
      title: 'The challenge',
      ability: 'discern',
      challenge:
        "Yusuf gives the honest refusal. Two of the eleven resign within a fortnight — both people the company would have redeployed and wanted to keep. Nine weeks later, the wind-down happens as planned. His candour cost two careers and gained nothing, and HR's nine-week timeline turns out to have had a real legal basis he was not told about.",
      prompt: 'Was he wrong? Answer without retreating to "honesty is always right."',
      helper:
        'Distinguish between the decision and its outcome, and between what he said and what he did afterwards.',
      reveal: [
        {
          kind: 'list',
          items: [
            '**The decision is not refuted by the outcome.** Had he said "no decision has been made," the same two might have stayed and then discovered they had been managed — and the cost of that lands on every future statement he makes, to forty people, for years.',
            '**But the criticism has a real target.** Not the refusal — what surrounded it. If Yusuf gave the honest refusal and then did nothing for nine weeks, he took the credit for candour and left eleven people to sit in it. The obligation created by "I will not let it be a surprise" was to go and see each of them.',
            '**And a genuine error is visible:** he did not know why the timeline was nine weeks. A leader who does not understand the constraint he is operating under cannot judge whether to accept it. That failure is six weeks old, not ninety seconds old.',
          ],
        },
      ],
    },
    {
      id: 'c2s5',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write what Yusuf says in the meeting — the actual words, aloud, in under thirty seconds. Then write the first two sentences of what he says to Priti privately that afternoon.',
      audience:
        'Four hundred people watching a chat window, and one engineer who took a real risk in public.',
      constraints: [
        'Nothing false, including nothing technically-true-and-misleading.',
        'No promise he cannot keep.',
        'To Priti: do not thank her for the question in a way that punishes her.',
      ],
      rubric: ['clarity', 'evidence', 'action', 'compassion', 'uncertainty'],
      minWords: 80,
      allowVoice: true,
    },
    {
      id: 'c2s6',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c2s5',
      body: [
        { kind: 'h', text: 'In the meeting' },
        {
          kind: 'p',
          text: '"I am not able to answer that today, and I am not going to pretend that silence tells you nothing — it does, and you can all read it. What I will do is this: nothing about Atlas will reach anyone on that team as a surprise or as a rumour, and I will be in touch with that team directly this week. Priti, thank you for asking it out loud instead of in a corridor."',
        },
        { kind: 'h', text: 'To Priti, that afternoon' },
        {
          kind: 'p',
          text: '"That took something to type in front of four hundred people, and I want to be clear it did not cost you anything with me. I cannot tell you more than I said, and I would rather you heard that from me sitting here than work it out from how carefully I phrase things."',
        },
      ],
      commentary: [
        {
          label: 'It names the informativeness of the refusal',
          text: '"I am not going to pretend that silence tells you nothing." This is what separates an honest refusal from an evasion — refusing to pretend the refusal is neutral.',
        },
        {
          label: 'The promise is keepable and specific',
          text: 'Not "you will be looked after" but "this week, directly, from me." A vague reassurance here would have been the same failure in a warmer register.',
        },
        {
          label: 'The public thank-you is careful',
          text: '"Instead of in a corridor" praises the act without singling her out as a troublemaker, and it tells the other 399 which behaviour is safe.',
        },
      ],
      limits:
        'It commits Yusuf to a week of hard conversations he cannot fully script, and if he does not do them the whole thing converts into the worst option on the list.',
    },
    {
      id: 'c2s7',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c2s5',
      rubric: ['clarity', 'evidence', 'action', 'compassion', 'uncertainty'],
    },
    {
      id: 'c2s8',
      type: 'practice',
      title: 'Carry it out',
      ability: 'live',
      assignment:
        'Find one thing you have recently said that was defensible word by word and designed to leave a particular impression. Say the plain version to the person concerned.',
      window: 'Within seven days',
      checkIn: 'What was the plain version, and what happened?',
    },
  ],
}

export const caseStudent: CaseFile = {
  id: 'c-student',
  title: 'The One Who Was Always Good At This',
  kind: 'formation',
  premise:
    'A young man has failed something for the first time, and the failure is not the problem. What he has concluded from it is the problem.',
  minutes: 16,
  abilities: ['understand', 'answer'],
  unlockAfterLessonId: 'l06-1',
  steps: [
    {
      id: 'c3s1',
      type: 'encounter',
      title: 'A message at 1:40am',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Theo is nineteen, first year, and has failed two of five modules. He was the best student in his school. You have known his family for years and he has messaged you rather than them.',
        },
        {
          kind: 'dialogue',
          lines: [
            {
              speaker: 'Theo',
              text: 'sorry to message so late. got results. failed two. i think i have to be honest with myself, i got in on the back of a very good school and everyone here is just better than me',
            },
            {
              speaker: 'Theo',
              text: 'like actually better, not in a self pity way. i sat in a seminar last week and a girl said something about the reading that i would not have thought of in a year',
            },
            {
              speaker: 'Theo',
              text: 'anyway i am fine. i am probably going to switch to something easier or take a year. dont tell mum yet',
            },
          ],
        },
      ],
    },
    {
      id: 'c3s2',
      type: 'first-judgment',
      title: 'What is the problem?',
      ability: 'discern',
      prompt:
        'It is not that he failed two modules. Name what it is, precisely, and point to the words that show it.',
      minWords: 35,
    },
    {
      id: 'c3s3',
      type: 'observation',
      title: 'The messages',
      ability: 'see',
      prompt: 'Select what is there.',
      options: [
        {
          id: 'o1',
          text: 'He gives a global explanation for a specific outcome.',
          significance:
            'Two modules become "everyone here is better than me." A bounded event has been converted into a fact about his nature, which is a permanent thing and therefore not fixable.',
        },
        {
          id: 'o2',
          text: 'He pre-empts the objection: "not in a self pity way."',
          significance:
            'He has anticipated being told he is catastrophising, which means someone has said it before, which means an argument about whether he is being dramatic will get nowhere.',
        },
        {
          id: 'o3',
          text: 'His evidence is one remark by one person in one seminar.',
          significance:
            'A single vivid instance carrying an enormous conclusion. He is not lying about the seminar; he is generalising from a sample of one — and note that he cannot see her three years of reading.',
        },
        {
          id: 'o4',
          text: '"I am fine" arrives immediately before a plan to abandon the course.',
          significance: 'The reassurance is aimed at himself as much as at you.',
        },
        {
          id: 'o5',
          text: '"Something easier."',
          significance:
            'The plan is not to switch to something he wants. It is to move to somewhere the comparison stops hurting — which will be true for about a term.',
        },
        {
          id: 'o6',
          text: 'He asked you not to tell his mother, and he messaged you at 1:40am.',
          significance:
            'He wanted to say it to an adult and could not say it to that one. Whatever else you do, you are holding something.',
        },
      ],
      subtleIds: ['o2', 'o3', 'o5'],
    },
    {
      id: 'c3s4',
      type: 'quiz',
      title: 'The move that will fail',
      ability: 'discern',
      prompt: 'Which response is most likely to make things worse?',
      options: [
        {
          id: 'a',
          text: '"You are being far too hard on yourself. You are extremely bright."',
          correct: true,
          feedback:
            'Yes. It contradicts his stated evidence with an assertion, which he will discount as the thing people say. Worse, it argues the side he is ambivalent about — and by the righting reflex, he will now defend his position out loud and believe it more.',
        },
        {
          id: 'b',
          text: '"What did she actually say in the seminar?"',
          feedback:
            'A good move. It takes his evidence seriously enough to look at it, which is the only way it will ever get smaller.',
        },
        {
          id: 'c',
          text: '"Two out of five is a lot. What happened in those two?"',
          feedback:
            'Also good — it accepts the fact without accepting the interpretation, and it goes looking for the specific and fixable.',
        },
        {
          id: 'd',
          text: '"That is a rough night. I am glad you messaged."',
          feedback:
            'Fine, and probably the right first line. It does nothing about the conclusion, but nothing needs to at 1:40am.',
        },
      ],
      explanation:
        'The instinct to reassure is almost always the wrong first instrument. Reassurance contradicts; questions examine.',
    },
    {
      id: 'c3s5',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write what you send back tonight, and one line about what you will do in a week. Six sentences maximum for the message.',
      audience:
        'A nineteen-year-old awake at two in the morning who has decided something about himself.',
      constraints: [
        'Do not tell him he is clever.',
        'Do not agree that he should switch, and do not argue against it tonight.',
        'Ask about the specific, not the general.',
      ],
      rubric: ['perspective', 'compassion', 'usefulness', 'clarity', 'action'],
      minWords: 70,
      allowVoice: true,
    },
    {
      id: 'c3s6',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c3s5',
      body: [
        {
          kind: 'p',
          text: 'That is a horrible night and I am glad you sent it to someone. I am not going to tell you that you are bright, because you would bin that and you would be right to. Two questions instead, whenever you want, not now: what actually happened in those two modules — the boring version, attendance and deadlines and which weeks went wrong — and what exactly did she say in that seminar? I want the second one because I have a strong suspicion it is something you could have said in April and could not have said in October, and there is a difference between being outclassed and being three months behind. Nothing about the course needs deciding this week, and I am not telling your mum.',
        },
        {
          kind: 'p',
          text: 'In a week: ask again. He will not raise it, and if nobody does, the decision gets made by default in about a fortnight.',
        },
      ],
      commentary: [
        {
          label: 'Refusing to reassure, out loud',
          text: '"You would bin that and you would be right to" concedes his skepticism and buys credibility for everything after it.',
        },
        {
          label: 'Two specific questions, both deferred',
          text: 'Neither demands an answer tonight. Both point at the concrete, which is where a global conclusion goes to die.',
        },
        {
          label: 'The distinction offered',
          text: '"Outclassed" versus "three months behind" gives him a rival hypothesis without arguing against his — Module 4 applied to a person\'s account of themselves.',
        },
        {
          label: 'The confidence is honoured, with a limit implied',
          text: '"I am not telling your mum" is stated plainly. It would need revisiting if there were any sign of risk to him, and a real relationship would eventually say so.',
        },
      ],
      limits:
        'If there is depression underneath this rather than a bad term, the message is too light and the follow-up in a week is too slow. The 1:40am timestamp is worth watching.',
    },
    {
      id: 'c3s7',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c3s5',
      rubric: ['perspective', 'compassion', 'usefulness', 'clarity', 'action'],
    },
    {
      id: 'c3s8',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'What global conclusion have you drawn about yourself from a bounded failure? Write the bounded version of it instead.',
    },
  ],
}
