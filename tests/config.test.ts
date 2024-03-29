import { describe, expect, it, vi } from 'vitest'
import { Config } from '../src/config'
import config from '../src/config'

vi.mock('dotenv', (importOriginal) => ({
  default: {
    config: vi.fn(),
  }
}))

describe('config', () => {
  it('should be tested', async () => {

    import.meta.env.DATABASE_CONNECTION_STRING = 'connectionString'

    const {default: actual} = await import('../src/config')

    const expected: Config = {
      port: 3000,
      database: {
        connectionString: 'connectionString',
      },
      schema: 'public',
      postGraphile: {
        graphiql: false,
        watchPg: false,
        showErrorStack: false,
      },
    }
    expect(actual).toEqual(expected)
  })
})
