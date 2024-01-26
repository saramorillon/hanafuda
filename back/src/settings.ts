import { ILoggerOptions } from '@saramorillon/logger'
import { bool, cleanEnv, num, str, url } from 'envalid'
import { HelmetOptions } from 'helmet'
import { name, version } from '../package.json'

interface ISettings {
  app: { name: string; version: string; host: string; port: number }
  publicDir: string
  helmet: HelmetOptions
  logs: ILoggerOptions
}

const env = cleanEnv(process.env, {
  APP_HOST: url(),
  APP_PORT: num({ default: 80 }),
  PUBLIC_DIR: str(),
  LOG_SILENT: bool({ default: false }),
  LOG_COLORS: bool({ default: false }),
})

export const settings: ISettings = {
  app: { name, version, host: env.APP_HOST, port: env.APP_PORT },
  publicDir: env.PUBLIC_DIR,
  helmet: {
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", 'https://www.google.com/'],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net', 'https://unpkg.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        scriptSrc: ["'self'"],
      },
    },
  },
  logs: {
    silent: env.LOG_SILENT,
    colors: env.LOG_COLORS,
  },
}
