import { IoIosSearch } from "react-icons/io";
import { IoMicCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebarhandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-cols-4 items-center px-6 bg-black shadow-lg py-2 pb-4 z-10 sticky top-0">
      <div className="flex items-center justify-self-start col-span-1">
        <img
          onClick={toggleSidebarhandler}
          className="h-8 mr-4 cursor-pointer"
          alt="hamburger-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
        />
        <img
          className="h-6"
          alt="youtube-icon"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png"
        />
      </div>
      <div className="col-span-2 flex justify-center py-1">
        <input
          type="search"
          placeholder="Search"
          className="w-3/4 py-2 px-4 rounded-s-full text-lg border border-zinc-700 bg-[#121212] text-white  focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />
        <button className="rounded-e-full py-2 px-6 bg-zinc-800 text-white">
          <IoIosSearch color="white" size="1.5rem" />
        </button>
        <button>
          <IoMicCircle className="ml-4" size="2.5rem" color="white" />
        </button>
      </div>
      <div className="col-span-1 justify-self-end mr-4">
        <FaUserCircle color="white" size="2.5rem" />
      </div>
    </div>
  );
};

export default Header;
