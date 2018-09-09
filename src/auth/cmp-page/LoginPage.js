// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import Page from 'sharyn/components/Page'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import LogoTitle from 'app/cmp/LogoTitle'
import LoginForm from 'auth/cmp/LoginForm'
import { landingRoute } from 'landing/landing-routes'

const styles = {
  brandingContainer: { textAlign: 'center', marginBottom: 30 },
  switchAuth: { marginTop: 20, textAlign: 'center' },
  authLink: { whiteSpace: 'nowrap' },
}

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
      <Link className={css.authLink} to={landingRoute.path} data-test="switch-to-signup">
        Sign Up
      </Link>
    </div>
  </Page>
)

const LoginPage = withStyles(styles)(LoginPageJSX)

export default LoginPage
