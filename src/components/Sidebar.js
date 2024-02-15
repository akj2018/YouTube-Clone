import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    isSidebarOpen && (
      <div className="w-[15%] bg-black text-white px-4 grow-0 shrink-0 sticky top-0">
        <div className="border-b-zinc-600 border-b mb-6">
          <ul className="flex flex-col mb-2">
            <li className="p-2 mb-1 bg-zinc-800 rounded-lg cursor-pointer ">
              Home
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg  hover:bg-zinc-800">
              Shorts
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg  hover:bg-zinc-800">
              Subscriptions
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg hover:bg-zinc-800">
              Youtube Music
            </li>
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b mb-6">
          <div className="flex items-center my-5 mx-2">
            <span className="text-lg font-bold leading-none mr-2">You</span>
            <IoIosArrowForward className="text-lg font-bold" />
          </div>
          <ul className="flex flex-col mb-2">
            <li className="p-2 mb-1 bg-zinc-800 rounded-lg cursor-pointer ">
              Your Channel
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg  hover:bg-zinc-800">
              History
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg  hover:bg-zinc-800">
              Your videos
            </li>
            <li className="p-2 mb-1 cursor-pointer rounded-lg  hover:bg-zinc-800">
              Watch Later
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
