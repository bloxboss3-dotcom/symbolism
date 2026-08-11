import { useContext } from 'react'
import { AppStateContext, type AppStateContextValue } from './context'

export function useAppState(): AppStateContextValue {
  const value = useContext(AppStateContext)
  if (!value) throw new Error('useAppState must be used inside <AppStateProvider>')
  return value
}
