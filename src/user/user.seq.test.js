import { TESTING_PORT } from '@sharyn/env'
import { startTestServer, stopTestServer } from '_server/server'
import { knex } from '@sharyn/db'

beforeAll(async () => startTestServer())

afterAll(() => stopTestServer())

beforeEach(() => knex.seed.run())

test('E2E - User', async () => {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${TESTING_PORT}`)
  await expect(page).toMatch('I like user local')
})
