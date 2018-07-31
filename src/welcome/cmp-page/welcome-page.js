// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Page from '@sharyn/components/Page'
import LogoIcon from '@material-ui/icons/ImportContacts'
import { loginRoute } from 'auth/auth-routes'

const styles = ({ breakpoints, palette }) => ({
  paperContent: { maxWidth: 600, display: 'flex' },
  title: { marginBottom: 23 },
  pane: { width: '50%' },
  banner: { width: '100%', borderRadius: 5 },
  firstPane: { marginRight: 20 },
  secondPane: { marginLeft: 20 },
  firstInput: { marginBottom: 10 },
  input: { width: '100%' },
  action: { textAlign: 'center', marginTop: 20 },
  logo: { fontSize: 45, verticalAlign: 'top', color: palette.primary.main },
  featured: { color: '#999', textAlign: 'center', marginTop: 20 },
  [breakpoints.down('xs')]: {
    paperContent: { width: '100%', flexDirection: 'column' },
    pane: { width: 'auto' },
    firstPane: { margin: '0 0 10px' },
    secondPane: { margin: 0 },
    signupButton: { width: '100%' },
    featured: { display: 'none' },
    description: { display: 'none' },
  },
})

type Props = { classes: Object }

const WelcomePageJSX = ({ classes }: Props) => (
  <Page middle>
    <div className={classes.paperContent}>
      <div className={`${classes.firstPane} ${classes.pane}`}>
        <Typography variant="display2" align="center" className={classes.title}>
          <LogoIcon className={classes.logo} /> Notesapp
        </Typography>
        <Typography variant="title" align="center" className={classes.title}>
          Great Notes for Great People
        </Typography>
        <div className={classes.description}>
          Notesapp is a totally real app that lets you create and read notes for free!
        </div>
        <div className={classes.featured}>
          Featured in{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharynjs/sharyn">
            Sharyn Magazine
          </a>
        </div>
      </div>
      <form className={`${classes.secondPane} ${classes.pane}`} data-test="login-form">
        <TextField
          className={`${classes.input} ${classes.firstInput}`}
          name="username"
          label="Create a username"
          placeholder="sharyn8020"
        />
        <TextField className={classes.input} name="password" type="password" label="Password" />
        <div className={classes.action}>
          <Button
            className={classes.signupButton}
            data-test="login-form-submit"
            variant="raised"
            color="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
        <div className={classes.action}>
          Already have an account? <Link to={loginRoute.path}>Log In</Link>
        </div>
      </form>
    </div>
  </Page>
)

const WelcomePage = withStyles(styles)(WelcomePageJSX)

export default WelcomePage
