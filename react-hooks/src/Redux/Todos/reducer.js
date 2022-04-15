import { store } from "../store";
import { GET_TODOS, GET_TODOS_LOADING, GET_TODOS_FAILED } from "./action";

const initState = {
  loading: false,
  error: false,
  todos: [],
};

export const TodosReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING:
      return { ...store, loading: true };
    case GET_TODOS:
      return { ...store, loading: false, error: false, todos: [payload] };
    case GET_TODOS_FAILED:
      return { ...store, loading: false, error: true, todos: [] };
    default:
      return store;
  }
};
