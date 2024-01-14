import { Todos } from "../types";
import { ADD_TODO, DELETE_TODO, DONE_TODO, IDLE_TODO } from "../constants";

const initialState: Todos[] =
  JSON.parse(localStorage.getItem("todos") || "[]") || [];

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state, action.payload];
      return newTodos;
    case DONE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          const newTodo = { ...item, done: action.payload.done };
          return newTodo;
        } else return item;
      });
    case DELETE_TODO:
      console.log("action", action);
      return state?.filter((todo) => todo?.id !== action?.payload.id);
    default:
      return state;
  }
};
