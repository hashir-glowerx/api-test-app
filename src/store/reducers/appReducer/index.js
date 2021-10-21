import { SET_TODO, ADD_TODO, DELETE_TODO, DELETE_All_TODO } from "../../types";

const INITIAL_STATE = {
  todos: [],
  users: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (type === SET_TODO) {
    return { ...state, todos: payload };
  } else if (type === ADD_TODO) {
    return { ...state, todos: [...state.todos, payload] };
  } else if (type === DELETE_TODO) {
    let todos;
    if (window.confirm(`Are You Sure..?`)) {
      todos = state.todos.filter((elem, ind) => {
        return payload !== elem.id;
      });
    }
    return { ...state, todos };
  } else if (type === DELETE_All_TODO) {
    return [];
  }
  return state;
};
export default appReducer;
