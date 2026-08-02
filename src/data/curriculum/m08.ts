import type { Lesson, Module } from '../../types/content'

export const module08: Module = {
  id: 'm08',
  order: 8,
  title: 'Justice, Mercy, Truth, Loyalty, and Competing Duties',
  shortTitle: 'Competing Duties',
  centralQuestion: 'What do you do when two things you owe cannot both be paid?',
  summary:
    'The hard cases are not good against evil. They are duty against duty, with someone bearing the cost either way. This module works on how to reason when the alternatives are all defensible and none of them is clean.',
  abilities: ['discern', 'answer'],
  lessonIds: ['l08-1'],
}

export const lesson08_1: Lesson = {
  id: 'l08-1',
  moduleId: 'm08',
  title: 'The Ledger and the Letter',
  subtitle: 'When two obligations cannot both be honoured',
  centralQuestion: 'What do you do when two things you owe cannot both be paid?',
  minutes: 42,
  abilities: ['discern', 'answer', 'understand'],
  concepts: ['prima-facie-duties', 'residue', 'justice-and-mercy', 'moral-frameworks'],
  passages: ['Micah 6:8', 'Psalm 85:10', 'Zechariah 7:9', 'Exodus 1:15-21'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'What Adaeze knows on Thursday',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Adaeze chairs the trustees of a housing charity with eleven staff and about four hundred residents. On Thursday she is given two documents within an hour of each other.',
        },
        {
          kind: 'h',
          text: 'The ledger',
        },
        {
          kind: 'p',
          text: 'An internal review shows that over four years the charity has been misallocating a restricted grant — money given for a specific purpose has been used, in part, for general running costs. Total: about £180,000. Nobody stole anything; the money went on rent arrears support for residents, which is unambiguously good and unambiguously not what the grant was for. The person responsible is Kemi, the finance lead, who inherited the practice from her predecessor, questioned it once in year two, was told it was fine, and continued.',
        },
        {
          kind: 'h',
          text: 'The letter',
        },
        {
          kind: 'p',
          text: "A letter from the funder confirming a renewal decision due in six weeks: £600,000 over three years, which is roughly forty per cent of the charity's income. The letter is warm. It mentions the four-year relationship and the trust built up.",
        },
        {
          kind: 'h',
          text: 'What is owed, and to whom',
        },
        {
          kind: 'list',
          items: [
            '**To the funder:** the truth, promptly, and without being asked. This is what a restricted grant means.',
            '**To the residents:** continuity. If the renewal fails, the charity loses two of its three support workers within four months. Some of these residents have nowhere else.',
            '**To Kemi:** fairness. She raised it once and was overruled. She is forty-eight, sole earner, and has done nine years of good work.',
            '**To the staff:** honesty about what is coming, early enough to act on.',
            '**To the sector:** not making it harder for the next small charity to be trusted.',
            '**To her own trustees:** she is chair, not owner. This is not hers to decide alone.',
          ],
        },
        {
          kind: 'p',
          text: 'The board meets in nine days. The renewal decision is in six weeks. Adaeze has not slept well.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'What should Adaeze do, and in what order? Then — separately — name what your answer costs, and who pays it.',
      helper:
        'The second half is the important one. An answer to a dilemma that has no cost is an answer to a different question.',
      minWords: 50,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'The shape of a real dilemma',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'Most moral training uses cases with a right answer that is hard to *do*. Real leadership more often supplies cases with several defensible answers, and the difficulty is in the choosing, not the executing.',
        },
        {
          kind: 'p',
          text: 'W. D. Ross, writing in 1930, gave the most useful vocabulary anyone has for this. He argued that we recognise a plurality of **prima facie duties** — fidelity (keeping promises, telling the truth), reparation, gratitude, justice, beneficence, self-improvement, non-maleficence. Each is genuinely binding. None is absolute. When two conflict, one becomes your *actual* duty in the situation, and the other does not thereby disappear.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Moral residue',
          text: "Ross's most valuable claim: the overridden duty leaves a **residue**. If you break a small promise to save a life, you did the right thing *and* you still owe the person an apology. The debt is real. This is why a person of good character feels something after a correct hard decision, and why the absence of that feeling is a warning sign rather than a sign of clarity.",
        },
        {
          kind: 'p',
          text: 'Three frameworks will be pulling at Adaeze, and it helps to be able to name them rather than feel them as noise.',
        },
        {
          kind: 'list',
          items: [
            '**Consequences.** What produces the best outcome overall? Powerful, and it will tell her to protect the residents — and it will keep telling her that right up to the point where she is concealing a material fact from a funder.',
            '**Duty and rule.** What is required regardless of outcome? Clear, resistant to self-interest, and it will tell her to disclose immediately — and it has nothing to say about the residents at all.',
            '**Character and virtue.** What would a person of integrity do here, and what will doing this make her? This is the frame that best handles the *manner* and the *sequence*, and it is the vaguest at the moment of decision.',
          ],
        },
        {
          kind: 'p',
          text: 'None of these three is the Christian answer, and it is worth saying that plainly. Scripture uses all three registers — it commands, it warns of consequences, and it describes character. What it adds is the assumption that these duties are owed to a *person* rather than derived from a principle, and that the God to whom they are owed has himself held justice and mercy together rather than trading them off.',
        },
        {
          kind: 'scripture',
          ref: 'Micah 6:8',
          translation: 'World English Bible',
          text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
        },
        {
          kind: 'p',
          text: 'Read as a formula this is not much help; it does not say what to do when acting justly and loving mercy point different ways. Read as a description of a person, it says something harder: you are not permitted to become the sort of leader who is just and not merciful, and you are not permitted to become merciful in a way that is not just. The verse does not resolve the case. It rules out two ways of resolving it.',
        },
      ],
    },
    {
      id: 's4',
      type: 'lenses',
      title: 'Lenses',
      ability: 'interpret',
      cards: [
        {
          lens: 'biblical',
          heading: 'Where justice and mercy meet',
          claimKind: 'scripture',
          body: [
            {
              kind: 'scripture',
              ref: 'Psalm 85:10',
              translation: 'World English Bible',
              text: 'Mercy and truth meet together. Righteousness and peace have kissed each other.',
            },
            {
              kind: 'p',
              text: 'The line is celebrated because it describes something rare. In ordinary practice mercy and truth are traded against each other, and the psalm imagines a place where they arrive together. Christian theology has located that place at the cross — where, on the classical account, the debt is neither ignored nor transferred to the debtor.',
            },
            {
              kind: 'p',
              text: 'The practical form of this is worth extracting: **mercy that requires the truth to be suppressed is not the biblical article.** Nathan tells David what he did. Jesus tells the woman at the well about her five husbands. Forgiveness in Scripture consistently follows naming rather than replacing it.',
            },
            {
              kind: 'scripture',
              ref: 'Zechariah 7:9',
              translation: 'World English Bible',
              text: 'Thus has Yahweh of Armies spoken, saying, "Execute true judgment, and show kindness and compassion every man to his brother."',
            },
            {
              kind: 'p',
              text: 'Both imperatives, in one sentence, addressed to the same people about the same cases.',
            },
          ],
          passages: ['Micah 6:8', 'Psalm 85:10', 'Zechariah 7:9'],
        },
        {
          lens: 'biblical',
          heading: 'The hard cases the Bible itself contains',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'Exodus 1: Pharaoh orders the Hebrew midwives to kill newborn boys. They do not, and when questioned they give an answer that is at best misleading. The text then says God dealt well with the midwives and gave them households, *because they feared God*.',
            },
            {
              kind: 'p',
              text: "Joshua 2: Rahab hides the Israelite spies and misdirects the king's men. She is commended for her faith in Hebrews 11 and James 2.",
            },
            {
              kind: 'p',
              text: 'What these passages license is genuinely disputed, and you should know that rather than be handed a verdict. Augustine held that lying is always wrong and that the midwives were rewarded for their mercy despite the deception, not for it. Others have argued that a deceiver forfeits a claim to the truth, or that the duty of truthfulness does not extend to those seeking to commit murder. The disagreement is ancient and unresolved.',
            },
            {
              kind: 'callout',
              tone: 'caution',
              title: 'What you may not do with these texts',
              text: 'You may not use them to lower the general bar. Whatever they establish, they concern life-and-death coercion by a murderous authority. A funder asking about a grant is not Pharaoh, and the distance between the cases is the whole point.',
            },
          ],
          passages: ['Exodus 1:15-21', 'Joshua 2:1-7'],
          tension:
            'Presented here as a live disagreement within orthodoxy rather than as settled. If a curriculum tells you the hard cases are easy, distrust it.',
        },
        {
          lens: 'literary',
          heading: 'Antigone: two duties, no arbiter',
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: "In Sophocles' *Antigone* (c. 441 BC), Creon forbids the burial of Polynices, who died attacking the city. Antigone, his sister, buries him anyway, citing an older obligation than the king's edict. Creon has a real duty: a city that honours its attackers will not survive. Antigone has a real duty: the dead must be buried, and she owes her brother.",
            },
            {
              kind: 'p',
              text: "Hegel's reading — that the tragedy lies in a collision of two goods rather than good against evil — is the one worth carrying. Both are right; both are, in their rightness, destroyed.",
            },
            {
              kind: 'p',
              text: "What the play adds that a philosophy paper cannot: each of them becomes *unable to hear* the other's duty as a duty at all. Creon hears anarchy; Antigone hears tyranny. The collapse is not caused by the conflict. It is caused by each treating the other's obligation as a pretext.",
            },
          ],
        },
        {
          lens: 'leadership',
          heading: 'Technical versus adaptive',
          claimKind: 'leadership',
          body: [
            {
              kind: 'p',
              text: 'Ronald Heifetz distinguished **technical** problems — hard, but solvable with existing expertise — from **adaptive** challenges, which require the people involved to change their values, habits, or expectations, and which cannot be solved by the leader on their behalf.',
            },
            {
              kind: 'p',
              text: "Adaeze has both, tangled. The misallocation is technical: there is a right way to disclose and restate, and an accountant knows it. What is adaptive is the charity's belief that helping residents in front of them justifies quiet flexibility about categories. That belief produced this, it is held sincerely, and no announcement from the chair will change it.",
            },
            {
              kind: 'p',
              text: "Heifetz's practical warning applies directly: leaders fail by treating adaptive challenges technically — by issuing a fix and moving on. The fix here would be new controls. The adaptive work is a board and a staff group coming to understand why the flexibility felt like compassion.",
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      type: 'ranking',
      title: 'Order the duties',
      ability: 'discern',
      prompt:
        "Rank Adaeze's obligations by which must be honoured first. This is a claim about sequence, not about importance.",
      helper:
        'Notice how differently the list orders if you rank by importance instead. That divergence is the lesson.',
      items: [
        { id: 'r1', text: 'Tell her fellow trustees everything, immediately.' },
        {
          id: 'r2',
          text: 'Disclose the misallocation to the funder in full, before the renewal decision.',
        },
        {
          id: 'r3',
          text: 'Tell Kemi what is happening and that she raised it in year two, in writing, before anyone else hears it.',
        },
        {
          id: 'r4',
          text: 'Model the financial impact of losing the renewal and prepare for the residents.',
        },
        { id: 'r5', text: 'Fix the controls so it cannot recur.' },
      ],
      idealOrder: ['r1', 'r3', 'r4', 'r2', 'r5'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '**The trustees first.** Not because they matter most, but because Adaeze is a chair, not a proprietor. Every subsequent act is one she has no authority to take alone, and taking it alone would be its own governance failure — one she would be disclosing to the funder next.',
            '**Kemi second, and quickly.** She has a right not to learn her position from a board minute. Getting her account documented while it is uncontaminated protects her *and* the integrity of the disclosure. This is the item most often ranked last and it is the one with the shortest expiry.',
            '**Model the impact third.** Before disclosure, not after — so that when the funder asks what happens to the residents, there is a real answer, and so the board is deciding with the cost visible rather than imagining it.',
            '**Disclose fourth.** Full, unprompted, before the decision. Late enough to be accurate and accompanied by a plan; early enough that it is disclosure rather than discovery. The difference between those two words is worth about £600,000.',
            '**Controls fifth.** Necessary, and it is not urgent in the way the others are. Leading with it would be exactly the technical response to an adaptive problem.',
          ],
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'Sequence is not priority',
          text: 'Ranked by importance, disclosure is first — it is the duty that cannot be traded. Ranked by sequence it is fourth, because doing it well requires the other three. Confusing these two orderings is one of the commonest errors in ethical reasoning under pressure, in both directions: people who delay tell themselves they are sequencing, and people who blurt tell themselves they are prioritising.',
        },
      ],
    },
    {
      id: 's6',
      type: 'certainty',
      title: 'What can Adaeze actually claim?',
      ability: 'interpret',
      prompt: 'Sort by the support the situation gives.',
      claims: [
        {
          id: 'c1',
          text: 'Restricted grant money was used for purposes outside the restriction.',
          tier: 'stated',
          why: 'The review found it. Everything else is contested; this is not.',
        },
        {
          id: 'c2',
          text: "The money went to residents rather than to anyone's pocket.",
          tier: 'stated',
          why: 'Also established. Note that it changes the moral character of the act entirely and the legal character of it hardly at all.',
        },
        {
          id: 'c3',
          text: 'Kemi is not primarily culpable.',
          tier: 'reasonable',
          why: 'She inherited it, raised it, was overruled. A fair reading. It is not exculpation — she continued for two more years — and Adaeze should be able to say both halves.',
        },
        {
          id: 'c4',
          text: 'Full disclosure will cost the renewal.',
          tier: 'possible',
          why: 'It is the fear driving the whole case and it is not knowledge. Funders vary enormously, and some respond to unprompted disclosure with a restatement and a strengthened relationship. Discovery, by contrast, reliably ends things. Adaeze is treating the worse outcome as certain and the better one as unavailable.',
        },
        {
          id: 'c5',
          text: 'The residents will be harmed if the charity loses forty per cent of its income.',
          tier: 'reasonable',
          why: 'Very likely, and worth modelling rather than asserting. "Some of these residents have nowhere else" is the sentence that is doing the moral work, and it deserves a number attached to it before it is used in a decision.',
        },
        {
          id: 'c6',
          text: 'Disclosing would be putting rules above people.',
          tier: 'unsupported',
          why: 'A framing rather than a fact. The funder is people; the next charity applying is people; the residents who would be in a charity that conceals things are people. Watch for the move where "rules" names the duties you would rather not pay.',
        },
      ],
    },
    {
      id: 's7',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        "Suppose Adaeze discloses, the funder walks, two support workers are made redundant, and within a year three residents who would have been held have been evicted. She was scrupulous, and the cost fell entirely on the people with the least. She kept her hands clean using other people's lives. What exactly is the answer to that?",
      prompt:
        'Answer it without retreating to "the rules are the rules" and without conceding that concealment was right.',
      helper: 'The strongest answers here say something about who is entitled to make which trade.',
      reveal: [
        {
          kind: 'p',
          text: 'Several things are true at once, and a good answer holds them together.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "**The residue is real and should be felt.** On Ross's account she did not escape the duty to the residents; she was unable to pay it. If she feels nothing, something has gone wrong in her. The correct posture after a right decision of this kind is not satisfaction.",
            "**The trade was not hers to make in secret.** Concealment does not merely risk the charity; it spends the residents' trust and the funder's trust without either being asked. Note who is protected by silence: the person who chose it. That asymmetry is the most reliable test available in cases like this.",
            '**The counterfactual is not the one being offered.** The alternative to disclosure is not "everything continues." It is "everything continues until discovery" — after which the residents lose the support *and* the charity, and no other funder will touch it. The scrupulous option is being compared to a fantasy in which nothing surfaces.',
            '**Clean hands are not the goal, and are a genuine temptation.** There is a form of moral care that is really self-protection, and it can be identified: it prefers the decision that is easiest to defend over the one that is best, and it stops working once the announcement is made. If Adaeze discloses and then does not fight for those residents with everything she has — emergency funders, the local authority, her own contacts, her own money — she has used integrity as an exit.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The test that generalises',
          text: 'When a duty conflict tempts you toward the quieter option, ask: *who is protected by the silence, and were they asked?* When it tempts you toward the scrupulous option, ask: *does my responsibility end at the announcement?* The first catches self-interest. The second catches self-regard.',
        },
      ],
    },
    {
      id: 's8',
      type: 'perspective',
      title: 'Stand where Kemi stands',
      ability: 'understand',
      person: 'Kemi, finance lead',
      setup:
        'She has not yet been told there is a review. She questioned this in year two, was told it was fine by a chief executive who has since left, and has thought about it perhaps a hundred times since. Answer as her.',
      fields: [
        {
          key: 'saying',
          label: 'What you say',
          prompt: 'When Adaeze asks to see you on Friday morning. What do you say first?',
        },
        {
          key: 'feeling',
          label: 'What you feel',
          prompt: 'In the four seconds after the word "review."',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'Concretely. You are forty-eight and the sole earner.',
        },
        { key: 'desiring', label: 'What you want', prompt: 'Beyond keeping your job.' },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About how this will be told, and who will carry it.',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'From inside four years of this.',
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
            '**Feeling:** relief, and then terror, in that order. The relief is the tell — she has been carrying this, and part of her has wanted it to surface for two years.',
            '**Wanting:** to be believed about year two. More than the job, she wants it on the record that she asked. If Adaeze offers that first, the entire conversation changes.',
            '**Assuming:** that she will be the story. Someone has to be, and she is the one whose name is on it. She has probably already imagined the board minute.',
            '**Not seeing:** that continuing for two more years after being overruled is a genuine failure of hers, and that it is a much smaller one than she currently fears. She is braced for total culpability and will be unable to hear a proportionate account unless someone gives it to her explicitly.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What this changes about the Friday meeting',
          text: 'Open with what you know she did right. Not as technique — because it is the fact she is least sure anyone knows, and everything else she hears will be filtered through whether it was said.',
        },
      ],
    },
    {
      id: 's9',
      type: 'decision',
      title: 'The board meets in nine days',
      ability: 'discern',
      situation:
        'Two trustees have privately told Adaeze they think disclosure should wait until after the renewal decision, "so we are negotiating from a position of strength, and then we correct it." Both are decent people. One has been a trustee for eleven years.',
      prompt: 'Choose what Adaeze does with that.',
      options: [
        {
          id: 'd1',
          text: 'Put their position on the agenda, in their words, and let the board decide it in the open.',
          verdict: 'wise',
          consequence:
            'It refuses the private channel, which is where governance failures live, and it forces the argument to be made in a room with minutes. Most of the time it dies there — few decent people will say "conceal it until the money lands" out loud, and being made to hear their own position is the most effective correction available.',
          cost: 'Two relationships get more difficult, and she may lose a vote she would have won by manoeuvring.',
        },
        {
          id: 'd2',
          text: 'Persuade them privately before the meeting so the board presents a united front.',
          verdict: 'defensible',
          consequence:
            'Often good chairmanship. Here it reproduces the exact pattern that caused the problem: the substantive decision made off the record, the formal body ratifying. It also denies the other trustees the chance to hear that this view existed.',
          cost: "The board's ability to be a board, spent on a smoother meeting.",
        },
        {
          id: 'd3',
          text: "Get external advice — the auditor, the regulator's guidance — and bring it as the frame.",
          verdict: 'defensible',
          consequence:
            'Genuinely useful and probably necessary anyway. Used as a way of avoiding the argument, it converts a moral decision into a compliance one, and the board never has the conversation it needs to have about why the flexibility felt like compassion.',
          cost: "The adaptive work, deferred. Heifetz's warning exactly.",
        },
        {
          id: 'd4',
          text: 'Tell them plainly that if the board votes to delay, she will resign and say why.',
          verdict: 'risky',
          consequence:
            'Sometimes the only thing left, and it is a real instrument. Deployed nine days before the meeting, before anyone has argued the case, it replaces deliberation with a threat and tells eleven other trustees their judgement is not wanted.',
          cost: 'Everything, if she is wrong. This is the last card and she has not played the first one.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Note the structure of the wise option: it does not win the argument, it relocates it. A great deal of practical wisdom in institutions consists of moving a decision into the room where it can be made properly, rather than winning it in the corridor.',
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
        { id: 'l1', label: 'Moral residue' },
        { id: 'l2', label: 'Adaptive challenge treated technically' },
        { id: 'l3', label: 'Two duties, each hearing the other as a pretext' },
        { id: 'l4', label: 'Mercy that requires truth to be suppressed' },
      ],
      right: [
        { id: 'r1', label: 'She discloses, and still owes the residents something she cannot pay' },
        {
          id: 'r2',
          label: 'New financial controls, and no conversation about why it felt like compassion',
        },
        { id: 'r3', label: 'Creon hears anarchy; Antigone hears tyranny' },
        { id: 'r4', label: '"Correct it after the money lands"' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The overridden duty does not vanish; it becomes a debt.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'The fix addresses the mechanism and leaves the belief that produced it intact.',
        },
        { leftId: 'l3', rightId: 'r3', why: 'The tragedy is not the conflict but the deafness.' },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Nathan names it, then there is forgiveness. Not the other way round.',
        },
      ],
    },
    {
      id: 's11',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write what Adaeze says in the first ninety seconds of the Friday meeting with Kemi. Then, separately, write the opening paragraph of the disclosure letter to the funder. Both should be short.',
      audience:
        'Two very different readers: a frightened colleague who needs to know where she stands, and an institution that will decide whether this charity can be trusted.',
      constraints: [
        'To Kemi: lead with what she did right, and do not promise an outcome you cannot guarantee.',
        'To the funder: state the fact before the explanation. No context paragraph first.',
        'Neither may contain a sentence designed mainly to protect Adaeze.',
      ],
      rubric: ['grounding', 'perspective', 'clarity', 'compassion', 'action', 'evidence'],
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
        { kind: 'h', text: 'To Kemi, Friday, 9am' },
        {
          kind: 'p',
          text: '"Before anything else: I have seen the year-two file note. You raised this and you were overruled by someone who is no longer here, and that is now in writing in front of the board. I wanted you to hear that from me first.',
        },
        {
          kind: 'p',
          text: 'Here is where we are. The review has found about £180,000 of restricted funding applied outside its restriction over four years. We are going to disclose it to the funder in full before the renewal decision. I am not going to tell you your job is safe, because that is not mine to promise and you would not believe me. What I can tell you is that nothing will be said about you that you have not seen first, and that I will say the year-two part every time this is discussed, whether or not it is convenient.',
        },
        {
          kind: 'p',
          text: 'What I need from you is the full history, including the parts that do not help you. Take the weekend."',
        },
        { kind: 'h', text: 'To the funder' },
        {
          kind: 'p',
          text: '"I am writing to disclose, before your renewal decision, that an internal review has identified that approximately £180,000 of the restricted grant made under Reference 4471 was applied between 2021 and 2025 to general rent-arrears support rather than to the restricted purpose. This was a misapplication of restricted funds. No funds were taken for private benefit, and every pound reached residents — but that is an explanation, not a defence, and the restriction was not honoured. The trustees became aware on 12 June and resolved to notify you within nine days. A full reconciliation, the board\'s account of how this arose, and our proposed restitution are attached."',
        },
      ],
      commentary: [
        {
          label: 'The first sentence to Kemi',
          text: 'It answers the question she has been carrying for two years before she has to ask it. Everything after it is audible because of it. Note it is a fact, not reassurance.',
        },
        {
          label: 'The promise that is not made',
          text: '"I am not going to tell you your job is safe" — and the reason given is that she would not believe it. Refusing an unkeepable promise is a form of respect and it makes the promises that follow credible.',
        },
        {
          label: 'The funder letter states the fact first',
          text: 'No relationship paragraph, no context, no "as you know we have faced significant pressures." The fact, the amount, the period, and the name for it. Anything before that reads as the beginning of a defence.',
        },
        {
          label: '"That is an explanation, not a defence"',
          text: 'The single most important sentence in the letter. It supplies the mitigating fact and simultaneously refuses to trade on it, which is the only way a mitigating fact can be offered without damaging your credibility.',
        },
        {
          label: 'The date',
          text: '"Became aware on 12 June and resolved to notify you within nine days." Specific, checkable, and it converts a claim about integrity into a verifiable fact.',
        },
      ],
      limits:
        'The Kemi conversation is written for someone who will respond to directness; a different person might need the same content delivered more slowly. The funder letter is also, deliberately, a letter Adaeze cannot send without her board — as the sequencing exercise established.',
    },
    {
      id: 's13',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's11',
      rubric: ['grounding', 'perspective', 'clarity', 'compassion', 'action', 'evidence'],
    },
    {
      id: 's14',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's11',
      prompt:
        'Revise the funder letter only. Cut every word that is doing reputational work rather than informational work.',
    },
    {
      id: 's15',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Identify a live conflict of duties in your own life — two things you owe that cannot both be paid. Write both duties in full sentences, name which one you are actually going to honour, and write the residue: what you still owe the other party, and what you will do about it.',
      window: 'Within seven days',
      cautions: [
        'If you cannot state the duty you are overriding in a form its holder would accept, you have not identified it — you have described it in a way that lets you off.',
      ],
      checkIn: 'What is the residue, and have you paid any of it?',
    },
    {
      id: 's16',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Where have you recently described a duty as "the rules" in order to avoid noticing that it is owed to a person?',
      prayer:
        '*Act justly, love mercy, walk humbly.* Ask which of the three you habitually drop, and be specific about the situation in which you drop it.',
    },
    {
      id: 's17',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: ['prima-facie-duties', 'residue', 'justice-and-mercy', 'moral-frameworks'],
      passageRefs: ['Micah 6:8', 'Psalm 85:10', 'Zechariah 7:9'],
    },
  ],
}
