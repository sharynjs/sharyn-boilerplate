// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Page from 'sharyn/components/Page'
import SignupForm from 'auth/cmp/SignupForm'
import LogoTitle from 'app/cmp/LogoTitle'

import { loginRoute } from 'auth/auth-routes'

const styles = ({ breakpoints }) => ({
  layout: {
    maxWidth: 650,
    display: 'flex',
    [breakpoints.down('xs')]: { width: '100%', flexDirection: 'column' },
  },
  _pane: { [breakpoints.down('xs')]: { width: 'auto' } },
  firstPane: {
    extend: '_pane',
    width: '58%',
    paddingRight: 30,
    borderRight: '1px solid #d7d7d7',
    [breakpoints.down('xs')]: { margin: '0 0 10px', padding: 0, border: 'none' },
  },
  secondPane: {
    extend: '_pane',
    width: '42%',
    marginLeft: 30,
    [breakpoints.down('xs')]: { margin: 0 },
  },
  brandingContainer: { textAlign: 'center' },
  slogan: { margin: '23px 0', [breakpoints.down('xs')]: { margin: '15px 0' } },
  description: { [breakpoints.down('xs')]: { display: 'none' } },
  featured: {
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    [breakpoints.down('xs')]: { display: 'none' },
  },
  switchAuth: { marginTop: 20, textAlign: 'center' },
  authLink: { whiteSpace: 'nowrap' },
  signupText: { marginBottom: 20 },
})

const WelcomePageJSX = ({ classes: css }: { classes: Object }) => (
  <Page middle>
    <div className={css.layout}>
      <div className={css.firstPane}>
        <div className={css.brandingContainer}>
          <LogoTitle />
          <Typography variant="headline" className={css.slogan}>
            Great Notes for Great People
          </Typography>
        </div>
        <div className={css.description}>
          Notesapp is a totally real app that lets you create, update, and read your notes for free!
        </div>
        <div className={css.featured}>
          Featured in{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharynjs/sharyn">
            Sharyn Magazine
          </a>
        </div>
      </div>
      <div className={css.secondPane}>
        <Typography variant="title" align="center" color="primary" className={css.signupText}>
          Create an account
        </Typography>
        <SignupForm />
        <div className={css.switchAuth}>
          Already have an account?{' '}
          <Link className={css.authLink} to={loginRoute.path} data-test="switch-to-login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  </Page>
)

const WelcomePage = withStyles(styles)(WelcomePageJSX)

export default WelcomePage
