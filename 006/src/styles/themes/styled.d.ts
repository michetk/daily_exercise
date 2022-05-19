import { themeType } from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
