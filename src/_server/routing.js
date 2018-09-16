// @flow

import { IS_DEV_ENV, NO_SSR, SENTRY_DSN_PUBLIC, IS_LOCAL_ENV_TYPE } from 'sharyn/env'
import { renderPage } from 'sharyn/server'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import authRouting from 'auth/auth-routing'
import App from 'app/App'
import theme from 'app/theme'
import allRoutesAndCmps from 'app/all-routes'
import { call, findMatch } from 'sharyn/shared'
import { spread } from 'sharyn/util'

jss.setup(jssPreset())
const env = { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR }
const preloadedStateBase = { env, ui: {}, async: {} }
const renderPageOptions = { App, theme, jss, preloadedState: preloadedStateBase }

const graphqlCall = async ({
  urlBase,
  query,
  variables,
  mapResp,
  cookie,
}: {
  urlBase: string,
  query: string,
  variables: Object,
  mapResp?: Function,
  cookie?: string,
}) => {
  let callResp
  try {
    callResp = await call({ urlBase, cookie, body: { query, variables } })
  } catch (err) {
    throw err.response?.data?.errors ? err.response.data.errors[0] : err
  }
  return {
    ...spread({ errors: callResp?.data?.errors }),
    ...(mapResp ? mapResp(callResp?.data?.data) : callResp?.data?.data),
  }
}

const routing = (router: Object) => {
  authRouting(router, renderPageOptions)

  router.get('/fake-error', () => {
    throw Error('Fake Server Error')
  })

  router.all('*', async ctx => {
    const { user } = ctx.session
    let data = {}

    if (!NO_SSR) {
      const { match, route } = findMatch(allRoutesAndCmps, ctx.req.url, !!user)
      if (match) {
        const { cookie } = ctx.req.headers
        const urlBase = `http${IS_LOCAL_ENV_TYPE ? '' : 's'}://${ctx.request.host}`
        if (ctx.request.method === 'GET' && route.mainQuery?.query) {
          const { query, mapResp, mapParams } = route.mainQuery
          const variables = mapParams ? mapParams(match.params) : match.params
          data = await graphqlCall({ urlBase, query, variables, mapResp, cookie })
        }
        if (ctx.request.method === 'POST' && route.mainMutation?.query) {
          const { query, name, mapFields, successRedirect } = route.mainMutation
          const variables = mapFields(ctx.request.body, match.params)
          data = (await graphqlCall({ urlBase, query, variables, cookie }))[name]
          data.previousFields = ctx.request.body
          console.log(data)
          if (!data.errors && !data.invalidFields && successRedirect) {
            ctx.redirect(
              successRedirect instanceof Function
                ? successRedirect(data, ctx.request.body)
                : successRedirect,
            )
            return
          }
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
