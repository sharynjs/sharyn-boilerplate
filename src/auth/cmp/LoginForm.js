// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect as withRedux } from 'react-redux'

import { loginRoute } from 'auth/auth-routes'

const LoginFormJSX = ({
  classes: css,
  previousFields = {},
  errorMessage,
}: {
  classes: Object,
  previousFields?: Object,
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
      defaultValue={previousFields.username}
      autoFocus
      required
    />
    <TextField className={css.input} name="password" type="password" label="Password" required />
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

export const LoginFormCmp = withStyles(({ breakpoints, palette }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  loginButton: { [breakpoints.down('xs')]: { width: '100%' } },
  error: { margin: '20px 0', color: palette.error.main },
}))(LoginFormJSX)

const LoginForm = withRedux(({ pageData }) => ({
  previousFields: pageData.previousFields,
  errorMessage: pageData.errorMessage,
}))(LoginFormCmp)

export default LoginForm
