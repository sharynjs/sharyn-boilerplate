// @flow

import { getSsrData } from 'sharyn/server'
import processRequest from 'sharyn/server/process-request'

import getRenderConfig from '_server/render-config'
import allRoutes from 'app/all-routes'
import authRouting from 'auth/auth-routing'
import { FAKE_SERVER_ERROR_PATH } from 'error/error-paths'

const routing = (router: Object) => {
  authRouting(router)

  router.get(FAKE_SERVER_ERROR_PATH, () => {
    throw Error('Fake Server Error')
  })

  router.all('*', async ctx =>
    processRequest(
      ctx,
      getRenderConfig,
      await getSsrData({
        user: ctx.session.user,
        allRoutes,
        url: ctx.req.url,
        cookie: ctx.req.headers.cookie,
        host: ctx.request.host,
        method: ctx.request.method,
        body: ctx.request.body,
      }),
    ),
  )
}

export default routing
