/**
 * Six gentle movements. Deliberately simple and secondary: the body settles
 * so attention can return to God. Every stretch is skippable, and the UI
 * carries a standing note: stop if anything hurts, and choose what is safe
 * for you.
 */
import type { Stretch } from '../schemas'

export const stretches: Stretch[] = [
  {
    id: 'neck-release',
    name: 'Neck release',
    instruction:
      'Let your right ear drift toward your right shoulder, shoulders heavy. Breathe. Return, then repeat to the left.',
    seconds: 40,
    posture: 'either',
    figure: 'neck',
    figureDescription: 'A seated figure gently tilting the head toward one shoulder.',
    sleepFriendly: true,
  },
  {
    id: 'shoulder-rolls',
    name: 'Shoulder rolls',
    instruction:
      'Roll your shoulders slowly backward, four or five times, letting them fall a little lower each time.',
    seconds: 30,
    posture: 'either',
    figure: 'shoulders',
    figureDescription: 'A figure with arrows tracing slow backward circles at the shoulders.',
    sleepFriendly: true,
  },
  {
    id: 'wrist-opener',
    name: 'Wrist opener',
    instruction:
      'Extend one arm, palm up. With the other hand, gently draw the fingers down and back. Switch hands halfway.',
    seconds: 40,
    posture: 'either',
    figure: 'wrists',
    figureDescription: 'An extended arm with the opposite hand easing the fingers back.',
    sleepFriendly: false,
  },
  {
    id: 'seated-side-body',
    name: 'Side-body reach',
    instruction:
      'Sit tall, one hand resting beside you. Reach the other arm up and over, lengthening your side. Switch halfway.',
    seconds: 50,
    posture: 'seated',
    figure: 'side-body',
    figureDescription: 'A seated figure arching one arm overhead in a side bend.',
    sleepFriendly: true,
  },
  {
    id: 'standing-reach',
    name: 'Morning reach',
    instruction:
      'Stand and reach both arms overhead, opening the chest. Look gently upward if that feels fine, then release.',
    seconds: 30,
    posture: 'standing',
    figure: 'reach',
    figureDescription: 'A standing figure with both arms lifted toward the sky.',
    sleepFriendly: false,
  },
  {
    id: 'soft-fold',
    name: 'Soft forward fold',
    instruction:
      'From standing or sitting, hinge forward only as far as is comfortable, letting your arms and head hang heavy.',
    seconds: 40,
    posture: 'either',
    figure: 'fold',
    figureDescription: 'A figure folding gently forward with relaxed arms.',
    sleepFriendly: true,
  },
]
