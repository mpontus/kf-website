import { BoxProps } from 'rebass'
import { createGlobalStyle } from 'styled-components'
import { variant } from 'styled-system'

export const GlobalStyles = createGlobalStyle<BoxProps>`
  * { 
    box-sizing: border-box;
  }
  body {
    ${variant({ scale: `styles`, variants: { root: {} } })}
   }
`
