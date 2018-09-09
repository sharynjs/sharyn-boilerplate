// @flow

import axios from 'axios'
import { IS_DEV_ENV, NO_SSR, SENTRY_DSN_PUBLIC, IS_LOCAL_ENV_TYPE } from 'sharyn/env'
import { renderPage } from 'sharyn/server'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import authRouting from 'auth/auth-routing'
import App from 'app/App'
import theme from 'app/theme'
import allRoutesAndCmps from 'app/all-routes'
import { findMatch } from 'sharyn/shared'

const apiCall = ({
  apiUrl,
  query,
  variables = {},
  cookie,
}: {
  apiUrl: string,
  query: string,
  variables?: Object,
  cookie?: string,
}) =>
  axios.post(
    `${apiUrl}/graphql`,
    { query, variables },
    { headers: { ...(cookie ? { cookie } : {}) } },
  )

jss.setup(jssPreset())
const env = { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR }
const preloadedStateBase = { env, ui: {}, async: {} }
const renderPageOptions = { App, theme, jss, preloadedState: preloadedStateBase }

const routing = (router: Object) => {
  authRouting(router, renderPageOptions)

  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.get('*', async ctx => {
    const { user } = ctx.session
    const { cookie } = ctx.req.headers
    const baseUrl = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${ctx.request.host}`

    const { match, route } = findMatch(allRoutesAndCmps, ctx.req.url, !!user)

    let data = {}

    if (route.mainQuery?.query) {
      let callData
      try {
        callData = (await apiCall({
          apiUrl: baseUrl,
          cookie,
          query: route.mainQuery.query,
          variables: route.mainQuery.mapParams
            ? route.mainQuery.mapParams(match?.params)
            : match?.params,
        })).data
      } catch (err) {
        if (err.response?.data?.errors) {
          throw err.response.data.errors[0]
        }
      }
      if (callData && callData.errors) {
        throw callData.errors[0].message
      } else {
        data = route.mainQuery.mapResp ? route.mainQuery.mapResp(callData?.data) : callData?.data
      }
    }

    await renderPage({
      ...renderPageOptions,
      ctx,
      preloadedState: { ...preloadedStateBase, user, data },
    })
  })
}

export default routing
