import { Logger } from '@saramorillon/logger'
import { NextFunction, Request, Response } from 'express'

export function getMockReq(request: Partial<Request> = {}): Request {
  return {
    params: {},
    query: {},
    body: {},
    logger: new Logger({ silent: true }),
    ...request,
  } as never
}

export function getMockRes(response: Partial<Response> = {}): { res: Response; next: NextFunction } {
  return {
    res: {
      send: vi.fn().mockReturnThis(),
      sendStatus: vi.fn().mockReturnThis(),
      sendFile: vi.fn().mockReturnThis(),
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      clearCookie: vi.fn().mockReturnThis(),
      redirect: vi.fn().mockReturnThis(),
      ...response,
    } as never,
    next: vi.fn() as never,
  }
}

export function mockAction(logger: Logger) {
  const action = { success: vi.fn(), failure: vi.fn() }
  logger.start = vi.fn().mockReturnValue(action)
  return action
}
