// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Page from '@sharyn/components/Page'
import SignupForm from 'auth/cmp/SignupForm'
import LogoTitle from 'app/cmp/LogoTitle'

import { loginRoute } from 'auth/auth-routes'

const styles = ({ breakpoints }) => ({
  layout: {
    maxWidth: 600,
    display: 'flex',
    [breakpoints.down('xs')]: { width: '100%', flexDirection: 'column' },
  },
  _pane: { width: '50%', [breakpoints.down('xs')]: { width: 'auto' } },
  firstPane: { extend: '_pane', marginRight: 20, [breakpoints.down('xs')]: { margin: '0 0 10px' } },
  secondPane: { extend: '_pane', marginLeft: 20, [breakpoints.down('xs')]: { margin: 0 } },
  brandingContainer: { textAlign: 'center' },
  slogan: { margin: '23px 0' },
  description: { [breakpoints.down('xs')]: { display: 'none' } },
  featured: {
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    [breakpoints.down('xs')]: { display: 'none' },
  },
  switchAuth: { marginTop: 20, textAlign: 'center' },
  authLink: { whiteSpace: 'nowrap' },
})

const WelcomePageJSX = ({ classes: css }: { classes: Object }) => (
  <Page middle>
    <div className={css.layout}>
      <div className={css.firstPane}>
        <div className={css.brandingContainer}>
          <LogoTitle />
          <Typography variant="title" className={css.slogan}>
            Great Notes for Great People
          </Typography>
        </div>
        <div className={css.description}>
          Notesapp is a totally real app that lets you create and read notes for free!
        </div>
        <div className={css.featured}>
          Featured in{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharynjs/sharyn">
            Sharyn Magazine
          </a>
        </div>
      </div>
      <div className={css.secondPane}>
        <SignupForm />
        <div className={css.switchAuth}>
          Already have an account?{' '}
          <Link className={css.authLink} to={loginRoute.path}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  </Page>
)

const WelcomePage = withStyles(styles)(WelcomePageJSX)

export default WelcomePage
