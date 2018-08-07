// @flow

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { loginRoute } from 'auth/auth-routes'

const styles = ({ breakpoints, palette }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  loginButton: { [breakpoints.down('xs')]: { width: '100%' } },
  error: { marginBottom: 20, color: palette.error.main },
})

const mstp = ({ data }) => ({ ...data })

const LoginFormJSX = ({
  classes: css,
  prefill,
  errorMessage,
}: {
  classes: Object,
  prefill?: Object,
  errorMessage?: string,
}) => (
  <form data-test="login-form" action={loginRoute.path} method="post">
    {errorMessage && (
      <div data-test="login-error" className={css.error}>
        {errorMessage}
      </div>
    )}
    <TextField
      className={css.firstInput}
      name="username"
      label="Username"
      defaultValue={prefill?.username}
    />
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

const LoginForm = compose(
  connect(mstp),
  withStyles(styles),
)(LoginFormJSX)

export default LoginForm
