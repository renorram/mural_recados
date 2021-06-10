import { combineReducers } from "@reduxjs/toolkit";
import { messageBoardReducer } from "./message-board/ducks/message-board-duck";

export const rootReducer = combineReducers({
  messageBoardList: messageBoardReducer,
});
