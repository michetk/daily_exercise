import { Context } from 'react'

export type UseToggleHook = (
  alternateFunction?: (() => void) | Context<any>
) => [boolean, () => void]
