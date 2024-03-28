import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'

export function useSocket<T>(): T | undefined {
  const { pathname } = useLocation()
  const socket = useMemo(() => io(pathname, { transports: ['polling'] }), [pathname])
  const [game, setGame] = useState<T>()

  useEffect(() => {
    socket.on('connect', () => socket.emit('join'))
    socket.on('refresh', (game: T) => {
      setGame(game)
    })
    const onBeforeUnload = function () {
      socket.disconnect()
    }
    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      socket.disconnect()
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [socket])

  return game
}
