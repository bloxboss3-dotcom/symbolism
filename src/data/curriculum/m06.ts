import type { Lesson, Module } from '../../types/content'

export const module06: Module = {
  id: 'm06',
  order: 6,
  title: 'Virtue, Vice, Character, and Habit',
  shortTitle: 'Virtue & Habit',
  centralQuestion:
    'How does a person become the kind of person who does the right thing without deciding to?',
  summary:
    'Character is not what you believe under calm conditions. It is what is already installed when there is no time to think. This module works on how virtues are actually formed, why vices are usually virtues that have run past their measure, and what Scripture adds that Aristotle cannot.',
  abilities: ['discern', 'live'],
  lessonIds: ['l06-1'],
}

export const lesson06_1: Lesson = {
  id: 'l06-1',
  moduleId: 'm06',
  title: 'The Shape of a Person',
  subtitle: 'Why courage cannot be summoned, only stored',
  centralQuestion:
    'How does a person become the kind of person who does the right thing without deciding to?',
  minutes: 38,
  abilities: ['discern', 'live', 'understand'],
  concepts: ['habituation', 'the-mean', 'virtue-vs-mood', 'fruit-and-formation'],
  passages: ['Galatians 5:22-23', 'Hebrews 5:14', 'Proverbs 4:23', '1 Timothy 4:7'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'Four seconds in a stockroom',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Ifeoma is nineteen, four months into a supermarket job, and is in the stockroom when the duty manager tells her that the delivery discrepancy is going to be recorded against Marek — the agency worker who was not even on shift. He says it lightly, as an administrative fact, and turns to leave.',
        },
        {
          kind: 'p',
          text: 'She has about four seconds. In those four seconds she does not weigh anything. She hears herself say: "That was me. I miscounted the crates on Tuesday."',
        },
        {
          kind: 'p',
          text: 'It was not her. She has no idea who miscounted. What she knows is that Marek was not there.',
        },
        {
          kind: 'h',
          text: 'Two months earlier',
        },
        {
          kind: 'p',
          text: "Ifeoma's father runs a small car repair business and has, for as long as she can remember, done one particular thing. When a customer is quoted a price and the job turns out cheaper, he tells them. Every time. She has watched him do it perhaps two hundred times, including when it cost money they needed. He has never once made a speech about it.",
        },
        {
          kind: 'p',
          text: 'Asked afterwards why she spoke up, Ifeoma gives an answer that is not much use to anyone: "I don\'t know. It just came out."',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'Ifeoma told a lie in order to protect an innocent man. Was that courage, and was it right? Answer both parts, and do not let one answer settle the other.',
      helper:
        'The lesson will not let you off this. Notice whether you are tempted to praise the instinct and quietly skip the falsehood.',
      minWords: 45,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'Virtue is a disposition, not a decision',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: "Aristotle's central claim in the *Nicomachean Ethics* is deceptively plain: we become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts. Virtue is a *hexis* — a settled disposition — and dispositions are laid down by repetition. He compares it to learning an instrument: nobody becomes a harpist by intending to.",
        },
        {
          kind: 'p',
          text: 'Two consequences follow, and both matter more than the definition.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**You cannot summon a virtue you have not stored.** Ifeoma\'s four seconds contained no deliberation, because four seconds does not contain deliberation. What it contained was whatever was already installed. This is why "I would speak up if it really mattered" is usually false: the moment it really matters is the moment you have least access to your reasoning.',
            "**Virtue is not a feeling.** A person who does the generous thing while inwardly resenting it is not yet generous, on Aristotle's account — but they are on the way, because the acts are what form the disposition. This matters pastorally: the fact that it costs you is not evidence that you are a fraud. It is evidence that you are early.",
          ],
        },
        {
          kind: 'p',
          text: 'Aristotle also gives the **doctrine of the mean**: a virtue sits between two failures, one of excess and one of deficiency. Courage between recklessness and cowardice; generosity between prodigality and meanness; proper pride between vanity and self-abasement.',
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'What the mean is not',
          text: 'It is not moderation, and it is not the average of two positions. It is *the right amount, at the right time, toward the right person, for the right reason* — and Aristotle says the mean is relative to us, so the courageous act for a nineteen-year-old on probation is not the courageous act for the store director. What is fixed is that both extremes are failures.',
        },
        {
          kind: 'p',
          text: 'The most useful practical corollary: **most vices are virtues past their measure**. The manipulative person is often loyal without limit. The controlling person is often responsible without limit. The person who cannot say a hard thing is often kind without limit. If you attack the vice directly you attack something the person correctly values, and they will defend it. Name the measure instead of the quality.',
        },
      ],
    },
    {
      id: 's4',
      type: 'quiz',
      title: 'Diagnose the failure',
      ability: 'discern',
      prompt:
        'A team leader will not deliver a poor appraisal, reassigns work to cover for the underperformer, and privately carries the extra load for eleven months. Which diagnosis is most useful?',
      options: [
        {
          id: 'a',
          text: 'He is a coward.',
          feedback:
            'True in a thin sense and useless. It names the deficiency without identifying what is being protected, so any advice built on it will attack something he will defend.',
        },
        {
          id: 'b',
          text: 'He is kind past its measure — the kindness is real, and it has no upper bound, so it has begun consuming the team.',
          correct: true,
          feedback:
            'Yes. This can be said to his face, he will recognise it, and it points to a specific correction: not "be harder" but "kindness that costs other people is not kindness, it is transfer."',
        },
        {
          id: 'c',
          text: 'He lacks leadership skills and should be trained.',
          feedback:
            'A category error. He almost certainly knows how to run an appraisal. This is a disposition, not a competence, and training aimed at competence will change nothing.',
        },
        {
          id: 'd',
          text: 'He is conflict-avoidant because of something in his upbringing.',
          feedback:
            'It may be true and it is not actionable by him this quarter. Explanations that reach into biography can be honest and can also function as a way of not addressing the behaviour.',
        },
      ],
      explanation:
        'Naming the measure rather than the quality is the single most transferable move in this module. Practise it on yourself first.',
    },
    {
      id: 's5',
      type: 'lenses',
      title: 'Three lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'Fruit, and the training of the senses',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: 'Galatians 5:22-23',
              translation: 'World English Bible',
              text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law.',
            },
            {
              kind: 'p',
              text: 'The metaphor is agricultural and it is doing precise work. Fruit is not manufactured, and it is not instantaneous; it grows from something living, in a season, under conditions. Paul is not describing a checklist of behaviours to produce. He is describing what appears on a particular kind of tree.',
            },
            {
              kind: 'p',
              text: "This is the point at which Scripture and Aristotle diverge, and it is worth being exact. Aristotle: repetition forms the disposition, and the agent is the one doing the forming. Paul: the disposition is the fruit of the Spirit's work in a person, and the person is being changed rather than self-constructing.",
            },
            {
              kind: 'p',
              text: 'They are not, however, alternatives — and the New Testament refuses to let them be. The same letters that speak of fruit also speak of training:',
            },
            {
              kind: 'scripture',
              ref: 'Hebrews 5:14',
              translation: 'World English Bible',
              text: 'But solid food is for those who are full grown, who by reason of use have their senses exercised to discern good and evil.',
            },
            {
              kind: 'p',
              text: "*By reason of use.* The capacity to tell good from evil is described as a trained faculty, developed by exercise — which is Aristotle's claim exactly, sitting inside a letter about Christ. And 1 Timothy 4:7 says plainly: *train yourself for godliness.* The verb is the one you would use about an athlete.",
            },
            {
              kind: 'p',
              text: "The resolution most of the tradition has reached: God's work and habituation are not competitors. Grace does not remove the ordinary means; it makes them fruitful. You still do the reps. You are not the one who makes them grow.",
            },
          ],
          passages: ['Galatians 5:22-23', 'Hebrews 5:14', '1 Timothy 4:7'],
          tension:
            'Traditions weight this differently, and the disagreement is real rather than merely verbal. The claim made here — that formation involves both divine work and trained habit — is held across the historic confessions, but how they relate is genuinely disputed.',
        },
        {
          lens: 'philosophical',
          heading: 'Aquinas: prudence drives the rest',
          claimKind: 'historic-christian',
          body: [
            {
              kind: 'p',
              text: "Thomas Aquinas took Aristotle's framework into Christian theology and gave prudence a specific job: *auriga virtutum*, the charioteer of the virtues. Courage without prudence is recklessness. Justice without prudence is rigidity. Prudence is the virtue that tells the others when, how much, and toward whom.",
            },
            {
              kind: 'p',
              text: 'He also distinguished the *cardinal* virtues — prudence, justice, courage, temperance, available to anyone and formed by practice — from the *theological* virtues of faith, hope, and love, which he held to be given rather than acquired. That is a serious claim about limits: on this account you cannot practise your way into love of God the way you can practise your way into punctuality.',
            },
          ],
        },
        {
          lens: 'psychological',
          heading: 'What the research does and does not support',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: '**Habit formation** is well studied. Behaviour becomes automatic through repetition in a stable context; cues matter more than motivation; and the popular "21 days" figure is a misquotation — Lally and colleagues (2010) found a median around 66 days with enormous individual variation. The mechanism is real, the timeline is personal.',
            },
            {
              kind: 'p',
              text: '**Situationism** is the serious challenge. Beginning with Milgram and the Stanford prison study, and pressed philosophically by John Doris and Gilbert Harman, the argument is that behaviour is driven far more by situation than by stable character traits, and that "virtue" may be a folk illusion. This deserves a straight answer rather than a dismissal.',
            },
            {
              kind: 'p',
              text: 'Two things can be said. First, several of the foundational studies have not held up well — the Stanford prison study in particular has been substantially discredited by later examination of its records, and the replication crisis has thinned this literature considerably. Second, and more interesting: the situationist finding is largely what a Christian account predicts. Scripture is not optimistic about unaided character under pressure. Its remedies are situational too — flee, do not go near her door, cut it off, do not be alone in it, meet together. Proverbs is full of environmental engineering.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'Weight',
              text: 'Habit formation: solid. Situationism: a live and unfinished argument with damaged foundations on one side and real evidence on the other. Do not use it to conclude that character is fictional, and do not ignore it either.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      type: 'ranking',
      title: 'What actually forms a person?',
      ability: 'discern',
      prompt:
        'Rank these by how much they realistically contribute to becoming someone who tells the truth when it costs.',
      helper: 'Rank by formative power, not by how virtuous each one sounds.',
      items: [
        {
          id: 'r1',
          text: 'Watching someone you love do the costly honest thing, repeatedly, without commentary.',
        },
        { id: 'r2', text: 'Telling small truths that cost you very little, very often.' },
        {
          id: 'r3',
          text: 'Deciding, sincerely and in a settled moment, that you are a person who tells the truth.',
        },
        { id: 'r4', text: 'Reading a book about integrity.' },
        { id: 'r5', text: 'Being in a community where a lie would be noticed and named.' },
      ],
      idealOrder: ['r2', 'r1', 'r5', 'r3', 'r4'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Small truths, often.** This is straight Aristotle and it is the one with the most evidence behind it. Reps at low weight, in a stable context, build what is available at four seconds' notice.",
            "**Watching someone.** Ifeoma's two hundred observations of her father, with no speech attached. Extremely powerful and mostly outside your control — which is why the ones you can control matter.",
            '**A community that would notice.** Situational, and Scripture treats it as essential rather than optional. It does not form the disposition directly; it raises the cost of the alternative while the disposition is forming.',
            '**A sincere decision.** Not worthless — it sets the direction and it is where most people start. But on its own it reliably fails at four seconds, which is precisely the finding this whole module rests on.',
            '**A book.** Including this one. Reading about integrity produces knowledge about integrity. If you ranked it higher, notice what you were doing while you ranked it.',
          ],
        },
        {
          kind: 'p',
          text: 'The uncomfortable implication of this ordering is that the app you are holding is fifth. Everything here is designed to be discharged into practice, which is why every lesson ends with something to do outside it.',
        },
      ],
    },
    {
      id: 's7',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'Return to Ifeoma. On the account above, her instinct was formed and admirable. But what came out of her mouth was false. She took responsibility for something she did not do, which is a lie, and it may well produce a disciplinary record and a false entry in a system. Meanwhile the actual miscounter is untouched, and the manager who was about to blame an absent man has learned nothing.',
      prompt:
        'Was her act virtuous? If a virtue can produce a lie, what has gone wrong — with the act, or with the account of virtue?',
      helper: 'Aquinas is useful here. So is the observation that she had four seconds.',
      reveal: [
        {
          kind: 'p',
          text: 'The cleanest analysis available:',
        },
        {
          kind: 'list',
          items: [
            '**The disposition was good and the act was defective.** These come apart, and a framework that cannot separate them is too crude to use. Ifeoma had courage — real, formed, costly, and pointed at protecting an innocent man. The execution was a falsehood.',
            '**What was missing is prudence, and prudence is the one virtue that four seconds cannot supply.** This is exactly Aquinas\'s point about the charioteer. Courage without prudence produced an act that was brave and wrong. The available prudent act — "Marek wasn\'t on shift on Tuesday" — was one sentence, true, and would have done more.',
            '**The failure is upstream, and it is not hers.** A nineteen-year-old on probation had four seconds to construct an intervention against a manager. She produced the best thing available to a person with courage and no practice at confrontation. Someone should have taught her the sentence.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The finding worth keeping',
          text: 'Courage is the most over-praised virtue among people who admire virtue, and the most dangerous without prudence. When you feel the surge that Ifeoma felt, the useful question is not *am I brave enough* but *what is the true sentence available to me right now* — and that question has to have been practised, because in the moment there is no time to invent it.',
        },
        {
          kind: 'p',
          text: 'One more thing, said plainly: none of this makes her the villain of the stockroom. The person who was about to record a discrepancy against a man who was not there is the one who needs examining, and it is worth noticing how easily an analysis of virtue can drift onto the person who acted rather than the person who caused it.',
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where the duty manager stands',
      ability: 'understand',
      person: 'Gareth, the duty manager',
      setup:
        'He is thirty-four, running a shift two people short, and the discrepancy has to be attributed before the system closes at six. He said what he said lightly. Answer as him.',
      fields: [
        {
          key: 'saying',
          label: 'What you said',
          prompt: 'In your own account of the conversation, what did you say and mean?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'When a nineteen-year-old says "that was me."',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'What happens to you if discrepancies keep going unattributed?',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'Out of this shift, and out of this job.',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About agency workers, and about what the record is for.',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'What is invisible to you here?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A reconstruction. Note that it makes him worse, not better, in one specific respect — and better in several others.',
        },
        {
          kind: 'list',
          items: [
            '**Saying:** in his account, he was doing admin. He would be genuinely surprised to hear it described as blaming an innocent man.',
            '**Assuming:** that the record is a formality with no consequences — for an agency worker who will be gone in three weeks. This is the assumption doing the damage, and it is not malice. It is a category: Marek is not, in his mind, quite a person with a file.',
            '**Fearing:** an audit trail with holes in it, and a district manager who asks why. He is under a real pressure that nobody in the stockroom knows about.',
            '**Not seeing:** that Marek is trying to get taken on permanently, that a discrepancy on his record is the difference, and that the "formality" is the whole of his employment prospects at this branch.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Why this matters for how you would confront him',
          text: 'If you go at Gareth as a man who scapegoats the vulnerable, he will recognise nothing and defend everything. If you go at him with "did you know Marek is up for a permanent contract and this goes on his file," you have supplied the fact his assumption was hiding. The second conversation can succeed. The first cannot.',
        },
      ],
    },
    {
      id: 's9',
      type: 'decision',
      title: 'The next morning',
      ability: 'discern',
      situation:
        'Ifeoma has not slept. The false admission is in the system. Marek is unaffected. She has a shift at two.',
      prompt: 'Choose.',
      options: [
        {
          id: 'd1',
          text: 'Say nothing. It worked, no one was harmed, and unpicking it now would harm Marek anyway.',
          verdict: 'unwise',
          consequence:
            'A false record stands, and she has learned that a lie in a good cause is a tool she has. The reps are what form the disposition; this is a rep. The second time will be easier and the occasion will be slightly less noble.',
          cost: 'The formation. Which is the entire subject of this module.',
        },
        {
          id: 'd2',
          text: "Go to Gareth and say: \"I need to correct something. It wasn't me. I don't know who it was. But Marek wasn't on shift Tuesday and I panicked.\"",
          verdict: 'wise',
          consequence:
            'Costly and clean. It corrects the record, states the true fact she actually had, and admits her own error without theatre. Gareth may be irritated; he may also, quietly, be embarrassed enough to check the rota next time. She will find this conversation much easier at twenty-nine because she had it at nineteen.',
          cost: 'A genuinely unpleasant ten minutes, and possibly a reputation as someone who makes things complicated.',
        },
        {
          id: 'd3',
          text: 'Tell Marek what happened so at least he knows someone was in his corner.',
          verdict: 'risky',
          consequence:
            'It feels like solidarity and it hands him an impossible burden: he now knows a false record exists in his defence, and can neither correct it nor let it stand. It converts her problem into his.',
          cost: 'His position, spent on her need to have it acknowledged.',
        },
        {
          id: 'd4',
          text: 'Raise it with HR as a pattern issue about how discrepancies are attributed to agency staff.',
          verdict: 'defensible',
          consequence:
            'The systemic point is genuinely right, and a version of this should probably happen eventually. Done first, from a nineteen-year-old on probation, with a false admission of her own sitting in the system, it will not survive contact with the first question anyone asks her.',
          cost: 'Her credibility, which she needs for the systemic point to land at all. Sequence matters — as it did in Module 1.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Notice that option two is only available to someone willing to say "I panicked." The virtue this decision requires is not courage — she has plenty. It is the honesty to correct her own good deed, which is considerably rarer.',
        },
      ],
    },
    {
      id: 's10',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match the idea to the instance.',
      left: [
        { id: 'l1', label: 'Most vices are virtues past their measure' },
        { id: 'l2', label: 'Prudence is the charioteer' },
        { id: 'l3', label: 'Formed by watching, without commentary' },
        { id: 'l4', label: "Scripture's remedies are situational" },
      ],
      right: [
        { id: 'r1', label: 'The manager who will not give a poor appraisal for eleven months' },
        { id: 'r2', label: 'Courage in four seconds produces a brave falsehood' },
        { id: 'r3', label: 'Two hundred times, and never a speech about it' },
        { id: 'r4', label: 'Flee; do not go near her door; do not forsake meeting together' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'Kindness with no upper bound, consuming the people around it.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'The virtue supplied the impulse; nothing supplied the true sentence.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'Formation by repeated observation is powerful and almost never announced.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'The Bible engineers environments rather than relying on unaided resolve, which is what the situationist critique would predict.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'A friend in his late thirties tells you: "I have decided I am going to be more honest. I mean it this time — I sat down and thought it through properly. I am done with the small stuff, the exaggerating, the saying I am fine." He is sincere and he has said versions of this before. Write what you say. Six to ten sentences.',
      audience: 'Someone earnest, self-aware, and about to fail again in the same way.',
      constraints: [
        'Do not tell him the decision is worthless. It is not.',
        'Give him something with a number in it.',
        'Do not use the word "accountability" as though it were self-explanatory.',
      ],
      rubric: ['grounding', 'usefulness', 'compassion', 'clarity', 'action', 'perspective'],
      minWords: 90,
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
          text: 'I believe you, and I think the deciding is the part you are best at, which is why it keeps being the part you do.',
        },
        {
          kind: 'p',
          text: 'Here is what I have come to think. Whatever you will do in the moment is not chosen in the moment — there is no time. It is whatever is already in you, and what is already in you got there by repetition. So a decision made in a calm chair on a Sunday has almost no purchase on a Wednesday at 4pm when someone asks how the thing is going and the true answer is embarrassing.',
        },
        {
          kind: 'p',
          text: 'So: pick the smallest one. Not the exaggerating, not the big stuff. Pick "I am fine." For two weeks, when someone asks how you are, do not say fine unless it is true. If it is not, you do not have to explain — "bit of a rough week, but I would rather not get into it" is honest and costs nothing. That is it. That is the whole assignment.',
        },
        {
          kind: 'p',
          text: 'It will feel far too small to be the answer to what you were talking about. It is not too small. It is about forty reps in two weeks at a weight you can actually lift, and the thing you want — being someone who does not reach for the easy version under pressure — is built out of exactly that and nothing else.',
        },
        {
          kind: 'p',
          text: 'And I will ask you about it, because the other half of this is that it is very hard to see yourself accurately from the inside. Not a system, not a form. I will just ask you in a fortnight and you can tell me it went badly.',
        },
      ],
      commentary: [
        {
          label: 'It honours the decision before redirecting it',
          text: '"The deciding is the part you are best at" is affectionate and accurate, and it names the pattern without shaming him. Compare the alternative opening — "you have said this before" — which is equally true and closes the conversation.',
        },
        {
          label: 'The number is doing real work',
          text: '"Forty reps at a weight you can actually lift" converts an abstraction into a training plan. The rubric asks for practical usefulness; this is what that looks like.',
        },
        {
          label: 'It supplies the alternative sentence',
          text: '"Bit of a rough week, but I would rather not get into it." Precisely the move Ifeoma lacked — the true thing that is available under pressure has to be pre-loaded, not invented.',
        },
        {
          label: 'On accountability',
          text: 'The word is never used. What replaces it is a specific person, a specific interval, and explicit permission to report failure. That is the whole content of the concept, and saying it this way makes it happen.',
        },
      ],
      limits:
        "It says nothing about grace, and for a Christian friend that is a real gap — the New Testament's account of change is not only training. A longer version would need to say that the reps are not what make it grow.",
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['grounding', 'usefulness', 'compassion', 'clarity', 'action', 'perspective'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise. Add the thing the exemplar admits it left out — something true about where the growth comes from — without turning the reply into a sermon.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Choose one virtue you want and identify the smallest possible rep of it — something you can do at least twice a day at a weight you can definitely lift. Do it for a fortnight. Write the rep down now, as a sentence with a trigger in it: "When X happens, I do Y."',
      window: 'Fourteen days',
      cautions: [
        'If your rep takes more than a minute, it is too heavy. Reduce it.',
        'Pick the cue carefully. Habit research is consistent that a stable, specific trigger matters more than motivation.',
      ],
      checkIn: 'How many days out of fourteen? And did the weight turn out to be right?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Name one virtue you have that has no upper bound on it — the good quality that has started costing other people something. What would a measure on it look like?',
      prayer:
        'Fruit grows; it is not manufactured. Ask for what you cannot build, and then go and do the reps anyway.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: ['habituation', 'the-mean', 'virtue-vs-mood', 'fruit-and-formation'],
      passageRefs: ['Galatians 5:22-23', 'Hebrews 5:14', '1 Timothy 4:7'],
    },
  ],
}
