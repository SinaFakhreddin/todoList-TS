import { Todos } from "../types";
import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../constants";

const initialState: Todos[] = JSON.parse(localStorage.getItem("todos") || "[]") || [];

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state , action.payload];
    case DONE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item ,
            done:action.payload.done
          };
        } else return item;
      });
    case DELETE_TODO:
      return state?.filter((todo) => todo?.id !== action?.payload.id);
    default:
      return state;
  }
};
