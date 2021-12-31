import { Theme as BaseTheme } from 'styled-system'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

const makeTheme = <T extends BaseTheme>(theme: T): T => theme

export const theme = makeTheme({
  breakpoints: [`481px`, `601px`, `1141px`, `1921px`],
  colors: {
    text: `#fff`,
    background: `#000`,
    primary: `#f00`,
    secondary: `#0f0`,
  },
  fonts: {
    body: `Manrope, sans-serif`,
    heading: `inherit`,
    secondary: `Questrial, sans-serif`,
  },
  space: [0, 8, 16, 24, 40, 64],
  sizes: {
    container: 1440,
    header: 132,
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  text: {
    body1: {
      marginBottom: [1],
    },
    heading: {
      fontSize: [`4rem`, `5.25rem`, `7.4rem`],
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      borderBottom: `primary`,
      marginBottom: [2],
    },
  },
  borders: {
    primary: `2px solid #fff`,
  },
  styles: {
    root: {
      margin: 0,
      fontSize: [`16px`, `16px`, `20px`],
      fontFamily: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
      color: `text`,
      backgroundColor: `background`,
    },
  },
})

export type Theme = typeof theme
