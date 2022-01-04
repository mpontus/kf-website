import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import * as Fabric from '@centrifuge/fabric'
import * as FabricFlex from '@centrifuge/fabric/dist/components/Flex'

// Box

export type BoxProps = Fabric.BoxProps
export const Box = Fabric.Box

// Flex

export type FlexProps = FabricFlex.FlexProps
export const Flex = FabricFlex.Flex

// Grid

export type GridProps = Fabric.GridProps
export const Grid = Fabric.Grid

// Container

export type ContainerProps = Fabric.ContainerProps
export const Container = Fabric.Container

// Text

export type TextProps = Fabric.TextProps
export const Text = Fabric.Text

// Paragraph

export type ParagraphProps = TextProps
export function Paragraph(props: ParagraphProps) {
  const { as = `p`, variant = `body1`, ...rest } = props
  return <Text as={as} variant={variant} {...rest} />
}

// Headings

export const p = Paragraph

export type HeadingProps = TextProps
export function Heading(props: HeadingProps) {
  const { as = `h2`, variant = `heading2`, ...rest } = props
  return <Text as={as} variant={variant} {...rest} />
}
export const h1 = (props: BoxProps) => <Heading as="h1" variant="heading1" {...props} />
export const h2 = (props: BoxProps) => <Heading as="h2" variant="heading2" {...props} />
export const h3 = (props: BoxProps) => <Heading as="h3" variant="heading3" {...props} />
export const h4 = (props: BoxProps) => <Heading as="h4" variant="heading4" {...props} />
export const h5 = (props: BoxProps) => <Heading as="h5" variant="heading5" {...props} />
export const h6 = (props: BoxProps) => <Heading as="h6" variant="heading6" {...props} />

// Links

export type LinkProps = TextProps & AnchorHTMLAttributes<'a'>
export function Link(props: LinkProps) {
  return <Text as="a" {...props} />
}
export const a = Link

// Images

export type ImageProps = TextProps & ImgHTMLAttributes<'img'>
export function Image(props: ImageProps) {
  return <Text as="img" {...props} />
}
export const img = Image

// Lists

export const List = styled((props: BoxProps) => {
  const { children, ...rest } = props
  const childrenArray = React.Children.toArray(children)
  return (
    <Box as="ul" margin={0} {...rest}>
      {childrenArray.map((child) => (
        <Text as="li" children={child} />
      ))}
    </Box>
  )
})``

export const ul = List

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, a, p, img, ul }

// Section

export type SectionProps = BoxProps & {
  heading?: string
}
export const Section = styled((props: SectionProps) => {
  const { heading, children, ...rest } = props
  return (
    <Box as="section" {...rest}>
      <Text as="h3" variant="heading1" mr={-4}>
        {heading}
      </Text>
      {children}
    </Box>
  )
})`
  margin-bottom: 40px;
`
