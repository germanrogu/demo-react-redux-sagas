import { combineReducers } from "redux";
import counterReducer, { NAME as counterName } from "../features/counter";

const createRootReducer = () =>
  combineReducers({
    [counterName]: counterReducer,
    //etc etc ...
  });

export default createRootReducer;
