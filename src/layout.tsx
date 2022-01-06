import { GlobalStyle } from '@centrifuge/fabric'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box, BoxProps, Grid, Image, Paragraph, shortcodes } from './components'
import { theme } from './theme'

// Providers
type Decorator<R = unknown> = <P>(Component: React.ComponentType<P>) => React.FC<R & P>

const withMDXProvider: Decorator = (Component) => (rest) =>
  (
    <MDXProvider components={shortcodes}>
      <Component {...rest} />
    </MDXProvider>
  )

const withThemeProvider: Decorator = (Component) => (props) =>
  (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Component {...props} />
      </>
    </ThemeProvider>
  )

function enhance<P>(component: React.ComponentType<P>) {
  return withThemeProvider(withMDXProvider(component))
}

// Layout

export const Header = styled((props: BoxProps) => <Box as="header" minHeight="header" p="4" {...props} />)`
  grid-area: head;
`

export const Footer = styled((props: BoxProps) => <Box as="footer" p={4} {...props} />)`
  grid-area: foot;
`

export const Main = styled((props: BoxProps) => <Grid as="main" px={4} columns={1} {...props} />)`
  grid-area: main;
`

export const Sidebar = styled((props: BoxProps) => <Box as="aside" {...props} />)`
  grid-area: side;
`

export const Layout = styled((props: BoxProps) => <Box maxWidth="container" mx="auto" {...props} />)`
  display: flex;
  flex-direction: column;

  ${({ theme }) => `${theme.mediaQueries.large} {
    display: grid;
    grid: \"head side\" \"main side\" \"foot side\";
  }`}
`

const DefaultHeader: React.FC = () => (
  <Header>
    <Image
      src={
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require(`./images/kfactory-logo.svg`).default
      }
      height={87}
    />
  </Header>
)

const DefaultFooter: React.FC = () => (
  <Footer textAlign="center">
    <Paragraph marginBottom={3}>k/factory is a contributor to</Paragraph>

    <Image
      src={
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('./images/centrifuge-logo.svg').default
      }
      width={183}
      height={55}
    />
  </Footer>
)

export const DefaultLayout: React.FC = enhance(({ children, ...rest }) => (
  <Layout {...rest}>
    <DefaultHeader />
    <Main>{children}</Main>
    <DefaultFooter />
  </Layout>
))

export const withSidebar = (sidebar: React.ReactNode): React.FC =>
  enhance((props) => {
    const { children, ...rest } = props
    return (
      <Layout {...rest}>
        <DefaultHeader />
        <Main>{children}</Main>
        {sidebar}
        <DefaultFooter />
      </Layout>
    )
  })

export default DefaultLayout
