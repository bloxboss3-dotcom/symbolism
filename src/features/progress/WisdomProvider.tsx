import { useEffect, useMemo, useReducer, useRef, useState, type ReactNode } from 'react'
import { lastWriteFailed, loadState, saveState } from '../../lib/storage'
import { WisdomContext } from './context'
import { wisdomReducer, type WisdomAction } from './reducer'

/**
 * Writes are debounced so typing into a long answer does not serialise the
 * whole state on every keystroke, and flushed on hide so closing the tab or
 * locking the phone mid-lesson never loses the last few seconds of work.
 */
const WRITE_DELAY_MS = 350

export function WisdomProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wisdomReducer, undefined, loadState)
  const [persistenceBlocked, setPersistenceBlocked] = useState(false)
  const latest = useRef(state)
  latest.current = state

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const ok = saveState(state)
      setPersistenceBlocked(!ok && lastWriteFailed())
    }, WRITE_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [state])

  useEffect(() => {
    const flush = () => saveState(latest.current)
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    // `pagehide` is the reliable one on iOS Safari; `visibilitychange` covers
    // app switching without a navigation.
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onVisibility)
      flush()
    }
  }, [])

  const value = useMemo(
    () => ({ state, dispatch: dispatch as (action: WisdomAction) => void, persistenceBlocked }),
    [state, persistenceBlocked],
  )

  return <WisdomContext.Provider value={value}>{children}</WisdomContext.Provider>
}
