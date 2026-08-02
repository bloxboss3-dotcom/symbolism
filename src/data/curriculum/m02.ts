import type { Lesson, Module } from '../../types/content'

export const module02: Module = {
  id: 'm02',
  order: 2,
  title: 'Observation Before Interpretation',
  shortTitle: 'Observation',
  centralQuestion: 'What is actually there, before I decide what it means?',
  summary:
    'Most bad interpretations are not reasoning failures. They are looking failures. This module trains the specific moves — repetition, contrast, omission, order, who speaks and who does not — on a passage you have almost certainly read too quickly.',
  abilities: ['see', 'interpret'],
  lessonIds: ['l02-1'],
}

export const lesson02_1: Lesson = {
  id: 'l02-1',
  moduleId: 'm02',
  title: 'The Elder Brother at the Edge of the Party',
  subtitle: 'Six observation moves, on a text you think you know',
  centralQuestion: 'What is actually there, before I decide what it means?',
  minutes: 40,
  abilities: ['see', 'interpret', 'understand'],
  concepts: ['observation-moves', 'omission', 'shift-in-address', 'inattentional-blindness'],
  passages: ['Luke 15:25-32', 'Proverbs 18:13', 'Proverbs 18:17'],
  steps: [
    {
      id: 's1',
      type: 'encounter',
      title: 'The end of a parable',
      kicker: 'Read it twice. The second reading is the one that counts.',
      ability: 'see',
      source: 'Luke 15:25–32, World English Bible (public domain).',
      body: [
        {
          kind: 'p',
          text: 'A man had two sons. The younger took his inheritance early, spent it, came home starving, and was met on the road by a father who ran. You know that part. This is what happens next, and it is roughly a third of the parable.',
        },
        {
          kind: 'scripture',
          ref: 'Luke 15:25-28',
          translation: 'World English Bible',
          text: 'Now his elder son was in the field. As he came near to the house, he heard music and dancing. He called one of the servants to him, and asked what was going on. He said to him, "Your brother has come, and your father has killed the fattened calf, because he has received him back safe and healthy." But he was angry, and would not go in. Therefore his father came out, and begged him.',
        },
        {
          kind: 'scripture',
          ref: 'Luke 15:29-30',
          translation: 'World English Bible',
          text: 'But he answered his father, "Behold, these many years I have served you, and I never disobeyed a commandment of yours, but you never gave me a goat, that I might celebrate with my friends. But when this your son came, who has devoured your living with prostitutes, you killed the fattened calf for him."',
        },
        {
          kind: 'scripture',
          ref: 'Luke 15:31-32',
          translation: 'World English Bible',
          text: 'He said to him, "Son, you are always with me, and all that is mine is yours. But it was appropriate to celebrate and be glad, for this, your brother, was dead, and is alive again. He was lost, and is found."',
        },
        {
          kind: 'aside',
          label: 'A note on the text',
          text: 'The World English Bible is a public-domain revision of the American Standard Version. Where an older phrase has been modernised, the sense is unchanged, but if a detail below turns on a single word it is worth checking another translation — that habit is itself part of the skill being trained.',
        },
      ],
    },
    {
      id: 's2',
      type: 'first-judgment',
      title: 'Your first judgment',
      ability: 'discern',
      prompt:
        'What is wrong with the elder brother? Answer in your own words, before any instruction. Then add: what evidence in these eight verses are you using?',
      helper:
        'Most people can answer the first half instantly and struggle with the second. That gap is the subject of this lesson.',
      placeholder: 'What is wrong with him is… The evidence I am using is…',
      minWords: 40,
    },
    {
      id: 's3',
      type: 'teaching',
      title: 'Six moves',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Observation is not staring harder. It is running a small number of specific queries over a text or a situation. Six that repay the effort almost every time:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            '**Repetition.** What word, image, or action comes back? Repetition is the cheapest signal a writer has, and it is almost never accidental.',
            '**Contrast.** What is set against what? Two sons, two speeches, two ways of naming the same person.',
            '**Omission.** What is missing that you would expect to be here? This is the hardest move, because absence does not attract attention.',
            '**Order.** What comes first, what comes last, what interrupts what. The sequence carries meaning independently of the content.',
            '**Voice.** Who speaks, who is spoken about, who is silent, and who is addressed by name.',
            '**Change.** Where does something shift — a tone, a form of address, a pace? A change is a fingerprint.',
          ],
        },
        {
          kind: 'callout',
          tone: 'distinction',
          title: 'Observation versus interpretation',
          text: '"He calls his brother *this your son*" is an observation. "He refuses to acknowledge the relationship" is an interpretation. Both are legitimate. Keeping them in separate columns is what lets you check your work — and lets someone else disagree with your reading without disagreeing with your eyes.',
        },
      ],
    },
    {
      id: 's4',
      type: 'observation',
      title: 'Run the moves',
      ability: 'see',
      prompt: 'Which of these are actually on the page? Select everything you can point to.',
      helper: 'Every item here is an observation, not an interpretation. Some are easy to miss.',
      options: [
        {
          id: 'o1',
          text: 'The elder son has to ask a servant what is happening in his own house.',
          significance:
            'Move: voice, and omission. Nobody sent for him. He is a member of this household who learns its biggest news from staff, in a field.',
        },
        {
          id: 'o2',
          text: 'The servant says "your brother." The elder son says "this your son." The father says "this, your brother."',
          significance:
            'Move: repetition and change. Three namings of one man in eight verses. The elder son is the only one who declines the word brother; the father hands it straight back to him in his final sentence.',
        },
        {
          id: 'o3',
          text: 'The elder son never addresses his father by any title in his whole speech.',
          significance:
            'Move: omission. He begins "Behold, these many years…" with no *father*. The father, answering, opens with a term of address: "Son."',
        },
        {
          id: 'o4',
          text: 'He describes his relationship with the words "I have served you" and "I never disobeyed a commandment."',
          significance:
            "Move: voice. That is the vocabulary of a servant under orders, spoken by an heir. He has been living in his father's house on the terms of an employee.",
        },
        {
          id: 'o5',
          text: 'A goat is contrasted with a fattened calf.',
          significance:
            'Move: contrast. He asks for the smaller animal. His complaint is not that he wanted the feast — it is that he was never given the little one.',
        },
        {
          id: 'o6',
          text: 'The father goes out of the house to meet this son too.',
          significance:
            'Move: repetition, across the whole parable. He ran out to the younger; he comes out and begs the elder. Both sons are met outside. Neither is fetched in.',
        },
        {
          id: 'o7',
          text: "The detail about prostitutes appears only in the elder son's mouth.",
          significance:
            'Move: voice. The narrator said the younger son wasted his property in reckless living. The specific accusation is supplied by the brother, about events he did not witness.',
        },
        {
          id: 'o8',
          text: 'The parable does not say whether he goes in.',
          significance:
            "Move: omission, and it is the largest one in the passage. Jesus ends on the father's sentence. The story is left open at exactly the point his listeners would want it closed.",
        },
        {
          id: 'o9',
          text: 'The music and dancing are already happening when he arrives.',
          significance:
            'Move: order. The celebration did not wait for him, and was not planned with him in mind. Whatever else is true, his grievance has a factual basis.',
        },
      ],
      subtleIds: ['o3', 'o7', 'o8', 'o9'],
      afterword: [
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The omission you probably walked past',
          text: "Most readers, asked to recount this parable, end it with the father's speech and assume a resolution. There is no resolution. Jesus told this to Pharisees who were complaining that he ate with sinners (Luke 15:1–2), and he left the elder brother standing in the yard with the invitation open. The unfinished ending is aimed at the audience.",
        },
      ],
    },
    {
      id: 's5',
      type: 'certainty',
      title: 'Sort your claims',
      ability: 'interpret',
      prompt: 'Same ladder as before. How much does the passage actually license?',
      helper:
        'Notice how many of the readings you find most compelling live in the middle three rungs. That is normal, and it is not a defect — as long as you know which rung you are on.',
      claims: [
        {
          id: 'c1',
          text: 'The elder son refuses to enter the house.',
          tier: 'stated',
          why: '"He was angry, and would not go in."',
        },
        {
          id: 'c2',
          text: 'He does not think of the younger man as his brother.',
          tier: 'implied',
          why: 'Two speakers use *brother* to him; he answers with *this your son*. Sustained refusal of an available word is about as strong as textual evidence gets without being stated.',
        },
        {
          id: 'c3',
          text: 'He has been relating to his father as an employer rather than as a father.',
          tier: 'reasonable',
          why: 'Built from three converging observations: *served*, *never disobeyed a commandment*, and the missing form of address. Any one alone would be thin. Three pointing the same way is a fair reading — and the father\'s reply ("you are always with me, and all that is mine is yours") reads as a direct correction of it.',
        },
        {
          id: 'c4',
          text: 'The father has been distant or has favoured the younger son for years.',
          tier: 'possible',
          why: "It would explain the elder son's bitterness, and readers reach for it often. Nothing in the parable supports it, and the father's conduct in both halves runs against it. Watch how quickly a sympathetic motive for a character invents a fault in someone else.",
        },
        {
          id: 'c5',
          text: 'The younger son actually did spend the money on prostitutes.',
          tier: 'possible',
          why: 'Only the angry brother says so. It may be true. The narrator does not confirm it, and a detail that appears first in an accusation is evidence about the accuser before it is evidence about the accused.',
        },
        {
          id: 'c6',
          text: 'The parable teaches that the elder brother is finally shut out.',
          tier: 'unsupported',
          why: 'The passage ends with an invitation and no answer. If you found yourself supplying a judgement, you supplied the ending Jesus withheld — which is precisely the pressure the parable puts on its first audience.',
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
          heading: 'A parable with two lost sons',
          claimKind: 'scripture',
          body: [
            {
              kind: 'p',
              text: 'Luke frames the chapter: "the tax collectors and sinners were all drawing near to him to hear him. The Pharisees and the scribes murmured, saying, ‘This man welcomes sinners, and eats with them.’" (Luke 15:1–2, WEB). Three parables follow — lost sheep, lost coin, lost sons. The first two end in celebration and a call to rejoice. The third ends with someone standing outside a celebration, refusing.',
            },
            {
              kind: 'p',
              text: "Read in that frame, the elder brother is not a subplot. He is the point of the third parable, and the ones who murmured are meant to recognise themselves. The younger son's repentance is the setup; the elder son's response is the question.",
            },
            {
              kind: 'p',
              text: "The father's answer is worth weighing slowly: *Son, you are always with me, and all that is mine is yours.* Whatever the elder son has lacked, it was not access. He has been living beside an inheritance he treated as wages.",
            },
          ],
          passages: ['Luke 15:1-2', 'Luke 15:25-32'],
          tension:
            'The parable is often preached as "God loves you no matter what you have done." That is in it. What is also in it, and is preached far less, is a warning aimed at the reliable, the dutiful, and the religiously careful — which is to say, at the sort of person who reads a book like this one.',
        },
        {
          lens: 'psychological',
          heading: 'Looking and seeing are different operations',
          claimKind: 'psychology',
          body: [
            {
              kind: 'p',
              text: 'Simons and Chabris (1999) asked viewers to count basketball passes in a short film. Roughly half failed to notice a person in a gorilla suit walk through the middle of the scene. The finding — inattentional blindness — has replicated widely and in many forms: when attention is loaded by a task, unexpected but plainly visible information is not registered at all.',
            },
            {
              kind: 'p',
              text: 'The mechanism matters for reading. You do not walk past the missing word *father* because you are careless. You walk past it because you arrived with a task — *what is wrong with this man* — and the task set your filter. Observation moves work by giving you a different task, one at a time, so the filter changes.',
            },
          ],
          tension:
            'This explains a mechanism; it does not license the leap that every missed detail is psychologically significant. Some things are simply not there for a reason and mean nothing.',
        },
        {
          lens: 'literary',
          heading: 'The narrator who lets you be wrong',
          claimKind: 'literary',
          body: [
            {
              kind: 'p',
              text: "Jane Austen's *Emma* (1815) is built on a technique worth stealing. The narration sits so close to Emma's perceptions that her misreadings of other people arrive as though they were facts. Readers regularly finish a chapter having believed something no one in the book ever said. On a second reading the evidence is all there, unchanged, and now points the other way.",
            },
            {
              kind: 'p',
              text: "The same trap operates in ordinary life without an author's help. Someone tells you about a conflict, and their perception arrives in your head with the grammar of narration. Proverbs 18:17 (WEB) puts it with less patience: *He who pleads his cause first seems right; until another comes and questions him.*",
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      type: 'evidence',
      title: 'Which evidence supports it?',
      ability: 'interpret',
      claim:
        'Claim to test: "The elder son has been living in his father\'s house on the terms of a hired servant."',
      prompt:
        'Select every item that genuinely supports the claim. Leave the rest — including anything that merely feels consistent with it.',
      options: [
        {
          id: 'e1',
          text: '"These many years I have served you."',
          supports: true,
          why: 'Direct. He names the relationship himself, in the vocabulary of service.',
        },
        {
          id: 'e2',
          text: '"I never disobeyed a commandment of yours."',
          supports: true,
          why: 'A record of compliance is what an employee offers. A son does not usually keep one.',
        },
        {
          id: 'e3',
          text: 'He learns about the feast from a servant, in a field.',
          supports: false,
          why: 'It fits the mood, but it is evidence about how the household treated him, not about how he understood himself. Keep those apart — this is exactly the kind of item that gets swept in because it feels right.',
        },
        {
          id: 'e4',
          text: 'The father answers, "you are always with me, and all that is mine is yours."',
          supports: true,
          why: 'Indirect but strong: the correction tells you what was being corrected. The father contradicts a wages-based reading of the relationship, which implies it was on offer.',
        },
        {
          id: 'e5',
          text: 'He complains that he was never given a goat.',
          supports: true,
          why: 'The complaint is about non-payment, and it is modest — the wage he thinks he was owed is small. That is the logic of an employee with a grievance, not an heir.',
        },
        {
          id: 'e6',
          text: 'He accuses his brother of spending the money on prostitutes.',
          supports: false,
          why: 'This tells you about his anger and his sources. It has nothing to do with how he construes his own standing.',
        },
      ],
    },
    {
      id: 's8',
      type: 'socratic',
      title: 'A challenge to your reading',
      ability: 'discern',
      challenge:
        'Everything above has been quietly building a case against the elder brother — and he has a case. His father did throw a feast for a man who took a third of the estate, liquidated it, and came back only because he was hungry. Nobody fetched him from the field. He is not being unreasonable; he is being treated as though reasonableness were the problem.',
      prompt:
        'Make his case as strongly as you can. What is he actually right about? Then say what, if anything, he is still getting wrong — in a way that would survive him hearing you say it.',
      helper:
        'If your answer to "what is he right about" is "nothing, he is just bitter," you have stopped observing and started siding.',
      reveal: [
        {
          kind: 'p',
          text: 'What he is right about, at minimum:',
        },
        {
          kind: 'list',
          items: [
            '**The years happened.** He stayed. The work got done. Nothing in the parable suggests otherwise, and the father does not dispute a word of it.',
            '**The asymmetry is real.** A calf for the one who left; not a goat for the one who stayed. His arithmetic is correct.',
            '**Nobody came to get him.** The celebration was underway while he was in the field, and he found out by asking staff.',
          ],
        },
        {
          kind: 'p',
          text: "What he is still getting wrong is narrower than it first looks, and worth stating precisely. He is treating his father's generosity to his brother as a withdrawal from his own account. That is the logic of wages, where the pot is fixed and every payment to another is a payment not made to you. It is not the logic of a household, where the estate was already his.",
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What this changes about counselling',
          text: "You will meet this person. The move that fails is disputing the facts — the facts are usually right. The move that sometimes works is the father's: concede the years without argument, then name the frame. *All that is mine is yours* is not a rebuttal of his complaint. It is an offer of a different accounting.",
        },
      ],
    },
    {
      id: 's9',
      type: 'perspective',
      title: 'Stand in the field',
      ability: 'understand',
      person: 'The elder brother, walking back from the field',
      setup:
        'It is late afternoon. You have been working. You hear music from a hundred yards away and you do not know why there is music.',
      fields: [
        {
          key: 'saying',
          label: 'What you say out loud',
          prompt:
            'To the servant, and then to your father. Keep it to what you would actually say.',
        },
        {
          key: 'feeling',
          label: 'What you feel first',
          prompt: 'Before anger — anger is usually second. What arrives first?',
        },
        {
          key: 'fearing',
          label: 'What you fear',
          prompt: 'If your brother is forgiven this, what does that mean about you and your years?',
        },
        {
          key: 'desiring',
          label: 'What you want',
          prompt: 'Not what you demand. What do you actually want from your father?',
        },
        {
          key: 'assuming',
          label: 'What you assume',
          prompt: 'What has to be true about how households work for your complaint to make sense?',
        },
        {
          key: 'not-seeing',
          label: 'What you cannot see',
          prompt: 'Standing in that yard, what is invisible to you?',
        },
      ],
      reveal: [
        {
          kind: 'p',
          text: 'A serious reconstruction, for comparison:',
        },
        {
          kind: 'list',
          items: [
            '**Feeling first:** most likely humiliation, not rage. He is the last to know, in front of servants, at his own house.',
            '**Fearing:** that the years counted for nothing — that if this is how it ends, then obedience was never the currency he was told it was. That is a genuinely frightening thought for a dutiful man, and it is close to the fear underneath a great deal of religious anger.',
            '**Wanting:** to be wanted. Notice the goat is not really about the goat. He wants evidence that someone would have thrown him a party.',
            "**Assuming:** that love in a household is finite and allocated, so his brother's share is his loss.",
            '**Not seeing:** that his father has come outside to him, in front of the guests, in the middle of the feast — which is the same thing he did for the younger son, and is the answer to the question he has not asked out loud.',
          ],
        },
      ],
    },
    {
      id: 's10',
      type: 'connection',
      title: 'Connections',
      ability: 'interpret',
      prompt: 'Match the observation move to the detail that rewards it.',
      left: [
        { id: 'l1', label: 'Omission' },
        { id: 'l2', label: 'Change in address' },
        { id: 'l3', label: 'Contrast' },
        { id: 'l4', label: 'Voice — who is speaking' },
      ],
      right: [
        { id: 'r1', label: 'The parable never says whether he goes in' },
        {
          id: 'r2',
          label: '"Son, you are always with me" answers a speech with no "father" in it',
        },
        { id: 'r3', label: 'A goat set against a fattened calf' },
        { id: 'r4', label: 'The prostitutes appear only in the accusation' },
      ],
      pairs: [
        {
          leftId: 'l1',
          rightId: 'r1',
          why: 'The largest fact in the passage is a thing that is not there.',
        },
        {
          leftId: 'l2',
          rightId: 'r2',
          why: 'One man drops the word father; the other supplies the word son. The exchange is carried by address, not argument.',
        },
        {
          leftId: 'l3',
          rightId: 'r3',
          why: 'The size of the animals is the whole grievance in miniature.',
        },
        {
          leftId: 'l4',
          rightId: 'r4',
          why: 'Attributing a claim to its speaker is the difference between a fact and a charge.',
        },
      ],
    },
    {
      id: 's11',
      type: 'decision',
      title: 'A modern yard',
      ability: 'discern',
      situation:
        'Your sister left the family at nineteen and has been mostly absent for a decade. Your parents are elderly; you have handled every hospital visit, every form, every Christmas. She has come back, and your mother is radiant. On Sunday there is a lunch. You are in the car outside and you do not want to go in.',
      prompt: 'Choose what you actually do.',
      options: [
        {
          id: 'd1',
          text: 'Go in, be gracious, say nothing about the last ten years to anyone.',
          verdict: 'risky',
          consequence:
            'The lunch goes well. Something in you sets a little harder, and in four months you find yourself unaccountably furious about a rota. Unspoken grievance does not evaporate; it changes address.',
          cost: 'The relationship you keep is with a version of yourself that is not telling the truth.',
        },
        {
          id: 'd2',
          text: 'Go in, and later that week tell your mother, without accusation, what the ten years cost you.',
          verdict: 'wise',
          consequence:
            'Two separate acts, correctly sequenced: the welcome is not made a hostage, and the account is not deleted. Your mother may respond badly — parents often do, because your account implies something about their attention. You will have said a true thing to the person who can actually hear it.',
          cost: 'You have to accept that the telling may not be received well, and do it anyway, without making the reception the point.',
        },
        {
          id: 'd3',
          text: 'Go in and make one pointed remark at the table so that it is at least acknowledged.',
          verdict: 'unwise',
          consequence:
            'The remark lands, the room absorbs it, and you become the story of the lunch. Ten years of genuine faithfulness get compressed into one sentence, and the sentence is the only part anyone will remember.',
          cost: 'The truth of your grievance, spent for the pleasure of having voiced it.',
        },
        {
          id: 'd4',
          text: 'Do not go in. Text that something came up.',
          verdict: 'unwise',
          consequence:
            "You keep your dignity and lose the ground. The parable's ending is left open because it is genuinely open — the yard is a place people can stay for years without ever deciding to.",
          cost: 'Your presence, which was the one thing in the situation that was unambiguously yours to give.',
        },
      ],
      afterword: [
        {
          kind: 'p',
          text: 'Note what separates the second option from the others: it refuses to choose between grace and honesty by putting them in different rooms and in the right order. Most false dilemmas in relationships are actually sequencing problems.',
        },
      ],
    },
    {
      id: 's12',
      type: 'wise-answer',
      title: 'Your wise answer',
      ability: 'answer',
      brief:
        'A friend who has just read this parable in a small group says to you afterwards, quietly: "I know I am supposed to be moved by the father running. But I am the older one. And every time this comes up, the sermon is about how I need to repent of resenting grace, and honestly it just feels like being told off for having done what I was asked." Write what you would say. Six to ten sentences.',
      audience:
        'Someone dutiful and tired, who is not asking for an argument and would recognise a technique immediately.',
      constraints: [
        'Do not begin by correcting them.',
        'Use at least one specific observation from the passage rather than a general reassurance.',
        "Do not remove the parable's edge in order to comfort them.",
      ],
      rubric: ['observation', 'perspective', 'compassion', 'grounding', 'clarity', 'uncertainty'],
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
          text: 'I think you are hearing the sermon correctly, and I think the sermon is slightly off.',
        },
        {
          kind: 'p',
          text: "Look at what the father actually does with the older son's complaint. He does not dispute one word of it. Not the years, not the obedience, not the goat. There is no line anywhere in that parable where the older brother is told his account of his own life is wrong. That silence is doing something — it is the story's way of saying the years were real.",
        },
        {
          kind: 'p',
          text: "What the father changes is not the facts but the accounting. *All that is mine is yours.* The older son has been treating his father's generosity to someone else as a withdrawal from his account, which is how wages work. It is not how a house works. If I had to name the thing to repent of, it would be that one specific mistake, not the resentment itself — the resentment is downstream, and honestly, it is what a person feels when they think the pot is fixed.",
        },
        {
          kind: 'p',
          text: 'And it is worth saying that nobody came out to the field to get him. That is in the text. Whoever ran that household could have sent someone. Your tiredness has a factual basis and the parable does not pretend otherwise.',
        },
        {
          kind: 'p',
          text: 'The one thing I would not do is let anyone tell you the story ends with him going in. It does not say. Jesus left him in the yard with the invitation open, in front of an audience of people exactly like him. I have never been sure whether that is a comfort or the sharpest thing in the whole chapter.',
        },
      ],
      commentary: [
        {
          label: 'The opening concession',
          text: 'It grants the friend\'s perception before adjusting it, which is what makes the adjustment audible. "You are hearing it correctly, and the sermon is slightly off" costs nothing and buys the rest of the paragraph.',
        },
        {
          label: 'It leads with an observation, not a doctrine',
          text: "The father never disputes the older son's facts. That is a thing on the page that most readers have not noticed, and noticing it is a gift rather than a correction.",
        },
        {
          label: 'The edge is kept',
          text: 'The last line refuses to resolve the parable, which is harder and more honest than either "so you are fine" or "so repent." It hands the friend the same open question Jesus handed the Pharisees.',
        },
        {
          label: 'Uncertainty is marked',
          text: '"If I had to name the thing" and "I have never been sure" are not hedging for its own sake. They mark exactly which parts are the speaker\'s reading rather than the text\'s claim.',
        },
      ],
      limits:
        'It is long for a conversation in a car park, and it does not ask the friend a single question — which, given everything Module 1 said about hearing first, is a real weakness. A better version might trade the fourth paragraph for "What would it have taken for someone to come out to the field?"',
    },
    {
      id: 's14',
      type: 'self-assess',
      title: 'Score your own answer',
      ability: 'answer',
      answersStepId: 's12',
      rubric: ['observation', 'perspective', 'compassion', 'grounding', 'clarity', 'uncertainty'],
    },
    {
      id: 's15',
      type: 'revision',
      title: 'Write it again',
      ability: 'answer',
      answersStepId: 's12',
      prompt:
        'Revise. If your first version had no question in it, add one and cut something to make room. If it had a question, sharpen the observation you are resting on.',
    },
    {
      id: 's16',
      type: 'practice',
      title: 'Take it out of the app',
      ability: 'live',
      assignment:
        'Pick any passage, article, or email you have read at least twice, and run exactly two moves over it: omission and change. Write down three things you had not registered. Then do the same to a conversation you had this week — what was not said, and where did the tone change?',
      window: 'Within five days',
      cautions: [
        'Do not run all six moves. Two, done properly, beat six done as a checklist.',
        'On the conversation: this is for understanding, not for building a case.',
      ],
      checkIn: 'Which of the three things you had missed was in plain sight the whole time?',
    },
    {
      id: 's17',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Is there a yard you are standing in? A celebration, a promotion, a reconciliation, a family occasion that you have not gone into — with reasons that are, as far as you can tell, entirely correct?',
      prayer:
        'The father came out to both sons. Ask, in your own words, to be found in the yard — and for the honesty to say what you actually want, rather than the smaller thing you have been asking for instead.',
    },
    {
      id: 's18',
      type: 'retrieval',
      title: 'Scheduled for later',
      ability: 'interpret',
      conceptIds: ['observation-moves', 'omission', 'shift-in-address', 'inattentional-blindness'],
      passageRefs: ['Luke 15:25-32', 'Proverbs 18:17', 'Proverbs 18:13'],
    },
  ],
}
