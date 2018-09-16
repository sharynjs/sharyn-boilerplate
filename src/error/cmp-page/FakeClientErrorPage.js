// @flow

import React from 'react'
import withLifecycle from 'recompose/lifecycle'

import Typography from '@material-ui/core/Typography'
import Page from 'sharyn/components/Page'

const FakeClientErrorPageJSX = () => (
  <Page middle>
    <Typography variant="title" gutterBottom>
      A fake error has been executed in your console.
    </Typography>
  </Page>
)

const FakeClientErrorPage = withLifecycle({
  componentDidMount() {
    setTimeout(() => {
      throw Error('Fake error, everything is fine')
    }, 100)
  },
})(FakeClientErrorPageJSX)

export default FakeClientErrorPage
