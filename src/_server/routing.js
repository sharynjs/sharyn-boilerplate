// @flow

import { IS_DEV_ENV, NO_SSR, SENTRY_DSN_PUBLIC } from 'sharyn/env'
import { renderPage } from 'sharyn/server'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import authRouting from 'auth/auth-routing'
import App from 'app/App'
import theme from 'app/theme'

jss.setup(jssPreset())
const env = { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR }
const renderPageOptions = { App, theme, jss, env }

const routing = (router: Object) => {
  authRouting(router, renderPageOptions)

  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.get('*', ctx => {
    const { user } = ctx.session
    const data = { someData: true }
    renderPage({ ...renderPageOptions, ctx, data, user })
  })
}

export default routing
