import type { CaseFile } from '../../types/content'

export const caseProverb: CaseFile = {
  id: 'c-proverb',
  title: 'Train Up a Child',
  kind: 'interpretation',
  premise:
    'A father is using a verse as a contract, and it is destroying him. Correcting the reading without taking away the hope is the whole difficulty.',
  minutes: 18,
  abilities: ['interpret', 'answer'],
  unlockAfterLessonId: 'l03-1',
  steps: [
    {
      id: 'c4s1',
      type: 'encounter',
      title: 'After the service',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Emeka is sixty-four. His son Chidi is thirty-one, has not spoken to the family in four years, and by all accounts is not well. Emeka and his wife did, by any ordinary measure, everything: church, discipline, presence, prayer, school fees they could not afford.',
        },
        {
          kind: 'p',
          text: 'He catches you in the car park.',
        },
        {
          kind: 'dialogue',
          lines: [
            {
              speaker: 'Emeka',
              text: '"Train up a child in the way he should go, and when he is old he will not depart from it." Proverbs twenty-two, verse six.',
            },
            {
              speaker: 'Emeka',
              text: 'So either I did not train him, or the word of God is not true.',
            },
            {
              speaker: 'Emeka',
              beat: 'Not angrily. He has clearly said this to himself many times.',
              text: 'And I know which of those two it is. It is not the second one.',
            },
          ],
        },
      ],
    },
    {
      id: 'c4s2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'He has offered you a clean dilemma. What is wrong with it, and what would it cost him to accept your correction?',
      minWords: 40,
    },
    {
      id: 'c4s3',
      type: 'teaching',
      title: 'The genre point, and its pastoral shape',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: "Proverbs 22:6 is a wisdom saying: a statement of how life generally goes under God's ordering, given to shape a parent's instincts. It is not a covenant, and the book it sits in knows this — the same collection observes repeatedly that the righteous suffer, that the wicked prosper, and that outcomes are not owed.",
        },
        {
          kind: 'p',
          text: "Read as a promise, the verse produces exactly Emeka's dilemma: two doors, one of which accuses God and one of which accuses him, and no third door. He has been walking through the second one for four years.",
        },
        {
          kind: 'callout',
          tone: 'caution',
          title: 'Why the correction is dangerous',
          text: 'The false promise is also the last thing holding a hope. If the verse guarantees a return, then Chidi comes back eventually. Take away the guarantee and you may take the hope with it — which is why "that is not a promise" delivered flatly is both true and cruel. The genre point has to arrive attached to something.',
        },
        {
          kind: 'p',
          text: "Note also that Emeka is running the formula backwards, exactly as Job's friends did: *the outcome is bad, therefore the input was faulty*. That inference is invalid in both directions, and he is applying it to himself, which makes it harder to challenge — self-accusation wears the clothes of humility.",
        },
      ],
    },
    {
      id: 'c4s4',
      type: 'evidence',
      title: 'What supports the reading?',
      ability: 'interpret',
      claim: 'Claim: Proverbs 22:6 is a general observation rather than a guarantee.',
      prompt: 'Select the genuine support.',
      options: [
        {
          id: 'e1',
          text: 'The book announces itself as a collection of proverbs, and its sayings are stated as generalisations throughout.',
          supports: true,
          why: "A genre argument from the text's own features, available before anyone had a reason to want it.",
        },
        {
          id: 'e2',
          text: 'Proverbs 26:4 and 26:5 contradict each other as rules and cohere as observations.',
          supports: true,
          why: "The compiler's own instruction about how the material works, placed side by side in the book.",
        },
        {
          id: 'e3',
          text: 'Lots of good parents have children who leave the faith.',
          supports: false,
          why: 'This is the experience the reading has to account for; it cannot also be the evidence for it. Using it as evidence is what Emeka would hear as "we adjust the Bible when it disappoints us," and he would be right to object.',
        },
        {
          id: 'e4',
          text: "Scripture contains fathers whose sons went badly — Samuel's, David's, Eli's — without the text always blaming the father.",
          supports: true,
          why: 'Internal evidence, and note the care needed: Eli *is* blamed (1 Samuel 3:13), Samuel is not. That mixture is the point — the Bible does not run a single rule.',
        },
        {
          id: 'e5',
          text: 'Modern psychology shows parenting has limited effect on adult outcomes.',
          supports: false,
          why: 'Contested, frequently overstated in popular accounts, and irrelevant to what the verse means. Bringing it in would also tell Emeka that his years did not matter, which is not true and not kind.',
        },
      ],
    },
    {
      id: 'c4s5',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief: 'You are standing in a car park. Write what you say. Six to nine sentences.',
      audience:
        'A man who has been quietly convicting himself for four years and who will not be talked out of it by kindness.',
      constraints: [
        'Do not accept his dilemma, and do not dismiss the verse.',
        'Do not tell him Chidi will come back.',
        'Give him something to do with the verse rather than only something to stop doing with it.',
      ],
      rubric: ['context', 'grounding', 'compassion', 'uncertainty', 'clarity'],
      minWords: 90,
      allowVoice: true,
    },
    {
      id: 'c4s6',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c4s5',
      body: [
        {
          kind: 'p',
          text: 'I do not think those are the only two doors, and I think you have been standing in the wrong one for four years.',
        },
        {
          kind: 'p',
          text: 'Look at what kind of book it is. Two chapters later it says do not answer a fool according to his folly, and in the very next line it says answer a fool according to his folly. Whoever put that book together put those side by side on purpose. That is not a book of contracts. It is a book of how things generally go, given so that a father knows what to do — and you did it.',
        },
        {
          kind: 'p',
          text: 'And there is a third thing in Scripture besides "you failed" and "God lied": there are fathers in it whose sons went badly and who are not blamed for it. Samuel\'s sons took bribes and perverted justice. Nobody in the text says Samuel trained him wrong.',
        },
        {
          kind: 'p',
          text: 'I am not going to tell you Chidi is coming back. I do not know that and you would not believe me. What I would say is that you have been reading that verse as a verdict on the past, and it was never about the past — it is an instruction for a parent, in the present tense, and you are still his father. There is still training in the way he should go available to you. It looks completely different at thirty-one and it is mostly waiting and not slamming the door.',
        },
        {
          kind: 'p',
          text: 'Can I pray it with you as that instead? Not as an argument about what the verse means. As the thing you are still doing.',
        },
      ],
      commentary: [
        {
          label: 'The dilemma is refused first',
          text: 'Before any exegesis. He offered a two-door structure; everything depends on establishing that a third door exists.',
        },
        {
          label: 'The genre argument is made without the word genre',
          text: '26:4 and 26:5, side by side. It is checkable, it is short, and it comes from the book itself rather than from a scholar.',
        },
        {
          label: 'Samuel, not a general observation',
          text: 'A specific counter-instance inside Scripture, which is the only kind of evidence that will move a man who is trying to be faithful to the text.',
        },
        {
          label: 'It converts the verse rather than removing it',
          text: 'From verdict to instruction, past tense to present. This is what "give him something to do with it" means, and it is what stops the correction from taking his hope.',
        },
        {
          label: 'The ending',
          text: 'A request, not a conclusion. It hands the moment back to him.',
        },
      ],
      limits:
        'This is a lot for a car park, and a real version might be half as long with the rest held for later. It also does not touch the possibility that Emeka did get something wrong — which he may have, and which would need a different and much slower conversation.',
    },
    {
      id: 'c4s7',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c4s5',
      rubric: ['context', 'grounding', 'compassion', 'uncertainty', 'clarity'],
    },
    {
      id: 'c4s8',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Which verse have you been using as a verdict on your own past? What would it say if you read it in the present tense?',
    },
  ],
}

