// @flow

import { NODE_ENV } from '@sharyn/env'
import { startServer, stopServer } from '@sharyn/koa'
import routing from '_server/routing'

NODE_ENV === 'test' || startServer(routing)

export const startTestServer = () => startServer(routing, { silent: true })
export const stopTestServer = () => stopServer({ silent: true })
