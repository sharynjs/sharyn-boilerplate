// @flow

import bcrypt from 'bcrypt'
import uuid from 'uuid/v4'
import processRequest from 'sharyn/server/process-request'

import getRenderConfig from '_server/render-config'
import { LOGIN_PATH, LOGOUT_PATH } from 'auth/auth-paths'
import { LANDING_SIGNUP_PATH } from 'landing/landing-paths'
import { NOTES_PATH } from 'note/note-paths'
import { createUser, findUserByUsername } from 'user/user-db'

const logIn = (ctx, id, username) => {
  ctx.session = { user: { id, username } }
  ctx.redirect(NOTES_PATH)
}

const authRouting = (router: Object) => {
  router.get(
    LANDING_SIGNUP_PATH,
    (ctx, next) => (ctx.session?.user ? next() : processRequest(ctx, getRenderConfig)),
  )

  router.post(LANDING_SIGNUP_PATH, async ctx => {
    const { username, password } = ctx.request.body
    if (!username || username === '' || !password || password === '') {
      processRequest(ctx, getRenderConfig, {
        data: {
          previousFields: ctx.request.body,
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

  router.get(LOGIN_PATH, ctx => {
    ctx.session = null
    processRequest(ctx, getRenderConfig)
  })

  router.post(LOGIN_PATH, async ctx => {
    const { username, password } = ctx.request.body
    const user = await findUserByUsername(username)
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      logIn(ctx, user.id, user.username)
    } else {
      processRequest(ctx, getRenderConfig, {
        data: {
          previousFields: ctx.request.body,
          errorMessage: 'Incorrect username or password.',
        },
      })
    }
  })

  router.get(LOGOUT_PATH, ctx => {
    ctx.session = null
    ctx.redirect(LANDING_SIGNUP_PATH)
  })
}

export default authRouting