export const caseConflict: CaseFile = {
  id: 'c-conflict',
  title: 'Both of Them Are Right',
  kind: 'conflict',
  premise:
    'Two people, one incident, two accounts that are each accurate and neither complete. The instinct to find out who is right is the thing that will make it worse.',
  minutes: 18,
  abilities: ['understand', 'discern'],
  unlockAfterLessonId: 'l04-1',
  steps: [
    {
      id: 'c5s1',
      type: 'encounter',
      title: 'Two accounts of one Tuesday',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'You run a small team. Rhona and Dev have not spoken properly in three weeks. You have now heard both accounts of the same meeting.',
        },
        {
          kind: 'h',
          text: 'Rhona',
        },
        {
          kind: 'p',
          text: '"I brought the migration risk to the meeting because someone had to. He talked over me twice, and the second time he said — and I wrote it down — \'this is exactly the kind of thing that slows us down.\' In front of four people. I have raised concerns three times this quarter and every time it is the same. I am not going to keep putting my hand up to be the obstacle."',
        },
        {
          kind: 'h',
          text: 'Dev',
        },
        {
          kind: 'p',
          text: '"That is the fourth time in a month she has raised a risk in a room with no proposal attached. I have said to her privately, twice, that if she brings me the risk *and* the mitigation I will back her every time. She does not. So the meeting stops for twenty minutes, everybody agrees it is a risk, nothing changes, and we are behind again. And yes, I said that, and I should not have said it in front of people. I have not apologised because every time I try to talk to her about it she brings up the meeting."',
        },
        {
          kind: 'p',
          text: 'Both accounts are, as far as you can tell, factually accurate. Neither mentions the thing the other is most upset about.',
        },
      ],
    },
    {
      id: 'c5s2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'What is each of them right about, and what is each one unable to see? Then: what is the mistake you are most likely to make here?',
      minWords: 50,
    },
    {
      id: 'c5s3',
      type: 'observation',
      title: 'Read them again',
      ability: 'see',
      prompt: 'Select what is on the page.',
      options: [
        {
          id: 'o1',
          text: 'Rhona wrote down the sentence.',
          significance:
            'She has been building a record. That is what people do when they expect not to be believed — and it is also what people do when they have decided how the story ends.',
        },
        {
          id: 'o2',
          text: 'Dev concedes the wrong immediately and without prompting.',
          significance:
            'He admits the public remark was wrong in his own account of events, unprompted. That is not the behaviour of someone defending himself, and it changes what is available to you.',
        },
        {
          id: 'o3',
          text: "Neither mentions the other's central grievance.",
          significance:
            'Rhona never mentions being asked for mitigations. Dev never mentions the pattern of interruption. Each is answering a charge the other has not made.',
        },
        {
          id: 'o4',
          text: 'Dev says he has raised it privately twice; Rhona does not mention that at all.',
          significance:
            "Either she did not hear it as a request, or she did not register it, or it did not happen as he remembers. All three are common and only the first is anyone's fault.",
        },
        {
          id: 'o5',
          text: 'Dev has not apologised because she raises the meeting whenever he tries.',
          significance:
            "A loop. Each one's reason for not moving is the other's failure to move. Note that both descriptions of the loop are accurate.",
        },
        {
          id: 'o6',
          text: "Rhona's conclusion is about what she will stop doing.",
          significance:
            '"I am not going to keep putting my hand up." The organisational cost of this conflict is that risks stop being raised, and that cost is being paid already.',
        },
      ],
      subtleIds: ['o3', 'o4', 'o5'],
    },
    {
      id: 'c5s4',
      type: 'ranking',
      title: 'What do you do?',
      ability: 'discern',
      prompt: 'Rank.',
      items: [
        {
          id: 'r1',
          text: 'Tell each of them, separately, the one thing the other is right about.',
        },
        { id: 'r2', text: 'Get them in a room together and work it through.' },
        { id: 'r3', text: 'Establish what was actually said in the meeting.' },
        {
          id: 'r4',
          text: 'Tell Dev to apologise for the public remark, unconditionally and first.',
        },
        {
          id: 'r5',
          text: 'Change the meeting format so risks come with mitigations as a standing rule.',
        },
      ],
      idealOrder: ['r1', 'r4', 'r2', 'r5', 'r3'],
      rationale: [
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Tell each what the other is right about.** Separately, first. Each of them is braced to be adjudicated, and hearing a specific concession about the other's case from you — before any meeting — is what makes the meeting survivable. This is Abigail conceding that Nabal is a fool.",
            '**Dev apologises, unconditionally and first.** He has already conceded it privately, and the apology is not contingent on her changing. Making it conditional is what has kept it unsaid for three weeks.',
            '**Then the room.** Not before. A joint meeting held while both are still defending is a rehearsal of the loop with an audience.',
            "**The format change.** Genuinely good — it resolves the substantive disagreement structurally, and both would accept it. It is ranked fourth because introduced first it looks like a ruling in Dev's favour.",
            '**Establish what was said.** Last, and probably never. It is the thing you most want to do and the least useful: both accounts already agree on the sentence. An investigation would tell you nothing and would tell both of them that this is a matter of evidence rather than of repair.',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The mistake you were most likely to make',
          text: 'Adjudicating. The pull toward finding out who is right is enormous, and here the facts are not in dispute — only their significance, and significance is not established by investigation.',
        },
      ],
    },
    {
      id: 'c5s5',
      type: 'perspective',
      title: 'Stand where Rhona stands',
      ability: 'understand',
      person: 'Rhona',
      setup:
        'She has raised concerns three times this quarter and written one sentence down. Answer as her.',
      fields: [
        { key: 'saying', label: 'What you say', prompt: 'Your account, in your own framing.' },
        { key: 'feeling', label: 'What you feel', prompt: 'Not anger. What is under it?' },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'About the migration, and about yourself.',
        },
        { key: 'desiring', label: 'What you want', prompt: 'From Dev, concretely.' },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'About why he does not want risks raised.',
        },
        { key: 'not-seeing', label: 'What you cannot see', prompt: 'From where you are.' },
      ],
      reveal: [
        {
          kind: 'list',
          items: [
            '**Under the anger:** the fear of being the person everyone braces for. She has watched that happen to someone else and it took two years.',
            '**Fearing about the migration:** that she is right, that it will fail, and that being right about it will cost her more than being wrong would.',
            '**Wanting:** not an apology, primarily. To be able to raise the next one without it being an event.',
            '**Assuming:** that he wants speed more than safety, which is the least charitable available reading and the one his sentence in the meeting appeared to confirm.',
            '**Not seeing:** that he asked her for something twice and she heard it as being told to stop complaining. Both readings of those private conversations are available; she has only one of them.',
          ],
        },
      ],
    },
    {
      id: 'c5s6',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'Write the opening three sentences you say to Rhona, and the opening three you say to Dev, in separate conversations on the same afternoon. Each must lead with something the other is right about.',
      audience:
        "Two people who each expect you to take the other's side, and who will compare notes.",
      constraints: [
        'Assume they will tell each other exactly what you said. Write accordingly.',
        'Do not adjudicate the meeting.',
        'Give each of them one specific thing to do.',
      ],
      rubric: ['perspective', 'evidence', 'clarity', 'action', 'compassion'],
      minWords: 90,
      allowVoice: true,
    },
    {
      id: 'c5s7',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c5s6',
      body: [
        { kind: 'h', text: 'To Rhona' },
        {
          kind: 'p',
          text: '"Dev told me, without me asking, that what he said in that meeting was wrong and that he should not have said it in front of people. He has not told you because every time he starts, the conversation goes back to the meeting — which is fair enough from where you are standing, and it has also meant you have been waiting three weeks for something he already thinks he owes you. Here is the one thing I would ask: he has twice asked you to bring the mitigation along with the risk, and I do not think you heard it as a request. Whether or not he asked it well, it is a reasonable thing to want, and doing it would make you almost impossible to talk over."',
        },
        { kind: 'h', text: 'To Dev' },
        {
          kind: 'p',
          text: '"Rhona is right that she has raised three real concerns this quarter and that a person who does that in most organisations ends up labelled. She is currently deciding to stop, and if she stops, the next migration risk reaches us from a customer. The one thing I would ask: apologise for the meeting, this week, without attaching anything to it. Not \'I am sorry, and also\' — just the apology. Your point about mitigations is right and it will land in about a fortnight; it will never land while she is still owed that."',
        },
      ],
      commentary: [
        {
          label: "Each opens with the other's strongest point",
          text: 'And in each case it is a point the recipient does not know: Rhona does not know he has conceded, Dev does not know she is about to stop raising things. New information rather than a plea for sympathy.',
        },
        {
          label: 'Neither adjudicates',
          text: 'No verdict on the meeting, no ruling on who interrupted whom. The facts are agreed; the repair is what is being worked.',
        },
        {
          label: 'The instruction to Dev separates the two things',
          text: '"Not \'I am sorry, and also\'." A conditional apology is not an apology, and naming the failure mode is more useful than requesting the behaviour.',
        },
        {
          label: 'Written to be compared',
          text: 'Neither contains anything the other could not read. That constraint is worth adopting permanently — it is a reliable filter on whether you are mediating or managing.',
        },
      ],
      limits:
        "It assumes rough parity of power. If Dev is Rhona's manager rather than her peer, the ask of her needs to be smaller and the ask of him larger — the same words would put the repair work on the person with less room to refuse it.",
    },
    {
      id: 'c5s8',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c5s6',
      rubric: ['perspective', 'evidence', 'clarity', 'action', 'compassion'],
    },
    {
      id: 'c5s9',
      type: 'practice',
      title: 'Carry it out',
      ability: 'live',
      assignment:
        "Think of a disagreement you are currently in. Write the other person's strongest point in a form they would sign, and then say it to them out loud.",
      window: 'Within seven days',
      checkIn: 'What happened when you said it?',
    },
  ],
}

