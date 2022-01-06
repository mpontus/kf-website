import React from 'react'
import styled from 'styled-components'
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  Heading,
  Item,
  Link,
  LinkProps,
  List,
  SectionProps,
  Text,
  TextProps,
} from '../components'
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
))``

export interface HiringEmail extends BoxProps {
  email: string
}

const HiringEmailLink = (props: LinkProps) => <Link whiteSpace="nowrap" fontSize="32px" fontWeight="600" {...props} />

const HiringEmail = styled(({ email, ...rest }) => (
  <Box as={HiringEmailLink} href={`mailto:${email}`} children={email} {...rest} />
))`
  transform-origin: top right;
  transform: rotate(-90deg) translateY(-100%);
`

export const SidebarHiring = styled((props: FlexProps) => (
  <Flex
    as={Sidebar}
    flexDirection={['row', 'row', 'row', 'column']}
    borderWidth={['2px 0', '2px 0', '2px 0', '0 0 0 2px']}
    maxHeight={['auto', 'auto', 'auto', '100vh']}
    marginLeft={[4, 4, 4, 0]}
    borderStyle="solid"
    borderColor="borderPrimary"
    position="sticky"
    top="0"
    overflow="visible"
    minWidth="336px"
    {...props}
  >
    <Box position="relative" flex="1">
      <Careers flex="1" minWidth="350px" py={[2, 2, 2, 3]} px={[0, 0, 0, 3]} />
      <HiringEmail position="absolute" top={[2, 2, 2, 4]} right={[0, 0, 0, '100%']} email="work@k-f.co" />
    </Box>
    <Gradient flex={['1', '1', '1', '0']} maxWidth={['336px', '336px', '336px', '100%']} />
  </Flex>
))<BoxProps>``

export default SidebarHiring
