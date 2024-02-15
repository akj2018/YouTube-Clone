import React, { useState, useRef } from "react";
import Button from "./Button";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleScroll } from "../utils/appSlice";

const ITEM_WIDTH = 300;

const ButtonList = () => {
  const dispatch = useDispatch();
  const isToggleScroll = useSelector((state) => state.app.isToggleScroll);
  const selectedButtonIndex = useSelector(
    (state) => state.app.selectedButtonIndex
  );

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const buttonNames = [
    "All",
    "CSS",
    "Music",
    "Mixes",
    "Python",
    "Manga",
    "Trailers",
    "Stocks",
    "News",
    "Computer and information technology",
    "Thrillers",
    "Thoughts",
    "Graphic design",
    "Live",
    "Pop Music",
    "Recently uploaded",
    "New to you",
  ];

  // Function to handle scrolling when button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scoll Position
    const newScrollPosition = scrollPosition + scrollAmount;

    //Update the state with new scroll position
    setScrollPosition(newScrollPosition);

    //Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;

    dispatch(toggleScroll());
  };

  return (
    <div className="flex bg-black pt-1 items-center pb-3 gap-x-4 px-2 sticky top-0 z-10">
      {isToggleScroll && (
        <FaChevronCircleLeft
          color="white"
          size="1.5rem"
          className="cursor-pointer"
          onClick={() => {
            handleScroll(-ITEM_WIDTH);
          }}
        />
      )}
      <div
        ref={containerRef}
        className="w-[100%] overflow-x-auto scroll-smooth no-scrollbar"
      >
        <div className="w-fit flex items-center gap-x-4">
          {buttonNames.map((btnName, index) => (
            <Button
              key={index}
              index={index}
              name={btnName}
              isSelected={selectedButtonIndex === index ? true : false}
            />
          ))}
        </div>
      </div>
      {!isToggleScroll && (
        <FaChevronCircleRight
          color="white"
          size="1.5rem"
          className="cursor-pointer"
          onClick={() => {
            handleScroll(ITEM_WIDTH);
          }}
        />
      )}
    </div>
  );
};

export default ButtonList;
