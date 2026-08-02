import type { Lesson, Module } from '../../types/content'

export const module09: Module = {
  id: 'm09',
  order: 9,
  title: "Listening Beneath a Person's Words",
  shortTitle: 'Listening Beneath',
  centralQuestion: 'What is this person actually asking me?',
  summary:
    'People rarely open with the real thing. They open with the thing that is safe to open with. This module trains the specific skill of hearing the question under the question, without turning listening into a technique the other person can feel.',
  abilities: ['understand', 'see'],
  lessonIds: ['l09-1'],
}

export const lesson09_1: Lesson = {
  id: 'l09-1',
  moduleId: 'm09',
  title: 'What She Said and What She Meant',
  subtitle: 'The presenting problem is not the problem',
  centralQuestion: 'What is this person actually asking me?',
  minutes: 40,
  abilities: ['understand', 'see', 'answer'],
  concepts: [
    'presenting-problem',
    'question-under-question',
    'reflective-listening',
    'drawing-out',
  ],
  passages: ['Proverbs 20:5', 'Proverbs 18:13', 'John 4:7-19', 'James 1:19'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'Eleven minutes on a Tuesday',
      ability: 'see',
      kicker: 'A real-time transcript. Read it as evidence.',
      body: [
        {
          kind: 'p',
          text: "Noor and Beth have known each other four years. They are in Noor's kitchen. Beth came round to return a dish.",
        },
        {
          kind: 'dialogue',
          lines: [
            { speaker: 'Beth', text: 'Anyway. Sorry, it took me ages to bring this back.' },
            { speaker: 'Noor', text: "It has been in the cupboard. I hadn't noticed." },
            {
              speaker: 'Beth',
              beat: 'Sits down, not on the chair she usually takes.',
              text: 'Can I ask you something stupid? How did you know when to stop with your mum? With the visiting, I mean. When you decided you were doing every other weekend instead of every weekend.',
            },
            { speaker: 'Noor', text: "That was a bad year. Why, is Ray's dad worse?" },
            {
              speaker: 'Beth',
              text: 'No, he is the same. It is fine. Honestly it is fine, Ray does most of it. I just wondered how you worked out the number.',
            },
            { speaker: 'Noor', text: 'The number?' },
            {
              speaker: 'Beth',
              text: 'Every other weekend. How did you decide that was the right amount? Because I keep thinking there must be a right amount and I do not know how anyone works it out.',
            },
            {
              speaker: 'Noor',
              text: 'I do not think there is a right amount. I think I just could not do it any more.',
            },
            {
              speaker: 'Beth',
              beat: 'Long pause. Picks up a spoon and puts it down.',
              text: 'Right. Yes. And did you feel — sorry, this is a weird question — did you feel like a bad daughter?',
            },
            { speaker: 'Noor', text: 'Every single weekend I did not go. For about a year.' },
            { speaker: 'Beth', text: 'But you did it anyway.' },
            { speaker: 'Noor', text: 'I did it anyway.' },
            {
              speaker: 'Beth',
              beat: 'Very quickly.',
              text: 'Anyway I should go, I have got the girls at four. Thanks for the dish. I mean — for having the dish.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'What did Beth come to the kitchen for? Answer in one sentence, then give the three pieces of evidence you are using.',
      helper:
        'Resist the temptation to write a paragraph. The one-sentence constraint is the exercise.',
      minWords: 35,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'Read the transcript again',
      ability: 'see',
      prompt: 'Select what is actually there.',
      helper:
        'Several of these are things Beth does with her body or her timing rather than her words.',
      options: [
        {
          id: 'o1',
          text: 'She frames her own question as stupid before asking it.',
          significance:
            'Pre-emptive dismissal. People label a question stupid when they are afraid the answer matters, and it is one of the most reliable markers that something real is coming.',
        },
        {
          id: 'o2',
          text: "She asks about Noor's mother, not about Ray's father.",
          significance:
            "The question is routed through someone else's decision. Displacement of this kind is not evasion; it is how people test whether a subject is safe.",
        },
        {
          id: 'o3',
          text: '"Honestly it is fine" — with "honestly" attached.',
          significance:
            'A word that appears to strengthen and in practice marks strain. Note that Noor\'s question ("is Ray\'s dad worse?") got a denial plus two justifications, which is more than a no requires.',
        },
        {
          id: 'o4',
          text: 'She fixes on "the number" and returns to it twice.',
          significance:
            "The repetition is the signal. She is not asking for a fact about Noor's calendar; she is asking whether a defensible amount exists — because if it does, she can be judged against it, and if it does not, the decision is hers.",
        },
        {
          id: 'o5',
          text: 'She sat in a different chair.',
          significance:
            'Small, and worth having. Whatever this conversation is, she came intending it, and she arranged herself differently to have it.',
        },
        {
          id: 'o6',
          text: 'The real question arrives ninth: "did you feel like a bad daughter?"',
          significance:
            'This is what she came for. Note the position — late, prefaced by an apology, and asked only after Noor said something that made it safe.',
        },
        {
          id: 'o7',
          text: 'She leaves immediately after "I did it anyway."',
          significance:
            'She got what she came for and could not stay in the room with it. Leaving fast after the real exchange is common and is not rejection.',
        },
        {
          id: 'o8',
          text: '"Ray does most of it."',
          significance:
            'Dropped in as reassurance and probably the most loaded clause in the transcript. It may be true, it may be what she has been told, and it may be why she cannot say she is struggling.',
        },
      ],
      subtleIds: ['o1', 'o5', 'o7', 'o8'],
    },
    {
      id: 's4',
      type: 'teaching',
      title: 'The presenting problem',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Clinicians call the thing a person opens with the **presenting problem**. It is not usually a lie and it is not usually the reason they came. It is the most acceptable version of the reason — acceptable to the listener, and more importantly, acceptable to the speaker.',
        },
        {
          kind: 'p',
          text: "People do this for good reasons. Naming the real thing commits you to it. It can be taken away by a bad response. And a question about someone else's decision costs nothing if the answer is unwelcome.",
        },
        {
          kind: 'scripture',
          ref: 'Proverbs 20:5',
          translation: 'World English Bible',
          text: 'Counsel in the heart of man is like deep water; but a man of understanding will draw it out.',
        },
        {
          kind: 'p',
          text: 'The image is a well. What is down there is real, and it is not going to come up on its own. *Drawing out* is active work — but note what a bucket does not do. It does not go down and tell the water what it is. Almost every failure of listening comes from a listener who has decided what is in the well and starts announcing it.',
        },
        {
          kind: 'h',
          text: 'Four markers that something is under the surface',
        },
        {
          kind: 'list',
          items: [
            '**Displacement.** The question is asked about a third party, a hypothetical, or a past situation.',
            '**Disclaimers.** "This is stupid," "sorry, weird question," "it is fine, honestly." Effort spent making a question small is proportional to its size.',
            '**Return.** They come back to the same detail more than once, often from a different angle. The repeated thing is the thing.',
            '**Asymmetry of energy.** A short question that took a long time to arrive, or a long answer to something trivial. Watch the cost, not the content.',
          ],
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The failure this produces in eager listeners',
          text: 'Having learned the markers, the temptation is to announce them: *I notice you keep asking about the number — I think this is really about your father-in-law.* That may be correct and it is almost always a mistake. It converts you from a friend into someone running a procedure, and the person will feel it instantly. The skill is to hear it and then behave as though you have not read a book about it.',
        },
        {
          kind: 'p',
          text: 'What Noor actually does is close to ideal and she does it without any theory at all. She answers the question she was asked, briefly and truthfully. She does not probe. Then she says a true thing about herself that costs her something — *I felt like a bad daughter every single weekend* — and that disclosure is what makes the ninth question askable.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The move to steal',
          text: 'When someone is circling, the thing that most reliably brings them in is not a question. It is you saying something true and slightly costly about yourself, and then stopping.',
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
          lens: 'biblical',
          heading: 'A conversation at a well',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'John 4. A Samaritan woman comes to draw water at noon — the wrong hour, alone. Jesus opens with a request, not an offer: *Give me a drink.* He puts himself in her debt.',
            },
            {
              kind: 'p',
              text: 'Track the movement. She raises a social barrier (Jews have no dealings with Samaritans). He does not argue it; he changes register and speaks of living water. She takes it literally and objects practically — you have no bucket, the well is deep. He stays with her image. Only then does the conversation reach her life, and when it does he names five husbands without a word of condemnation attached. She raises a theological dispute about which mountain to worship on — plausibly a deflection — and he answers it seriously rather than saying *you are changing the subject.*',
            },
            {
              kind: 'p',
              text: 'Two things are worth extracting. First, he never once names her real problem before she is ready; he creates the conditions and waits. Second, when she deflects, he follows the deflection and answers it well, and the conversation returns on its own. Chasing someone back to the point is what closes a well.',
            },
            {
              kind: 'scripture',
              ref: 'Proverbs 18:13',
              translation: 'World English Bible',
              text: 'He who gives answer before he hears, that is folly and shame to him.',
            },
          ],
          passages: ['John 4:7-19', 'Proverbs 20:5', 'Proverbs 18:13'],
        },
        {
          lens: 'psychological',
          heading: 'What Rogers actually proposed',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: 'Carl Rogers argued that change happens under three conditions from the listener: genuineness, unconditional positive regard, and accurate empathic understanding. The technique that became famous — reflecting back — was meant as evidence of the third, not as the thing itself.',
            },
            {
              kind: 'p',
              text: 'This is why parroting fails. "So what I am hearing is that you feel overwhelmed" performs the technique in the absence of the condition, and people can tell. Rogers\' own writing is emphatic that the attitude is what does the work.',
            },
            {
              kind: 'p',
              text: "The evidence base is mixed in the way most psychotherapy research is: the *common factors* finding — that the quality of the relationship predicts outcome more reliably than the specific method — is one of the more robust results in the field, and it supports Rogers' emphasis even where his specific model is contested.",
            },
            {
              kind: 'aside',
              label: 'Where a Christian reader should pause',
              text: '"Unconditional positive regard" is not the same as believing everything a person says about themselves or their situation, and Rogers\' broader account — that people trend toward growth if unimpeded — sits awkwardly next to any serious doctrine of sin. Take the finding about relationship. Do not take the anthropology.',
            },
          ],
        },
        {
          lens: 'literary',
          heading: 'Two people talking past each other, on purpose',
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: 'Read the Beth transcript again and notice how little of it is about its subject. This is not a stylistic trick; it is a fairly exact transcription of how people raise difficult things, and novelists have been documenting it for two centuries because it is where character is visible.',
            },
            {
              kind: 'p',
              text: 'The technical name for the useful part is **subtext**: what a line is doing as distinct from what it says. "How did you work out the number?" *says* a question about scheduling. It *does* the work of asking whether guilt is survivable.',
            },
            {
              kind: 'p',
              text: "Training on fiction is genuinely useful here for one reason: in a novel you can check your reading against what happens next. In life you cannot, which is why people who read carefully sometimes over-read badly. The check is the same as Module 4's — what else would look exactly like this?",
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      type: 'certainty',
      title: 'What is Beth actually asking?',
      ability: 'interpret',
      prompt: 'Sort these readings.',
      claims: [
        {
          id: 'c1',
          text: 'Beth asked how Noor decided on every other weekend.',
          tier: 'stated',
          why: 'She asked it twice.',
        },
        {
          id: 'c2',
          text: "Beth is not primarily interested in Noor's scheduling.",
          tier: 'implied',
          why: 'The disclaimers, the different chair, the abrupt exit, and the ninth question together make this close to certain.',
        },
        {
          id: 'c3',
          text: "Beth is doing more of the care for Ray's father than she is saying.",
          tier: 'reasonable',
          why: 'A fair reading of "Ray does most of it" delivered as reassurance. Note that it is also possible he does most of it and she is exhausted by the remainder, which changes what would help.',
        },
        {
          id: 'c4',
          text: 'Beth wants permission to reduce her involvement.',
          tier: 'reasonable',
          why: 'The most useful working hypothesis, and it should be held as a hypothesis. Compare: she may want permission to *resent* it while continuing, which is a different need and would be badly served by advice about reducing.',
        },
        {
          id: 'c5',
          text: "There is a problem in Beth and Ray's marriage.",
          tier: 'possible',
          why: 'The one clause about Ray invites it, and readers reach for marriage readings quickly. Nothing here supports it yet.',
        },
        {
          id: 'c6',
          text: 'Beth has already decided to stop and came for absolution.',
          tier: 'possible',
          why: 'Would explain the speed of her exit. Would equally be explained by having heard something she needed to sit with alone. Two readings, one datum.',
        },
      ],
    },
    {
      id: 's7',
      type: 'ranking',
      title: 'What does Noor do next?',
      ability: 'understand',
      prompt: 'It is Thursday. Rank these by how likely each is to help, given everything above.',
      items: [
        { id: 'r1', text: 'Text: "Been thinking about you since Tuesday. No reply needed."' },
        { id: 'r2', text: 'Text: "Is everything okay with Ray\'s dad? You seemed a bit off."' },
        { id: 'r3', text: 'Invite her round again, with no stated reason.' },
        {
          id: 'r4',
          text: 'Text: "For what it is worth — there is no number. I looked for one for a year."',
        },
        { id: 'r5', text: 'Say nothing and wait for Beth to raise it again.' },
      ],
      idealOrder: ['r4', 'r1', 'r3', 'r5', 'r2'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '**"There is no number."** It answers the question Beth actually asked, continues the disclosure that opened her up, and requires nothing. It also removes the frame Beth is being crushed by — that a correct amount exists and she is failing to find it.',
            '**"Been thinking about you."** Warm, obligation-free, and it re-opens the door without naming anything. Safe under every reading.',
            '**Invite her round.** Good, slower, and depends on Beth having the energy to accept.',
            '**Wait.** Not wrong. Beth may well come back. It is ranked fourth rather than last because there is a genuine case for letting a person control the pace of their own disclosure.',
            '**"You seemed a bit off."** Last, and it is the one most people would send. It names the observation, which forces Beth either to confirm that she was transparent or to deny it. Both are costly. It also relocates the subject from Noor\'s experience to Beth\'s state, which is precisely the move Beth spent eleven minutes avoiding.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Why the last one is so tempting',
          text: 'It is the most caring-sounding option and it is the most exposing for the recipient. Watch for that pattern generally: kindness that requires the other person to admit something is a request dressed as an offer.',
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'This whole lesson trains you to hear what people are not saying. There is an obvious failure mode: you become someone who believes they know what everyone really means, who treats plain statements as symptoms, and who cannot be told anything at face value. That person is exhausting, and they are usually confident.',
      prompt:
        'What stops "listening beneath" from becoming the arrogance of assuming you know people better than they know themselves? Give a rule you could actually follow.',
      helper:
        'The best answers here constrain what you are allowed to *do* with the reading, not what you are allowed to think.',
      reveal: [
        {
          kind: 'p',
          text: 'Four constraints, in rough order of usefulness:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Never assert the subtext. Act on it.** You may believe Beth is asking about herself. You may not say "I think this is about you." The reading is for choosing what to say next, not for display. This single rule prevents most of the damage.',
            '**Take the surface seriously as well.** Beth genuinely does want to know how Noor decided. Answering the stated question is not naive; it is the price of admission to the other one, and treating stated content as mere symptom is how listeners become unbearable.',
            '**Hold it as a hypothesis with a rival.** Module 4 applies here exactly. If you cannot state a second reading that fits the evidence, you are not listening, you are diagnosing.',
            '**Let them correct you cheaply.** Frame anything you offer so that "no, it is not that" costs them nothing. "There is no number" is easy to shrug off. "You are clearly overwhelmed" is not.',
          ],
        },
        {
          kind: 'p',
          text: 'And a general observation: the people who read others best are usually the least eager to demonstrate it. The demonstration is the failure. If your insight has to be visible to be satisfying, it is serving you.',
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand where Beth stands',
      ability: 'understand',
      person: 'Beth, in the car outside afterwards',
      setup: 'She has been sitting in the car for six minutes without starting it. Answer as her.',
      fields: [
        {
          key: 'saying',
          label: 'What you said',
          prompt: "Why did you ask about Noor's mother instead of saying the thing?",
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'Sitting in the car. Name it precisely.',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'What would it mean about you if you reduced what you are doing?',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'What did you go there hoping to hear?',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About what a good daughter-in-law owes, and about who decides.',
        },
        { key: 'not-seeing', label: 'What you cannot see', prompt: 'From inside this.' },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction:',
        },
        {
          kind: 'list',
          items: [
            '**Why the displacement:** because asking directly would mean she had a problem, and the moment she has a problem she has to do something about it, and everything she could do feels like a betrayal.',
            '**Feeling in the car:** relief, and shame about the relief.',
            '**Fearing:** that reducing it would prove she was never doing it out of love but out of duty, and that the love was the thing she was least sure about.',
            '**Wanting:** not advice, not a plan. She went hoping to hear that someone she respects did the unforgivable thing and is still a person she respects. She got exactly that in four words, which is why she left.',
            '**Not seeing:** that Ray may be having the identical conversation with someone else, and that "Ray does most of it" may be a sentence they are both using.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What she came for',
          text: 'Not permission and not a solution. Evidence that the guilt is survivable, supplied by a witness. Notice how little that requires of the listener, and how easily it is destroyed by advice.',
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
        { id: 'l1', label: 'Displacement — asking about a third party' },
        { id: 'l2', label: 'Costly self-disclosure opens the well' },
        { id: 'l3', label: 'Follow the deflection; do not chase them back' },
        { id: 'l4', label: 'Never assert the subtext' },
      ],
      right: [
        { id: 'r1', label: 'Beth asks how Noor decided about her own mother' },
        { id: 'r2', label: '"Every single weekend I did not go. For about a year."' },
        { id: 'r3', label: 'Jesus answers the question about which mountain, seriously' },
        { id: 'r4', label: '"There is no number" rather than "this is about you"' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'A question about someone else costs nothing if the answer is unwelcome.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'The disclosure, not a probe, is what made the ninth question askable.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'He treats the apparent digression as worth a real answer, and the conversation returns on its own.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'The reading determines what is said; it is not itself said.',
        },
      ],
    },
    {
      id: 's10b',
      type: 'decision',
      title: 'Three weeks later',
      ability: 'discern',
      situation:
        'Beth has replied to the Thursday message with a heart and nothing else. Three weeks on, at a birthday party, she says lightly across a table of six people: "Noor is the one who told me there is no right number, so if it all falls apart it is her fault." Everyone laughs. Ray is at the table.',
      prompt: 'What do you do, in the moment and afterwards?',
      options: [
        {
          id: 'd1',
          text: 'Laugh, say nothing further, and message her the next day to ask how it is going.',
          verdict: 'wise',
          consequence:
            'She raised it in public, lightly, with her husband present — which is a way of saying something true while keeping every exit open. Taking it seriously at the table would close them. The next-day message meets it where it can actually be met.',
          cost: 'A night of not knowing whether the joke was a signal or just a joke, which you have to be able to tolerate.',
        },
        {
          id: 'd2',
          text: 'Say warmly, at the table: "I did say that, and I meant it."',
          verdict: 'defensible',
          consequence:
            'Short, kind, and it backs her publicly without expanding the subject. The risk is small but real: it converts a joke into a position, in front of Ray, and Beth may not have wanted the sentence to be true out loud yet.',
          cost: 'A little of her control over the pace, spent on making her feel supported.',
        },
        {
          id: 'd3',
          text: 'Follow it up at the table — "how is it going with Ray\'s dad, actually?"',
          verdict: 'unwise',
          consequence:
            'The question is caring and the setting makes it an interrogation. Six people turn to hear the answer, and whatever Beth says will be the version she can say in front of her husband and a birthday cake. You have just used up the only opening she has given you in a month.',
          cost: 'The subject itself, which will now be harder to raise in private than it was before.',
        },
        {
          id: 'd4',
          text: 'Nothing at all, then or after. She has your number.',
          verdict: 'risky',
          consequence:
            'Defensible as respect for her pace, and it is also the option that requires nothing of you. She named you out loud in front of people. That is not how someone refers to a conversation they have forgotten.',
          cost: 'The chance that the joke was a knock on the door.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Note the shape: what she did at the table is the same move she made in the kitchen — say the real thing in a form that costs nothing if it is not taken up. Recognising the *repeat* is the whole skill of this module.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write the message Noor sends on Thursday. Four sentences maximum. Then write, separately, the two sentences you would say to Noor about why you wrote it that way.',
      audience:
        'Beth, who is ashamed of her relief, who will read this between school runs, and who cannot afford to be seen through.',
      constraints: [
        'Do not name what you think is going on.',
        'Do not ask a question that requires disclosure.',
        'It must be easy for Beth to receive it and do nothing.',
      ],
      rubric: ['perspective', 'compassion', 'clarity', 'uncertainty', 'usefulness', 'action'],
      minWords: 70,
      allowVoice: true,
    },
    {
      id: 's12',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's11',
      body: [
        { kind: 'h', text: 'The message' },
        {
          kind: 'p',
          text: 'Been thinking since Tuesday about your question. I should have said properly: there is no number. I looked for one for about a year and there was never going to be one, and finding that out was the only thing that helped. Anyway — no reply needed, the dish situation is resolved and that is the main thing.',
        },
        { kind: 'h', text: 'Why' },
        {
          kind: 'p',
          text: 'It answers what she asked rather than what I think she meant, which means she can take it as being about scheduling if that is all she can manage today. The confession does the work — she came to find out whether someone she respects survived this, and the only useful evidence is a first-person account with the guilt left in.',
        },
        {
          kind: 'p',
          text: 'The joke at the end is deliberate. It gives her a way to reply with nothing, and it signals that I am not now going to be watching her.',
        },
      ],
      commentary: [
        {
          label: 'Why "I should have said properly"',
          text: 'It puts the incompleteness on Noor rather than making Beth the person who needs following up. The difference is small and it is the whole difference between an offer and an inquiry.',
        },
        {
          label: 'The guilt is left in',
          text: '"I looked for one for about a year." Not "and then I felt fine." The evidence Beth needs is that someone carried it, not that it went away — a sanitised version would be useless to her.',
        },
        {
          label: 'The exit line',
          text: 'Humour here is not deflection; it is an architectural feature. It lowers the cost of not replying, which was the third constraint.',
        },
        {
          label: 'What is absent',
          text: "No mention of Ray, of Ray's father, of how she seemed, or of anything Noor noticed. Every one of those would have converted a message into a summons.",
        },
      ],
      limits:
        'If Beth is in genuine crisis rather than chronic strain, this is too light, and someone will need to ask a direct question eventually. The message buys the relationship room; it does not discharge the responsibility.',
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['perspective', 'compassion', 'clarity', 'uncertainty', 'usefulness', 'action'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise the message. If yours contained a question, remove it and replace it with something true about yourself.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'In your next three substantial conversations, watch for one marker only: **return**. Note what the person comes back to more than once. Do not say anything about it. Afterwards, write down what you think they were asking.',
      window: 'Within seven days',
      cautions: [
        'One marker, not four. Running the full list turns a conversation into an assessment and people feel it.',
        'The instruction not to say anything is the exercise. You are training the ear, not the mouth.',
      ],
      checkIn: 'What did someone return to, and what do you think was underneath it?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        "What have you been asking people lately, in a displaced form? What is the question you have been routing through someone else's situation?",
      prayer:
        '*Counsel in the heart of man is like deep water.* Ask for the honesty to say your own question plainly to one person this month — and for the patience not to demand that anyone else say theirs.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'presenting-problem',
        'question-under-question',
        'reflective-listening',
        'drawing-out',
      ],
      passageRefs: ['Proverbs 20:5', 'Proverbs 18:13', 'John 4:7-19'],
    },
  ],
}
