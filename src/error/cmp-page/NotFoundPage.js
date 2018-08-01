// @flow

/* eslint-disable no-script-url */

import React from 'react'
import QuestionIcon from '@material-ui/icons/HelpOutline'
import Typography from '@material-ui/core/Typography'
import Page from '@sharyn/components/Page'
import Button from '@material-ui/core/Button'

const NotFoundPage = () => (
  <Page middle noPaper>
    <div style={{ textAlign: 'center' }}>
      <QuestionIcon style={{ fontSize: 120, color: '#ccc', marginBottom: 20 }} />
      <Typography variant="title" gutterBottom>
        Page Not Found
      </Typography>
      <Button
        color="primary"
        variant="raised"
        href="javascript:history.back()"
        style={{ marginTop: 20 }}
      >
        Go back
      </Button>
    </div>
  </Page>
)

export default NotFoundPage
