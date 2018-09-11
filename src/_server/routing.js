// @flow

import axios from 'axios'
import { IS_DEV_ENV, NO_SSR, SENTRY_DSN_PUBLIC, IS_LOCAL_ENV_TYPE } from 'sharyn/env'
import { renderPage } from 'sharyn/server'
import { spread } from 'sharyn/util'
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
}) => axios.post(`${apiUrl}/graphql`, { query, variables }, { headers: { ...spread({ cookie }) } })

jss.setup(jssPreset())
const env = { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR }
const preloadedStateBase = { env, ui: {}, async: {} }
const renderPageOptions = { App, theme, jss, preloadedState: preloadedStateBase }

const routing = (router: Object) => {
  authRouting(router, renderPageOptions)

  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.all('*', async ctx => {
    const { user } = ctx.session
    const { cookie } = ctx.req.headers
    const baseUrl = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${ctx.request.host}`

    const { match, route } = findMatch(allRoutesAndCmps, ctx.req.url, !!user)

    let data = {}

    if (ctx.request.method === 'GET' && route.mainQuery?.query) {
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

    if (
      ctx.request.method === 'POST' &&
      route.mainMutation?.query &&
      route.mainMutation.mapFields
    ) {
      const variables = route.mainMutation.mapFields(ctx.request.body, match?.params)
      let callData
      try {
        callData = (await apiCall({
          apiUrl: baseUrl,
          cookie,
          query: route.mainMutation.query,
          variables,
        })).data
      } catch (err) {
        if (err.response?.data?.errors) {
          throw err.response.data.errors[0]
        }
      }
      if (callData && callData.errors) {
        throw callData.errors[0].message
      } else {
        data = route.mainMutation.mapResp
          ? route.mainMutation.mapResp(callData?.data)
          : callData?.data
        if (route.mainMutation.successRedirect) {
          ctx.redirect(
            route.mainMutation.successRedirect instanceof Function
              ? route.mainMutation.successRedirect(data, ctx.request.body)
              : route.mainMutation.successRedirect,
          )
          return
        }
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
