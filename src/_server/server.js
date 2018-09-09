// @flow

import '@babel/polyfill'
// flow-disable-next-line
import { startServer, stopServer } from 'sharyn/koa'
import { IS_TEST_ENV } from 'sharyn/env'
import routing from '_server/routing'
import apolloConfig from '_server/apollo-config'

const options = { apolloConfig }

export const startServerWithRouting = () => startServer(routing, options)
export const stopServerWithRouting = () => stopServer(routing, options)

IS_TEST_ENV || startServerWithRouting()
