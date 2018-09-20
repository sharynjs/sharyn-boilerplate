// @flow

import swit from 'sharyn/util/swit'

import { SHARYN_START_CLIENT_NAVIGATION } from 'sharyn/client/actions'
import { disableIsFirstRender } from 'sharyn/client/env-reductions'

const envReducer = (envState: Object = {}, { type }: Object) =>
  swit(type, [[SHARYN_START_CLIENT_NAVIGATION, () => disableIsFirstRender(envState)]], envState)

export default envReducer
