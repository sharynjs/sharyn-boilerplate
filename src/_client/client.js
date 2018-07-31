// @flow

import '@babel/polyfill'

import { MuiThemeProvider } from '@material-ui/core/styles'
import Raven from 'raven-js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import mainReducer from '_client/main-duck'
import theme from '_shared/theme'
import App from 'app/app'

const env = window.__ENV__
const { IS_DEV_ENV, SENTRY_DSN_PUBLIC } = env

SENTRY_DSN_PUBLIC && Raven.config(SENTRY_DSN_PUBLIC).install()

const composeEnhancers = (IS_DEV_ENV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  // flow-disable-next-line
  document.getElementById('app'),
)

console.log(store.getState())
