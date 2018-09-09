// @flow

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { landingSignupRoute } from 'landing/landing-routes'

const styles = ({ breakpoints, palette }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  signupButton: { [breakpoints.down('xs')]: { width: '100%' } },
  error: { margin: '20px 0', color: palette.error.main },
})

const mstp = ({ data }) => ({ ...data })

const SignupFormJSX = ({
  classes: css,
  prefill,
  errorMessage,
}: {
  classes: Object,
  prefill?: Object,
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
      defaultValue={prefill?.username}
    />
    <TextField className={css.input} name="password" type="password" label="Password" />
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

const SignupForm = compose(
  connect(mstp),
  withStyles(styles),
)(SignupFormJSX)

export default SignupForm
