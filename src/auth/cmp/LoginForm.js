// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { loginRoute } from 'auth/auth-routes'

const styles = ({ breakpoints }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  loginButton: { [breakpoints.down('xs')]: { width: '100%' } },
})

const LoginFormJSX = ({ classes: css }: { classes: Object }) => (
  <form data-test="login-form" action={loginRoute.path} method="post">
    <TextField className={css.firstInput} name="username" label="Username" />
    <TextField className={css.input} name="password" type="password" label="Password" />
    <div className={css.action}>
      <Button
        className={css.loginButton}
        data-test="login-form-submit"
        variant="raised"
        color="primary"
        type="submit"
      >
        Log In
      </Button>
    </div>
  </form>
)

const LoginForm = withStyles(styles)(LoginFormJSX)

export default LoginForm
