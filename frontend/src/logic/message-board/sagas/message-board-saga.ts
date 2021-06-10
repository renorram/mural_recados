import {
  MessageBoardUpdateListing,
  MessageBoardActionType,
  MessageCreationData,
  MessageBoardRequestListing,
  MessageBoardOperationErrored,
} from "../ducks/message-board-duck";
import { put, takeEvery, call, all } from "redux-saga/effects";
import MessagesApi from "../../../mechanics/network/http/messages-api";

function* fetchMessageBoardList() {
  // @ts-ignore
  let items = yield call(MessagesApi.findAll);
  yield put(MessageBoardUpdateListing(items));
}

function* createMessage(action: { payload: { data: MessageCreationData } }) {
  const {
    payload: { data },
  } = action;
  try {
    // @ts-ignore
    const item = yield call(MessagesApi.create, data);
    yield put(MessageBoardRequestListing());
  } catch (e) {
    yield put(MessageBoardOperationErrored(e));
  }
}

function* deleteMessage(action: { payload: { messageId: number } }) {
  const {
    payload: { messageId },
  } = action;
  try {
    // @ts-ignore
    const deleted = yield call(MessagesApi.delete, messageId);
    yield put(MessageBoardRequestListing());
  } catch (e) {
    yield put(MessageBoardOperationErrored(e));
  }
}

export default function* messageBoardSaga() {
  yield takeEvery(MessageBoardActionType.LIST_REQUESTED, fetchMessageBoardList);
  yield takeEvery(MessageBoardActionType.CREATE_MESSAGE, createMessage);
  yield takeEvery(MessageBoardActionType.DELETE_MESSAGE, deleteMessage);
}
