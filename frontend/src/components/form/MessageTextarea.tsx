import React, { Ref } from "react";

const MessageTextarea = React.forwardRef((props: any, ref: Ref<any>) => {
  return (
    <div className="relative">
      <label htmlFor="required-message" className="text-gray-700">
        Mensagem
        <span className="text-red-500 required-dot">*</span>
      </label>
      <textarea
        ref={ref}
        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="required-message"
        placeholder="Insira seu recado"
        name="text"
        rows={5}
        cols={40}
      />
    </div>
  );
});

export default MessageTextarea;
