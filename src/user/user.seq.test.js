import { startServer, stopServer, DEFAULT_TESTING_PORT } from '@sharyn/koa'
import { knex } from '@sharyn/db'

beforeAll(() => startServer())
afterAll(() => stopServer())
beforeEach(() => knex.seed.run())

test('E2E - User', async () => {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${DEFAULT_TESTING_PORT}`)
  await expect(page).toMatch('I like user local')
})
