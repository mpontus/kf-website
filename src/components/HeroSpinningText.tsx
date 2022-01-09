import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, BoxProps, Text } from '../components'

interface SlideProps extends BoxProps {
  angle: number
  distance: string
  children: React.ReactNode
}

const Slide = styled((props: SlideProps) => <Box as="span" {...props} />)`
  position: absolute;
  transform: ${(props) => `rotateY(${props.angle}deg) translateZ(${props.distance})`};
`

interface CarouselProps extends BoxProps {
  distance: string
  duration: string
  children: React.ReactNode[]
}

const Carousel = styled((props: CarouselProps) => {
  const { distance, children, ...rest } = props
  return (
    <Box {...rest}>
      {children.map((child, i) => (
        <Slide key={`${i}`} distance={distance} angle={(i / children.length) * 360}>
          {child}
        </Slide>
      ))}
    </Box>
  )
})`
  position: relative;
  transform-style: preserve-3d;
  animation: ${({ distance }) => keyframes` 
    from { 
      transform: translateZ(-${distance}) rotateY(0);
    }
    to { 
      transform: translateZ(-${distance}) rotateY(-360deg);
    }
  `}
    ${(props) => props.duration} linear infinite;
`

export interface SceneProps extends BoxProps {
  perspective: string
}

export const Scene = styled(Box)<SceneProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: ${(props) => props.perspective};
`

interface HeroSpinningTextProps extends Omit<BoxProps, 'children'> {
  perspective?: string
  distance?: string
  duration?: string
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  text: string
}

export const SpinningText = styled((props) => {
  const { text, distance = `${text.length / 8}em`, duration = '20s', ...rest } = props
  return (
    <Text as="div" fontFamily="monospace" {...rest}>
      <Carousel distance={distance} duration={duration} children={[...text]} />
    </Text>
  )
})<HeroSpinningTextProps>`
  position: relative;
  transform: ${({ rotateX = 0, rotateY = 0, rotateZ = 0 }) =>
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`};
  transform-style: preserve-3d;
`

export default SpinningText
