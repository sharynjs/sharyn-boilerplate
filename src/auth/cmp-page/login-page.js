// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import Page from '@sharyn/components/Page'

import { welcomeRoute } from 'welcome/welcome-routes'

const LoginPage = () => (
  <Page middle>
    <form action="/login" method="post">
      <label>
        Username
        <input name="username" id="username" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Log In</button>
      or <Link to={welcomeRoute.path}>Sign Up</Link>
    </form>
  </Page>
)

export default LoginPage
