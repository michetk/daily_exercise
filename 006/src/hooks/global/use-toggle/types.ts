export type UseToggleHook = (
  alternateFunction?: () => void
) => [boolean, () => void]
