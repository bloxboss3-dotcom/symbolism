import type { TransferTrial } from '../../types/content'

/**
 * Transfer trials: a principle from one lesson, dropped into a situation that
 * looks nothing like where it was learned. Short by design — the difficulty is
 * recognition, not analysis, and recognition is the only real test of whether a
 * principle has been acquired or merely filed.
 */

const trialGenre: TransferTrial = {
  id: 't-genre',
  title: 'The Mantra on the Wall',
  conceptId: 'proverb-not-promise',
  fromLessonId: 'l03-1',
  minutes: 10,
  steps: [
    {
      id: 't1s1',
      type: 'encounter',
      title: 'A sentence in forty-point type',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'A company you have joined has a sentence painted on the wall of the main room: **Move fast and take the risk — the biggest risk is standing still.**',
        },
        {
          kind: 'p',
          text: 'It is quoted in onboarding. It appears in performance reviews. Last month a team shipped a payments change without a rollback plan, and when it failed, the retrospective concluded that the failure was "consistent with our values" and no process changed.',
        },
        {
          kind: 'p',
          text: 'The founder is sincere. The sentence was true about the thing it was originally said about, which was a decision in 2019 to enter a market a year before it was comfortable.',
        },
      ],
    },
    {
      id: 't1s2',
      type: 'quiz',
      title: 'What is happening?',
      ability: 'interpret',
      prompt: 'Which diagnosis fits?',
      options: [
        {
          id: 'a',
          text: 'The sentence is false and should be removed.',
          feedback:
            'It is not false. It was an accurate observation about a real situation, and it is probably true of most decisions most of the time. Attacking its truth is the wrong front.',
        },
        {
          id: 'b',
          text: 'An observation about how things generally go has been promoted into a rule that overrides judgement.',
          correct: true,
          feedback:
            'Exactly the Proverbs 22:6 error in a different building. A generalisation given to shape instincts has become a warrant that ends deliberation — and its function in the retrospective was to prevent a finding.',
        },
        {
          id: 'c',
          text: 'The company has bad engineering practices.',
          feedback:
            'Probably true and downstream. The interesting question is what makes the bad practice unchallengeable, and the answer is on the wall.',
        },
        {
          id: 'd',
          text: 'The founder is using the value cynically.',
          feedback:
            'Nothing suggests that. As with Bogdan and Psalm 91, the sincerity is what makes the error durable.',
        },
      ],
      explanation:
        'The tell is the retrospective. A saying has become load-bearing for a conclusion when invoking it *closes* an inquiry rather than informing one.',
    },
    {
      id: 't1s3',
      type: 'wise-answer',
      title: 'Say it in the retrospective',
      ability: 'answer',
      brief:
        'You are in the next retrospective, and the phrase is used again to close down a question. Write what you say. Four sentences maximum. You are new.',
      audience: 'A room that believes the sentence, including people senior to you.',
      constraints: [
        'Do not attack the value.',
        'Do not use the words "proverb," "genre," or anything from this app.',
        'Give them a distinction they can use next week.',
      ],
      rubric: ['clarity', 'perspective', 'usefulness', 'action'],
      minWords: 50,
    },
    {
      id: 't1s4',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 't1s3',
      body: [
        {
          kind: 'p',
          text: '"I think that is right, and I want to check we are using it the way it was meant. When it was said in 2019 it was a reason to *make* a decision that was being avoided. Here it is being used to explain a decision after the fact, which is a different job. Could we separate the two — is the question whether we were right to move fast, or whether we should have had a rollback? Because I think the answer to the first is yes."',
        },
      ],
      commentary: [
        {
          label: 'It concedes first',
          text: '"I think that is right" — the value is not the target, and saying so early is what buys the rest a hearing.',
        },
        {
          label: 'The distinction is the whole contribution',
          text: 'A reason to act versus a justification after the fact. Concrete, portable, and it does not require anyone to abandon anything.',
        },
        {
          label: 'It answers the first question itself',
          text: '"The answer to the first is yes." It gives the room the win it needs so the second question can be asked without a defeat attached.',
        },
      ],
    },
    {
      id: 't1s5',
      type: 'retrieval',
      title: 'Filed',
      ability: 'interpret',
      conceptIds: ['proverb-not-promise', 'genre'],
      passageRefs: ['Proverbs 26:4-5'],
    },
  ],
}

