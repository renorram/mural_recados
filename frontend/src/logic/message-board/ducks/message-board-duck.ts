import Message from "../models/message";

export enum MessageBoardActionType {
  LIST_CHANGED = "MESSAGE_BOARD_LIST_CHANGED",
  LIST_REQUESTED = "MESSAGE_BOARD_LIST_REQUESTED",
  CREATE_MESSAGE = "MESSAGE_BOARD_CREATE_MESSAGE",
  DELETE_MESSAGE = "MESSAGE_BOARD_DELETE_MESSAGE",
  OPERATION_ERRORED = "MESSAGE_BOARD_OPERATION_ERRORED",
  CLEAR_ERRORS = "MESSAGE_BOARD_CLEAR_ERRORS",
}

export declare type MessageBoardState = {
  messages: Array<Message>;
  errors: Array<any>;
};

export declare type MessageCreationData = {
  nickname: string;
  text: string;
};

const initialState = {
  messages: [],
  errors: [],
};

export const messageBoardReducer = (
  state: MessageBoardState = initialState,
  action: any = {}
) => {
  switch (action.type) {
    case MessageBoardActionType.LIST_CHANGED:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case MessageBoardActionType.OPERATION_ERRORED:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case MessageBoardActionType.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};

export const MessageBoardUpdateListing = (messages: Array<Message>) => ({
  type: MessageBoardActionType.LIST_CHANGED,
  payload: { messages },
});

export const MessageBoardRequestListing = () => ({
  type: MessageBoardActionType.LIST_REQUESTED,
});

export const MessageBoardCreateMessage = (data: MessageCreationData) => ({
  type: MessageBoardActionType.CREATE_MESSAGE,
  payload: { data },
});

export const MessageBoardDeleteMessage = (messageId: number) => ({
  type: MessageBoardActionType.DELETE_MESSAGE,
  payload: { messageId },
});

export const MessageBoardOperationErrored = (errors: Array<any>) => ({
  type: MessageBoardActionType.OPERATION_ERRORED,
  payload: { errors },
});

export const MessageBoardClearErrors = () => ({
  type: MessageBoardActionType.CLEAR_ERRORS,
});

const rootSelector = (state: any) =>
  state.messageBoardList ? state.messageBoardList : initialState;

export const MessageBoardListSelector = (state: any) =>
  rootSelector(state).messages;

export const MessageBoardErrorsSelector = (state: any) =>
  rootSelector(state).errors;
