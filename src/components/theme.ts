import { FabricTheme } from '@centrifuge/fabric'
import { ThemeSize } from '@centrifuge/fabric/dist/utils/types'
import { baseTheme } from '@centrifuge/fabric/src/theme/tokens/baseTheme'
import { modeDark } from '@centrifuge/fabric/src/theme/tokens/modeDark'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { TextDecoration } from 'styled-icons/zondicons'
import { SpaceProps, TypographyProps } from 'styled-system'

export interface Theme extends FabricTheme {
  section: {
    [K in string]: {
      box: SpaceProps
      heading: TypographyProps
    }
  }
  sidebar: {
    size: ThemeSize
  }
}

function breakpoints<A = [number, number, number, number]>(A: A): { M: number; S: number; L: number; XL: number } & A {
  return Object.assign(A, { M: A[0], S: A[1], L: A[2], XL: A[3] })
}

export const defaultTheme = {
  ...baseTheme,
  breakpoints: breakpoints(['481px', '601px', '1141px', '1921px']),
  typography: {
    ...baseTheme.typography,
    body1: {
      fontSize: ['16px', '16px', '20px'],
      fontWeight: 400,
      lineHeight: 1.5,
    },
    heading1: {
      fontSize: ['4rem', '5.25rem', '7.4rem'],
      fontWeight: 600,
      lineHeight: 1,
    },
  },
  sizes: {
    small: 120,
    container: { M: 1140, L: 1420 },
    iconSmall: 16,
    iconMedium: 23,
  },
  fonts: {
    standard: '',
    alt: '',
  },
  fontSizes: ['219px'],
  colors: {
    ...modeDark.colors,
    brand: '#4FF527',
    borderPrimary: 'white',
  },
  shadows: {
    ...baseTheme.shadows,
  },
  section: {
    small: {
      heading: {
        variant: 'heading4',
        textDecoration: 'underline',
      },
      box: {},
    },
    xlarge: {
      heading: {
        variant: 'heading1',
        paddingBottom: '8px',
        borderBottom: '2px solid white',
      },
      box: {},
    },
  },
  sidebar: {
    size: 'small',
  },
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}
