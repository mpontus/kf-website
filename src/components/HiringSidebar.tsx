import { Grid } from '@centrifuge/fabric'
import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps, Container, Heading, List, Text } from './common'
import { SectionProps, SmallSection } from './layout'
import { useTheme } from './theme'

const HiringList = styled((props: SectionProps) => {
  const heading = <Heading variant={'heading3'}>Join our growing team at k/f</Heading>
  return (
    <SmallSection
      label={
        <Text underline padding="2px 0">
          {heading}
        </Text>
      }
      {...props}
    >
      <List>
        <Text>Campaign Marketer</Text>
        <Text>Institutional Capital Lead</Text>
        <Text>Product Manager</Text>
        <Text>Senior Dev Ops Engineer</Text>
        <Text>Senior Fullstack Engineer</Text>
        <Text>Senior Protocol Engineer - Centrifuge Protocol</Text>
      </List>
    </SmallSection>
  )
})`
  padding: 20px 0;

  ${Heading} {
    font-weight: 600;
    text-decoration: underline;
  }

  ${List} {
    display: grid;
    grid: 1fr / auto;
    grid-gap: 20px;
    padding: 20px 0;
  }
`

const HiringGradient = styled((props: BoxProps) => (
  <Box {...props}>
    {['#FCD1E3', '#FCB3D2', '#FC86B7', '#FC539A', '#FC6CA9', '#FC3A8B', '#FC1475'].map((color, i) => (
      <Box background={color} />
    ))}
  </Box>
))`
  display: grid;
  grid-auto-flow: row;
  justify-content: stretch;
`

const HiringEmail = styled(Heading)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`

export const HiringSidebar = styled((props: BoxProps) => {
  const theme = useTheme()
  return (
    <Grid
      marginLeft="60px"
      borderStyle="solid"
      borderColor={theme?.colors?.borderPrimary}
      borderWidth="2px 0"
      columns={[2, 2, 1]}
      {...props}
    >
      <HiringList maxWidth="320px" />
      <HiringGradient height="420px" />
    </Grid>
  )
})`
  position: relative;
  font-family: Questrial,sans-serif;

  display: grid:
  grid: auto auto auto;
`
