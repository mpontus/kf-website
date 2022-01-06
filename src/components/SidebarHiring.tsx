import { useWindowHeight } from '@react-hook/window-size'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { useTheme } from 'styled-components'
import { Box, BoxProps, Flex, Grid, Heading, Item, Link, List, SectionProps, Text, TextProps } from '../components'
import { Sidebar } from '../layout'

const UnderlineText = (props: TextProps) => <Text textDecoration="underline" {...props} />

const Careers = styled((props: SectionProps) => {
  return (
    <Box {...props}>
      <Heading Text={UnderlineText} variant="heading4">
        Join our growing team at k/f
      </Heading>
      <Grid as={List} columns={1} gap="20px">
        <Item>Campaign Marketer</Item>
        <Item>Institutional Capital Lead</Item>
        <Item>Product Manager</Item>
        <Item>Senior Dev Ops Engineer</Item>
        <Item>Senior Fullstack Engineer</Item>
        <Item>Senior Protocol Engineer - Centrifuge Protocol</Item>
      </Grid>
    </Box>
  )
})`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`

const Gradient = styled((props: BoxProps) => (
  <Box {...props}>
    {['#FCD1E3', '#FCB3D2', '#FC86B7', '#FC539A', '#FC6CA9', '#FC3A8B', '#FC1475'].map((color) => (
      <Box height="62px" background={color} />
    ))}
  </Box>
))`
  display: grid;
  grid-auto-flow: row;
  justify-content: stretch;
`

export interface HiringEmail extends BoxProps {
  email: string
}

const HiringEmail = styled(({ email, ...rest }) => (
  <Box {...rest}>
    <Link href={`mailto:${email}`} whiteSpace="nowrap" fontSize="32px" fontWeight="600" children={email} />
  </Box>
))`
  display: block;
  position: absolute;
  transform-origin: top left;
  transform: rotateZ(-90deg) translateX(-100%) translateY(-100%);
`

export const SidebarHiring = styled((props) => {
  const height = useWindowHeight()
  const { L: minWidth } = useTheme().breakpoints

  if (useMediaQuery({ minWidth })) {
    return (
      <Flex
        as={Sidebar}
        flexDirection="column"
        borderWidth="2px"
        borderLeftStyle="solid"
        borderColor="textPrimary"
        position="sticky"
        top="0"
        height={height}
        overflow="visible"
      >
        <HiringEmail email="work@k-f.co" px={4} />
        <Careers flex="1" p={3} />
        <Gradient />
      </Flex>
    )
  }

  return (
    <Flex as={Sidebar} ml={4} borderWidth="2px" borderStyle="solid none" borderColor="textPrimary" {...props}>
      <Careers flex="1" py={2} minWidth="320px" />
      <Box position="relative" py={2}>
        <HiringEmail email="work@k-f.co" />
      </Box>
      <Gradient position="relative" flex="1" maxWidth="336px" height="420px"></Gradient>
    </Flex>
  )
})<BoxProps>``

export default SidebarHiring
