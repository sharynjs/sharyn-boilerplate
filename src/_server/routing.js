// @flow

import { getSsrData, renderPage } from 'sharyn/server'

import renderConfig from '_server/render-config'
import allRoutes from 'app/all-routes'
import authRouting from 'auth/auth-routing'
import { FAKE_SERVER_ERROR_PATH } from 'error/error-paths'

const routing = (router: Object) => {
  authRouting(router)

  router.get(FAKE_SERVER_ERROR_PATH, () => {
    throw Error('Fake Server Error')
  })

  router.all('*', async ctx =>
    renderPage(
      ctx,
      renderConfig({ pageData: await getSsrData(ctx, allRoutes), user: ctx.session.user }),
    ),
  )
}

export default routing
