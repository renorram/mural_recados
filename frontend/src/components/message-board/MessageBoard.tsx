import React from "react";
import Message from "../../logic/message-board/models/message";
import { MessageItem } from "../message-item/MessageItemEnhanced";

type MessageBoardProps = {
  messages: Array<Message>;
};

export const MessageBoard = (props: MessageBoardProps) => {
  const { messages } = props;

  return (
    <ul className="divide-y divide-gray-200">
      {messages.map((item: Message) => (
        <li key={item.id}>
          <MessageItem message={item} />
        </li>
      ))}
    </ul>
  );
};
