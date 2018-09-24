// @flow

import {
  IS_DEV_ENV,
  NO_SSR,
  SENTRY_DSN_PUBLIC,
  IS_LOCAL_ENV_TYPE,
  TURN_OFF_SW,
  NO_VERSION_VALIDATION,
} from 'sharyn/env'
import { renderPage } from 'sharyn/server'
import { dirChecksum } from 'sharyn/check-setup'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import authRouting from 'auth/auth-routing'
import { FAKE_SERVER_ERROR_PATH } from 'error/error-paths'
import App from 'app/App'
import theme from 'app/theme'
import allRoutes from 'app/all-routes'
import { graphqlCall, findMatch } from 'sharyn/shared'

jss.setup(jssPreset())
const env = {
  IS_DEV_ENV,
  SENTRY_DSN_PUBLIC,
  NO_SSR,
  isOnline: true,
  SERVER_VERSION: NO_VERSION_VALIDATION ? null : dirChecksum('src', ['package.json', 'yarn.lock']),
}
let data = {}
const preloadedStateBase = { data, env, ui: {}, async: {} }
const renderPageOptions = {
  App,
  theme,
  jss,
  swPath: TURN_OFF_SW ? undefined : '/sw.js',
  preloadedState: preloadedStateBase,
}

const routing = (router: Object) => {
  authRouting(router, renderPageOptions)

  router.get(FAKE_SERVER_ERROR_PATH, () => {
    throw Error('Fake Server Error')
  })

  router.all('*', async ctx => {
    const { user } = ctx.session
    if (!NO_SSR) {
      const { match, route } = findMatch(allRoutes, ctx.req.url, !!user)
      if (match) {
        const { cookie } = ctx.req.headers
        const urlBase = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${ctx.request.host}`
        if (ctx.request.method === 'GET' && route.mainQuery) {
          const { query, mapResp, mapUrlParams } = route.mainQuery
          data = await graphqlCall({
            urlBase,
            query,
            urlParams: match.params,
            mapUrlParams,
            mapResp,
            cookie,
          })
        }
        if (ctx.request.method === 'POST' && route.mainMutation) {
          const { query, mapFields, mapUrlParams, mapResp, successRedirect } = route.mainMutation
          data =
            (await graphqlCall({
              urlBase,
              query,
              urlParams: match.params,
              mapUrlParams,
              fields: ctx.request.body,
              mapFields,
              mapResp,
              cookie,
            })) ?? {}
          data.previousFields = ctx.request.body
          if (!data.errors && !data.invalidFields && successRedirect) {
            ctx.redirect(
              successRedirect instanceof Function
                ? successRedirect(data, ctx.request.body)
                : successRedirect,
            )
            return
          }
        }
      } else {
        ctx.status = 404
      }
    }
    renderPage({ ...renderPageOptions, ctx, preloadedState: { ...preloadedStateBase, user, data } })
  })
}

export default routing
