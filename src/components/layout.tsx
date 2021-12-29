import { Flex } from '@centrifuge/fabric/dist/components/Flex'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import React, { ComponentProps, memo } from 'react'
import styled, { ThemeProvider, ThemeProviderProps } from 'styled-components'
import { BoxProps, Container, GlobalStyle, Heading, List, Text, Box, shortcodes } from './common'
import defaultTheme, { Theme, useTheme } from './theme'

export { LayoutGrid, LayoutGridItem } from '@centrifuge/fabric'

// Layout

type Decorator<R> = <P>(Component: React.ComponentType<P>) => React.ComponentType<R & P>
const withMDXProvider: Decorator<Partial<MDXProviderProps>> = (Component) => (props) => {
  const { components, ...rest } = props
  return (
    <MDXProvider components={shortcodes}>
      <Component {...(rest as ComponentProps<typeof Component>)} />
    </MDXProvider>
  )
}

const withThemeProvider: Decorator<Partial<ThemeProviderProps<any>>> = (Component) => (props) => {
  const { theme, ...rest } = props
  return (
    <ThemeProvider theme={theme ?? defaultTheme}>
      <>
        <GlobalStyle />
        <Component {...(rest as ComponentProps<typeof Component>)} />
      </>
    </ThemeProvider>
  )
}

function enhance<P>(component: React.ComponentType<P>) {
  return withThemeProvider(withMDXProvider(memo(component)))
}

interface LayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
}

export const SiteLayout = enhance(({ children, sidebar, ...rest }: LayoutProps) => (
  <Container padding={['1rem']}>
    <Flex flexDirection={'row'}>
      <Box as="main">{children}</Box>
      {sidebar && (
        <Box as="aside" flex="1" backgroundColor="#fca" width="399px">
          {sidebar}
        </Box>
      )}
    </Flex>
  </Container>
))

export const withSidebar =
  (sidebar: React.ReactNode): React.ComponentType<LayoutProps> =>
  (props) =>
    <SiteLayout {...props} sidebar={sidebar} />

const SidebarText = styled((props) => (
  <Text {...props} fontFamily="Questrial" fontWeight={600} fontSize="1.25rem" lineHeight={1.5} />
))``

export const Sidebar = (props: BoxProps) => <Box flex={1} backgroundColor="#fc0" width="300px" {...props} />

export const HiringSidebar = () => (
  <Sidebar flex="1" maxWidth="400px" backgroundColor="#0f9" minHeight="100px">
    <SmallSection label={<SidebarText>Join our growing team at k/f</SidebarText>}>
      <List Text={SidebarText}>
        <>Join our growing team at k/f</>
        <>Campaign Marketer</>
        <>Institutional Capital Lead</>
        <>Product Manager</>
        <>Senior Dev Ops Engineer</>
        <>Senior Fullstack Engineer</>
        <>Senior Protocol Engineer - Centrifuge Protocol</>
      </List>
    </SmallSection>
  </Sidebar>
)

export type SectionProps = BoxProps & {
  label: React.ReactNode
  variant?: keyof Theme['section']
}

const Section = styled((props: SectionProps & BoxProps) => {
  const { label, variant, children, ...rest } = props
  const themeProps = useTheme().section[variant]

  return (
    <Box {...themeProps?.box} {...rest} marginBottom={100}>
      <Heading {...themeProps?.heading} borderBottom>
        {label}
      </Heading>
      {children}
    </Box>
  )
})``

export const SmallSection = styled(Section).attrs({ variant: 'small' })``
export const ExtraLargeSection = styled(Section).attrs({ variant: 'xlarge' })``
