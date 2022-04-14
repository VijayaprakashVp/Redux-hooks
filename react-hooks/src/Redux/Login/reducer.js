import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  token: "",
  username: "",
};

export const reducer = (store = initState, { type, payload }) => {
  // { type, payload } => comes from action action.type, action.payload+

  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        isAuthenticated: true,
        token: payload.token,
        username: payload.username,
      };
    case LOGIN_FAILURE:
      return { ...store, error: true };
    default:
      return store;
  }
};
