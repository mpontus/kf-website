import * as Fabric from '@centrifuge/fabric'
import * as FabricFlex from '@centrifuge/fabric/dist/components/Flex'
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { ColorProps, compose, system, TypographyProps } from 'styled-system'

export function forwardAs<T, P>(
  Component: React.ComponentType<P & { forwardedAs?: T }>
): React.ComponentType<P & { as?: T }> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ as, ...rest }: any) => <Component forwardedAs={as as any} {...rest} />
}

// Box

export interface BoxProps extends Fabric.StyledBoxProps {
  as?: string | React.ComponentType
  children?: React.ReactNode
}
export const Box = Fabric.Box

// Layout

export type ContainerProps = Fabric.ContainerProps
export const Container = Fabric.Container

export type FlexProps = FabricFlex.FlexProps
export const Flex = FabricFlex.Flex

export type GridProps = Fabric.GridProps
export const Grid = Fabric.Grid

// Text

export interface TextProps extends TypographyProps, ColorProps {
  as?: string | React.ComponentType
  textDecoration?: string
  whiteSpace?: 'nowrap'
}
export const Text = forwardAs(
  styled(({ as = 'span', ...rest }: TextProps) => {
    return <Fabric.Text as={as} {...rest} />
  })<TextProps>(compose(system({ whiteSpace: true, textDecoration: true })))
)
export const span = Text

// Paragraph

export type ParagraphProps = BoxProps & {
  variant?: keyof DefaultTheme['typography']
}
export function Paragraph(props: ParagraphProps) {
  const { variant = `body1`, children, ...rest } = props
  return (
    <Box as="p" marginBottom={2} {...rest}>
      <Text variant={variant}>{children}</Text>
    </Box>
  )
}
export const p = Paragraph

// Headings

export type HeadingProps = BoxProps & {
  Text?: React.ComponentType<TextProps>
  as?: string | React.ComponentType
  variant?: keyof DefaultTheme['typography']
}
export function Heading(props: HeadingProps) {
  const { Text: CText = Text, as = `h2`, variant = `heading2`, children, ...rest } = props
  return (
    <Box as={as} margin={0} marginBottom={2} {...rest}>
      <CText variant={variant}>{children}</CText>
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

export interface LinkProps extends TextProps, Omit<AnchorHTMLAttributes<'a'>, 'color'> {}
export function Link(props: LinkProps) {
  return <Text as="a" {...props} />
}
export const a = Link

// Images

export interface ImageProps extends BoxProps, Omit<ImgHTMLAttributes<'img'>, 'width' | 'height' | 'color'> {}
export function Image(props: ImageProps) {
  return <Box as="img" {...props} />
}
export const img = Image

// Lists

export type ListProps = BoxProps
export function List(props: ListProps) {
  return <Box as="ul" {...props} />
}
export const ul = List

export type ItemProps = BoxProps
export function Item({ children, ...rest }: ItemProps) {
  return (
    <Box as="li" {...rest}>
      <Text>{children}</Text>
    </Box>
  )
}
export const li = Item

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, span, a, p, img, ul, li }

// Section

export type SectionProps = BoxProps & {
  heading?: string
  children?: React.ReactNode
}
export const Section = styled((props: SectionProps) => {
  const { heading, children, ...rest } = props
  return (
    <Box as="section" my={5} maxWidth={{ L: 'section' }} {...rest}>
      <Heading variant="heading1" borderBottom="2px solid white" pb={1} mb={2} mr={-4}>
        {heading}
      </Heading>
      {children}
    </Box>
  )
})``
