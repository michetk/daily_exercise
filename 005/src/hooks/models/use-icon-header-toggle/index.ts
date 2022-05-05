import { useContext } from 'react'
import { IconHeaderToggleContext } from '../../../contexts/icon-header-toggle'
import { UseIconHeaderToggleHook } from './types'

export const useIconHeaderToggleContext: UseIconHeaderToggleHook = () => {
  const [isState, setState] = useContext(IconHeaderToggleContext)
  return [isState, setState]
}
