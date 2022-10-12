import { createStructuredSelector } from "reselect";

export const NAME = "users";

//ACTION TYPES
const LIST_TRY = "[users]/LIST_TRY";
const LIST_SUCCESS = "[users]/LIST_SUCCESS";
const LIST_FAILED = "[users]/LIST_FAILED";

export const actionTypes = {
  LIST_TRY,
  LIST_SUCCESS,
  LIST_FAILED,
};

//INITIAL STATE
const initialState = {
  dataSource: [],
  isLoading: false,
};

//REDUCER
const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LIST_TRY:
      return { ...state, isLoading: true };
    case actionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, dataSource: action.data };
    case actionTypes.LIST_FAILED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

//ACTION CREATORS
const list = () => {
  return { type: LIST_TRY };
};

export const actionCreators = { list };

const users = (state) => state[NAME];

export const selectorUsers = createStructuredSelector({
  users,
});

export default usersReducer;
