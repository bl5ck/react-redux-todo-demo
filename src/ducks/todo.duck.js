import { createAction } from 'redux-actions';
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const TODO_REMOVE = 'TODO_REMOVE';
const TODOS_REMOVE = 'TODOS_REMOVE';
export const addTodo = createAction(TODO_ADD);
export const toggleTodo = createAction(TODO_TOGGLE);
export const removeTodo = createAction(TODO_REMOVE);
export const removeTodos = createAction(TODOS_REMOVE);
const INITIAL_STATE = {
  todos: [],
  lastUpdate: null
};
export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ADD:
      return Object.assign({}, state, {
        todos: state.todos.concat(
          Object.assign(action.payload, { id: state.todos.length + 1 })
        ),
        lastUpdate: new Date()
      });

    case TODO_TOGGLE:
      const todo = state.todos.find(t => t.id === action.payload);
      const index = state.todos.indexOf(todo);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1)
        ],
        lastUpdate: new Date()
      });
    case TODO_REMOVE:
      return Object.assign({}, state, {
        todos: state.todos.filter(t => t.id !== action.payload),
        lastUpdate: new Date()
      });
    case TODOS_REMOVE:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date()
      });
    default:
      return state;
  }
}
