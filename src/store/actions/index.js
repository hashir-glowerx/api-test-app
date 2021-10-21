import { SET_TODO,ADD_TODO, DELETE_TODO,DELETE_ALL_TODO } from "../types";

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload
});

// export const deleteAllTodo = (payload) => ({
//   type: DELETE_ALL_TODO,
//   payload
// });


