import { FiMoreVertical } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { nameGen, msgGen } from "../utils/helper";
import { VscSend } from "react-icons/vsc";

const LiveChat = () => {
  const [chatInput, setChatInput] = useState("");

  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(
        addChat({
          name: nameGen(),
          message: msgGen(Math.floor(Math.random() * 20) + 10),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const onSendBtnHandler = () => {
    dispatch(
      addChat({
        name: "Akshay",
        message: chatInput,
      })
    );
    setChatInput("");
  };

  return (
    <div className="rounded-xl w-full h-full bg-[#0F0F0F] text-white border border-zinc-700 flex flex-col">
      {/* Head */}
      <div className="flex items-center pl-5 pr-3 py-1 border-b border-zinc-700">
        <div className="text-white text-lg font-semibold">Live chat</div>
        <div className="flex-grow flex justify-end items-center gap-x-1">
          <button className="rounded-full h-full hover:bg-neutral-600">
            <FiMoreVertical color="white" size={"1.5rem"} className="m-2" />
          </button>
          <button className="rounded-full h-full hover:bg-neutral-600">
            <IoMdClose color="white" size={"1.75rem"} className="m-2" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-grow overflow-y-scroll h-[50px] flex flex-col-reverse">
        {chats.map((chat, index) => {
          return (
            <ChatMessage name={chat.name} message={chat.message} key={index} />
          );
        })}
      </div>

      {/* Input */}
      <div className="flex justify-center items-center py-3 border-t border-zinc-700 gap-x-2 px-5">
        <div className="">
          <img
            alt="user icon"
            src="https://yt4.ggpht.com/ytc/AIf8zZQ8toNI6lXK6Ote41XTalBudx-l0nFcC80K5Ofw60n_6XnygeTJXbs-z8nn8SIf=s32-c-k-c0x00ffffff-no-rj"
            className="rounded-full w-full h-full"
          />
        </div>
        <form
          className="flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            if (chatInput !== "") {
              onSendBtnHandler();
            }
          }}
        >
          <input
            className="w-full bg-[#272727] placeholder-neutral-400 focus:text-white focus:outline-none rounded-full py-2 px-3"
            placeholder="Chat..."
            value={chatInput}
            onChange={(e) => {
              setChatInput(e.target.value);
            }}
          />
        </form>

        <button
          className="rounded-full h-full hover:bg-neutral-700"
          onClick={onSendBtnHandler}
        >
          <VscSend color="white" size={"1.5rem"} className="m-2" />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
