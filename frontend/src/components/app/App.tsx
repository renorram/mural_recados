import React, { useEffect, MouseEvent } from "react";
import "./App.css";
import { MessageBoard } from "../message-board/MessageBoardEnhanced";
import MessageForm from "../form/MessageForm";
import { MessageCreationData } from "../../logic/message-board/ducks/message-board-duck";

export type AppProps = {
  errors: Array<any>;
  MessageBoardRequestListing: Function;
  MessageFormSubmitMessage: Function;
  ClearErrors: Function;
};

export function App(props: AppProps) {
  const {
    MessageBoardRequestListing,
    MessageFormSubmitMessage,
    errors,
    ClearErrors,
  } = props;
  useEffect(() => {
    MessageBoardRequestListing();
  }, []);

  const onSubmitHandler = (data: MessageCreationData) => {
    MessageFormSubmitMessage(data);
  };

  return (
    <div className="mx-auto bg-gray-100 container">
      <div className="px-4 py-5 border-b rounded-t sm:px-6">
        <div
          className={`bg-red-200 border-red-600 text-red-600 border-l-4 p-4 w-full mb-3 ${
            errors.length > 0 ? "block" : "hidden"
          }`}
        >
          <div className="text-center">
            <p className="font-bold">Erros</p>
            <ul>
              {errors.map((v, k) => (
                <li key={k}>
                  <b>{v.propertyPath}:</b>
                  {v.message}
                </li>
              ))}
            </ul>
            <button
              name="dismiss"
              onClick={() => ClearErrors()}
              className="bg-red-600 text-red-200 mx-auto p-2 rounded"
            >
              Clique aqui para fechar.
            </button>
          </div>
        </div>
        <div className="w-full mb-3">
          <MessageForm onSubmitHandler={onSubmitHandler} />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <MessageBoard />
        </div>
      </div>
    </div>
  );
}
