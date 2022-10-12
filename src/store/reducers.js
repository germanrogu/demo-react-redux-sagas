import { combineReducers } from "redux";
import counterReducer, { NAME as counterName } from "../features/counter";
import usersReducer, { NAME as usersName } from "../features/users";

const createRootReducer = () =>
  combineReducers({
    [counterName]: counterReducer,
    [usersName]: usersReducer,
    //etc etc ...
  });

export default createRootReducer;
