import { Box, BoxProps, Text as Typography, TextProps as TypographyProps } from '@centrifuge/fabric'
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

// Typography

export type TextProps = TypographyProps

export const Text = styled(({ variant = 'body1', ...rest }: TextProps) => (
  <Typography as="span" variant={variant} {...rest} />
))``

// Paragraph typography

export type ParagraphProps = BoxProps & {
  variant?: 'body1' | 'body2'
  Typography?: React.ComponentType<TextProps>
}
export const Paragraph = styled((props: ParagraphProps) => {
  const { Typography = Text, variant = 'body1', children, ...rest } = props
  return (
    <Box {...rest}>
      <Typography variant={variant}>{children}</Typography>
    </Box>
  )
})``

export const p = styled(Paragraph).attrs({ variant: 'body1' })`
  max-width: 736px;
  margin: 16px 0;
`

// Headings

export type HeadingProps = BoxProps & {
  variant?: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6'
  Typography?: React.ComponentType<TextProps>
}
export const Heading = styled((props: HeadingProps) => {
  const { Typography = Text, as, variant = 'headng3', children, ...rest } = props
  return (
    <Box {...rest}>
      <Typography variant={variant}>{children}</Typography>
    </Box>
  )
})`
  font-weight: 600;
  line-height: 1;
  margin: 0;
`

export const h1 = styled(Heading.withComponent('h1')).attrs({ variant: 'heading1' })``
export const h2 = styled(Heading.withComponent('h2')).attrs({ variant: 'heading2' })``
export const h3 = styled(Heading.withComponent('h3')).attrs({ variant: 'heading3' })``
export const h4 = styled(Heading.withComponent('h4')).attrs({ variant: 'heading4' })``
export const h5 = styled(Heading.withComponent('h5')).attrs({ variant: 'heading5' })``
export const h6 = styled(Heading.withComponent('h6')).attrs({ variant: 'heading6' })``

// Links

export interface LinkProps extends AnchorHTMLAttributes<any> {}
export const Link = (props: LinkProps) => <Text as="a" {...props} />
export const a = Link

// Images

export interface ImageProps extends ImgHTMLAttributes<any> {}
export const Image = (props: ImageProps) => <Box as="img" {...props} />
export const img = Image

// Lists

export type ListProps = BoxProps & {
  Item?: React.ComponentType<BoxProps>
}

export const List = styled((props: ListProps) => {
  const { Item: Container = Paragraph, children, ...rest } = props
  const childrenArray = React.Children.toArray(children)
  return (
    <Box as="ul" {...rest}>
      {childrenArray.map((child) => (
        <Container forwardAs="li" children={child} {...rest} />
      ))}
    </Box>
  )
})``

export const ul = List

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, a, p, img, ul }

// Re-export the rest of components to funnel all consumers here

export { Container, ContainerProps, GlobalStyle, Box, BoxProps, Grid, GridProps } from '@centrifuge/fabric'
