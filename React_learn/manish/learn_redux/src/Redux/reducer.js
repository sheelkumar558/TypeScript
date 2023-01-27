import * as types from "./action.type";

const initialState = {
  count: 0,
  data: {
    todos: [],
    isLoding: false,
    isError: false,
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_COUNT:
      return { ...state, count: state.count + payload };
    case types.SUB_COUNT:
      return { ...state, count: state.count - payload };
    case types.TODOS_REQUEST: {
      return { ...state, data: { ...state.data, isLoding: true } };
    }
    case types.TODOS_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          todos: payload,
          isLoding: false,
          isError: false,
        },
      };
    }
    case types.TODOS_ERROR: {
      return {
        ...state,
        data: { ...state.data, isLoding: false, isError: payload },
      };
    }
    case types.ADD_TODOS_REQUEST: {
      return {
        ...state,
        data: { ...state.data, isLoading: true, isError: false },
      };
    }

    case types.ADD_TODOS_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, isLoading: false },
      };
    }
    case types.ADD_TODOS_REQUEST: {
      return {
        ...state,
        data: { ...state.data, isLoading: false, isError: true },
      };
    }
    default:
      return state;
  }
};
