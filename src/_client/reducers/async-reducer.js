// @flow

import swit from 'sharyn/util/swit'

import {
  SHARYN_FETCH_PAGE_REQUEST,
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_FETCH_PAGE_FAILURE,
  SHARYN_ASYNC_REQUEST,
  SHARYN_ASYNC_SUCCESS,
  SHARYN_ASYNC_FAILURE,
  SHARYN_NAVIGATION,
} from 'sharyn/client/actions'
import { setAsyncRequest, delAsyncEntry, clearAsync } from 'sharyn/client/async-reductions'

const asyncReducer = (asyncState: Object = {}, { type, payload }: { type: string, payload: any }) =>
  swit(
    type,
    [
      [SHARYN_FETCH_PAGE_REQUEST, () => setAsyncRequest(asyncState, { key: 'page' })],
      [SHARYN_ASYNC_REQUEST, () => setAsyncRequest(asyncState, { key: payload })],
      [SHARYN_NAVIGATION, () => clearAsync('page')(asyncState)],
      [
        [SHARYN_ASYNC_SUCCESS, SHARYN_ASYNC_FAILURE],
        () => delAsyncEntry(payload.asyncKey)(asyncState),
      ],
      [
        [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_FETCH_PAGE_FAILURE],
        () => delAsyncEntry('page')(asyncState),
      ],
    ],
    asyncState,
  )

export default asyncReducer
