import React from 'react'
import AriaModal, { AriaModalProps } from 'react-aria-modal'
import styled from 'styled-components'
import { Box, BoxProps, Text } from '../components'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalProps extends BoxProps, Omit<AriaModalProps, 'titleId'> {
  titleText: string
}

export const Button = styled(({ children, ...rest }) => (
  <Box as="button" bg="backgroundSecondary" {...rest}>
    <Text color="textSecondary">{children}</Text>
  </Box>
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;

  opacity: 0.4;
  :hover {
    opacity: 0.6;
  }
`

const Underlay = (props: BoxProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="fixed"
    top="0"
    left="0"
    width="100%"
    height="100%"
    bg="rgba(0,0,0,0.7)"
    p={1}
    {...props}
  />
)

const Dialog = (props: BoxProps) => (
  <Box overflow="hidden" width="100%" maxWidth="modal" bg="backgroundPrimary" {...props} />
)

const Container = ({ titleText, ...rest }: ModalProps) => (
  <Underlay
    as={({ className: underlayClass, ...rest }: any) => (
      <Dialog
        as={({ className: dialogClass, ...rest }: any) => (
          <AriaModal
            includeDefaultStyles={false}
            underlayClass={underlayClass}
            dialogClass={dialogClass}
            titleText={titleText}
            {...rest}
          />
        )}
        {...rest}
      />
    )}
    {...rest}
  />
)

export function Modal(props: ModalProps) {
  const { titleText, children, onExit, ...rest } = props

  return (
    <Container titleText={titleText} onExit={onExit} {...rest}>
      <Box as="header" textAlign="right" m={1}>
        <Button title="Close" width="24px" height="24px" p={2} m={-1} float="right" onClick={onExit}>
          ✖
        </Button>
      </Box>
      <Box as="main" m={1}>
        {children}
      </Box>
    </Container>
  )
}
