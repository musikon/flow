// @flow

import * as actionTypes from '../../constants/TableConstants'

const initialState: Object = {
  data: {},
  color: null
}

export default function tableReducer(state: Object = initialState, action: Object) {
  const { data, type, color } = action

  switch (type) {
    case actionTypes.MAIN__GET_DATA:
    case actionTypes.MAIN__ADD_ELEMENT:
    case actionTypes.MAIN__DELETE_ELEMENT:
    case actionTypes.MAIN__SET_TABLE_INFO:
    case actionTypes.MAIN__SET_TABLE_CHECKBOX:
    case actionTypes.MAIN__TABLE_SORT:
      return {
        ...state,
        data
      }
    case actionTypes.MAIN__GET_COLOR:
      return {
        ...state,
        color
      }

    default:
      return state
  }
}
