import { nanoid } from 'nanoid'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
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

function useYoutubePlayer(elementId: string, options: YT.PlayerOptions): YT.Player | undefined {
  const [player, setPlayer] = useState<YT.Player>()
  const onYouTubeIframeAPIReady = () => {
    const events = { ...options.events, onReady: () => setPlayer(player) }
    const playerVars = { ...options.playerVars, origin: window.location.origin }
    const player = new window.YT.Player(elementId, { ...options, events, playerVars })
  }
  useEffect(() => {
    if (window.YT) {
      return onYouTubeIframeAPIReady()
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.querySelector('head')?.appendChild(script)
    Object.assign(window, { onYouTubeIframeAPIReady })
  }, [])

  return player
}

export function YoutubeVideo(props: VideoProps) {
  const { videoId, width, height, posterUrl, ...rest } = props
  const elementId = useMemo(nanoid, [])
  const player = useYoutubePlayer(elementId, { videoId, width: '100%', height: '100%' })
  const [isPosterShown, setPosterShown] = useState(posterUrl !== undefined)
  const handlePosterClick = useCallback(() => setPosterShown(false), [])
  useEffect(() => {
    player && (isPosterShown ? player.seekTo(0, true) : player.playVideo())
  }, [player, isPosterShown])

  return (
    <Box position="relative" width="100%" height="100%" {...rest}>
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
    </Box>
  )
}
