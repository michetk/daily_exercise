import { createContext } from 'react'
import { useToggle } from '../../hooks/global/use-toggle'
import { IconHeaderToggleProviderProps } from './interfaces'
import { ValueInitial } from './types'

export const IconHeaderToggleContext = createContext({} as ValueInitial)

const IconHeaderToggleProvider = ({
  children,
}: IconHeaderToggleProviderProps) => {
  const value: ValueInitial = (() => {
    const [isState, setState] = useToggle()
    return [isState, setState]
  })()

  return (
    <IconHeaderToggleContext.Provider value={value}>
      {children}
    </IconHeaderToggleContext.Provider>
  )
}

export default IconHeaderToggleProvider
