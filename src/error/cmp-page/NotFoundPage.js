// @flow

/* eslint-disable no-script-url */

import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import BackIcon from '@material-ui/icons/ArrowBack'
import QuestionIcon from '@material-ui/icons/HelpOutline'
import HomeIcon from '@material-ui/icons/Home'
import Link from 'react-router-dom/Link'
import Page from 'sharyn/components/Page'

const NotFoundPageJSX = ({ classes: css }: { classes: Object }) => (
  <Page middle noPaper>
    <div style={{ textAlign: 'center' }}>
      <QuestionIcon style={{ fontSize: 120, color: '#ccc', marginBottom: 20 }} />
      <Typography variant="title" gutterBottom>
        Oops, there is nothing here!
      </Typography>
      <div className={css.actions}>
        <Button
          color="primary"
          variant="raised"
          href="javascript:history.back()"
          className={css.backButton}
        >
          <BackIcon className={css.buttonIcon} />
          Go back
        </Button>
        <Button color="primary" variant="raised" component={Link} to="/">
          <HomeIcon className={css.buttonIcon} />
          Homepage
        </Button>
      </div>
    </div>
  </Page>
)

const NotFoundPage = withStyles({
  sign: { fontSize: 120, color: '#ccc', marginBottom: 20 },
  backButton: { marginRight: 20 },
  buttonIcon: { width: 20, marginRight: 6, position: 'relative', top: -1 },
  actions: { marginTop: 30 },
})(NotFoundPageJSX)

export default NotFoundPage
