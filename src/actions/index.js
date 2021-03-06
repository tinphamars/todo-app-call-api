import * as types from '../constants/actiontypes'

export const addTodo = (text) => ({ type: types.ADD, text })
export const toggleActive = (id) => ({ type: types.TOGGLE_ACTIVE, id })
export const removeTodoItem = (id) => ({ type: types.REMOVE_ITEM, id })