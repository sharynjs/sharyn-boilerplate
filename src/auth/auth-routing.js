// @flow

import uuid from 'uuid/v4'
import bcrypt from 'bcrypt'
import { renderPage } from 'sharyn/server'

import { notesRoute } from 'note/note-routes'
import { createUser, findUserByUsername } from 'user/user-db'

const logIn = (ctx, id, username) => {
  ctx.session = { user: { id, username } }
  ctx.redirect(notesRoute.path)
}

const authRouting = (router: Object, renderPageOptions: Object) => {
  router.post('/signup', async ctx => {
    const { username, password } = ctx.request.body
    if (!username || username === '' || !password || password === '') {
      renderPage({
        ctx,
        ...renderPageOptions,
        data: {
          prefill: ctx.request.body,
          errorMessage: 'Please enter a username and a password.',
        },
      })
    } else {
      const passwordHash = await bcrypt.hash(password, 12)
      const id = uuid()
      await createUser(id, { username, passwordHash })
      logIn(ctx, id, username)
    }
  })

  router.post('/login', async ctx => {
    const { username, password } = ctx.request.body
    const user = await findUserByUsername(username)
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      logIn(ctx, user.id, user.username)
    } else {
      renderPage({
        ctx,
        ...renderPageOptions,
        data: {
          prefill: ctx.request.body,
          errorMessage: 'Incorrect username or password.',
        },
      })
    }
  })

  router.get('/logout', ctx => {
    ctx.session = null
    ctx.redirect('/')
  })
}

export default authRouting