// @flow

/* eslint-disable no-script-url */

import React from 'react'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import SmileIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Page from 'sharyn/components/Page'
import Button from '@material-ui/core/Button'
import BackIcon from '@material-ui/icons/ArrowBack'

const ServerErrorPageJSX = ({ classes: css }: { classes: Object }) => (
  <Page middle noPaper>
    <div style={{ textAlign: 'center' }}>
      <ErrorIcon className={css.sign} />
      <Typography variant="title" gutterBottom>
        Something went wrong, sorry!
      </Typography>
      <p>
        We have been notified <SmileIcon className={css.smile} />
      </p>
      <Button
        color="primary"
        variant="raised"
        href="javascript:history.back()"
        className={css.backButton}
      >
        <BackIcon className={css.buttonIcon} />
        Go back
      </Button>
    </div>
  </Page>
)

export const ServerErrorPageCmp = withStyles({
  sign: { fontSize: 120, color: '#ccc', marginBottom: 20 },
  smile: { verticalAlign: 'text-bottom', color: '#777', paddingTop: 2, marginLeft: 2 },
  backButton: { marginTop: 15 },
  buttonIcon: { width: 20, marginRight: 6, position: 'relative', top: -1 },
})(ServerErrorPageJSX)

const ServerErrorPage = ServerErrorPageCmp

export default ServerErrorPage
