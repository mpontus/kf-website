import { FabricTheme } from '@centrifuge/fabric'
import { baseTheme } from '@centrifuge/fabric/dist/theme/tokens/baseTheme'
import { modeDark } from '@centrifuge/fabric/dist/theme/tokens/modeDark'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends FabricTheme {
    fonts: { [K: string]: string }
  }
}

function annotate<A, R>(a: A, f: (a: A) => R): A & R {
  return Object.assign(a, f(a))
}

export const theme: DefaultTheme = {
  ...baseTheme,
  ...modeDark,
  breakpoints: annotate([`480px`, `600px`, `1140px`, `1920px`], ([M, S, L, XL]) => ({ M, S, L, XL })),
  typography: {
    ...baseTheme.typography,
    body1: {
      fontSize: [`16px`, `16px`, `20px`],
      fontWeight: 400,
      lineHeight: 1.5,
    },
    heading1: {
      fontSize: [`4rem`, `5.25rem`, `7.4rem`],
      fontWeight: 600,
      lineHeight: 1,
    },
    heading2: {
      fontSize: [`4rem`, `5.25rem`, `7.4rem`],
      fontWeight: 600,
      lineHeight: 1,
    },
  },
  sizes: {
    ...baseTheme.sizes,
    container: 1420,
  },
  fonts: {
    ...baseTheme.fonts,
    standard: `Manrope, sans-serif`,
  },
  colors: {
    ...modeDark.colors,
    brand: `#eafc99`,
  },
  space: annotate([0, 8, 16, 24, 40, 64], (space) => ({
    gutterMobile: space[1],
    gutterTablet: space[2],
    gutterDesktop: space[3],
  })),
}

export type Theme = typeof theme
