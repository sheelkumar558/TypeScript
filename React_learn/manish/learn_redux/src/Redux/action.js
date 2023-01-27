import * as types from "./action.type";
export const addCount = (payload) => {
  return { type: types.ADD_COUNT, payload };
};
export const subCount = (payload) => {
  return { type: types.SUB_COUNT, payload };
};

export const getTodoRequest = () => {
  return { type: types.TODOS_REQUEST };
};
export const getTodoSuccess = (payload) => {
  return { type: types.TODOS_SUCCESS, payload };
};
export const getTodoError = (error) => {
  return { type: types.TODOS_ERROR, payload: error };
};

export const addTodoRequest = () => {
  return { type: types.ADD_TODOS_REQUEST };
};
export const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload };
};
export const addTodoError = (error) => {
  return { type: types.ADD_TODOS_ERROR, payload: error };
};
