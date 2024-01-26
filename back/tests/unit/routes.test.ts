import { Router } from 'express'
import { getApp } from '../../src/controllers/app'
import { routes } from '../../src/routes'

vi.mock('express')

function mockRouter() {
  return {
    get: vi.fn(),
    post: vi.fn(),
    use: vi.fn(),
  } as unknown as Router
}

describe('routes', () => {
  beforeEach(() => {
    vi.mocked(Router).mockReturnValue(mockRouter())
  })

  it('should create routes', () => {
    const router = routes()
    expect(router.get).toHaveBeenCalledWith('/app', getApp)
  })

  it('should return router', () => {
    const routerMock = mockRouter()
    vi.mocked(Router).mockReturnValue(routerMock)
    const router = routes()
    expect(router).toBe(routerMock)
  })
})
