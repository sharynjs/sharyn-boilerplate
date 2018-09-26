// @flow

import { dirChecksum } from 'sharyn/check-setup'
import {
  IS_DEV_ENV,
  NO_SSR,
  NO_VERSION_VALIDATION,
  SENTRY_DSN_PUBLIC,
  TURN_OFF_SW,
} from 'sharyn/env'
import createSharynStore from 'sharyn/redux/store'

import App from 'app/App'
import theme from 'app/theme'

const env = {
  IS_DEV_ENV,
  NO_SSR,
  SENTRY_DSN_PUBLIC,
  isServerRender: !NO_SSR,
  isOnline: true,
  SERVER_VERSION: NO_VERSION_VALIDATION ? null : dirChecksum('src', ['package.json', 'yarn.lock']),
}

const renderConfig = (extraPreloadedState?: Object = {}) => ({
  App,
  theme,
  store: createSharynStore({ preloadedState: { env, ...extraPreloadedState } }),
  swPath: TURN_OFF_SW ? undefined : '/sw.js',
})

export default renderConfig
