import { Box, Text, TextProps, BoxProps, FabricTheme } from '@centrifuge/fabric'
import styled, { StyledComponent } from 'styled-components'
import { StyledComponentProps, DefaultTheme, StyledProps } from 'styled-components'
import { ColorProps, TypographyProps } from 'styled-system'

type StyledTextProps = StyledComponentProps<'span', DefaultTheme, TypographyProps & ColorProps, never>
export interface HeadingProps extends StyledTextProps {
  variant?: keyof FabricTheme['typography']
  level: number
  Box: React.ComponentType<BoxProps>
}

const foo = styled.div``
type Foo = React.ComponentProps<typeof foo>

export const Heading = styled<React.FC<HeadingProps>>((props) => {
  const { as, level, children, ...rest } = props
  return (
    <Box as={as}>
      <Text {...rest}>{children}</Text>
    </Box>
  )
})

export const h1 = (props) => <Heading as="h1" variant="heading1" {...props} />

// Heading.defaultProps = {
//   variant: "heading3",
//   Box: Box,
// };

// export interface Paragraph extends TextProps, BoxProps { }

// export const Paragraph: React.FC<T
