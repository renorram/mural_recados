import { MessageBoardDeleteMessage } from "../../logic/message-board/ducks/message-board-duck";
import { connect } from "react-redux";
import MessageItem from "./MessageItem";

const mapDispatchToProps = {
  requestDeleteMessageItem: MessageBoardDeleteMessage,
};

const MessageItemEnhanced = connect(null, mapDispatchToProps)(MessageItem);

export { MessageItemEnhanced as MessageItem };
