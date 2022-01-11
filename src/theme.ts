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
    fontSize: [`16px`, `16px`, `18px`],
    fontWeight: 400,
    lineHeight: [1.3, 1.3, 1.4],
  },
  body2: {
    fontSize: [`14px`, `14px`, `16px`],
    fontWeight: 400,
    lineHeight: 1.5,
  },
  heading1: {
    fontSize: ['3rem', '3rem', '4rem'],
    fontWeight: 600,
    lineHeight: [0.6, 1],
  },
  heading2: {
    fontSize: '3rem',
    fontWeight: 600,
    lineHeight: 1,
  },
  heading3: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1,
  },
  heading4: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1,
    // stop to figure out why it doesn't work
    textDecoration: 'underline',
  },
  heading5: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1,
  },
  heading6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1,
  },
}
const sizes = {
  ...baseTheme.sizes,
  section: 920,
  modal: 720,
}
const space = [0, 8, 16, 24, 40, 64]
const fonts = {
  ...baseTheme.fonts,
  standard: `Manrope, sans-serif`,
}
const colors = {
  ...modeDark.colors,
  brand: `#eafc99`,
  borderPrimary: modeDark.colors.textPrimary,
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

export default theme
