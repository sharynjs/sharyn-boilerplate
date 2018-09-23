// @flow

import '@babel/polyfill'

// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
import Raven from 'raven-js'
import React from 'react'
import { hydrate, render } from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import purgeCache from 'sharyn/client/purge-cache'

import dataReducer from '_client/reducers/data-reducer'
import asyncReducer from '_client/reducers/async-reducer'
import envReducer from '_client/reducers/env-reducer'

import App from 'app/App'
import theme from 'app/theme'

import {
  startClientNavigation,
  fetchPageRequest,
  fetchPageSuccess,
  fetchPageFailure,
  asyncRequest,
  asyncSuccess,
  asyncFailure,
  online,
  offline,
} from 'sharyn/client/actions'
import {
  fetchPageThunk,
  configureGraphqlThunk,
  configureFetchPageThunk,
} from 'sharyn/client/thunks'
import { configureWithClientMainQuery } from 'sharyn/hocs/with-client-main-query'

const preloadedState = window.__PRELOADED_STATE__
const { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR, SERVER_VERSION } = preloadedState.env
preloadedState.env.isFirstRender = !NO_SSR

console.log(SERVER_VERSION)
// eslint-disable-next-line
console.log(CLIENT_VERSION)

/* eslint-disable no-undef */
// flow-disable-next-line
if (CLIENT_VERSION !== SERVER_VERSION) {
  /* eslint-enable no-undef */
  purgeCache()
} else {
  SENTRY_DSN_PUBLIC && Raven.config(SENTRY_DSN_PUBLIC).install()

  const composeEnhancers = (IS_DEV_ENV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  const store = createStore(
    combineReducers({
      data: dataReducer,
      user: (s = null) => s,
      ui: (s = {}) => s,
      async: asyncReducer,
      env: envReducer,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  )

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

  jss.setup(jssPreset())

  const reactDomFn = NO_SSR ? render : hydrate

  reactDomFn(
    <Provider {...{ store }}>
      <BrowserRouter>
        <JssProvider {...{ jss }} generateClassName={createGenerateClassName()}>
          <MuiThemeProvider {...{ theme }}>
            <App />
          </MuiThemeProvider>
        </JssProvider>
      </BrowserRouter>
    </Provider>,
    // flow-disable-next-line
    document.getElementById('app'),
  )

  store.dispatch(startClientNavigation())

  store.dispatch(navigator.onLine ? online() : offline())
  window.addEventListener('online', () => store.dispatch(online()))
  window.addEventListener('offline', () => store.dispatch(offline()))
}
