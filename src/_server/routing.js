// @flow

import { IS_DEV_ENV, NO_SSR, SENTRY_DSN_PUBLIC } from '@sharyn/env'
import { renderPage } from '@sharyn/server'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import App from 'app/App'
import theme from 'app/theme'

const routing = (router: Object) => {
  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.get('*', ctx => {
    const user = { username: 'sharyn8020' }
    const data = { someData: true }
    const env = { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR }
    jss.setup(jssPreset())
    ctx.body = renderPage({ ctx, App, theme, jss, env, data, user })
  })
}

export default routing
