const SidebarBtn = ({ text, icon }) => {
  return (
    <li className="py-2 px-4 mb-1  rounded-lg cursor-pointer flex items-center hover:bg-zinc-800">
      <div className="w-[25%] justify-self-start">{icon}</div>
      <div className="w-[75%]">{text}</div>
    </li>
  );
};

export default SidebarBtn;
