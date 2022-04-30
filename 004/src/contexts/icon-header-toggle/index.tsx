import { createContext, useMemo } from 'react'
import { useToggle } from '../../hooks/global/use-toggle'
import { IconHeaderToggleProviderProps } from './interfaces'
import { ValueInitial } from './types'

export const IconHeaderToggleContext = createContext({} as ValueInitial)

const IconHeaderToggleProvider = ({
  children,
}: IconHeaderToggleProviderProps) => {
  const [isState, setState] = useToggle()
  const value = useMemo(() => ({ isState, setState }), [isState])

  return (
    <IconHeaderToggleContext.Provider value={value}>
      {children}
    </IconHeaderToggleContext.Provider>
  )
}

export default IconHeaderToggleProvider
