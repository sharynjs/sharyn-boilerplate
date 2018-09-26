// @flow

import '@babel/polyfill'

import React from 'react'

import Raven from 'raven-js'
import { hydrate, render } from 'react-dom'
import purgeCache from 'sharyn/client/purge-cache'
import { configureWithClientMainQuery } from 'sharyn/hocs/with-client-main-query'
import createSharynStore from 'sharyn/redux/store'
import {
  asyncRequest,
  asyncSuccess,
  asyncFailure,
  fetchPageRequest,
  fetchPageSuccess,
  fetchPageFailure,
  online,
  offline,
  startClientNavigation,
} from 'sharyn/redux/actions'
import { configureFetchPageThunk, configureGraphqlThunk, fetchPageThunk } from 'sharyn/redux/thunks'
import AppWithProviders from 'sharyn/shared/AppWithProviders'

import theme from 'app/theme'
import App from 'app/App'

const preloadedState = window.__PRELOADED_STATE__
const { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR, SERVER_VERSION } = preloadedState.env

/* eslint-disable no-undef */
// flow-disable-next-line
if (CLIENT_VERSION !== SERVER_VERSION) {
  /* eslint-enable no-undef */
  purgeCache()
} else {
  SENTRY_DSN_PUBLIC && Raven.config(SENTRY_DSN_PUBLIC).install()

  const store = createSharynStore({ isDevEnv: IS_DEV_ENV, preloadedState })

  configureFetchPageThunk({
    request: fetchPageRequest,
    success: fetchPageSuccess,
    failure: fetchPageFailure,
  })

  configureGraphqlThunk({
    request: asyncRequest,
    success: asyncSuccess,
    failure: asyncFailure,
  })

  configureWithClientMainQuery(fetchPageThunk)

  const reactDomFn = NO_SSR ? render : hydrate

  // flow-disable-next-line
  reactDomFn(<AppWithProviders {...{ App, theme, store }} />, document.getElementById('app'))

  store.dispatch(startClientNavigation())

  !navigator.onLine && store.dispatch(offline())
  window.addEventListener('online', () => store.dispatch(online()))
  window.addEventListener('offline', () => store.dispatch(offline()))
}
