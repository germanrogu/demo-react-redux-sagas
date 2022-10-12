import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../features/users";
import tryUsersList from "../sagas/users/list";

export default function* rootSaga() {
  //Watcher

  yield takeLatest(actionTypes.LIST_TRY, tryUsersList);
}
