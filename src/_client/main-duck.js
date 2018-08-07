// @flow

import { createAction } from 'redux-actions'

const CLEAR_DATA = 'CLEAR_DATA'
export const clearData = createAction(CLEAR_DATA)

const mainReducer = (state: Object, action: Object) => {
  switch (action.type) {
    case CLEAR_DATA: {
      const { data, ...rest } = state
      return rest
    }
    default:
      return state
  }
}

export default mainReducer
