import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// jsdom does not implement scrolling; the app calls it on route changes.
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo

afterEach(() => {
  cleanup()
  localStorage.clear()
})
