// @flow

import swit from 'sharyn/util/swit'
import { SHARYN_NAVIGATION } from 'sharyn/client/actions'
import { clearData } from 'sharyn/client/data-reductions'

const dataReducer = (dataState: Object = {}, { type }: Object) =>
  swit(type, [[[SHARYN_NAVIGATION], () => clearData()]], dataState)

export default dataReducer
