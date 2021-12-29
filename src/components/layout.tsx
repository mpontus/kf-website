import { ContainerProps, Grid } from '@centrifuge/fabric'
import { Flex } from '@centrifuge/fabric/dist/components/Flex'
import { MDXProvider } from '@mdx-js/react'
import React, { memo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box, BoxProps, Container, GlobalStyle, Heading, List, shortcodes, Text } from './common'
import { defaultTheme, Theme, useTheme } from './theme'

// Layout HOCs

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
  Container?: React.ComponentType<ContainerProps>
  children: React.ReactNode
}

export const Layout = styled(enhance(Container))``

export const Main = styled(Box.withComponent('main'))``

export const SingleColumnLayout = styled((props: LayoutProps) => {
  const { Container = Main, children, ...rest } = props
  return (
    <Flex as={Layout} {...rest}>
      <Container>{children}</Container>
    </Flex>
  )
})``

// Sidebar

export type SidebarLayoutProps = LayoutProps & {
  sidebar: React.ReactNode
}

export const SidebarLayout = styled((props: SidebarLayoutProps) => {
  const { Container = Main, children, sidebar, ...rest } = props
  return (
    <Grid as={Layout} columns={2} minColumnWidth={400} {...rest}>
      <Container flex="1">{children}</Container>
      {sidebar}
    </Grid>
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
    <Box {...themeProps?.box} {...rest} marginBottom={100}>
      <Heading {...themeProps?.heading}>{label}</Heading>
      {children}
    </Box>
  )
})`
  ${Heading} {
    border-bottom: 2px solid #fff;
  }
`

export const SmallSection = styled(Section).attrs({ variant: 'small' })``
export const ExtraLargeSection = styled(Section).attrs({ variant: 'xlarge' })``

// Hiring sidebar

export const HiringSidebar = styled((props: BoxProps) => (
  <Box as="aside" position="relative" {...props}>
    <Box position="absolute" top="0" right="100%" width="66px" height="100%" borderRight="2px solid #fff" />
    <SmallSection label="Join our growing team at k/f">
      <List>
        <>Campaign Marketer</>
        <>Institutional Capital Lead</>
        <>Product Manager</>
        <>Senior Dev Ops Engineer</>
        <>Senior Fullstack Engineer</>
        <>Senior Protocol Engineer - Centrifuge Protocol</>
      </List>
    </SmallSection>
  </Box>
))`
  ${Section} {
    padding: 36px;

    ${Heading} ${Text} {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  ${List} {
    margin: 0;
    padding: 0;

    li {
      margin: 20px 0;
    }
  }

  ${Text} {
    font-family: Questrial;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`
