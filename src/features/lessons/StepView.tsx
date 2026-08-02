import type { LessonStep } from '../../types/content'
import type { StepResponse } from '../../types/progress'
import {
  CertaintyView,
  ConnectionView,
  DecisionView,
  EvidenceView,
  ObservationView,
  QuizView,
  RankingView,
} from './steps/choices'
import {
  FirstJudgmentView,
  PerspectiveView,
  PracticeView,
  ReflectionView,
  RevisionView,
  SelfAssessView,
  SocraticView,
  WiseAnswerView,
} from './steps/inputs'
import {
  EncounterView,
  ExemplarView,
  LensesView,
  RetrievalView,
  TeachingView,
} from './steps/passive'

export function StepView({
  step,
  responses,
  onRespond,
  revealed,
  voiceEnabled,
}: {
  step: LessonStep
  responses: Record<string, StepResponse>
  onRespond: (response: StepResponse) => void
  revealed: boolean
  voiceEnabled: boolean
}) {
  const response = responses[step.id]

  const answerText = (stepId: string): string | undefined => {
    const found = responses[stepId]
    return found?.kind === 'text' ? (found.revised ?? found.value) : undefined
  }

  switch (step.type) {
    case 'encounter':
      return <EncounterView step={step} />
    case 'teaching':
      return <TeachingView step={step} />
    case 'lenses':
      return <LensesView step={step} />
    case 'retrieval':
      return <RetrievalView step={step} />
    case 'exemplar':
      return <ExemplarView step={step} learnerAnswer={answerText(step.answersStepId)} />

    case 'first-judgment':
      return (
        <FirstJudgmentView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
        />
      )
    case 'socratic':
      return (
        <SocraticView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'perspective':
      return (
        <PerspectiveView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
        />
      )
    case 'wise-answer':
      return (
        <WiseAnswerView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
          voiceEnabled={voiceEnabled}
        />
      )
    case 'revision':
      return (
        <RevisionView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
          originalAnswer={answerText(step.answersStepId)}
        />
      )
    case 'self-assess':
      return (
        <SelfAssessView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
          answer={answerText(step.answersStepId)}
        />
      )
    case 'practice':
      return (
        <PracticeView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'reflection':
      return (
        <ReflectionView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )

    case 'observation':
      return (
        <ObservationView
          step={step}
          response={response}
          onRespond={onRespond}
          revealed={revealed}
        />
      )
    case 'certainty':
      return (
        <CertaintyView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'quiz':
      return <QuizView step={step} response={response} onRespond={onRespond} revealed={revealed} />
    case 'evidence':
      return (
        <EvidenceView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'ranking':
      return (
        <RankingView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'decision':
      return (
        <DecisionView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )
    case 'connection':
      return (
        <ConnectionView step={step} response={response} onRespond={onRespond} revealed={revealed} />
      )

    default:
      return null
  }
}
