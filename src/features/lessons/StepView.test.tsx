import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { CertaintyStep, QuizStep } from '../../types/content'
import type { StepResponse } from '../../types/progress'
import { StepView } from './StepView'
import { isPassiveStep } from './stepKinds'

const quiz: QuizStep = {
  id: 'q1',
  type: 'quiz',
  prompt: 'What kind of claim is this?',
  options: [
    { id: 'a', text: 'A guarantee', feedback: 'This is the reading that gets people hurt.' },
    { id: 'b', text: 'An observation', correct: true, feedback: 'Yes — a wisdom saying.' },
  ],
  explanation: 'Genre first, meaning second.',
}

const certainty: CertaintyStep = {
  id: 'c1',
  type: 'certainty',
  prompt: 'Sort these claims.',
  claims: [
    { id: 'x', text: 'The text says so.', tier: 'stated', why: 'It is on the page.' },
    { id: 'y', text: 'You invented this.', tier: 'unsupported', why: 'Nothing supports it.' },
  ],
}

function renderStep(
  step: QuizStep | CertaintyStep,
  {
    revealed = false,
    responses = {},
  }: { revealed?: boolean; responses?: Record<string, StepResponse> } = {},
) {
  const onRespond = vi.fn()
  render(
    <StepView
      step={step}
      responses={responses}
      onRespond={onRespond}
      revealed={revealed}
      voiceEnabled={false}
    />,
  )
  return { onRespond }
}

describe('isPassiveStep', () => {
  it('treats reading steps as passive and questions as not', () => {
    expect(isPassiveStep({ id: 'e', type: 'encounter', body: [] })).toBe(true)
    expect(isPassiveStep(quiz)).toBe(false)
  })
})

describe('quiz step', () => {
  it('withholds feedback until an answer is given', () => {
    renderStep(quiz)
    expect(screen.getByText('What kind of claim is this?')).toBeInTheDocument()
    expect(screen.queryByText(/wisdom saying/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Genre first/)).not.toBeInTheDocument()
  })

  it('reports the chosen option', async () => {
    const user = userEvent.setup()
    const { onRespond } = renderStep(quiz)
    await user.click(screen.getByText('An observation'))

    expect(onRespond).toHaveBeenCalledTimes(1)
    expect(onRespond.mock.calls[0][0]).toMatchObject({ kind: 'choice', value: 'b' })
  })

  it('shows the explanation and the right answer once revealed', () => {
    renderStep(quiz, {
      revealed: true,
      responses: { q1: { kind: 'choice', value: 'a', updatedAt: '2026-01-01T00:00:00.000Z' } },
    })
    expect(screen.getByText(/wisdom saying/i)).toBeInTheDocument()
    expect(screen.getByText(/gets people hurt/i)).toBeInTheDocument()
    expect(screen.getByText(/Genre first/)).toBeInTheDocument()
  })
})

describe('certainty step', () => {
  it('will not submit until every claim is sorted', async () => {
    const user = userEvent.setup()
    const { onRespond } = renderStep(certainty)

    const submit = screen.getByRole('button', { name: /check my sorting/i })
    expect(submit).toBeDisabled()

    await user.click(screen.getAllByRole('button', { name: 'Stated' })[0])
    expect(submit).toBeDisabled()

    await user.click(screen.getAllByRole('button', { name: 'Unsupported' })[1])
    expect(submit).toBeEnabled()

    await user.click(submit)
    expect(onRespond).toHaveBeenCalledWith(
      expect.objectContaining({ kind: 'map', values: { x: 'stated', y: 'unsupported' } }),
    )
  })

  it('explains each answer after revealing', () => {
    renderStep(certainty, {
      revealed: true,
      responses: {
        c1: {
          kind: 'map',
          values: { x: 'stated', y: 'possible' },
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
      },
    })
    expect(screen.getByText(/It is on the page/)).toBeInTheDocument()
    expect(screen.getByText(/Nothing supports it/)).toBeInTheDocument()
  })
})
