const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex pl-5 pr-3 items-center cursor-pointer hover:bg-neutral-600 py-1">
      {/* User Icon */}
      <div className="self-start w-[7%]">
        <img
          alt="user icon"
          src="https://yt4.ggpht.com/ytc/AIf8zZRT66KNNwtd9-Rxxc1btj-nKmXvHyjzf9J1DA=s32-c-k-c0x00ffffff-no-rj"
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="ml-3 leading-snug text-[0.9rem] w-[93%]">
        <span className="text-neutral-400 mr-3 font-semibold ">{name}</span>
        <span className="text-neutral-100 ">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
