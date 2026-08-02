import { useContext } from 'react'
import { WisdomContext, type WisdomContextValue } from './context'

export function useWisdom(): WisdomContextValue {
  const value = useContext(WisdomContext)
  if (!value) throw new Error('useWisdom must be used inside <WisdomProvider>')
  return value
}
