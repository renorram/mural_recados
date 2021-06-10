import React from "react";
import Message from "../../logic/message-board/models/message";

export type MessageItemProps = {
  message: Message;
  requestDeleteMessageItem: (messageId: number) => void;
};

const MessageItem = (props: MessageItemProps) => {
  const { message, requestDeleteMessageItem } = props;
  const onDeleteClick = () => requestDeleteMessageItem(message.id);
  return (
    <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-3xl text-gray-700 dark:text-white md:truncate break-words">
            {message.text}
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p
              onClick={onDeleteClick}
              className="p-3 inline-flex text-l leading-5 font-semibold rounded-full bg-red-100 text-red-800 cursor-pointer hover:border-red-800 hover:border border-2 border-red-100"
            >
              Excluir
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex flex-col">
            <p className="flex items-center text-md text-gray-500 dark:text-gray-300">
              <span className="font-bold mr-2">{"Autor:"}</span>
              {message.nickname}
            </p>
            <p className="flex items-center text-md text-gray-500 dark:text-gray-300">
              <span className="font-bold mr-2">{"Data: "}</span>
              {message.createdAt.toLocaleString()}
            </p>
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {message.code}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MessageItem;
