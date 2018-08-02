// @flow

import { NO_SSR, IS_DEV_ENV, SENTRY_DSN_PUBLIC } from '@sharyn/env'
import { htmlBase } from '@sharyn/server'

const routing = (router: Object) => {
  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.get('*', ctx => {
    const windowVars = [['__ENV__', { IS_DEV_ENV, SENTRY_DSN_PUBLIC }]]
    if (!NO_SSR) {
      windowVars.push([
        '__PRELOADED_STATE__',
        { data: { someData: true }, user: { username: 'sharyn8020' } },
      ])
    }
    ctx.body = htmlBase(windowVars)
  })
}

export default routing
