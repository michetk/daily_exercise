import { useContext } from 'react'
import { IconHeaderToggleContext } from '../../../contexts/icon-header-toggle'
import { UseIconHeaderToggleContextHook } from './types'

export const useIconHeaderToggleContext: UseIconHeaderToggleContextHook =
  () => {
    const [isState, setState] = useContext(IconHeaderToggleContext)

    return [isState, setState]
  }
