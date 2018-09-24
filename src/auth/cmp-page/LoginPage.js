// @flow

import React from 'react'

import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Page from 'sharyn/components/Page'

import LogoTitle from 'app/cmp/LogoTitle'
import LoginForm from 'auth/cmp/LoginForm'
import { landingSignupRoute } from 'landing/landing-routes'

const LoginPageJSX = ({ classes: css }: { classes: Object }) => (
  <Page middle>
    <div className={css.brandingContainer}>
      <LogoTitle />
    </div>
    <Typography variant="title" align="center">
      Log In
    </Typography>
    <LoginForm />
    <div className={css.switchAuth}>
      {"Don't have an account yet? "}
      <Link className={css.authLink} to={landingSignupRoute.path} data-test="switch-to-signup">
        Sign Up
      </Link>
    </div>
  </Page>
)

const LoginPage = withStyles({
  brandingContainer: { textAlign: 'center', marginBottom: 30 },
  switchAuth: { marginTop: 20, textAlign: 'center' },
  authLink: { whiteSpace: 'nowrap' },
})(LoginPageJSX)

export default LoginPage
