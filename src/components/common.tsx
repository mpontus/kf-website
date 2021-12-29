import { Box, BoxProps, Text, TextProps } from '@centrifuge/fabric'
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

// Heading typography

export type HeadingProps = TextProps
export const Heading = styled((props: HeadingProps) => <Box children={<Text {...props} />} />)`
  font-weight: 600;
  line-height: 1;
  margin: 0;
`
export const h1 = (props: HeadingProps) => <Heading as="h1" variant="heading1" {...props} />
export const h2 = (props: HeadingProps) => <Heading as="h2" variant="heading2" {...props} />
export const h3 = (props: HeadingProps) => <Heading as="h3" variant="heading3" {...props} children="THREE" />
export const h4 = (props: HeadingProps) => <Heading as="h4" variant="heading4" {...props} />
export const h5 = (props: HeadingProps) => <Heading as="h5" variant="heading5" {...props} />
export const h6 = (props: HeadingProps) => <Heading as="h6" variant="heading6" {...props} />

// Paragraph typography

export type ParagraphProps = TextProps
export const Paragraph = (props: ParagraphProps) => <Box children={<Text {...props} />} />
export const p = styled(Paragraph)`
  max-width: 736px;
`

// Links

export interface LinkProps extends AnchorHTMLAttributes<any> {}
export const Link = (props: LinkProps) => <Text as="a" {...props} />
export const a = Link

// Images

export interface ImageProps extends ImgHTMLAttributes<any> {}
export const Image = (props: ImageProps) => <Box as="img" {...props} />
export const img = Image

export const shortcodes = { h1, h2, h3, h4, h5, h6, a, p, img }

// Lists

type ListProps = BoxProps & {
  Text: React.ComponentType<TextProps>
}
export const List = (props: ListProps) => {
  const { Text, children, ...rest } = props
  return (
    <Box as="ul" {...rest}>
      {React.Children.toArray(children).map((child) => (
        <Text as="li" children={child} {...rest} />
      ))}
    </Box>
  )
}

// Re-export the rest of components to funnel all consumers here

export {
  Container,
  ContainerProps,
  GlobalStyle,
  Box,
  BoxProps,
  Grid,
  GridProps,
  Text,
  TextProps,
} from '@centrifuge/fabric'
