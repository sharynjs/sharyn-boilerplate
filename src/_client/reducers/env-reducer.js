// @flow

import {
  SHARYN_START_CLIENT_NAVIGATION,
  SHARYN_ONLINE,
  SHARYN_OFFLINE,
} from 'sharyn/client/actions'
import { disableIsFirstRender, setIsOnline } from 'sharyn/client/env-reductions'
import swit from 'sharyn/util/swit'

const envReducer = (envState: Object = {}, { type }: Object) =>
  swit(
    type,
    [
      [SHARYN_START_CLIENT_NAVIGATION, () => disableIsFirstRender(envState)],
      [SHARYN_ONLINE, () => setIsOnline(envState, true)],
      [SHARYN_OFFLINE, () => setIsOnline(envState, false)],
    ],
    envState,
  )

export default envReducer
