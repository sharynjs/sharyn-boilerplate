// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { signupRoute } from 'auth/auth-routes'

const styles = ({ breakpoints }) => ({
  input: { width: '100%' },
  firstInput: { extend: 'input', marginBottom: 10 },
  action: { textAlign: 'center', marginTop: 20 },
  signupButton: { [breakpoints.down('xs')]: { width: '100%' } },
})

const SignupFormJSX = ({ classes: css }: { classes: Object }) => (
  <form data-test="signup-form" action={signupRoute.path} method="post">
    <TextField
      className={css.firstInput}
      name="username"
      label="Create a username"
      placeholder="sharyn8020"
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

const SignupForm = withStyles(styles)(SignupFormJSX)

export default SignupForm
