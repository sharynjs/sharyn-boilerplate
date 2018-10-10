// @flow

import { TURN_OFF_SW } from 'sharyn/env'
import createSharynStore from 'sharyn/redux/store'
import baseEnv from 'sharyn/server/base-env'

import App from 'app/App'
import theme from 'app/theme'

const getRenderConfig = (extraPreloadedState?: Object = {}) => ({
  App,
  theme,
  store: createSharynStore({ preloadedState: { env: baseEnv, ...extraPreloadedState } }),
  swPath: TURN_OFF_SW ? undefined : '/sw.js',
})

export default getRenderConfig
