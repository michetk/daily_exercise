import { useContext, useState } from 'react'
import { UseToggleHook } from './types'

export const useToggle: UseToggleHook = alternateFunction => {
  if (typeof alternateFunction === 'object') {
    const [isState, setState] = useContext(alternateFunction)
    return [isState, setState]
  }

  const [isState, setState] = useState(false)

  function toggle() {
    setState(prev => !prev)
    if (typeof alternateFunction === 'function') alternateFunction()
  }

  return [isState, toggle]
}
