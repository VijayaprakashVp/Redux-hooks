export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_LOADING = "GET_TODOS_LOADNG";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const getTodos = (payload) => ({
  type: GET_TODOS,
  payload,
});

export const getTodosLoading = () => ({
  type: GET_TODOS_LOADING,
});

export const getTodosFailed = () => ({
  type: GET_TODOS_FAILED,
});

export const getTodosData = () => (dispatch) => {
  dispatch(getTodosLoading());
  fetch(`http://localhost:8080/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(getTodos()))
    .catch((err) => dispatch(getTodosFailed()));
};
