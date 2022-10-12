import { createStructuredSelector } from "reselect";

export const NAME = "counter";

//ACTION TYPES
const INCREMENT = "[counter]/INCREMENT";
const DECREMENT = "[counter]/DECREMENT";

export const actionTypes = {
  INCREMENT,
  DECREMENT,
};

//INITIAL STATE
const initialState = {
  counter: 0,
};

//REDUCER
const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: ++state.counter };
    case actionTypes.DECREMENT:
      return { ...state, counter: --state.counter };

    default:
      return state;
  }
};

//ACTION CREATORS
const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};

export const actionCreators = { increment, decrement };

const counter = (state) => state[NAME];

export const selectorCounter = createStructuredSelector({
  counter,
});

export default counterReducer;
