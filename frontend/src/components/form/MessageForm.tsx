import React, { useRef, MouseEvent, useState, ChangeEvent } from "react";
import MessageTextarea from "./MessageTextarea";
import { MessageCreationData } from "../../logic/message-board/ducks/message-board-duck";

export type MessageFormProps = {
  onSubmitHandler: (data: MessageCreationData) => void;
};

const MessageForm = (props: MessageFormProps) => {
  const { onSubmitHandler } = props;
  const [nickname, setNickname] = useState("");
  const ref = useRef({ value: "" });

  const onButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    onSubmitHandler({
      text: ref.current.value,
      nickname: nickname,
    });

    ref.current.value = "";
    setNickname("");
  };

  const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <form className="flex w-full space-x-3">
      <div className="w-full px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          Envie um recado :)
        </div>
        <div className="form-control">
          <div className="relative">
            <label htmlFor="required-nickname" className="text-gray-700">
              Nome/Apelido
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-nickname"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="nickname"
              placeholder="Seu nome/apelido"
              value={nickname}
              onChange={onNicknameChange}
            />
          </div>
        </div>
        <div className="form-control mb-3">
          <MessageTextarea ref={ref} />
        </div>
        <div className="form-control">
          <button
            onClick={onButtonClick}
            type="submit"
            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
