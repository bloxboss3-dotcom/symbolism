/**
 * Component-level journey checks: a first visit lands on onboarding, the
 * flow reaches home, and a session start screen renders with its length
 * choices. (The full end-to-end journey lives in e2e/journey.spec.ts.)
 */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('first-run experience', () => {
  it('lands a new user on calm onboarding, then home', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1: arrival
    expect(screen.getByText(/Be still, and know that I am God/i)).toBeInTheDocument()
    await user.click(screen.getByTestId('onboard-next'))

    // Step 2: duration
    expect(screen.getByText(/How long would you like a session/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '20m' }))
    await user.click(screen.getByTestId('onboard-next-2'))

    // Step 3: reminders are optional and skippable without any permission prompt
    expect(screen.getByText(/A gentle reminder\?/i)).toBeInTheDocument()
    await user.click(screen.getByTestId('onboard-skip'))

    // Home: both doorways and the Scripture invitation
    expect(
      await screen.findByRole('heading', { name: /Good (morning|afternoon|evening)/i }),
    ).toBeInTheDocument()
    expect(screen.getByTestId('doorway-morning')).toBeInTheDocument()
    expect(screen.getByText(/Evening/)).toBeInTheDocument()
  })

  it('remembers onboarding and shows the session start screen with length choices', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('onboard-next'))
    await user.click(screen.getByTestId('onboard-next-2'))
    await user.click(screen.getByTestId('onboard-skip'))

    await user.click(screen.getByTestId('doorway-morning'))
    expect(await screen.findByText(/How long do you have\?/i)).toBeInTheDocument()
    expect(screen.getByRole('group', { name: /Session length/i })).toBeInTheDocument()
    expect(screen.getByTestId('begin')).toBeInTheDocument()
  })
})
