import * as Rebass from 'rebass'
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Text,
  TextProps,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  Image,
  ImageProps,
} from 'rebass/styled-components'
import React from 'react'
import styled from 'styled-components'
import * as StyledSystem from 'styled-system'

export interface GridProps extends Rebass.BoxProps, StyledSystem.GridProps {}

export const Grid = styled(`div`)<GridProps>`
  ${StyledSystem.space}
  ${StyledSystem.layout}
  ${StyledSystem.typography}
  ${StyledSystem.color}
  ${StyledSystem.flexbox}
  ${StyledSystem.grid}
  display: grid;
`

// export interface TextProps extends Rebass.TextProps {}

// export const Text = styled((props: TextProps) => <Text as="span" {...props} />)``
// export const span = Text
// export const span = Text

// Block typography

// export interface ParagraphProps extends BoxProps {
//   variant?: ResponsiveValue<string>
// }
// export const Paragraph = styled((props: ParagraphProps) => {
//   const { variant, children, ...rest } = props
//   return (
//     <Box as="p" {...rest}>
//       <Text variant={variant}>{children}</Text>
//     </Box>
//   )
// })``

export const Paragraph = (props: BoxProps) => <Text as="p" variant="body" mb={[1, 2]} {...props} />
export const p = Paragraph

// Headings

// export interface HeadingProps extends BoxProps {
//   variant?: ResponsiveValue<string>
// }
// export const Heading = styled((props: HeadingProps) => {
//   const { variant, children, ...rest } = props
//   return (
//     <Box {...rest}>
//       <Text variant={variant}>{children}</Text>
//     </Box>
//   )
// })``
export const h1 = (props: BoxProps) => <Heading as="h1" variant="heading1" {...props} />
export const h2 = (props: BoxProps) => <Heading as="h2" variant="heading2" {...props} />
export const h3 = (props: BoxProps) => <Heading as="h3" variant="heading3" {...props} />
export const h4 = (props: BoxProps) => <Heading as="h4" variant="heading4" {...props} />
export const h5 = (props: BoxProps) => <Heading as="h5" variant="heading5" {...props} />
export const h6 = (props: BoxProps) => <Heading as="h6" variant="heading6" {...props} />

// Links

export const a = Link

// Images

export const img = Image

// Lists

export const List = styled((props: BoxProps) => {
  const { children, ...rest } = props
  const childrenArray = React.Children.toArray(children)
  return (
    <Box as="ul" margin={0} {...rest}>
      {childrenArray.map((child) => (
        <Box as="li" children={child} />
      ))}
    </Box>
  )
})``

export const ul = List

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, a, p, img, ul }

export { Box, BoxProps, Text, TextProps, Heading, HeadingProps, Link, LinkProps, Image, ImageProps, Flex, FlexProps }

// Section

export interface SectionProps extends BoxProps {
  heading?: string
}
export const Section = styled((props: SectionProps) => {
  const { heading, children, ...rest } = props
  return (
    <Box as="section" {...rest}>
      <Heading pb={[0, 2]} mr={-4}>
        {heading}
      </Heading>
      {children}
    </Box>
  )
})``
