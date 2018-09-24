// @flow

import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect as withRedux } from 'react-redux'

import { landingSignupRoute } from 'landing/landing-routes'

const SignupFormJSX = ({
  classes: css,
  previousFields = {},
  errorMessage,
}: {
  classes: Object,
  previousFields?: Object,
  errorMessage?: string,
}) => (
  <form data-test="signup-form" action={landingSignupRoute.path} method="post">
    {errorMessage && (
      <div data-test="signup-error" className={css.error}>
        {errorMessage}
      </div>
    )}
    <TextField
      className={css.firstInput}
      name="username"
      label="Username"
      placeholder="sharyn8020"
      defaultValue={previousFields.username}
      required
    />
    <TextField className={css.input} name="password" type="password" label="Password" required />
    <div className={css.action}>
      <Button
        className={css.signupButton}
        data-test="signup-form-submit"
        variant="raised"
        color="primary"
        type="submit"
      >
        Sign Up
      </Button>
    </div>
  </form>
)

export const SignupFormCmp = withStyles(({ breakpoints, palette }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  signupButton: { [breakpoints.down('xs')]: { width: '100%' } },
  error: { margin: '20px 0', color: palette.error.main },
}))(SignupFormJSX)

const SignupForm = withRedux(({ data }) => ({
  previousFields: data.previousFields,
  errorMessage: data.errorMessage,
}))(SignupFormCmp)

export default SignupForm
