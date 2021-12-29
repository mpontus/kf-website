import { BoxProps, FabricTheme } from '@centrifuge/fabric'
import { ThemeBreakpoints } from '@centrifuge/fabric/dist/theme'
import { baseTheme } from '@centrifuge/fabric/src/theme/tokens/baseTheme'
import { modeDark } from '@centrifuge/fabric/src/theme/tokens/modeDark'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SpaceProps, TypographyProps } from 'styled-system'

export interface Theme extends FabricTheme {
  section: {
    [K in string]: {
      box: SpaceProps
      heading: TypographyProps
    }
  }
}

function breakpoints<A = [number, number, number, number]>(A: A): { M: number; S: number; L: number; XL: number } & A {
  return Object.assign(A, { M: A[0], S: A[1], L: A[2], XL: A[3] })
}

const theme = {
  ...baseTheme,
  breakpoints: breakpoints([480, 600, 1140, 1920]),
  fonts: { standard: 'Manrope,sans-serif' },
  fontSizes: ['219px'],
  colors: {
    brand: '#4FF527',
    ...modeDark.colors,
  },
  shadows: {
    ...baseTheme.shadows,
  },
  section: {
    small: {},
    xlarge: {
      heading: { fontSize: ['7.4rem'] },
      box: { marginBottom: ['20rem'] },
    },
  },
  sidebar: {},
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}

export default theme
