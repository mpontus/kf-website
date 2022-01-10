import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps, Heading, HeadingProps } from '../components'

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
