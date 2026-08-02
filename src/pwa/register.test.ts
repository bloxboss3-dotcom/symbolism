import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { registerServiceWorker } from './register'

/**
 * The registration is kicked off from a React effect, which runs after paint.
 * By then the window `load` event has normally already fired, so registering
 * from a `load` listener alone silently does nothing — no precache, no offline
 * mode, no update banner, and no error anywhere to show for it.
 */

type FakeRegistration = {
  waiting: null
  installing: null
  addEventListener: ReturnType<typeof vi.fn>
}

function stubServiceWorker({ controlled = false }: { controlled?: boolean } = {}) {
  const register = vi.fn(
    async (_url: string, _options?: RegistrationOptions): Promise<FakeRegistration> => ({
      waiting: null,
      installing: null,
      addEventListener: vi.fn(),
    }),
  )
  const listeners: Record<string, (() => void)[]> = {}
  Object.defineProperty(navigator, 'serviceWorker', {
    configurable: true,
    value: {
      register,
      controller: controlled ? {} : null,
      addEventListener: (type: string, fn: () => void) => {
        listeners[type] = [...(listeners[type] ?? []), fn]
      },
    },
  })
  return {
    register,
    fire: (type: string) => (listeners[type] ?? []).forEach((fn) => fn()),
  }
}

function setReadyState(value: DocumentReadyState) {
  Object.defineProperty(document, 'readyState', { configurable: true, value })
}

describe('registerServiceWorker', () => {
  const originalReadyState = document.readyState
  let register: ReturnType<typeof stubServiceWorker>['register']

  beforeEach(() => {
    // Registration is deliberately skipped in development, where Vite serves
    // modules unbundled and a precache would fight hot reloading. The tests are
    // about the production path.
    vi.stubEnv('DEV', false)
    register = stubServiceWorker().register
  })

  afterEach(() => {
    setReadyState(originalReadyState)
    Reflect.deleteProperty(navigator, 'serviceWorker')
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('registers immediately when the page has already loaded', () => {
    setReadyState('complete')

    registerServiceWorker(() => {})

    expect(register).toHaveBeenCalledTimes(1)
    expect(register.mock.calls[0][0]).toMatch(/sw\.js$/)
  })

  it('waits for load when the page is still loading, then registers once', () => {
    setReadyState('loading')

    registerServiceWorker(() => {})
    expect(register).not.toHaveBeenCalled()

    window.dispatchEvent(new Event('load'))
    expect(register).toHaveBeenCalledTimes(1)

    // The listener is registered with `once`, so a second load cannot double up.
    window.dispatchEvent(new Event('load'))
    expect(register).toHaveBeenCalledTimes(1)
  })

  it('does nothing when the browser has no service worker support', () => {
    setReadyState('complete')
    Reflect.deleteProperty(navigator, 'serviceWorker')

    expect(() => registerServiceWorker(() => {})).not.toThrow()
  })

  describe('reloading on controllerchange', () => {
    // The worker claims its clients, so a first install fires `controllerchange`
    // without any update having happened. Reloading then would refresh the page
    // out from under a first-time visitor, possibly mid-answer.
    let reload: ReturnType<typeof vi.fn>

    beforeEach(() => {
      setReadyState('complete')
      reload = vi.fn()
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { ...window.location, reload },
      })
    })

    it('does not reload when a first install claims an uncontrolled page', () => {
      const { fire } = stubServiceWorker({ controlled: false })

      registerServiceWorker(() => {})
      fire('controllerchange')

      expect(reload).not.toHaveBeenCalled()
    })

    it('reloads once when a new worker replaces the one already in control', () => {
      const { fire } = stubServiceWorker({ controlled: true })

      registerServiceWorker(() => {})
      fire('controllerchange')
      fire('controllerchange')

      expect(reload).toHaveBeenCalledTimes(1)
    })
  })
})
