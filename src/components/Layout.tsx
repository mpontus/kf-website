import { GlobalStyle, LayoutGrid, LayoutGridItem } from '@centrifuge/fabric'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import React, { ComponentProps, memo } from 'react'
import { ThemeProvider, ThemeProviderProps } from 'styled-components'
import * as basicComponents from '../basic'
import defaultTheme from '../theme'

type Decorator<R> = <P>(Component: React.ComponentType<P>) => React.ComponentType<R & P>

const withMDXProvider: Decorator<Partial<MDXProviderProps>> = (Component) => (props) => {
  const { components, ...rest } = props
  return (
    <MDXProvider components={components ?? basicComponents}>
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

const SiteLayout = enhance(({ children, ...rest }) => (
  <LayoutGrid {...rest}>
    <LayoutGridItem>{children}</LayoutGridItem>
  </LayoutGrid>
))

import theme from '../theme'
foo(
  <SiteLayout theme={theme}>
    <footer></footer>
  </SiteLayout>
)

export default SiteLayout
