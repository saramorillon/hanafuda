import { Logger } from '@saramorillon/logger'
import { Socket } from 'socket.io'
import { Game } from '../games/Game'
import { KoiKoi } from '../games/KoiKoi'
import { settings } from '../settings'

export const rooms: Record<string, Game> = {}

export function room(socket: Socket) {
  const { name } = socket.nsp

  const logger = new Logger(settings.logs, { app: settings.app, socket: { name } })

  if (!rooms[name]) {
    if (name.startsWith('/koi-koi')) {
      rooms[name] = new KoiKoi()
    }
  }

  socket.on('join', () => {
    rooms[name]?.addPlayer(socket.id)
    logger.info('user_join', { room: name, user: socket.id })
    socket.nsp.emit('refresh', rooms[name].getData(socket.id))
  })

  socket.on('disconnect', () => {
    rooms[name]?.removePlayer(socket.id)
    logger.info('user_disconnect', { room: name, user: socket.id })
    socket.nsp.emit('refresh', rooms[name].getData(socket.id))

    if (rooms[name].isEmpty()) {
      delete rooms[name]
    }
  })
}
