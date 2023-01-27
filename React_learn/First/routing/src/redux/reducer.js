import { ADD_COUNT, SUB_COUNT } from "./action";
const init = {
  counter: 0,
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...state, counter: state.counter + payload };
    case SUB_COUNT:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};
