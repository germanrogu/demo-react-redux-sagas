import { createStore } from "redux";

//ACTION TYPES
const INCREMENT = "[HOME]/INCREMENT";
const DECREMENT = "[HOME]/DECREMENT";

export const actionTypes = {
  INCREMENT,
  DECREMENT,
};

//INITIAL STATE
const initialState = {
  counter: 0,
};

//REDUCER
const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: ++state.counter };
    case actionTypes.DECREMENT:
      return { ...state, counter: --state.counter };

    default:
      return state;
  }
};

const store = createStore(operationReducer);

export default store;
