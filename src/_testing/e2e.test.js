// @flow

import { startTestServer, stopTestServer } from '_server/server'

beforeAll(() => startTestServer())

beforeEach(() => console.log('reset DB'))

afterAll(() => stopTestServer())

test('E2E', async () => {
  expect(true).toBe(true)
})
