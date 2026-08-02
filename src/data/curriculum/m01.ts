import type { Lesson, Module } from '../../types/content'

export const module01: Module = {
  id: 'm01',
  order: 1,
  title: 'What Wisdom Is and Why Intelligence Is Not Enough',
  shortTitle: 'What Wisdom Is',
  centralQuestion: 'What can wisdom do that intelligence cannot?',
  summary:
    'Two people can hold the same facts and only one of them helps. This module names the difference, and why Scripture treats wisdom as something you become rather than something you accumulate.',
  abilities: ['discern', 'understand', 'answer'],
  lessonIds: ['l01-1'],
}

export const lesson01_1: Lesson = {
  id: 'l01-1',
  moduleId: 'm01',
  title: 'Two Answers in a Stairwell',
  subtitle: 'The gap between being right and being of use',
  centralQuestion: 'What can wisdom do that intelligence cannot?',
  minutes: 40,
  abilities: ['discern', 'understand', 'answer'],
  concepts: ['knowledge-understanding-wisdom', 'phronesis', 'fear-of-the-lord', 'fitting-word'],
  passages: ['Proverbs 1:7', 'James 3:17', '1 Kings 3:9', 'Proverbs 25:11'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'The situation',
      kicker: 'Read slowly. You will be asked what you noticed.',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: "Marisol runs a team of nine. Three weeks ago a junior engineer named Dev found a failing test in the payments code and did not report it. He wrote a note to himself, meant to come back to it, and did not. The bug reached customers on a Tuesday. It took two days and an apology from Marisol's director to clean up.",
        },
        {
          kind: 'p',
          text: "What Marisol learned yesterday, from someone else: during those three weeks Dev's father had a stroke. Dev drove four hours each way on weekends. He told no one at work.",
        },
        {
          kind: 'p',
          text: 'Marisol has to decide what happens now. Her director wants "a clear signal." She takes the stairs instead of the lift because two colleagues are waiting for her on the landing, and she asked them both to be there.',
        },
        {
          kind: 'h',
          text: 'Theo speaks first.',
        },
        {
          kind: 'dialogue',
          lines: [
            {
              speaker: 'Theo',
              beat: 'He has clearly thought about this before arriving.',
              text: 'The mistake everyone makes here is treating this as a question about Dev. It is a question about the system. You have a team where hiding a failure was, for three weeks, the locally rational choice. That is a design problem. If you go easy on him because his father is ill, you have taught nine people that the penalty for concealment scales with how sympathetic your month was. If you come down hard, you have taught them that the penalty for surfacing a problem is worse than the penalty for hiding one — which is what caused this. So neither. You change the mechanism. Blameless post-mortem, a rule that unreported failures are the only reportable offence, and you make the first example of it yourself. Dev is almost irrelevant to the decision. He is a data point about your process.',
            },
            {
              speaker: 'Marisol',
              text: 'That is probably right.',
            },
            {
              speaker: 'Theo',
              text: 'It is right. I would be surprised if it were not.',
            },
          ],
        },
        {
          kind: 'h',
          text: 'Ruth has been leaning on the rail.',
        },
        {
          kind: 'dialogue',
          lines: [
            { speaker: 'Ruth', text: 'Has anyone asked him how his father is?' },
            {
              speaker: 'Marisol',
              beat: 'A pause.',
              text: 'I do not know.',
            },
            {
              speaker: 'Ruth',
              text: 'Then that is Monday. Not the meeting. Before the meeting.',
            },
            { speaker: 'Marisol', text: 'And the decision?' },
            {
              speaker: 'Ruth',
              text: "You will still have to make it. He hid something and it cost the company two days and cost you your director's trust, and being frightened is a reason, not a permission. But you cannot say that to a man you have not spoken to. He will hear it as the company talking. He needs to hear it from you, and he will only hear it from you if you go first as a person.",
            },
            {
              speaker: 'Theo',
              text: 'That is not a decision. That is a preface.',
            },
            {
              speaker: 'Ruth',
              beat: 'Not unkindly.',
              text: 'Yes. Most of the work is the preface.',
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
        'Before any instruction: which of them helped Marisol more, and what exactly did the help consist of? If you think the honest answer is "both, differently," say precisely what each one supplied.',
      helper:
        'No one will grade this. It is saved so that at the end of the lesson you can see what you thought before you were taught anything.',
      placeholder: 'Theo helped by… Ruth helped by… What Marisol still lacks is…',
      minWords: 45,
    },
    {
      id: 's3',
      type: 'observation',
      title: 'What did you actually see?',
      ability: 'see',
      prompt:
        'Select everything you noticed on the first reading. Be honest — the list is not a test.',
      helper:
        'Some of these are in plain sight. Two or three are the kind of thing most readers walk straight past.',
      options: [
        {
          id: 'o1',
          text: 'Theo never uses Dev\'s name until the last sentence, and then only as "a data point."',
          significance:
            'The grammar of his advice matches its content. A person has become an instance of a category — which is precisely the move that makes his analysis so portable and so unusable in this room.',
        },
        {
          id: 'o2',
          text: "Ruth's first contribution is a question, not a claim.",
          significance:
            'She adds information to the room before she adds an opinion. Theo arrives with his opinion complete.',
        },
        {
          id: 'o3',
          text: 'Marisol says "That is probably right," and Theo corrects the hedge.',
          significance:
            'She left herself room and he closed it. Notice that his correction is about his own certainty, not about her situation.',
        },
        {
          id: 'o4',
          text: "Ruth does not disagree with Theo's analysis at any point.",
          significance:
            'This is the hinge of the whole scene. She is not offering a rival theory. She is saying the theory is not yet usable, which is a different kind of objection and easy to mistake for softness.',
        },
        {
          id: 'o5',
          text: 'Ruth says the hard thing too: "being frightened is a reason, not a permission."',
          significance:
            'If you read her as the gentle one and Theo as the rigorous one, you misread her. She keeps the moral weight of what Dev did and adds a condition on when it can be said.',
        },
        {
          id: 'o6',
          text: 'Marisol asked them both to be on the landing.',
          significance:
            'She engineered this. She wanted two kinds of counsel in the same five minutes, which suggests she already suspected one of them alone would not be enough.',
        },
        {
          id: 'o7',
          text: 'The director wants "a clear signal" — a phrase about the audience, not about Dev.',
          significance:
            'There is a third party shaping this decision who is not in the stairwell, and whose interest is in what the team sees rather than in what is true.',
        },
        {
          id: 'o8',
          text: 'Dev told no one at work about his father.',
          significance:
            'Ask why. Whatever the answer is, it existed before the failing test, and Marisol is responsible for some of it.',
        },
      ],
      subtleIds: ['o1', 'o4', 'o6', 'o7'],
      afterword: [
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Observation is a skill, not a mood',
          text: "You did not need more intelligence to notice that Theo avoids Dev's name. You needed to be looking at the words rather than through them. That is trainable, and most of Module 2 is training it.",
        },
      ],
    },
    {
      id: 's4',
      type: 'certainty',
      title: 'How much can you actually claim?',
      ability: 'interpret',
      prompt:
        'Sort each statement by how much support the scene gives it. This distinction will be used in every lesson from here on.',
      helper:
        'Stated = the text says it. Strongly implied = the text makes it nearly unavoidable. Reasonable = a fair reading a careful person could defend. Possible = it could be true, but nothing here shows it. Unsupported = you invented it.',
      claims: [
        {
          id: 'c1',
          text: 'Dev did not report the failing test when he found it.',
          tier: 'stated',
          why: 'The scene says so directly. Notice how few of the interesting claims are in this tier.',
        },
        {
          id: 'c2',
          text: 'Marisol wanted counsel of two different kinds.',
          tier: 'implied',
          why: 'She asked both of them to be there, and they are unmistakably different sorts of adviser. Short of her telling us, this is as close to certain as the scene gets.',
        },
        {
          id: 'c3',
          text: "Dev's silence about his father and his silence about the bug come from the same root.",
          tier: 'reasonable',
          why: 'A person who conceals a personal crisis at work and conceals a professional failure at work is plausibly running one policy, not two. Defensible — and still an inference. Marisol should hold it lightly enough that Dev can contradict it.',
        },
        {
          id: 'c4',
          text: 'Theo is arrogant.',
          tier: 'possible',
          why: 'He is certainly certain. But confidence in a stairwell is thin evidence about a character. He may be a man who has watched three teams destroyed by exactly this and cannot bear to watch a fourth. The scene does not say.',
        },
        {
          id: 'c5',
          text: 'Ruth has been through something like this herself.',
          tier: 'possible',
          why: 'It would explain her. It is also the sort of backstory readers supply automatically for anyone who speaks quietly and is proved right. Nothing in the text supports it.',
        },
        {
          id: 'c6',
          text: 'Marisol will not discipline Dev.',
          tier: 'unsupported',
          why: 'Ruth explicitly keeps the discipline on the table. If you sorted this higher, notice what happened: you took "be humane first" to mean "be lenient in the end." That substitution is one of the most common errors in this whole curriculum.',
        },
      ],
    },
    {
      id: 's5',
      type: 'teaching',
      title: 'The distinction the scene is built on',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'It is tempting to say Theo has knowledge and Ruth has wisdom, and to leave it there. That is too flattering to Ruth and too dismissive of Theo, and it will not survive contact with a real week. Something more precise is going on.',
        },
        {
          kind: 'p',
          text: 'A useful ordering, older than the app you are reading it in:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Knowledge** is holding what is the case. Theo has a great deal of it: he knows how incentives shape behaviour under threat, and he is not wrong.',
            '**Understanding** is seeing how what is the case hangs together — why this failure followed from these conditions. Theo has this too, which is why his analysis is genuinely good.',
            '**Wisdom** is knowing what to do, with whom, in what order, at what cost, right now. It is the only one of the three that has a *when* in it.',
          ],
        },
        {
          kind: 'p',
          text: "Ruth's contribution is almost entirely about order and timing. She does not correct Theo's content. She says the content cannot be delivered yet, and names the one act that would make it deliverable. In the older vocabulary she supplies *prudence*: not caution, but the capacity to see what this particular situation requires and to act on it.",
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'Prudence is not caution',
          text: 'In modern English "prudent" has drifted toward "careful, low-risk, slow." In the classical and Christian tradition prudence is the virtue that gets the *right* action out of a true understanding — and sometimes the right action is fast, costly, and frightening. Abigail riding out to intercept an armed and furious David (1 Samuel 25) is prudence. It is not caution.',
        },
        {
          kind: 'p',
          text: 'This is why Scripture keeps attaching wisdom to *skill* rather than to information. The craftsmen who build the tabernacle in Exodus 31 are described with the same word family as the wise: they have hands that know what the material will bear. Wisdom is knowledge with hands.',
        },
        {
          kind: 'p',
          text: 'And this is why intelligence is not enough. Intelligence gets you the map faster. It does not tell you that the man you are about to correct has been driving eight hours every weekend, or that a true sentence delivered on the wrong Monday will be heard as the company talking.',
        },
      ],
    },
    {
      id: 's6',
      type: 'lenses',
      title: 'Four lenses on the same scene',
      ability: 'interpret',
      intro:
        'Each card names where its claim comes from. They are not all the same kind of claim, and they do not carry the same authority.',
      cards: [
        {
          lens: 'biblical',
          heading: 'Wisdom begins somewhere specific',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: 'Proverbs 1:7',
              translation: 'World English Bible',
              text: 'The fear of Yahweh is the beginning of knowledge; but the foolish despise wisdom and instruction.',
            },
            {
              kind: 'p',
              text: 'The claim is not that clever people are godless or that pious people are perceptive. It is a claim about *where the whole enterprise is anchored*. To fear God is to accept that you are not the final measure of what is true or good — that there is a real moral order you are answerable to and did not invent. Everything downstream of that, including your reading of a stairwell conversation, is affected by whether you think you are describing reality or authoring it.',
            },
            {
              kind: 'scripture',
              ref: 'James 3:17',
              translation: 'World English Bible',
              text: 'But the wisdom that is from above is first pure, then peaceful, gentle, reasonable, full of mercy and good fruits, without partiality, and without hypocrisy.',
            },
            {
              kind: 'p',
              text: 'Read that list again as a description of a *manner*, not only a content. It is nearly a description of Ruth. It is not a description of Theo, though nothing in the passage says Theo is wrong.',
            },
            {
              kind: 'p',
              text: 'When Solomon is offered anything he wants, he asks for a *listening heart* — the Hebrew phrase in 1 Kings 3:9 is literally a hearing heart — so that he can discern between good and evil. The gift a king asks for is not more processing power. It is the capacity to hear.',
            },
          ],
          passages: ['Proverbs 1:7', 'James 3:17', '1 Kings 3:9'],
        },
        {
          lens: 'philosophical',
          heading: 'Aristotle had a word for what Ruth has',
          claimKind: 'philosophy',
          body: [
            {
              kind: 'p',
              text: 'In the *Nicomachean Ethics* Aristotle separates several excellences that English lumps together. *Episteme* is knowledge of what cannot be otherwise. *Techne* is skill at making. *Sophia* is theoretical wisdom about the highest things. And *phronesis* — practical wisdom — is the excellence of deliberating well about what is good for a human being in circumstances that could have gone another way.',
            },
            {
              kind: 'p',
              text: 'Aristotle makes two claims about phronesis that bear directly on this scene. First, it cannot be had in general: it is always about particulars, which is why the experienced are often wiser than the brilliant. Second, it cannot be separated from character. A person whose desires are disordered will reason well and aim at the wrong target, and Aristotle calls that cleverness rather than wisdom.',
            },
            {
              kind: 'aside',
              label: 'Where this agrees, and where it does not',
              text: 'Scripture and Aristotle agree that wisdom is practical, particular, and inseparable from character. They part company on the source. Aristotle grounds it in human flourishing rightly understood; Proverbs grounds it in the fear of the Lord, and treats wisdom as something given as well as formed. Christians have drawn on Aristotle for eight centuries without adopting his foundation.',
            },
          ],
          tension:
            'Aristotle has no doctrine of sin. He can explain the man who never learned better; he is weaker on the man who knows better and does otherwise anyway — which Scripture treats as the normal human case.',
        },
        {
          lens: 'psychological',
          heading: 'Being smart and being rational are measurably different',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: 'Research on reasoning has repeatedly found that intelligence-test performance and quality of judgement come apart. Keith Stanovich, who has argued this case at length, coined *dysrationalia* for the pattern: high cognitive ability with poor rational decision-making. In several studies, people scoring well on cognitive ability were no better protected against common reasoning biases — and in some framings, being able to argue well made it easier to defend a conclusion already arrived at.',
            },
            {
              kind: 'p',
              text: 'The mechanism most relevant here is ordinary: a strong reasoner produces justifications quickly. If the conclusion arrives first and the justification second, fluency becomes a liability. Theo may be the most reliable person in the building about incentive systems and still be the least likely to notice that he has not asked a question.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'How much weight this card can carry',
              text: 'This is a research claim, not a biblical one, and it is a live area rather than a settled one — effect sizes vary and some findings in nearby literatures have replicated poorly. Treat it as suggestive support for something Proverbs already says plainly, not as proof of it.',
            },
          ],
        },
        {
          lens: 'literary',
          heading: 'Lear asks the wrong question and gets excellent answers',
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: 'The first scene of *King Lear* is an old king dividing his kingdom by asking each daughter to say how much she loves him. Goneril and Regan give superb speeches. They are articulate, structured, and complete. Cordelia, who loves him, says almost nothing — famously, "Nothing" — and is disinherited for it.',
            },
            {
              kind: 'p',
              text: 'The play is not saying that eloquence is bad. It is saying that a badly framed question rewards the wrong ability. Lear asked for a performance and got the best performances, and the quality of the answers is exactly what blinded him.',
            },
            {
              kind: 'p',
              text: "Hold Theo's answer next to that. It is the best answer in the stairwell to the question *what policy should this team have*. Marisol asked a different question with her body when she took the stairs.",
            },
          ],
          tension:
            'Read carelessly, Lear can be made to mean "trust the inarticulate." Cordelia is not inarticulate. She refuses a specific corrupt transaction, and later speaks at length and beautifully.',
        },
      ],
    },
    {
      id: 's7',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt:
        'Match each idea on the left with the moment on the right that shows it. Each match you find is recorded in your collection.',
      left: [
        { id: 'l1', label: 'Wisdom is knowledge with a *when* in it' },
        { id: 'l2', label: 'A listening heart (1 Kings 3:9)' },
        { id: 'l3', label: 'Cleverness aimed at the wrong target' },
        { id: 'l4', label: 'A well-framed question rewards the right ability' },
      ],
      right: [
        { id: 'r1', label: 'Ruth: "That is Monday. Not the meeting. Before the meeting."' },
        { id: 'r2', label: "Ruth's opening move is a question about Dev's father" },
        { id: 'r3', label: 'Theo: "Dev is almost irrelevant to the decision."' },
        { id: 'r4', label: 'Lear asks his daughters to say how much they love him' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The entire content of her correction is sequence. Same facts, different order, different outcome.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: "Solomon asks for a hearing heart before he asks for anything else, and Ruth's first act is to hear rather than to conclude.",
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: "Aristotle's cleverness: excellent reasoning pointed at a target that leaves the person out.",
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: "Lear's question could only be won by performance, so the best performers won it.",
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'You are being set up. The story was written so that Ruth would look wise and Theo would look cold — a plain question against a monologue, a name withheld, a woman leaning on a rail. Real stairwells are not edited.',
      prompt:
        "Argue the other side seriously. Build the strongest case that Theo is the more valuable adviser here and that Ruth's contribution, in a real organisation, might do harm. Then say what would have to be true for that case to win.",
      helper:
        "This is not a trick. If you cannot argue it, you have not understood the situation — you have only absorbed the story's sympathies.",
      reveal: [
        {
          kind: 'p',
          text: 'Here is the strongest form of the case against Ruth, and it is strong.',
        },
        {
          kind: 'list',
          items: [
            "**Kindness first can be a way of never getting to the hard part.** Managers who lead with pastoral care very often discover the meeting has been used up, and the correction is deferred to a next conversation that never comes. Ruth's Monday can become an indefinite Monday.",
            '**Theo is protecting the eight people who are not in the room.** If concealment is rational on this team, someone else is currently concealing something, and every week of delay is paid by whoever inherits that bug. Systems thinking is not coldness; it is care extended to people you cannot see.',
            '**Individual attention can be unjust.** If Dev gets a personal visit because his situation is legible and sympathetic, and the next engineer gets a process because hers is not, Marisol has built a system where mercy tracks how well you tell your story.',
            '**"Most of the work is the preface" is unfalsifiable as stated.** It is the kind of line that sounds wise and cannot be wrong, which should make you suspicious of it.',
          ],
        },
        {
          kind: 'p',
          text: "What would make that case win? Chiefly this: if Marisol is a manager whose failure mode is avoidance rather than harshness. Advice is not true in the abstract; it is true for a person. Ruth's counsel is right for a manager about to be efficient with a frightened man. It is the wrong counsel for a manager who has already let three things slide.",
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The move to take with you',
          text: 'Wise counsel is indexed to the person receiving it. Before you offer any of it, ask which way this person usually falls. The same sentence is medicine for one manager and poison for another.',
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand where Theo stands',
      ability: 'understand',
      person: 'Theo',
      setup:
        'You have decided Theo is missing something. Before you are allowed to say so, reconstruct him from the inside — not as a type, as a man with reasons. Answer as though you were him.',
      fields: [
        {
          key: 'saying',
          label: 'What he is saying',
          prompt: 'State his actual argument in one or two sentences, in a form he would sign.',
        },
        {
          key: 'feeling',
          label: 'What he is feeling',
          prompt: 'Something is at stake for him in this conversation. What?',
        },
        {
          key: 'fearing',
          label: 'What he fears',
          prompt: 'What outcome is he trying to prevent? Assume it is a real outcome he has seen.',
        },
        {
          key: 'desiring',
          label: 'What he wants',
          prompt: 'Beyond being right — what does he want from Marisol, and for the team?',
        },
        {
          key: 'assuming',
          label: 'What he assumes without noticing',
          prompt: 'Name one premise he has not examined because it has always been true for him.',
        },
        {
          key: 'not-seeing',
          label: 'What he cannot see from where he stands',
          prompt: 'Not what he is wrong about — what is invisible from his position.',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'One serious reconstruction, offered as a comparison rather than a key. Yours may be better.',
        },
        {
          kind: 'list',
          items: [
            '**Saying:** the failure was produced by incentives, so the durable fix is to the incentives, and punishing the individual will make concealment more likely rather than less.',
            '**Feeling:** urgency, and something close to relief at having a framework — this is the part of the job he is good at, and he is being useful in the way he knows how to be useful.',
            '**Fearing:** that Marisol will make a sentimental decision, that it will be visible, and that the team will quietly learn that the rules bend for whoever is having the worst month. He may have watched exactly this happen.',
            '**Wanting:** a team where surfacing a failure is safe. That is a genuinely good thing to want, and it is the same thing Ruth wants.',
            '**Assuming:** that a decision and a relationship are separable — that you can fix the mechanism and address the man in either order without loss. This has probably always been true in his own experience of being managed.',
            '**Not seeing:** that Marisol is not asking what the policy should be. She is asking how to be a person on Monday. From inside a systems frame, that question is invisible, because it does not look like a question at all.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Notice what this did to your judgement',
          text: 'Most people find that Theo becomes harder to dismiss and no less mistaken about this room. That combination — sympathy without agreement — is the target. If reconstructing someone always makes you agree with them, you are being agreeable rather than understanding.',
        },
      ],
    },
    {
      id: 's10',
      type: 'ranking',
      title: 'What has to happen first?',
      ability: 'discern',
      prompt:
        'Marisol has one week. Put these five actions in the order you would actually do them, best first.',
      helper:
        'There is no single correct sequence, but some orders will cost her things she cannot get back.',
      items: [
        { id: 'a1', text: 'Ask Dev, privately and without an agenda, how his father is.' },
        {
          id: 'a2',
          text: 'Tell Dev plainly that concealing the failing test was wrong and what it cost.',
        },
        { id: 'a3', text: 'Run a blameless review of how the failure survived three weeks.' },
        { id: 'a4', text: 'Give her director the "clear signal" he asked for.' },
        {
          id: 'a5',
          text: 'Change the rule so that unreported failures are the reportable offence.',
        },
      ],
      idealOrder: ['a1', 'a2', 'a3', 'a5', 'a4'],
      rationale: [
        {
          kind: 'p',
          text: 'The ordering this lesson would defend, with reasons you are free to reject:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Ask about his father.** It is the only item that becomes impossible later. Once he has been corrected, the same question is a technique.',
            '**Say the hard thing.** Directly after, and from her rather than from the company. Delay past this point starts to look like avoidance, and Dev will be waiting for it — carrying an uncorrected fault is its own weight.',
            '**Review how it survived three weeks.** Now the review can be honest, because the individual question has been settled and no one is using the process discussion as a proxy war.',
            '**Change the rule.** Coming out of the review, it is a finding rather than a decree.',
            '**Signal to the director last.** Not because he does not matter, but because a signal sent before the work is a performance, and he will be able to tell.',
          ],
        },
        {
          kind: 'p',
          text: 'If you put the director first, ask yourself honestly whether that was a judgement about what serves the team or a judgement about what protects Marisol. Both are real considerations. Only one of them is the one she asked about.',
        },
      ],
    },
    {
      id: 's11',
      type: 'decision',
      title: 'Marisol decides',
      ability: 'discern',
      situation:
        'It is Monday morning. Marisol has spoken to Dev about his father — twenty minutes, no agenda, and it was harder than she expected. Now she has to decide what happens about the bug. Her director is expecting an answer by Wednesday.',
      prompt: 'Choose the one you would actually make. Every option below costs something.',
      options: [
        {
          id: 'd1',
          text: 'A formal written warning, with the reason stated as concealment rather than as the bug itself.',
          verdict: 'defensible',
          consequence:
            "The team learns the distinction between failing and hiding, which is the distinction that matters. Dev, already at the end of his rope, hears it as the company after all — and Marisol's twenty minutes are retroactively re-read by him as preparation. He stays eleven months and leaves.",
          cost: 'Clarity purchased with a relationship, and possibly with the honesty of the next person who finds a bug at a bad time.',
        },
        {
          id: 'd2',
          text: 'No formal action. A direct private conversation naming what he did, plus a standing weekly check-in for the next two months.',
          verdict: 'wise',
          consequence:
            'Dev hears the correction from a person who has earned the right to give it, and the check-in makes the correction structural rather than a single bad afternoon. The risk Marisol accepts: the other eight see no visible consequence, and she will have to answer for that.',
          cost: 'Her own credibility with her director, and the burden of holding a private standard publicly. She has to be willing to say "I handled it, and I am not going to describe how."',
        },
        {
          id: 'd3',
          text: 'Skip the individual question entirely. Announce the blameless-review policy and the new rule, and let the change speak for itself.',
          verdict: 'risky',
          consequence:
            "Theo's answer, adopted whole. The system does improve. But Dev is left holding an uncorrected fault, which is heavier than a correction, and the team reads the policy as a euphemism — everyone knows what prompted it. A rule introduced to avoid a conversation is legible as exactly that.",
          cost: 'The chance to have taught one person something, traded for the appearance of having taught nine.',
        },
        {
          id: 'd4',
          text: "Move Dev off the payments code onto lower-stakes work until his father's situation settles.",
          verdict: 'unwise',
          consequence:
            'It looks like mercy and functions as a demotion no one will name. Dev experiences it as a verdict on his competence delivered in the language of care, and cannot argue with it without seeming ungrateful. The most damaging feature is its unfalsifiability: there is no moment at which he can be judged to have recovered.',
          cost: 'Honesty. A consequence has been imposed while both parties are required to pretend it is a kindness.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Options one and two are both live, and a wise manager could take either. The lesson is not that leniency wins — it is that both of those options are only available to someone who did the twenty minutes first, and options three and four are what remain when nobody did.',
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'The move to distrust',
          text: 'Option four is worth remembering by name: a hard consequence delivered in soft language, structured so the recipient cannot object without looking ungrateful. It appears constantly in families, churches, and workplaces, and it is almost always chosen by people who mean well.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Marisol texts you Sunday night: "Tomorrow is the Dev conversation. I keep drafting it and everything I write sounds like HR. What do I actually say?" Write what you would send back. Six to ten sentences.',
      audience:
        'A competent manager who is not cruel, is a little frightened of her director, and respects you enough to have asked.',
      constraints: [
        'Do not write her script for her. She has to say it in her own voice.',
        'Do not resolve the tension by removing the correction. It stays.',
        'Say at least one thing she will not want to hear.',
      ],
      rubric: ['perspective', 'grounding', 'compassion', 'clarity', 'usefulness', 'action'],
      minWords: 90,
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
          text: 'It sounds like HR because you are writing it to survive being repeated. Stop doing that and it will get easier.',
        },
        {
          kind: 'p',
          text: 'Say the thing in one sentence, early, and in your own words — something like: you hid a failing test for three weeks and that is not something I can treat as small. Then stop talking. The silence after it is the whole conversation; do not fill it.',
        },
        {
          kind: 'p',
          text: 'He will probably explain, and the explanation will be true. Take it seriously and do not let it dissolve the sentence. His father is a reason. It is not a permission, and he knows that better than you do — which is why he has been carrying this since Tuesday.',
        },
        {
          kind: 'p',
          text: 'Here is the part you will not like. Some of why he did not tell anyone is you. Not because you did anything cruel — because he did not know it was allowed, and that is a thing a manager builds without meaning to. Ask him what would have had to be true for him to have told you in week one. Then be quiet again, and believe the answer.',
        },
        {
          kind: 'p',
          text: 'End with what happens now, concretely, so he is not left guessing for a week. And say the last sentence as yourself, not as the company.',
        },
      ],
      commentary: [
        {
          label: 'Why it opens there',
          text: 'The first line diagnoses her actual problem — she is drafting for an audience of imagined observers — instead of answering the question she asked. That is a risk; it works because it is short and immediately gives her something to do.',
        },
        {
          label: 'The one hard sentence',
          text: '"Some of why he did not tell anyone is you." It is placed fourth, not first, and it is bounded — *not because you did anything cruel*. Hard things land better with a floor under them.',
        },
        {
          label: 'What it refuses to do',
          text: 'It does not supply a script, and it does not tell her which discipline to impose. Both were available and both would have taken the decision away from the person who has to live with it.',
        },
        {
          label: 'Where Scripture is doing work without being quoted',
          text: '"He who gives answer before he hears, that is folly and shame to him" (Proverbs 18:13) is the structure of the whole reply — twice it says *ask, then be quiet*. Quoting it here would have made a peer text sound like a sermon. Wisdom is often invisible in the citation and visible in the shape.',
        },
      ],
      limits:
        'It is a little long for a Sunday-night text, and the phrase "believe the answer" is doing more work than it explains. A stronger version might cut a sentence and say what to do if the answer is unfair.',
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['perspective', 'grounding', 'compassion', 'clarity', 'usefulness', 'action'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise your answer. Change something real — not the wording, the substance. Both versions are kept in your journal so you can see the difference later.',
      helper:
        'The most common productive revision here: cut the general advice, keep the one specific instruction, and add the sentence she will not want to hear.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Before this week is out, have one conversation in which you ask a question and then deliberately do not fill the silence that follows. Count to five in your head. Notice what arrives in that gap.',
      window: 'Within seven days',
      cautions: [
        'Do not announce that you are doing an exercise. That converts a conversation into a demonstration.',
        'Pick someone you actually owe attention, not the most convenient person.',
      ],
      checkIn: 'What came into the silence that would not have come if you had spoken?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Where in your own life are you currently being Theo — right about the analysis, and skipping the twenty minutes? Name the person, at least to yourself.',
      prayer:
        'Solomon, offered anything, asked for a hearing heart. Ask for the same thing, in your own words, about the specific person you just named.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      intro:
        'These will return in later lessons and in transfer trials, at widening intervals. You do not have to memorise anything now.',
      conceptIds: [
        'knowledge-understanding-wisdom',
        'phronesis',
        'fear-of-the-lord',
        'fitting-word',
      ],
      passageRefs: ['Proverbs 1:7', 'James 3:17', '1 Kings 3:9', 'Proverbs 18:13'],
    },
  ],
}
