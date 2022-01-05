import { FabricTheme } from '@centrifuge/fabric'
import { baseTheme } from '@centrifuge/fabric/dist/theme/tokens/baseTheme'
import { modeDark } from '@centrifuge/fabric/dist/theme/tokens/modeDark'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends FabricTheme {
    fonts: { [K in keyof typeof fonts]: string }
    mediaQueries: { [K in keyof typeof mediaQueries]: string }
  }
}

const breakpoints = [`600px`, `800px`, `1140px`, `1920px`]
const typography = {
  ...baseTheme.typography,
  body1: {
    fontSize: [`16px`, `16px`, `20px`],
    fontWeight: 400,
    lineHeight: 1.5,
  },
  heading1: {
    fontSize: [`4rem`, `5.25rem`, `7.125rem`],
    fontWeight: 600,
    lineHeight: 1,
  },
}
const sizes = {
  ...baseTheme.sizes,
  container: 1420,
}
const space = [0, 8, 16, 24, 40, 64]
const fonts = {
  ...baseTheme.fonts,
  standard: `Manrope, sans-serif`,
}
const colors = {
  ...modeDark.colors,
  brand: `#eafc99`,
}
const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
}

export const theme: DefaultTheme = {
  ...baseTheme,
  ...modeDark,
  breakpoints: Object.assign(breakpoints, {
    M: breakpoints[0],
    S: breakpoints[1],
    L: breakpoints[2],
    XL: breakpoints[3],
  }),
  typography,
  sizes,
  fonts,
  colors,
  space: Object.assign(space, {
    gutterMobile: space[1],
    gutterTablet: space[2],
    gutterDesktop: space[3],
  }),
  mediaQueries,
}

export type Theme = typeof theme
