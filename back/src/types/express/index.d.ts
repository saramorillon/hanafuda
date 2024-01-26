import { Logger } from '@saramorillon/logger'

declare global {
  namespace Express {
    interface Request {
      logger: Logger
    }
  }
}
