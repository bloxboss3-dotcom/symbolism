import type { Lesson, Module } from '../../types/content'

export const module04: Module = {
  id: 'm04',
  order: 4,
  title: 'Evidence, Alternative Interpretations, and Intellectual Humility',
  shortTitle: 'Evidence & Humility',
  centralQuestion:
    'How do I hold a reading firmly enough to act on and loosely enough to be wrong?',
  summary:
    'One set of facts, five coherent stories. This module trains the discipline of generating rival readings before choosing one, saying what would change your mind, and telling the difference between "I do not know" and "nobody could know."',
  abilities: ['interpret', 'discern'],
  lessonIds: ['l04-1'],
}

export const lesson04_1: Lesson = {
  id: 'l04-1',
  moduleId: 'm04',
  title: 'Five Readings of One Evening',
  subtitle: 'Rival hypotheses, and the sentence that keeps you honest',
  centralQuestion:
    'How do I hold a reading firmly enough to act on and loosely enough to be wrong?',
  minutes: 40,
  abilities: ['interpret', 'discern', 'understand'],
  concepts: [
    'ladder-of-inference',
    'alternative-hypotheses',
    'falsifying-question',
    'attribution-error',
  ],
  passages: ['Proverbs 18:17', '1 Corinthians 13:12', 'Deuteronomy 19:15', 'James 1:19'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'What Priya knows',
      ability: 'see',
      kicker: 'Everything below is true. None of it is the story.',
      body: [
        {
          kind: 'p',
          text: 'Priya has led the Thursday group for two years. Callum has been in it for eighteen months. These are the facts in her possession, in the order she acquired them.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Six weeks ago Callum stopped answering the group thread. He had previously answered within the hour, most weeks.',
            'He has missed the last four Thursdays. He gave a reason for the first two — work, then a cold — and nothing for the last two.',
            "Three weeks ago Priya's friend Manon mentioned, in passing, that she had seen Callum having coffee with Dermot on a Tuesday morning. Dermot left the church last year, not quietly.",
            'Two weeks ago Callum replied to a direct message from Priya with a single word: "Soon."',
            'Last Thursday, Priya mentioned in the group that Callum had been missed. Two people exchanged a look. Nobody said anything.',
            "This morning Callum's wife Sinead liked a photograph Priya posted, which she has not done in months.",
          ],
        },
        {
          kind: 'p',
          text: 'Priya has an account of what is happening. She has had it since roughly item three, and items four, five and six have all fitted into it comfortably.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Write the account you have already formed. Do not tidy it up or make it look properly cautious — write the one that actually arrived while you were reading. Then note which item produced it.',
      helper:
        'This is the most useful thing you will write in this lesson, and it is only useful if it is honest.',
      minWords: 40,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'The ladder you climbed without noticing',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Chris Argyris, working on organisational learning, described what he called the **ladder of inference**: from the pool of available data we select some, add meaning, make assumptions, draw conclusions, adopt beliefs, and act — and each rung feels like simple perception rather than a step we took. Worse, the beliefs at the top then determine which data we select at the bottom. The ladder is a loop.',
        },
        {
          kind: 'p',
          text: 'Notice how it ran here. Item three (coffee with Dermot) supplied a frame. From that moment "Soon" was read as evasion rather than as what a busy or depressed man types with one thumb; the exchanged look became confirmation rather than two people wondering the same thing you are; and Sinead\'s like became either guilt or a signal, depending on the frame, rather than the most ordinary act on the list.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The diagnostic question',
          text: 'For any reading you hold: *what else would look exactly like this?* If nothing does, you have strong evidence. If several things do, you have a hypothesis wearing the clothes of a conclusion.',
        },
        {
          kind: 'p',
          text: 'The discipline that answers this is not doubt. Doubt is cheap and paralysing. The discipline is **generating rivals**: writing out several accounts that fit the same facts, before ranking them. Rivals are hard to produce after you have a favourite, which is exactly why the work has to be done deliberately rather than waited for.',
        },
        {
          kind: 'p',
          text: 'Scripture legislates for this. *He who pleads his cause first seems right; until another comes and questions him* (Proverbs 18:17, WEB) is a description of the ladder, written three thousand years early. The requirement of two or three witnesses in Deuteronomy 19:15 is a procedural safeguard against a single coherent account. And James 1:19 — swift to hear, slow to speak — is the same instruction in the register of character rather than procedure.',
        },
      ],
    },
    {
      id: 's4',
      type: 'ranking',
      title: 'Five readings',
      ability: 'interpret',
      prompt:
        'Every one of these fits all six items. Rank them from most to least likely, given only what Priya knows.',
      helper:
        'Rank on the evidence, not on which would be kindest or most dramatic. You will be asked afterwards what would separate them.',
      items: [
        {
          id: 'h1',
          text: 'Callum is in a depressive episode. Withdrawal from group messaging, dropped commitments, one-word replies, and a spouse re-engaging on his behalf are all consistent.',
        },
        {
          id: 'h2',
          text: 'Callum is being drawn away by Dermot and is embarrassed to say so.',
        },
        {
          id: 'h3',
          text: "Something has happened in Callum and Sinead's marriage or family, and the group is simply not where it is being handled.",
        },
        {
          id: 'h4',
          text: 'Callum has a specific grievance about the group or about Priya, and is avoiding a conversation he does not want to have.',
        },
        {
          id: 'h5',
          text: 'Nothing coherent. A bad six weeks at work, a genuine cold, a coffee with an old friend, and a wife who was scrolling.',
        },
      ],
      idealOrder: ['h1', 'h5', 'h3', 'h4', 'h2'],
      rationale: [
        {
          kind: 'p',
          text: 'The defence of this ordering — which you are free to argue with, and the arguing is the point:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Depression** explains the largest number of items with a single cause, including the ones the other readings have to work hardest on: the reason-giving that stops after two attempts, and the one-word reply that promises future action.',
            '**Nothing coherent** is ranked second and is almost always ranked last by real people. Most six-week gaps in most groups are not stories. Placing it low is a good sign that you are pattern-completing.',
            "**A family matter** explains the withdrawal and Sinead's reappearance neatly, and is common. It is below the first two only because it does not account for the group's exchanged look.",
            '**A grievance** is plausible and would explain the avoidance of Priya specifically — but it predicts a sharper pattern than we see.',
            '**Dermot** is last, and it is the reading almost everyone forms first. It rests entirely on item three, which is a single second-hand report of one coffee. It became load-bearing because it arrived with a story attached.',
          ],
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'Why the Dermot reading felt so strong',
          text: 'It was the only item that came with a *narrative* rather than a datum. Manon did not report a coffee; she reported a coffee with someone who left badly. Information arrives pre-interpreted far more often than we notice, and the interpretation is stickier than the fact.',
        },
      ],
    },
    {
      id: 's5',
      type: 'evidence',
      title: 'What would actually separate them?',
      ability: 'interpret',
      claim:
        'You get to learn exactly one further thing. Which of these would most change the ranking?',
      prompt:
        'Select every item that would genuinely discriminate between the five readings. Leave anything that would merely add colour.',
      options: [
        {
          id: 'e1',
          text: 'Whether Callum has also withdrawn from things unconnected to the church — five-a-side, his brother, work socials.',
          supports: true,
          why: 'This is the single most discriminating fact available. Global withdrawal points hard at depression or a family crisis; withdrawal only from church points at the grievance or Dermot readings.',
        },
        {
          id: 'e2',
          text: 'What Dermot said when he left the church last year.',
          supports: false,
          why: 'Feels central and is not. It tells you about Dermot. It would tell you about Callum only if the Dermot reading were already established — which is the circularity the whole lesson is about.',
        },
        {
          id: 'e3',
          text: 'What the two people who exchanged a look actually know.',
          supports: true,
          why: 'They may hold a plain fact that dissolves the whole puzzle. Note that asking them is not the same as gossiping about it, and that the difference is largely in how the question is framed.',
        },
        {
          id: 'e4',
          text: 'Whether Callum\'s "Soon" was sent at 3am.',
          supports: true,
          why: 'A small, cheap, surprisingly discriminating detail. Sleep disruption would raise the depression reading considerably. Priya can check this without asking anyone anything.',
        },
        {
          id: 'e5',
          text: "Whether Sinead has liked anyone else's photographs recently.",
          supports: false,
          why: 'Very nearly noise. It is the sort of item that gets pursued because it is available, not because it is informative — and pursuing it has a name that Priya would not like.',
        },
        {
          id: 'e6',
          text: 'Whether Callum missed Thursdays in any comparable stretch in the past eighteen months.',
          supports: true,
          why: 'Base rates. If he vanished for five weeks last February and came back, the current gap means something different. Almost nobody asks this question, and it is often the cheapest one available.',
        },
      ],
    },
    {
      id: 's6',
      type: 'lenses',
      title: 'Three lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'Seeing in a mirror, dimly',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: '1 Corinthians 13:12',
              translation: 'World English Bible',
              text: 'For now we see in a mirror, dimly, but then face to face. Now I know in part, but then I will know fully, even as I was also fully known.',
            },
            {
              kind: 'p',
              text: 'This sits at the end of the love chapter, and its placement is not decorative. Paul has just said that love does not rejoice in unrighteousness but rejoices with the truth, that it believes all things and hopes all things. Then: *now I know in part.* Partial knowledge is given as a reason for charity, not as a reason for paralysis.',
            },
            {
              kind: 'p',
              text: 'That is the shape of Christian intellectual humility. It is not scepticism. It is knowing that your account of another person is partial in a way theirs is not, and letting that fact shape how hard you hold it.',
            },
            {
              kind: 'p',
              text: "Alongside it, the procedural safeguard: *At the mouth of two witnesses, or at the mouth of three witnesses, shall a matter be established* (Deuteronomy 19:15, WEB). Israel's law did not trust a single coherent testimony, however plausible. Manon's report of the coffee is one mouth.",
            },
          ],
          passages: ['1 Corinthians 13:12', 'Deuteronomy 19:15', 'Proverbs 18:17'],
        },
        {
          lens: 'psychological',
          heading: 'Two findings worth their weight',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: '**Confirmation bias.** Peter Wason\'s 1960 rule-discovery task gave participants a number triple (2, 4, 6) and asked them to work out the rule by proposing further triples. Most proposed triples that fitted their hypothesis and announced the rule confidently. Few proposed a triple designed to *fail*. The actual rule was simply "any increasing sequence." The finding has held up across sixty years of variants: people test by seeking confirmation rather than by seeking refutation.',
            },
            {
              kind: 'p',
              text: "**The fundamental attribution error.** Named by Lee Ross in 1977: we explain other people's behaviour by their character and our own by our circumstances. Callum has not replied because he is avoidant; you have not replied because it has been a week. Note that this bias runs in exactly the direction that makes the Dermot reading feel natural and the depression reading feel like an excuse.",
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'Weight',
              text: "Both are among the more robust findings in the field, though the attribution error's size varies across cultures and situations, and the literature is more careful now than the popular summaries are. Treat them as reliable tendencies, not laws.",
            },
          ],
        },
        {
          lens: 'philosophical',
          heading: 'What Socrates actually claimed',
          claimKind: 'philosophy',
          body: [
            {
              kind: 'p',
              text: "In Plato's *Apology*, Socrates explains the oracle's verdict that no one is wiser than he is. He goes to the people with reputations for wisdom and finds that they know a great deal and believe they know more. His advantage is narrow and precise: where he does not know, he does not think that he knows.",
            },
            {
              kind: 'p',
              text: 'That is not scepticism, and Socrates is not agnostic about anything that matters — he goes to his death over a conviction. It is a claim about the *inventory*: knowing which of your beliefs are knowledge and which are furniture.',
            },
            {
              kind: 'aside',
              label: 'The Christian difference',
              text: 'Socratic humility is grounded in the limits of the human mind. Christian humility adds two things: that the mind is not merely limited but bent, inclined to reach conclusions that serve it (Jeremiah 17:9), and that the remedy is not only method but repentance and being known by someone else.',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      type: 'certainty',
      title: "Sort Priya's claims",
      ability: 'interpret',
      prompt: 'Where does each of these sit on the ladder?',
      claims: [
        {
          id: 'c1',
          text: 'Callum has missed four consecutive Thursdays.',
          tier: 'stated',
          why: 'A countable fact. Notice how few of the things Priya believes are of this kind.',
        },
        {
          id: 'c2',
          text: 'Callum is avoiding something.',
          tier: 'implied',
          why: 'Reasons offered twice and then dropped, plus a one-word deferral. Avoidance of *something* is close to unavoidable. What he is avoiding is entirely open.',
        },
        {
          id: 'c3',
          text: 'Two members of the group know something Priya does not.',
          tier: 'reasonable',
          why: 'The look is real and Priya saw it. It is also true that a look in a small group can mean "I was wondering that too." Reasonable, not established.',
        },
        {
          id: 'c4',
          text: 'Dermot is influencing Callum against the church.',
          tier: 'possible',
          why: 'One coffee, reported second-hand, three weeks ago. If this is where your reading lives, notice that it is resting on the thinnest item in the list.',
        },
        {
          id: 'c5',
          text: 'Sinead liked the photograph as a signal to Priya.',
          tier: 'unsupported',
          why: 'This attributes intention to the most ordinary act available. When a reading requires you to interpret a tap on a screen, the reading has run out of evidence and is being maintained by inference.',
        },
        {
          id: 'c6',
          text: 'Callum will not come back.',
          tier: 'unsupported',
          why: "A prediction, dressed as an inference. Worth watching for: predictions about people tend to arrive when we have decided how the story ends and want the ending to be someone else's fault.",
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'Suppose Priya does all of this properly. She generates five hypotheses, ranks them, identifies the discriminating evidence, marks her certainty. Callum is meanwhile alone for a seventh week. There is a real possibility that "intellectual humility" here is an elaborate way of not knocking on a door — that the analysis is a substitute for the visit, and the more rigorous it is the more comfortable the substitution becomes.',
      prompt:
        'When does the discipline of holding readings loosely become a way of avoiding action? Give a test that tells the difference from the inside.',
      helper:
        'A good answer will name something Priya should do *before* she has resolved the question.',
      reveal: [
        {
          kind: 'p',
          text: 'The objection is correct and important. Three tests:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Does the uncertainty change what you do, or only what you say?** Honest uncertainty changes the action: you go and ask instead of concluding. Decorative uncertainty leaves the behaviour identical and adds hedging to the report of it.',
            '**Is there an action that is right under every hypothesis?** Here there plainly is. Under all five readings — depression, Dermot, family, grievance, nothing — the correct next move is that someone who likes Callum contacts him without an agenda. Analysis is only avoidance when it delays an action that does not depend on its outcome.',
            '**Are you being careful about the conclusion or about the risk to yourself?** Knocking on the door risks an awkward conversation, hearing a grievance about you, or being told to go away. Ranking hypotheses risks nothing. Notice which one you have been doing for six weeks.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The rule worth keeping',
          text: 'Find the action that is right under every live hypothesis, and take it now. Reserve the analysis for the decisions that genuinely turn on which reading is true. In practice this collapses a large fraction of agonising into one phone call.',
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand where Callum stands',
      ability: 'understand',
      person: 'Callum, six weeks in',
      setup:
        'Assume, for this exercise, the reading ranked first: he is depressed. Not dramatically — functionally. He is going to work. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What you say',
          prompt: 'You typed "Soon." Why that word, and why nothing else?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'About the group thread specifically, when it lights up.',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'About what happens if you go back on a Thursday.',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'What would you want someone to do — bearing in mind you will not ask for it?',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About what the group thinks of you now.',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'From inside six weeks of this, what is invisible?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction offered for comparison:',
        },
        {
          kind: 'list',
          items: [
            '**"Soon":** the shortest word that is not a lie and does not open anything. Explaining would require having an explanation, and he does not have one that sounds like a reason.',
            '**Feeling:** dread when the thread lights up, then guilt, then a specific kind of tiredness at the thought of composing a reply that will sound normal.',
            '**Fearing:** the door. Walking into a room where six people are pleased to see him and will ask where he has been, and having to perform being fine for two hours.',
            '**Wanting:** someone to arrive in a way that requires nothing of him. A message that does not ask a question. A person at the door with coffee who does not need him to explain.',
            '**Assuming:** that he has used up his credit, and that the gap is now the thing about him.',
            "**Not seeing:** that the gap is roughly a quarter as large in everyone else's mind as it is in his, and that Priya has spent six weeks thinking about him rather than resenting him.",
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The practical consequence',
          text: 'Under this reading, the message that works asks nothing. "Thinking of you. No reply needed. I will drop something round Saturday unless you tell me not to." Note that it also works fine under all four rival readings, which is exactly the test from the previous step.',
        },
      ],
    },
    {
      id: 's10',
      type: 'decision',
      title: 'Priya acts',
      ability: 'discern',
      situation: 'It is Friday morning. Priya has an hour before work.',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: 'Message the two who exchanged the look, and ask what they know.',
          verdict: 'risky',
          consequence:
            "It may produce the fact that resolves everything in ninety seconds. It also converts a private matter into a discussed one, and if Callum ever learns that the leader's first move was to ask about him rather than to ask him, the group has a new problem.",
          cost: "Callum's standing in the group, spent to shorten Priya's uncertainty.",
        },
        {
          id: 'd2',
          text: 'Send Callum a message that asks nothing and offers something specific.',
          verdict: 'wise',
          consequence:
            'Right under all five hypotheses, which is the test. Costs an hour and a small amount of dignity if it is ignored. If the depression reading is right, it is close to the only thing that helps; if the grievance reading is right, it opens the door without demanding he walk through it.',
          cost: 'The possibility of no reply, which Priya has to be willing to absorb without treating it as a verdict.',
        },
        {
          id: 'd3',
          text: 'Wait. He said "soon." Pushing may be exactly what drove him away.',
          verdict: 'unwise',
          consequence:
            'This is the option that sounds like patience and functions as relief. Six weeks is already the waiting. Note that its real appeal is that it requires nothing and can be described as respect.',
          cost: 'Another fortnight of a man being alone with something, so that Priya does not have to risk an awkward text.',
        },
        {
          id: 'd4',
          text: 'Contact Sinead.',
          verdict: 'defensible',
          consequence:
            'Sometimes exactly right — a spouse often knows and is often relieved to be asked. It also routes around Callum, and if he is depressed and ashamed, learning that his wife was contacted about him can land as humiliation.',
          cost: 'His agency, which under several of these readings is the thing he has least of.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'The ranking exercise did not choose the action. The *action-under-every-hypothesis* test did. That is worth noticing: careful interpretation earns its keep by clarifying which decisions actually depend on being right.',
        },
      ],
    },
    {
      id: 's11',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: "Match each idea to the moment in Priya's six weeks that illustrates it.",
      left: [
        { id: 'l1', label: 'The ladder of inference is a loop' },
        { id: 'l2', label: 'Two witnesses' },
        { id: 'l3', label: 'Confirmation over refutation (Wason)' },
        { id: 'l4', label: 'Attribution error' },
      ],
      right: [
        { id: 'r1', label: 'After item three, every later item fitted comfortably' },
        { id: 'r2', label: "Manon's report of one coffee is a single mouth" },
        { id: 'r3', label: 'Priya never asked whether Callum had vanished before' },
        { id: 'r4', label: '"He is avoidant"; "I have just had a busy week"' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The frame adopted at rung four determined what was selected at rung one for the next three weeks.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'Deuteronomy 19:15 exists because a single coherent testimony is persuasive out of proportion to its weight.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'The base-rate question is the disconfirming test, which is precisely the kind nobody runs.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'His silence gets a character explanation; ours gets a situational one.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write the actual message Priya sends to Callum on Friday morning. Then, underneath, write three sentences to Priya explaining why you wrote it that way. The message should be short — four sentences at most.',
      audience:
        'Callum, who may be depressed, may be aggrieved, may be busy, and will read it on his phone at work.',
      constraints: [
        'The message must work under all five hypotheses.',
        'It must not contain a question that requires him to explain himself.',
        'It must contain one specific, low-cost, declinable offer.',
      ],
      rubric: ['perspective', 'uncertainty', 'compassion', 'clarity', 'usefulness', 'action'],
      minWords: 80,
      allowVoice: true,
    },
    {
      id: 's13',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 's12',
      body: [
        { kind: 'h', text: 'The message' },
        {
          kind: 'p',
          text: 'Callum — no reply needed to this one. I have been thinking about you and I would rather say so than leave it. I am driving past yours Saturday about eleven and I will drop off coffee and leave it at the door unless you tell me not to. Nothing needed from you either way.',
        },
        { kind: 'h', text: 'To Priya' },
        {
          kind: 'p',
          text: 'Every sentence is designed to cost him nothing. "No reply needed" is first because it is the only line that will definitely be read, and it removes the obligation that has been accumulating for six weeks. The offer is specific enough to be real and structured so that silence counts as consent — if he is depressed, requiring him to say yes is requiring him to do the one thing he cannot do this month.',
        },
        {
          kind: 'p',
          text: 'There is no question anywhere in it, and no reference to Thursdays, the group, or Dermot. If there is a grievance, this leaves room for him to raise it on his own terms; if there is not, nothing has been implied. And it works if the true answer is simply that he has had a rotten six weeks at work.',
        },
        {
          kind: 'p',
          text: 'The one thing you have to accept: he may not answer, and that is not information. Do it again in ten days.',
        },
      ],
      commentary: [
        {
          label: 'Why silence-as-consent matters',
          text: '"Unless you tell me not to" inverts the default. It is the single most transferable device in this exemplar and it applies far beyond this case.',
        },
        {
          label: 'What is deliberately absent',
          text: 'No "how are you," no "we have missed you," no "is everything all right." All three are kind, and all three are questions that require a performance.',
        },
        {
          label: 'The last line to Priya',
          text: '"He may not answer, and that is not information." This protects her from climbing the ladder again on the strength of a non-reply — which is where the next six weeks would otherwise go.',
        },
      ],
      limits:
        'Assumes they are close enough that a doorstep drop-off is not strange; from a leader Callum barely knows it could read as surveillance. Adjust the offer to the actual distance of the relationship.',
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['perspective', 'uncertainty', 'compassion', 'clarity', 'usefulness', 'action'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise the message only. Cut it to three sentences without losing the declinable offer or the removal of obligation.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        "Choose one belief you currently hold about a real person's motives. Write down: (1) the evidence, item by item; (2) two rival readings that fit the same items; (3) the one thing that would most discriminate between them; (4) the action that is right under all of them. Then take that action.",
      window: 'Within seven days',
      cautions: [
        'Pick something live, not settled. The exercise is worthless on a belief you have already given up.',
        'Step four is the assignment. Steps one to three without step four is the failure mode this lesson warned about.',
      ],
      checkIn: 'Was there an action right under every reading? Did you take it?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Which of your firm convictions about another person rests, if you trace it honestly, on a single item told to you by a single person?',
      prayer:
        '"Now I know in part." Name the person you have been knowing in part as though you knew fully, and ask for charity toward the part you do not have.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: [
        'ladder-of-inference',
        'alternative-hypotheses',
        'falsifying-question',
        'attribution-error',
      ],
      passageRefs: ['Proverbs 18:17', '1 Corinthians 13:12', 'Deuteronomy 19:15'],
    },
  ],
}
