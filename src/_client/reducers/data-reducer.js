// @flow

import swit from 'sharyn/util/swit'
import {
  SHARYN_ASYNC_SUCCESS,
  SHARYN_FETCH_PAGE_REQUEST,
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_INVALIDATE_FIELDS,
  SHARYN_CLEAR_INVALID_FIELDS,
  SHARYN_NAVIGATION,
} from 'sharyn/client/actions'
import { addData, delData, clearData } from 'sharyn/client/data-reductions'

const dataReducer = (dataState: Object = {}, { payload, type }: Object) =>
  swit(
    type,
    [
      [[SHARYN_FETCH_PAGE_SUCCESS, SHARYN_ASYNC_SUCCESS], () => addData(dataState, payload.data)],
      [SHARYN_INVALIDATE_FIELDS, () => addData(dataState, { invalidFields: payload })],
      [SHARYN_CLEAR_INVALID_FIELDS, () => delData('invalidFields')(dataState)],
      [[SHARYN_NAVIGATION, SHARYN_FETCH_PAGE_REQUEST], () => clearData()],
    ],
    dataState,
  )

export default dataReducer
