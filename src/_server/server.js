// @flow

import '@babel/polyfill'
import { startServer, stopServer } from 'sharyn/koa'
import { IS_TEST_ENV } from 'sharyn/env'
import routing from '_server/routing'

export const startServerWithRouting = () => startServer(routing)
export const stopServerWithRouting = () => stopServer(routing)

IS_TEST_ENV || startServerWithRouting()
