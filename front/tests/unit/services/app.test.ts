import { Axios } from '../../../src/services/Axios'
import { getApp } from '../../../src/services/app'

vi.mock('../../../src/services/Axios')

describe('getApp', () => {
  beforeEach(() => {
    vi.mocked(Axios.get).mockResolvedValue({ data: 'app' })
  })

  it('should get app', async () => {
    await getApp()
    expect(Axios.get).toHaveBeenCalledWith('/api/app')
  })

  it('should return app', async () => {
    const result = await getApp()
    expect(result).toBe('app')
  })
})
