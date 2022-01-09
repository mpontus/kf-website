import * as Fabric from '@centrifuge/fabric'
import * as FabricFlex from '@centrifuge/fabric/dist/components/Flex'
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { ColorProps, system, TypographyProps } from 'styled-system'

export function forwardAs<T, P>(
  Component: React.ComponentType<P & { forwardedAs?: T }>
): React.ComponentType<P & { as?: T }> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ as, ...rest }: any) => <Component forwardedAs={as as any} {...rest} />
}

// Box

export interface BoxProps extends Fabric.StyledBoxProps {
  as?: string | React.ComponentType
  transform?: string
  children?: React.ReactNode
}
export const Box = styled(Fabric.Box)<BoxProps>(system({ transform: true }))

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
  cursor?: string
  textDecoration?: string
  whiteSpace?: string
}
export const Text = forwardAs(
  styled(({ as = 'span', ...rest }: TextProps) => {
    return <Fabric.Text as={as} {...rest} />
  })<TextProps>(system({ cursor: true, whiteSpace: true, textDecoration: true }))
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
  badge?: React.ReactNode
}
export function Heading(props: HeadingProps) {
  const { Text: TextComponent = Text, as = `h2`, variant = `heading2`, badge, children, ...rest } = props
  return (
    <Box as={as} position="relative" margin={0} marginBottom={2} {...rest}>
      <TextComponent variant={variant}>{children}</TextComponent>
      {badge}
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
export const Link = (props: LinkProps) => <Text as="a" cursor="pointer" textDecoration="underline" {...props} />
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

export type ItemProps = BoxProps & {
  Text?: React.ComponentType<TextProps>
}
export function Item({ Text: TextComponent = Text, children, ...rest }: ItemProps) {
  return (
    <Box as="li" {...rest}>
      <TextComponent>{children}</TextComponent>
    </Box>
  )
}
export const li = Item

// Export component shortcodes for MDX integration

export const shortcodes = { h1, h2, h3, h4, h5, h6, span, a, p, img, ul, li }

// Section

export type SectionProps = BoxProps & {
  Heading?: React.ComponentType<HeadingProps>
  headline?: string
  children?: React.ReactNode
}
export const Section = styled((props: SectionProps) => {
  const { Heading: HeadingComponent = Heading, headline, children, ...rest } = props
  return (
    <Box as="section" mb={5} maxWidth={{ L: 'section' }} {...rest}>
      <HeadingComponent variant="heading1" borderBottom="2px solid white" pb={1} mb={2} mr={[-2, -3, -4]}>
        {headline}
      </HeadingComponent>
      {children}
    </Box>
  )
})``
