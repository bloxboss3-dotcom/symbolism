/**
 * The critical journey, on a 375px-wide screen:
 * first visit → onboarding → configure length → begin the morning routine →
 * pause/resume, go back, reload mid-session and continue → complete →
 * history shows the completion. Exercises acceptance criteria 1 and 2.
 */
import { expect, test } from '@playwright/test'

test('a first-time user completes a morning routine end to end', async ({ page }) => {
  await page.goto('./')

  // --- Onboarding ---------------------------------------------------------
  await expect(page.getByText('Be still, and know that I am God.')).toBeVisible()
  await page.getByTestId('onboard-next').click()
  await page.getByRole('button', { name: '5m', exact: true }).click()
  await page.getByTestId('onboard-next-2').click()
  // Skipping reminders must not trigger any permission prompt.
  await page.getByTestId('onboard-skip').click()

  // --- Home ---------------------------------------------------------------
  await expect(
    page.getByRole('heading', { name: /Good (morning|afternoon|evening)/ }),
  ).toBeVisible()
  await page.getByTestId('doorway-morning').click()

  // --- Start screen -------------------------------------------------------
  await expect(page.getByText('How long do you have?')).toBeVisible()
  await page.getByTestId('begin').click()

  // --- Part 1: Arrive -----------------------------------------------------
  await expect(page.getByRole('heading', { name: 'Arrive' })).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 2: Behold — test pause/resume here ----------------------------
  await expect(page.getByRole('heading', { name: 'Behold' })).toBeVisible()
  await page.getByRole('button', { name: 'Pause' }).click()
  await expect(page.getByText(/Paused/)).toBeVisible()
  await page.locator('main').getByRole('button', { name: 'Resume' }).click()
  await expect(page.getByRole('heading', { name: 'Behold' })).toBeVisible()

  // Go back one part, then forward again.
  await page.getByRole('button', { name: 'Go back a part' }).click()
  await expect(page.getByRole('heading', { name: 'Arrive' })).toBeVisible()
  await page.getByTestId('continue').click()
  await expect(page.getByRole('heading', { name: 'Behold' })).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 3: Guided Prayer — reload mid-session -------------------------
  await expect(page.getByRole('heading', { name: 'Guided Prayer' })).toBeVisible()
  await page.reload()
  // A reload lands paused at the same part, progress intact.
  await expect(page.getByRole('heading', { name: 'Guided Prayer' })).toBeVisible()
  await expect(page.getByText(/Paused/)).toBeVisible()
  await page.locator('main').getByRole('button', { name: 'Resume' }).click()
  await page.getByTestId('continue').click()

  // --- Part 4: Your Prayer (timed) ----------------------------------------
  await expect(page.getByRole('heading', { name: 'Your Prayer' })).toBeVisible()
  await expect(page.getByText(/nothing is recorded/i)).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 5: Silence (timed) --------------------------------------------
  await expect(page.getByRole('heading', { name: 'Silence' })).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 6: Scripture --------------------------------------------------
  await expect(page.getByRole('heading', { name: 'Scripture' })).toBeVisible()
  await expect(page.getByText('Psalm 63:1–8')).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 7: Stretch ----------------------------------------------------
  await expect(page.getByRole('heading', { name: 'Simple Stretch' })).toBeVisible()
  await expect(page.getByText(/Stop if anything hurts/)).toBeVisible()
  await page.getByTestId('continue').click()

  // --- Part 8: Sending → done ---------------------------------------------
  await expect(page.getByRole('heading', { name: 'Sending' })).toBeVisible()
  await page.getByTestId('continue').click()

  await expect(page.getByTestId('session-done')).toBeVisible()
  await expect(page.getByText('Go in peace.')).toBeVisible()
  await page.getByRole('link', { name: 'Return home' }).click()

  // --- History records the completion, gently -----------------------------
  await page.getByRole('link', { name: 'History' }).click()
  await expect(page.getByRole('heading', { name: 'A quiet record' })).toBeVisible()
  await expect(page.getByText('Earnestly I Seek You')).toBeVisible()
})
