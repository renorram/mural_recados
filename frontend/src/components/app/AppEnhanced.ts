import {
  MessageBoardClearErrors,
  MessageBoardCreateMessage,
  MessageBoardErrorsSelector,
  MessageBoardRequestListing,
} from "../../logic/message-board/ducks/message-board-duck";
import { connect } from "react-redux";
import { App } from "./App";

const mapStateToProps = (state: any) => ({
  errors: MessageBoardErrorsSelector(state),
});

const mapDispatchToProps = {
  MessageBoardRequestListing,
  MessageFormSubmitMessage: MessageBoardCreateMessage,
  ClearErrors: MessageBoardClearErrors,
};

const AppEnhanced = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppEnhanced as App };
