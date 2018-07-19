// @flow

import '@babel/polyfill'
import { NODE_ENV, TESTING_PORT } from '@sharyn/env'
import { startServer, stopServer } from '@sharyn/koa'
import routing from '_server/routing'

NODE_ENV === 'test' || startServer(routing)

export const startTestServer = () => startServer(routing, { port: TESTING_PORT, silent: true })
export const stopTestServer = () => stopServer({ port: TESTING_PORT, silent: true })
