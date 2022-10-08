import { createStore } from "redux";

//INITIAL STATE
const initialState = {
  counter: 0,
};

//REDUCER
const operationReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: ++state.counter };
    case "DECREMENT":
      return { ...state, counter: --state.counter };

    default:
      return state;
  }
};

const store = createStore(operationReducer);

export default store;
