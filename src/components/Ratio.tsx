import styled, { css } from 'styled-components'
import { Box, BoxProps } from '../components'

type RatioProps = BoxProps & {
  ratio?: number
}

export const Ratio = styled(Box)<RatioProps>`
  display: grid;

  > * {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }

  ${({ ratio }) =>
    ratio &&
    css`
      :after {
        z-index: -1;
        content: '';
        display: block;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        padding-bottom: ${100 / ratio}%;
      }
    `}
`
