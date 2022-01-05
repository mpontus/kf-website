import * as Fabric from '@centrifuge/fabric'
import * as FabricFlex from '@centrifuge/fabric/dist/components/Flex'
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled, { DefaultTheme } from 'styled-components'

export function forwardAs<T, P>(
  Component: React.ComponentType<P & { forwardAs?: T }>
): React.ComponentType<P & { as?: T }> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ as, ...rest }: any) => <Component forwardAs={as as any} {...rest} />
}

// Text

export type TextProps = Fabric.TextProps & {
  children?: React.ReactNode
}
export const Text = ({ as = 'span', ...rest }: TextProps) => <Fabric.Text as={as} {...rest} />

// Box

export interface BoxProps extends Fabric.StyledBoxProps {
  as?: string | React.ComponentType
  children?: React.ReactNode
}
export const Box = Fabric.Box
// export const Box = styled((props) => <Fabric.Box {...props} />)<BoxProps>()

// Container

export type ContainerProps = Fabric.ContainerProps
export const Container = Fabric.Container

// Flex

export type FlexProps = FabricFlex.FlexProps
export const Flex = FabricFlex.Flex

// Grid

export type GridProps = Fabric.GridProps
export const Grid = Fabric.Grid

// Paragraph

export type ParagraphProps = BoxProps & {
  variant?: keyof DefaultTheme['typography']
}
export function Paragraph(props: ParagraphProps) {
  const { variant = `body1`, ...rest } = props
  return (
    <Box as="p" marginBottom={2} {...rest}>
      <Text variant={variant} {...rest} />
    </Box>
  )
}
export const p = Paragraph

// Headings

export interface HeadingProps extends BoxProps {
  as?: string | React.ComponentType
  variant?: keyof DefaultTheme['typography']
  children?: React.ReactNode
}
export function Heading(props: HeadingProps) {
  const { as = `h2`, variant = `heading2`, ...rest } = props
  return (
    <Box as={as} marginBottom={2} {...props}>
      <Text variant={variant} {...rest} />
    </Box>
  )
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

export type ListProps = BoxProps & {
  children: React.ReactNode[]
}

export const List = styled(({ children, ...rest }: ListProps) => (
  <Box as="ul" margin={0} {...rest}>
    {children.map((child) => (
      <Text as="li" children={child} />
    ))}
  </Box>
))``

export const ul = List

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, a, p, img, ul }

// Section

export type SectionProps = BoxProps & {
  heading?: string
  children?: React.ReactNode
}
export const Section = styled((props: SectionProps) => {
  const { heading, children, ...rest } = props
  return (
    <Box as="section" mb={5} {...rest}>
      <Heading variant="heading1" borderBottom="2px solid white" pb={1} mb={2} mr={-4}>
        {heading}
      </Heading>
      {children}
    </Box>
  )
})``
