import { Todos } from "../types";
import { ADD_TODO, DELETE_TODO, DONE_TODO, IDLE_TODO } from "../constants";

export const addTodoAction = (
  payload: Todos
): { type: string; payload: Todos } => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const doneTodoAction = (payload: {
  id: string;
  done: boolean | string;
}) => {
  return {
    type: DONE_TODO,
    payload,
  };
};

export const deleteTodoAction = (payload: { id: string }) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