const trialEarlier: TransferTrial = {
  id: 't-earlier',
  title: 'Three Weeks of Not Ringing',
  conceptId: 'the-earlier-decision',
  fromLessonId: 'l05-1',
  minutes: 10,
  steps: [
    {
      id: 't2s1',
      type: 'encounter',
      title: 'A voicemail from a Tuesday',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Three weeks ago your aunt left a voicemail. It was ninety seconds, warm, and ended with "no rush, love, just when you get a minute."',
        },
        {
          kind: 'p',
          text: 'Week one you meant to ring on Sunday. Week two you thought about it in the car and decided the evening was better. In week three you found that you had started slightly dreading it, and you noticed you had begun composing an explanation.',
        },
        {
          kind: 'p',
          text: 'This morning you saw her name and did not pick up.',
        },
      ],
    },
    {
      id: 't2s2',
      type: 'first-judgment',
      title: 'Where was the decision?',
      ability: 'discern',
      prompt:
        'Name the moment this became a thing rather than a task. Then say what it will cost to ring now compared with what it would have cost in week one.',
      minWords: 35,
    },
    {
      id: 't2s3',
      type: 'teaching',
      title: 'The same curve',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: "This is Wren's £86 with no money in it. The decisive moment is not this morning's missed call; it is the point where the task acquired an explanation. Once you are composing a defence, the thing has stopped being an errand and become a position.",
        },
        {
          kind: 'p',
          text: 'And the curve is the same. In week one it costs nothing. In week three it costs an apology. At six months it costs a conversation about why you did not ring for six months, and by then the subject of the call is not the subject of the call.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'The transfer',
          text: 'Undisclosed things appreciate — and so do undone ones, for the same reason. Both accumulate a story about what the delay means, and the story is what eventually has to be dealt with.',
        },
      ],
    },
    {
      id: 't2s4',
      type: 'practice',
      title: 'Now, then',
      ability: 'live',
      assignment:
        'Ring the person. Do not open with an explanation for the delay — an apology of one clause at most, then the actual call. If it is not a phone call in your case, do the equivalent thing today.',
      window: 'Today',
      cautions: ['The explanation you have been composing is for you, not for them. Leave it out.'],
      checkIn: 'How long did the awkwardness actually last?',
    },
    {
      id: 't2s5',
      type: 'retrieval',
      title: 'Filed',
      ability: 'interpret',
      conceptIds: ['the-earlier-decision', 'precommitment'],
      passageRefs: ['James 1:14-15'],
    },
  ],
}

const trialLadder: TransferTrial = {
  id: 't-ladder',
  title: 'The Photograph and the Caption',
  conceptId: 'ladder-of-inference',
  fromLessonId: 'l04-1',
  minutes: 10,
  steps: [
    {
      id: 't3s1',
      type: 'encounter',
      title: 'Fourteen seconds of a stranger',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'A clip circulates. A man in a supermarket, filmed from behind by another shopper, is speaking sharply to a member of staff. The staff member looks down. The clip is fourteen seconds and begins mid-sentence.',
        },
        {
          kind: 'p',
          text: 'The caption reads: *This is what entitlement looks like.* By evening it has been shared two hundred thousand times, his employer has been identified, and there is a thread of people describing what should happen to him.',
        },
        {
          kind: 'p',
          text: 'You have watched it. You have formed a view. You have not shared it, and you have thought about it three times since.',
        },
      ],
    },
    {
      id: 't3s2',
      type: 'certainty',
      title: 'What do you know?',
      ability: 'interpret',
      prompt: 'Sort. Be strict.',
      claims: [
        {
          id: 'x1',
          text: 'A man spoke sharply to a member of staff.',
          tier: 'stated',
          why: 'Visible in the clip, and about the only thing that is.',
        },
        {
          id: 'x2',
          text: 'The staff member was uncomfortable.',
          tier: 'implied',
          why: 'She looks down. Strong, and note it is still an inference from posture.',
        },
        {
          id: 'x3',
          text: 'The man was in the wrong.',
          tier: 'possible',
          why: 'Very likely on the available frame, and you do not have the first sentence, the previous ten minutes, or any of the following week.',
        },
        {
          id: 'x4',
          text: 'He is an entitled person.',
          tier: 'unsupported',
          why: 'Fourteen seconds, converted into a character. This is the fundamental attribution error at scale, and the caption did the conversion before you saw anything.',
        },
        {
          id: 'x5',
          text: 'His employer should act.',
          tier: 'unsupported',
          why: 'A demand, not a finding. It is entirely built on the previous rung and inherits all of its weakness.',
        },
      ],
    },
    {
      id: 't3s3',
      type: 'socratic',
      title: 'The uncomfortable half',
      ability: 'discern',
      challenge:
        'It is easy to be careful about a stranger you have no stake in. The clip you actually shared last year was one where the person deserved it — and you knew that the same way you know this.',
      prompt:
        'What rule would you follow that would have caught that one? It has to be a rule you could apply in the thirty seconds before sharing.',
      helper:
        'Rules that require you to research first will not survive contact with a phone at eleven at night.',
      reveal: [
        {
          kind: 'list',
          items: [
            '**State the conclusion without the clip.** "A man I have never met is a bad person and should lose his job." If it will not survive being said flatly, do not pass it on. This is Module 11\'s narrative-transportation test, applied to yourself.',
            '**Ask what the first sentence was.** Almost every clip of this kind begins after something. Noticing that you do not have it takes two seconds and is usually enough.',
            '**Ask what it costs you to be wrong.** Nothing — which is precisely the problem. The person who pays for your error is not in the transaction.',
          ],
        },
      ],
    },
    {
      id: 't3s4',
      type: 'reflection',
      title: 'Before you close',
      ability: 'live',
      prompt:
        'Whose fourteen seconds are you currently holding as though they were a whole person? It does not have to be a stranger on the internet. It is more useful if it is not.',
    },
    {
      id: 't3s5',
      type: 'retrieval',
      title: 'Filed',
      ability: 'interpret',
      conceptIds: ['ladder-of-inference', 'attribution-error', 'alternative-hypotheses'],
      passageRefs: ['Proverbs 18:17'],
    },
  ],
}

