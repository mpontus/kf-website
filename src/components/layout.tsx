import { ContainerProps, Grid, LayoutGrid, LayoutGridItem } from '@centrifuge/fabric'
import { Flex, FlexProps } from '@centrifuge/fabric/dist/components/Flex'
import { MDXProvider } from '@mdx-js/react'
import React, { memo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box, BoxProps, Container, GlobalStyle, Heading, Image, List, shortcodes, Text, Paragraph } from './common'
import { defaultTheme, Theme, useTheme } from './theme'

// Providers

type Decorator<R = {}> = <P>(Component: React.ComponentType<P>) => React.ComponentType<R & P>

const withMDXProvider: Decorator = (Component) => (rest) =>
  (
    <MDXProvider components={shortcodes}>
      <Component {...rest} />
    </MDXProvider>
  )

const withThemeProvider: Decorator = (Component) => (props) =>
  (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Component {...props} />
      </>
    </ThemeProvider>
  )

function enhance<P>(component: React.ComponentType<P>) {
  return withThemeProvider(withMDXProvider(memo(component)))
}

// Layout

type LayoutProps = BoxProps & {
  children: React.ReactNode
  Container?: React.ComponentType<ContainerProps>
}

export const Layout = styled(enhance(Container))`
  display: flex;
  font-family: Manrope, sans-serif;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled(Box.withComponent('header'))``

export const defaultHeader = (
  <Header marginTop="40px">
    <Image src={require('../images/kfactory-logo.svg').default} height={87} />
  </Header>
)

export const Footer = styled(Box.withComponent('footer'))``

export const defaultFooter = (
  <Footer margin="40px auto">
    <Paragraph marginBottom="28px" fontFamily="Questrial">
      k/factory is a contributor to
    </Paragraph>
    <Image src={require('../images/centrifuge-logo.svg').default} width={184} height={55} marginLeft={16} />
  </Footer>
)

export const Main = styled(Box.withComponent('main'))``

export type SingleColumnLayoutProps = LayoutProps & {
  header?: React.ReactNode
  footer?: React.ReactNode
}

export const SingleColumnLayout = styled((props: LayoutProps) => {
  const { header = defaultHeader, footer = defaultFooter, children, ...rest } = props
  return (
    <Layout {...rest}>
      {header}
      <Main>{children}</Main>
      {footer}
    </Layout>
  )
})``

// Sidebar

export type SidebarLayoutProps = LayoutProps & {
  header?: React.ReactNode
  footer?: React.ReactNode
  sidebar: React.ReactNode
}

export const SidebarLayout = styled((props: SidebarLayoutProps) => {
  const { header = defaultHeader, footer = defaultFooter, children, sidebar, ...rest } = props

  return (
    <Flex as={Layout} flexDirection="column" {...props}>
      {header}
      <Grid columns={[1, 1, 1, 2]}>
        <Main>{children}</Main>
        {sidebar}
      </Grid>
      {footer}
    </Flex>
  )
})``

export const withSidebar = (sidebar: React.ReactNode) => styled(SidebarLayout).attrs({ sidebar })``

// Page sections

export type SectionProps = BoxProps & {
  label: React.ReactNode
  variant?: keyof Theme['section']
}

export const Section = styled((props: SectionProps & BoxProps) => {
  const { label, variant, children, ...rest } = props
  const themeProps = useTheme()?.section[variant]

  return (
    <Box {...themeProps?.box} {...rest}>
      <Heading {...themeProps?.heading}>{label}</Heading>
      {children}
    </Box>
  )
})``

export const SmallSection = styled(Section).attrs({ variant: 'small' })``
export const ExtraLargeSection = styled(Section).attrs({ variant: 'xlarge' })``
