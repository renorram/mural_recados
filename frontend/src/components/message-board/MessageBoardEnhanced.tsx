import { MessageBoardListSelector } from "../../logic/message-board/ducks/message-board-duck";
import { connect } from "react-redux";
import { MessageBoard } from "./MessageBoard";

const mapStateToProps = (state: any) => ({
  messages: MessageBoardListSelector(state),
});

const MessageBoardEnhanced = connect(mapStateToProps)(MessageBoard);

export { MessageBoardEnhanced as MessageBoard };
