import { createContext } from 'react'
import type { WisdomState } from '../../types/progress'
import type { WisdomAction } from './reducer'

export interface WisdomContextValue {
  state: WisdomState
  dispatch: (action: WisdomAction) => void
  /** True when the device refused to persist, so the UI can warn honestly. */
  persistenceBlocked: boolean
}

export const WisdomContext = createContext<WisdomContextValue | null>(null)
