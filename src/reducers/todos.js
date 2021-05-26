import {
  ADD, TOGGLE_ACTIVE, REMOVE_ITEM
} from '../constants/actiontypes'

const initialState = [
  {
    text: 'GO TO THE BED',
    completed: false,
    id: 1
  },
  {
    text: 'COOK',
    completed: true,
    id: 2
  },
  {
    text: 'STUDY',
    completed: false,
    id: 3
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          text: action.text.toUpperCase(),
          completed: true,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ]
    case TOGGLE_ACTIVE:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case REMOVE_ITEM:
      return state.filter(todo =>
        todo.id !== action.id
      )
    default:
      return state
  }
}
