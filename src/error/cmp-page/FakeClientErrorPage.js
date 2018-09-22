// @flow

import React from 'react'
import withLifecycle from 'recompose/lifecycle'
import Page from 'sharyn/components/Page'

const FakeClientErrorPageJSX = () => (
  <Page middle>
    A fake error has been executed in your console to test client-side error-reporting.
  </Page>
)

export const FakeClientErrorPageCmp = FakeClientErrorPageJSX

const FakeClientErrorPage = withLifecycle({
  componentDidMount() {
    setTimeout(() => {
      throw Error('Fake error, everything is fine')
    }, 100)
  },
})(FakeClientErrorPageCmp)

export default FakeClientErrorPage
