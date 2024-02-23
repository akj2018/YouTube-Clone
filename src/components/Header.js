import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { useState, useEffect, useRef } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults, changeInputText } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchResultsMap = useSelector(
    (state) => state.search.searchResultsMap
  );
  const listRef = useRef(null);

  const inputText = useSelector((state) => state.search.inputText);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResultsMap[inputText]) {
        setSearchResults(searchResultsMap[inputText]);
      } else {
        getSearchSuggestions(inputText);
      }
    }, 200);

    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputText]);

  const getSearchSuggestions = async (query) => {
    const response = await fetch(YOUTUBE_SEARCH_API + query);
    const data = await response.json();
    setSearchResults(data[1]);
    if (query !== "") dispatch(cacheResults({ [query]: data[1] }));
  };

  const toggleSidebarhandler = () => {
    dispatch(toggleSidebar());
  };

  const searchSuggestionClickHandler = (text) => {
    dispatch(changeInputText(text));
    setIsInputFocused(false);
  };

  const searchInputHandler = (text) => {
    dispatch(changeInputText(text));
  };

  return (
    <div className="grid grid-cols-4 items-center px-6 bg-[#0F0F0F] shadow-lg py-2 pb-4 z-20 sticky top-0">
      <div className="flex items-center justify-self-start col-span-1">
        <RxHamburgerMenu
          onClick={toggleSidebarhandler}
          className="h-8 mr-4 cursor-pointer text-white"
          size={"1.5rem"}
        />
        <img
          className="h-[1.4rem] ml-4"
          alt="youtube-icon"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png"
        />
      </div>
      <div className="col-span-2 flex justify-center ">
        <div className="flex w-3/4 relative">
          <div
            className={
              "lead-icon rounded-s-full pl-4 bg-[#121212] flex items-center border border-sky-700 border-r-0 " +
              (isInputFocused ? "flex" : "invisible")
            }
          >
            <IoIosSearch color="white" size="1.35rem" className="" />
          </div>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              searchInputHandler(e.target.value);
            }}
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              // setIsInputFocused(false);
            }}
            value={inputText}
            className="w-full py-2 px-4 rounded-s-full text-lg border border-zinc-700 bg-[#121212] text-white focus:outline-none focus:border-sky-700 focus:rounded-s-none focus:border-l-0 "
          />
          {isInputFocused && searchResults.length !== 0 && (
            <div
              ref={listRef}
              className="py-5 absolute left-0 right-0 top-[3.25rem]  rounded-xl bg-neutral-800 text-white font-semibold"
            >
              <ul className="">
                {searchResults.map((searchResult) => (
                  <li
                    onClick={(e) => {
                      searchSuggestionClickHandler(searchResult);
                    }}
                    key={searchResult}
                    className="py-1 px-4 hover:bg-neutral-700 text-lg flex items-center cursor-pointer"
                  >
                    <IoIosSearch color="white" size="1.35rem" className="" />
                    <span className="pb-[0.2rem] mx-3">{searchResult}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          className="rounded-e-full py-2 px-6 bg-zinc-800 text-white"
          onClick={() => {
            console.log("Click btn");
          }}
        >
          <IoIosSearch color="white" size="1.5rem" />
        </button>
        <button className="rounded-full bg-zinc-800 px-[0.6rem] ml-4 hover:bg-zinc-700">
          <MdMic className="" size="1.5rem" color="white" />
        </button>
      </div>
      <div className="col-span-1 justify-self-end mr-4">
        <FaUserCircle color="white" size="2.5rem" />
      </div>
    </div>
  );
};

export default Header;
