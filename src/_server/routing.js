// @flow

import { getAllUsers } from 'user/user-db'

const routing = (router: Object) => {
  router.get('*', async ctx => {
    ctx.body = `I like user ${(await getAllUsers())[0].username}`
  })
}

export default routing
