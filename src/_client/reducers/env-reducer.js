// @flow

import { SHARYN_START_CLIENT_NAVIGATION, SHARYN_ONLINE, SHARYN_OFFLINE } from 'sharyn/redux/actions'
import { disableIsServerRender, setIsOnline } from 'sharyn/redux/env-reductions'
import swit from 'sharyn/util/swit'

const envReducer = (envState: Object = {}, { type }: Object) =>
  swit(
    type,
    [
      [SHARYN_START_CLIENT_NAVIGATION, () => disableIsServerRender(envState)],
      [SHARYN_ONLINE, () => setIsOnline(envState, true)],
      [SHARYN_OFFLINE, () => setIsOnline(envState, false)],
    ],
    envState,
  )

export default envReducer
