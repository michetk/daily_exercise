import { createContext } from 'react'
import { useToggle } from '../../hooks/use-toggle'
import { IconHeaderToggleProviderProps } from './interfaces'
import { InitialValue } from './types'

export const IconHeaderToggleContext = createContext({} as InitialValue)

const IconHeaderToggleContextProvider = ({
  children,
}: IconHeaderToggleProviderProps) => {
  const value: InitialValue = (() => {
    const [isState, setState] = useToggle()
    return [isState, setState]
  })()

  return (
    <IconHeaderToggleContext.Provider value={value}>
      {children}
    </IconHeaderToggleContext.Provider>
  )
}

export default IconHeaderToggleContextProvider
