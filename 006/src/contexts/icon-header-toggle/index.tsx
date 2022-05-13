import { createContext } from 'react'
import { useToggle } from '../../hooks/global/use-toggle'
import { IconHeaderToggleProviderProps } from './interfaces'
import { InitialValue } from './types'

export const IconHeaderToggleContext = createContext({} as InitialValue)

const IconHeaderToggleProvider = ({
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

export default IconHeaderToggleProvider
