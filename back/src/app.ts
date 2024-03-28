import { Logger } from '@saramorillon/logger'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { static as _static, json, urlencoded } from 'express'
import helmet from 'helmet'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { render } from './controllers/render'
import { room } from './controllers/room'
import { logger } from './middlewares/logger'
import { routes } from './routes'
import { settings } from './settings'

export class App {
  logger = new Logger(settings.logs, { app: settings.app })

  async run() {
    const { success, failure } = this.logger.start('app_start')
    try {
      const app = express()
      app.use(_static(settings.publicDir))
      app.use(cookieParser())
      app.use(json())
      app.use(urlencoded({ extended: true }))
      app.use(cors({ credentials: true, origin: settings.app.host }))
      app.use(logger)
      app.use(helmet(settings.helmet))
      app.use('/api', routes())
      app.get('*', render)
      const http = createServer(app)
      new Server(http).of(/^\/.+$/).on('connection', room)
      await new Promise<void>((resolve) => http.listen(settings.app.port, resolve))
      success()
    } catch (error) {
      failure(error)
    }
  }
}
