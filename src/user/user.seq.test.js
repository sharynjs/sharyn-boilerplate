// @flow

import { TESTING_PORT } from '@sharyn/env'
import { startTestServer, stopTestServer } from '_server/server'
import puppeteer from 'puppeteer'
import expect from 'expect-puppeteer'
import { knex } from '@sharyn/db'

let browser

beforeAll(async () => {
  browser = await puppeteer.launch()
  startTestServer()
})

afterAll(() => stopTestServer() && browser.close())

beforeEach(() => knex.seed.run())

test('E2E - User', async () => {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${TESTING_PORT}`)
  await expect(page).toMatch('I like user local')
})
