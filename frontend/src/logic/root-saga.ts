import { all } from "redux-saga/effects";
import messageBoardSaga from "./message-board/sagas/message-board-saga";

export default function* rootSaga() {
  yield all([messageBoardSaga()]);
}
