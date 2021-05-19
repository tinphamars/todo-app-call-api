import {
  ADD
} from '../constants/actiontypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 1
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          text: action.text,
          completed: true,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ]
    default:
      return state
  }
}