const trialRighting: TransferTrial = {
  id: 't-righting',
  title: 'The Argument You Won',
  conceptId: 'righting-reflex',
  fromLessonId: 'l10-1',
  minutes: 10,
  steps: [
    {
      id: 't4s1',
      type: 'encounter',
      title: 'Sunday, at the table',
      ability: 'see',
      body: [
        {
          kind: 'p',
          text: 'Your sixteen-year-old says, over lunch and apparently at random, that she is not sure she believes any of it any more.',
        },
        {
          kind: 'p',
          text: 'You are good at this. You have read the books. Over the following eleven minutes you answer every point she raises — the suffering one, the science one, the one about the people at church — and you answer them well.',
        },
        {
          kind: 'p',
          text: 'By minute nine she is making arguments she was not making at minute one, and making them with more conviction. By minute eleven she has said something she has never said before: that she thinks the whole thing is probably made up.',
        },
        {
          kind: 'p',
          text: 'You won every exchange.',
        },
      ],
    },
    {
      id: 't4s2',
      type: 'first-judgment',
      title: 'What happened?',
      ability: 'discern',
      prompt:
        'Describe the mechanism, and say what she came to the table to do — which was almost certainly not to debate you.',
      minWords: 40,
    },
    {
      id: 't4s3',
      type: 'teaching',
      title: 'You supplied the other side',
      ability: 'interpret',
      body: [
        {
          kind: 'p',
          text: 'She arrived ambivalent. Ambivalence has two sides, and you took one of them, so she took the other — and then heard herself defending it for eleven minutes. People commit to positions by voicing them. She left the table further from where she started, and you caused it by being right.',
        },
        {
          kind: 'p',
          text: 'This is the righting reflex operating in the situation where the stakes make it hardest to resist. Note also that she raised it at lunch, at random, in a low-stakes setting — which is what a person does when they are testing whether a subject is safe.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'What she came for',
          text: 'Almost certainly not answers; she can find answers. To find out what happens to her here if she says it. That question got answered in the first thirty seconds, and the remaining ten and a half minutes were about something else.',
        },
      ],
    },
    {
      id: 't4s4',
      type: 'wise-answer',
      title: 'The first thirty seconds, again',
      ability: 'answer',
      brief:
        'Rewind. She has just said it. Write what you say in the first thirty seconds. Three sentences maximum.',
      audience: 'A sixteen-year-old testing whether this is sayable in this house.',
      constraints: [
        'No answers to any of her points.',
        'No reassurance that she will come back to it.',
        'She must be able to say more if she wants to, and stop if she does not.',
      ],
      rubric: ['perspective', 'compassion', 'action', 'clarity'],
      minWords: 40,
    },
    {
      id: 't4s5',
      type: 'exemplar',
      title: 'One strong answer',
      ability: 'answer',
      answersStepId: 't4s4',
      body: [
        {
          kind: 'p',
          text: '"Right. Thank you for telling me — I know that is not an easy thing to say at lunch. I am not going to argue with you about it, today or ever, and nothing about us changes. If you want to talk about any of it I would genuinely like to hear where you have got to, and if you would rather not, that is completely fine."',
        },
      ],
      commentary: [
        {
          label: 'It answers the real question first',
          text: '"Nothing about us changes" is the thing she came to find out. Everything else can wait weeks.',
        },
        {
          label: 'The undertaking not to argue',
          text: '"Today or ever" is a large promise and it is the one that makes the subject re-openable. A parent who argues once will not be told the second thing.',
        },
        {
          label: 'The invitation is symmetrical',
          text: 'Talking and not talking are offered as equally acceptable, which is what stops the invitation from being a request.',
        },
      ],
      limits:
        'Keeping "I am not going to argue with you" is genuinely hard over years, and a version of it you cannot keep is worse than not saying it. It also does not mean saying nothing forever — it means she chooses when.',
    },
    {
      id: 't4s6',
      type: 'retrieval',
      title: 'Filed',
      ability: 'interpret',
      conceptIds: ['righting-reflex', 'give-the-work-back', 'presenting-problem'],
      passageRefs: ['Proverbs 18:13', 'James 1:19'],
    },
  ],
}

export const TRIALS: TransferTrial[] = [trialGenre, trialEarlier, trialLadder, trialRighting]
