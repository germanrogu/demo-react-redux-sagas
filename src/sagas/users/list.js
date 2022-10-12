import { call, put } from "redux-saga/effects";
import { actionTypes } from "../../features/users";

export default function* tryUsersList() {
  try {
    //Consume API
    const URL = "https://jsonplaceholder.typicode.com/users";
    const response = yield call(fetch, URL);
    const data = yield call([response, "json"]);
    //Dispatch succes action
    yield put({ type: actionTypes.LIST_SUCCESS, data });
  } catch (error) {
    yield put({ type: actionTypes.LIST_FAILED });
  }
}
