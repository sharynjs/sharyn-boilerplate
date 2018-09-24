// @flow

import '@babel/polyfill'

import { IS_TEST_ENV } from 'sharyn/env'
// flow-disable-next-line
import { startServer, stopServer } from 'sharyn/koa'

import apolloConfig from '_server/apollo-config'
import routing from '_server/routing'

const options = { apolloConfig }

export const startServerWithRouting = () => startServer(routing, options)
export const stopServerWithRouting = () => stopServer(routing, options)

IS_TEST_ENV || startServerWithRouting()
