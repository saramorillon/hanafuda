import { Router } from 'express'
import { getApp } from './controllers/app'

export function routes() {
  const router = Router()

  router.get('/app', getApp)

  return router
}
