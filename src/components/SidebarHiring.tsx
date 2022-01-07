import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

const jobsQuery = graphql`
  query JobsQuery {
    allLever {
      edges {
        node {
          id
          text
          hostedUrl
        }
      }
    }
  }
`

const UnderlineText = (props: TextProps) => <Text textDecoration="underline" {...props} />

const Careers = styled((props: SectionProps) => {
  return (
    <Box {...props}>
      <Heading Text={UnderlineText} variant="heading4">
        Join our growing team at k/f
      </Heading>
      <Grid as={List} columns={1} gap="20px">
        <StaticQuery query={jobsQuery}>
          {({ allLever }) => {
            const jobs = allLever.edges
              .filter((edge: any) => edge.node.id !== 'c0f7a908-8d9e-4f3c-9b15-a4f81e033484')
              .map((edge: any) => ({ ...edge.node }))

            return jobs.map((job: any) => (
              <Item Text={(props) => <Link href={job.hostedUrl} target="_blank" {...props} />} key={job.id}>
                {job.text}
              </Item>
            ))
          }}
        </StaticQuery>
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
    {['#FCD1E3', '#FCB3D2', '#FC86B7', '#FC6CA9', '#FC539A', '#FC3A8B', '#FC1475'].map((color) => (
      <Box key={color} height="62px" background={color} />
    ))}
  </Box>
))``

export interface HiringEmail extends BoxProps {
  email: string
}

const HiringEmailLink = (props: LinkProps) => <Link whiteSpace="nowrap" fontSize="32px" fontWeight="600" {...props} />

const HiringEmail = styled(({ email, ...rest }) => (
  <Box as={HiringEmailLink} href={`mailto:${email}`} target="_blank" children={email} {...rest} />
))`
  transform-origin: top right;
  transform: rotate(-90deg) translateY(-100%);
`

export const SidebarHiring = styled((props: FlexProps) => (
  <Flex
    as={Sidebar}
    flexDirection={{ L: 'column' }}
    ml={[4, 4, 4, 0]}
    my={[2, 2, 2, 0]}
    mr={[-3, -3, -3, 0]}
    maxHeight={{ L: '100vh' }}
    maxWidth={{ L: '340px' }}
    borderWidth={['2px 0', '2px 0', '2px 0', '0 0 0 2px']}
    borderStyle="solid"
    borderColor="borderPrimary"
    position={{ L: 'fixed' }}
    top="0"
    bottom="0"
    right="0"
    overflow="visible"
    {...props}
  >
    <Box position="relative" flex="1">
      <Careers width="260px" flex="1" py={[2, 2, 2, 3]} px={{ L: 3 }} />
      <HiringEmail position="absolute" top={[2, 2, 2, 4]} right={{ L: '100%' }} email="work@k-f.co" />
    </Box>
    <Gradient flex={['1', '1', '1', '0']} maxWidth={['336px', '336px', '336px', '100%']} />
  </Flex>
))<BoxProps>``

export default SidebarHiring
