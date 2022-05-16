import { useState } from 'react'
import { UseToggleHook } from './types'

export const useToggle: UseToggleHook = alternateFunction => {
  const [isState, setState] = useState(false)

  function toggle() {
    setState(prev => !prev)
    if (alternateFunction) alternateFunction()
  }

  return [isState, toggle]
}
