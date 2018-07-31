// @flow

import React from 'react'
import { lifecycle } from 'recompose'

import Typography from '@material-ui/core/Typography'
import Page from '@sharyn/components/Page'

const FakeClientErrorPageJSX = () => (
  <Page middle>
    <Typography variant="title" gutterBottom>
      A fake error has been executed in your console.
    </Typography>
  </Page>
)

const FakeClientErrorPage = lifecycle({
  componentDidMount() {
    setTimeout(() => {
      throw Error('Fake error, everything is fine')
    }, 100)
  },
})(FakeClientErrorPageJSX)

export default FakeClientErrorPage
