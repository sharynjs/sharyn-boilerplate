import { startServerWithRouting, stopServerWithRouting } from '_server/server'
import { DEFAULT_TESTING_PORT } from 'sharyn/koa'
import { knex } from 'sharyn/db'
import { sel } from 'sharyn/testing'

beforeAll(() => startServerWithRouting())
afterAll(() => stopServerWithRouting())
beforeEach(() => knex.seed.run())

test(
  'E2E - Auth',
  async () => {
    await page.goto(`http://localhost:${DEFAULT_TESTING_PORT}`)
    await expect(page).toClick(sel('switch-to-login'))
    await expect(page).toFillForm(
      sel('login-form'),
      { username: 'unexisting', password: 'unexisting' },
      { timeout: 1000 },
    )
    await expect(page).toClick(sel('login-form-submit'))
    await page.waitForNavigation()
    await expect(page).toMatchElement(sel('login-error'), {
      timeout: 1000,
      text: 'Incorrect username or password.',
    })
    await expect(page).toClick(sel('switch-to-signup'))
    await expect(page).toFillForm(
      sel('signup-form'),
      { username: 'newuser', password: 'newuser' },
      { timeout: 1000 },
    )
    await expect(page).toClick(sel('signup-form-submit'))
    await page.waitForNavigation()
  },
  10000,
)
