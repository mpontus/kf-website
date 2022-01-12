import React, { IframeHTMLAttributes, useCallback, useState, VideoHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Box, BoxProps, Text } from '../components'

type PosterProps = BoxProps & {
  as?: BoxProps['as']
  src: string
}

const Poster = styled(({ src, ...rest }: PosterProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    backgroundImage={`url('${src}')`}
    backgroundSize="contain"
    {...rest}
  >
    <Text fontSize="96px">▶</Text>
  </Box>
))<PosterProps>`
  cursor: pointer;
  > * {
    opacity: 0.8;
  }
  &:hover > * {
    opacity: 1;
  }
`

export type VideoProps = BoxProps & {
  src: string
  posterUrl?: string
}

export function Video(props: VideoProps) {
  const { src, posterUrl, ...rest } = props
  const [isPosterVisible, setPosterVisible] = useState(posterUrl !== undefined)
  const handleClickPoster = useCallback(() => setPosterVisible(false), [])
  const IframeComponent = useCallback((props: IframeHTMLAttributes<never>) => <iframe src={src} {...props} />, [src])
  const VideoComponent = useCallback((props: VideoHTMLAttributes<never>) => <video src={src} {...props} />, [src])

  if (posterUrl && isPosterVisible) {
    return <Poster src={posterUrl} onClick={handleClickPoster} {...rest} />
  }

  if (src.startsWith('https://www.youtube.com/embed/')) {
    return <Box as={IframeComponent} {...rest} />
  }

  return <Box as={VideoComponent} {...rest} />
}
