// @flow

import { IS_DEV_ENV, SENTRY_DSN_PUBLIC } from '@sharyn/env'
import { htmlBase } from '@sharyn/server'

const routing = (router: Object) => {
  router.get('*', ctx => {
    ctx.body = htmlBase([['__ENV__', { IS_DEV_ENV, SENTRY_DSN_PUBLIC }]])
  })
}

export default routing
