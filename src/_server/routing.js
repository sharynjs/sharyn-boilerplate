// @flow

import { NODE_ENV } from '@sharyn/env'
import { getAllUsers } from 'user/user-db'

const WDS_PORT = 8371

const routing = (router: Object) => {
  router.get('*', async ctx => {
    ctx.body = `<!doctype html>
    <html>
      <body>
        <div>I like user ${(await getAllUsers())[0].username}</div>
        <div id="app"></div>
        <script src="${
          NODE_ENV === 'production' || NODE_ENV === 'test' ? '' : `http://localhost:${WDS_PORT}`
        }/static/js/bundle.js"></script>
    </html>`
  })
}

export default routing
