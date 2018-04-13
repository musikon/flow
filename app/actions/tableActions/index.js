// @flow
import * as actionTypes from '../../constants/TableConstants'

import _cloneDeep from 'lodash/cloneDeep'
import _values from 'lodash/values'
import _maxBy from 'lodash/maxBy'
import _sortBy from 'lodash/sortBy'

const data = {
  1: {
    id: 1,
    code: '1344',
    description: 'Descrion',
    formula: '1=5',
    select: 'element1',
    active: false
  },
  2: {
    id: 2,
    code: '1344',
    description: 'Dcription',
    formula: '1+15',
    select: 'element2',
    active: true
  },
  3: {
    id: 3,
    code: '1344',
    description: 'Deription',
    formula: '1+=5',
    select: 'element1',
    active: false
  }
}

const colors = {
  edit: 'yellow',
  delete: 'red',
  add: 'green'
}

const getData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.MAIN__GET_DATA,
        data
      })
    }, 1000)
  }
}

const deleteElement = (object, id) => {
  return dispatch => {
    dispatch(getColors({ params: 'line', id, hex: colors.delete }))
    setTimeout(() => {
      dispatch(getColors(null))
      const data = _cloneDeep(object)
      delete data[id]
      dispatch({
        type: actionTypes.MAIN__DELETE_ELEMENT,
        data
      })
    }, 1000)
  }
}

const setTableInfo = object => {
  return dispatch => {
    const { data, id, value, state } = object
    const dataClone = _cloneDeep(data)
    dispatch(getColors({ params: 'box-select', id, hex: colors.edit }))
    dataClone[id][state] = value
    dispatch({
      type: actionTypes.MAIN__SET_TABLE_INFO,
      data: dataClone
    })
    setTimeout(() => {
      dispatch(getColors(null))
    }, 1000)
  }
}

const setCheckBoxTable = (object, id) => {
  return dispatch => {
    const data = _cloneDeep(object)
    dispatch(getColors({ params: 'box-checkbox', id, hex: colors.edit }))
    data[id].active = !data[id].active
    dispatch({
      type: actionTypes.MAIN__SET_TABLE_CHECKBOX,
      data
    })
    setTimeout(() => {
      dispatch(getColors(null))
    }, 1000)
  }
}

const getColors = object => {
  //{params, id, hex}
  const color = _cloneDeep(object)
  return dispatch => {
    dispatch({
      type: actionTypes.MAIN__GET_COLOR,
      color
    })
  }
}

const addElement = (object, forms, callback) => {
  if (forms)
    return dispatch => {
      const { code, formula, description, select, active } = forms
      let id
      let data = _cloneDeep(object)
      Object.keys(data).length === 0
        ? (id = 1)
        : (id = _maxBy(_values(data), 'id').id + 1)
      dispatch(getColors({ params: 'line', id, hex: colors.add }))
      data[id] = {
        id,
        code,
        description,
        formula,
        select,
        active
      }
      if (callback) {
        callback()
      }
      setTimeout(() => {
        dispatch(getColors(null))
      }, 1000)
      dispatch({
        type: actionTypes.MAIN__ADD_ELEMENT,
        data
      })
    }
}

const tableSort = (object, name) => {
  let array = _sortBy(_cloneDeep(object), name)
  let data = {}
  for (let i = 0; i < array.length; i++) {
    data[array[i].id] = array[i]
  }
  return dispatch => {
    dispatch({
      type: actionTypes.MAIN__TABLE_SORT,
      data
    })
  }
}

export default {
  getData,
  deleteElement,
  getColors,
  addElement,
  setTableInfo,
  setCheckBoxTable,
  tableSort
}
