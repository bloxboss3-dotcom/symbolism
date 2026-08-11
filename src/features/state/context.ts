import { createContext } from 'react'
import type React from 'react'
import type { AppState } from '../../lib/storage'
import type { AppAction } from './AppStateProvider'

export type AppStateContextValue = {
  state: AppState
  dispatch: React.Dispatch<AppAction>
  persistenceBlocked: boolean
}

export const AppStateContext = createContext<AppStateContextValue | null>(null)
