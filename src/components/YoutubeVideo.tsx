import { nanoid } from 'nanoid'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, BoxProps, forwardAs, Text } from '../components'

type RatioProps = BoxProps & {
  ratio: number
}

export const Ratio = forwardAs(
  styled(({ ratio, children, ...rest }: RatioProps) => (
    <Box position="relative" {...rest}>
      <Box pb={`${100 / ratio}%`} />
      <Box position="absolute" top="0" left="0" right="0" bottom="0">
        {children}
      </Box>
    </Box>
  ))``
)

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
    <Text as="button" fontSize="96px">
      ▸
    </Text>
  </Box>
))<PosterProps>`
  cursor: pointer;
  button {
    background: none;
    border: none;
    opacity: 0.8;
  }
  &:hover button {
    opacity: 1;
  }
`

export type VideoProps = BoxProps & {
  videoId: string
  posterUrl?: string
}

export function YoutubeVideo(props: VideoProps) {
  const { videoId, posterUrl, ...rest } = props
  const [elementId, setElementId] = useState<string>()
  const [player, setPlayer] = useState<YT.Player>()
  const [isPosterShown, setPosterShown] = useState(posterUrl !== undefined)
  const handlePosterClick = useCallback(() => setPosterShown(false), [])

  useEffect(() => {
    if (!elementId) {
      setElementId(nanoid())
      return
    }
    const onYouTubeIframeAPIReady = () => {
      const player: YT.Player = new window.YT.Player(elementId, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: { origin: window.location.origin },
        events: { onReady: () => setPlayer(player) },
      })
    }
    if (window.YT) {
      onYouTubeIframeAPIReady()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.querySelector('head')?.appendChild(script)
    Object.assign(window, { onYouTubeIframeAPIReady })
  }, [elementId])

  useEffect(() => {
    player && (isPosterShown ? player.seekTo(0, true) : player.playVideo())
  }, [player, isPosterShown])

  return (
    <Ratio ratio={16 / 9} position="relative" {...rest}>
      {isPosterShown && posterUrl && (
        <Poster
          src={posterUrl}
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="100%"
          onClick={handlePosterClick}
        />
      )}
      <div id={elementId} />
    </Ratio>
  )
}