export const caseSirens: CaseFile = {
  id: 'c-sirens',
  title: 'The Song and the Shore',
  kind: 'symbol',
  premise:
    'A symbolic investigation. Two ancient scenes — a man bound to a mast, and a man returning to a house full of strangers — and what they encode about temptation, endurance, and what it costs to come home.',
  minutes: 20,
  abilities: ['see', 'interpret'],
  unlockAfterLessonId: 'l03-1',
  steps: [
    {
      id: 'c6s1',
      type: 'encounter',
      title: 'Two scenes from the Odyssey',
      ability: 'see',
      source:
        "Homer's Odyssey, Books XII, XIX and XXIII, summarised. The poem is ancient and in the public domain; modern translations are not, so the episodes are described rather than quoted.",
      body: [
        { kind: 'h', text: 'The mast' },
        {
          kind: 'p',
          text: "Circe warns Odysseus about the Sirens, who sit in a meadow among the bones and dried skins of men. He stops his crew's ears with wax and has himself lashed to the mast, ordering that if he begs to be released they must tie him tighter. They do.",
        },
        {
          kind: 'p',
          text: 'The song itself is the detail worth holding. The Sirens do not offer beauty or pleasure. They call him by name, they praise him, and they offer to tell him everything that happens on the earth — they claim to know all things. What kills men on that shore is the promise of knowledge.',
        },
        { kind: 'h', text: 'The shore' },
        {
          kind: 'p',
          text: 'Twenty years later he reaches Ithaca and is not recognised. He arrives disguised as a beggar into a house full of men eating his food and courting his wife. The first creature to know him is his dog, Argos, lying on a dung heap; the dog lifts its head, and dies. The second is his old nurse, washing his feet, who recognises the scar on his thigh from a boar hunt in his boyhood — and he seizes her throat to keep her quiet.',
        },
        {
          kind: 'p',
          text: 'Penelope will not accept him even after the suitors are dead. She tests him: she instructs a servant, in his hearing, to move their bed out of the bedchamber. He reacts with fury — the bed cannot be moved, he built it himself around a living olive tree rooted in the ground. Only then does she come to him.',
        },
      ],
    },
    {
      id: 'c6s2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'What do these two scenes have to do with each other? Answer before reading further; a real connection exists and it is not obvious.',
      minWords: 40,
    },
    {
      id: 'c6s3',
      type: 'certainty',
      title: 'Readings of the mast',
      ability: 'interpret',
      prompt: 'Sort by what the text supports.',
      claims: [
        {
          id: 'cc1',
          text: 'The Sirens offer knowledge, not pleasure.',
          tier: 'stated',
          why: 'It is the content of the song as the poem gives it.',
        },
        {
          id: 'cc2',
          text: 'The temptation is fitted specifically to Odysseus.',
          tier: 'implied',
          why: 'He is the man defined by wanting to know, and they call him by name. The poem does not editorialise; the fit is unmistakable.',
        },
        {
          id: 'cc3',
          text: 'The episode commends binding yourself in advance against a temptation you cannot resist in the moment.',
          tier: 'reasonable',
          why: 'A fair reading and a fruitful one. Note that the crew are saved by a different method entirely, and Homer ranks neither.',
        },
        {
          id: 'cc4',
          text: 'The mast prefigures the cross.',
          tier: 'possible',
          why: 'Christian readers from the second century onward did read it this way, so it has a real interpretive history. It is what the church later made of the image, not what the passage means. Say which you are doing.',
        },
        {
          id: 'cc5',
          text: 'Homer is warning against the pursuit of knowledge as such.',
          tier: 'unsupported',
          why: "Odysseus's cunning is celebrated throughout the poem. A reading that makes the hero's defining virtue the villain of one episode needs far more support than this.",
        },
      ],
    },
    {
      id: 'c6s4',
      type: 'connection',
      title: 'What the two scenes share',
      ability: 'interpret',
      prompt: 'Match each element to what it does in the poem.',
      left: [
        { id: 'l1', label: 'The ropes on the mast' },
        { id: 'l2', label: 'The scar from the boar hunt' },
        { id: 'l3', label: 'The bed rooted in the olive tree' },
        { id: 'l4', label: 'The dog on the dung heap' },
      ],
      right: [
        { id: 'r1', label: 'A commitment made before the moment of weakness' },
        { id: 'r2', label: 'Identity carried in the body, unchosen and unfakeable' },
        {
          id: 'r3',
          label: 'Identity built by hand and fixed to a living thing that cannot be moved',
        },
        { id: 'r4', label: 'Recognition by something that asked nothing and waited anyway' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The ropes hold because they were tied while he was still sane.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'The old woman knows him by an injury from boyhood. Twenty years of change have not touched it, and he could not have produced it on demand.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'The marriage is proved by a secret about how the house was made — something built, rooted, and immovable, which is exactly what he had to become to get home.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Argos recognises him instantly and dies. The homecoming is real and it is late, and something has already been lost that the return does not undo.',
        },
      ],
    },
    {
      id: 'c6s5',
      type: 'lenses',
      title: 'Reading it alongside Scripture',
      ability: 'interpret',
      intro: 'Carefully — the poem is not Scripture and does not need to be made into it.',
      cards: [
        {
          lens: 'biblical',
          heading: 'What the Bible does differently with homecoming',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'Odysseus must prove he is himself. The scar, the bed, the bow only he can string — the whole last third of the poem is a series of identity tests, and he passes them by being verifiably the man who left.',
            },
            {
              kind: 'p',
              text: 'In Luke 15 the son who comes home is recognised at a distance, while he is still a long way off, and the father runs. There is no test. The son has prepared a speech establishing his status — *make me as one of your hired servants* — and is not permitted to finish it.',
            },
            {
              kind: 'p',
              text: 'The two homecomings are structurally opposite, and the contrast is worth sitting with rather than resolving quickly. Ithaca is earned; the far country is not. Odysseus returns as the man he was; the younger son returns as someone unrecognisable and is recognised anyway.',
            },
            {
              kind: 'aside',
              label: 'What not to do with this',
              text: 'Do not conclude that Homer is wrong or that the Odyssey is a defective gospel. It is not attempting the same thing. The comparison is useful precisely because both are serious about how hard it is to get home, and they locate the difficulty in different places.',
            },
          ],
          passages: ['Luke 15:20'],
        },
        {
          lens: 'psychological',
          heading: 'Ulysses contracts',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: "Economists and decision theorists took the name directly: a **Ulysses contract** is a commitment made now that constrains your future self, when you expect that self's judgement to be compromised. Advance directives, blocked accounts, deleted apps, telling someone your plan so you cannot quietly abandon it.",
            },
            {
              kind: 'p',
              text: "The strategy works because it does not rely on the resource that will be depleted. Note the crew's method is different and also valid — removing exposure entirely rather than removing the ability to act on it. Homer gives both without ranking them, and most real lives need both.",
            },
          ],
        },
      ],
    },
    {
      id: 'c6s6',
      type: 'socratic',
      title: 'The challenge',
      ability: 'discern',
      challenge:
        'This is enjoyable and it may be worthless. You have taken a poem about a bronze-age raider, extracted a modern behavioural concept from one episode and a theology of identity from another, and connected them to a parable written eight hundred years later in another language. How is this different from finding faces in clouds?',
      prompt:
        'Give a test that separates a real reading from a projected one. Then apply it to the bed-and-olive-tree reading above.',
      helper: 'Module 4 and Module 3 both bear on this. Consider what the text constrains.',
      reveal: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Does the text constrain the reading?** A face in a cloud can be anything. The Sirens\' song has content, and the content is knowledge — that fact rules out most readings of the episode and is why "temptation to lust" is simply wrong about the text. If your reading could survive the details being different, it is projection.',
            '**Does the reading account for detail you did not go looking for?** The bed reading has to handle the *olive tree*, the fact that Odysseus built it himself, and the fact that his rage is what convinces her. A reading that only works if you ignore two details is not a reading.',
            "**Would a competent reader who disagreed with your conclusions still recognise the observation?** They might reject the significance of the bed and still agree that Penelope's test is about a secret only the builder could know.",
            '**Are you saying what the text does, or what the tradition did with it?** The mast-as-cross is real interpretive history and false exegesis, and the honest move is to label it.',
          ],
        },
        {
          kind: 'p',
          text: 'Applying it: the bed reading passes tests one, two and three. It is constrained by the detail, it accounts for the olive tree and the building, and the observation survives disagreement about its meaning. The connection to Luke 15 is a *comparison* the reader is making, not a claim about either text — and saying so is what keeps it honest.',
        },
      ],
    },
    {
      id: 'c6s7',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'A friend who is trying to stop drinking says: "Willpower is obviously the answer, I just have not got enough of it yet." Answer using one of these two scenes, without lecturing and without a moral. Six sentences maximum.',
      audience:
        'Someone who has failed at this several times and is blaming a faculty rather than a plan.',
      constraints: [
        'Use the scene as a load-bearing analogy, not a decoration.',
        'Surrender the device in your last sentence.',
        'Do not tell him what to do.',
      ],
      rubric: ['clarity', 'usefulness', 'perspective', 'compassion'],
      minWords: 70,
      allowVoice: true,
    },
    {
      id: 'c6s8',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 'c6s7',
      body: [
        {
          kind: 'p',
          text: 'There is a bit in the Odyssey where he has to get past the Sirens, and he does not try to be strong. He gets tied to the mast first, while he can still think, and he tells the crew that if he begs them to untie him they are to tie him tighter — and he does beg, and they do. He was not stronger than the song. He just made the decision at a time when he was still the person who could make it.',
        },
        {
          kind: 'p',
          text: 'I do not think you are short of willpower. I think you keep asking for it at ten at night.',
        },
      ],
      commentary: [
        {
          label: 'It maps relations, not features',
          text: 'No sea, no monsters, no heroism. What transfers is: the decision was made earlier, by a version of him that was competent to make it, and it was made *binding*.',
        },
        {
          label: '"And he does beg"',
          text: "The detail that stops the story being flattering. It concedes that the craving wins in the moment, which is the friend's actual experience and the thing he expects to be argued with about.",
        },
        {
          label: 'The surrender sentence',
          text: 'Two lines, no explanation of what the mast represents, and it names the real diagnosis — a timing problem, not a character defect. Then it stops.',
        },
      ],
      limits:
        'It gives him a frame and no plan, which is right for a first conversation and would be a failure by the third. Serious dependence needs medical and structured support, and an analogy is not a substitute for saying so.',
    },
    {
      id: 'c6s9',
      type: 'self-assess',
      title: 'Score it',
      ability: 'answer',
      answersStepId: 'c6s7',
      rubric: ['clarity', 'usefulness', 'perspective', 'compassion'],
    },
    {
      id: 'c6s10',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'What is your bed and olive tree — the thing about you that is built, rooted, and would prove who you are to someone who had not seen you in twenty years?',
    },
  ],
}
