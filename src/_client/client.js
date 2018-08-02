// @flow

import '@babel/polyfill'

import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles'
// flow-disable-next-line
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import Raven from 'raven-js'
import React from 'react'
import { hydrate, render } from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import mainReducer from '_client/main-duck'
import App from 'app/App'
import theme from 'app/theme'

const env = window.__ENV__
const { IS_DEV_ENV, SENTRY_DSN_PUBLIC, NO_SSR } = env

SENTRY_DSN_PUBLIC && Raven.config(SENTRY_DSN_PUBLIC).install()

const preloadedState = window.__PRELOADED_STATE__
const composeEnhancers = (IS_DEV_ENV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(mainReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))

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
