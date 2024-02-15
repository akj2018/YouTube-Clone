import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectedButtonIndex } from "../utils/appSlice";

const Button = ({ name, isSelected, index }) => {
  const dispatch = useDispatch();

  const buttonClickHandler = (index) => {
    console.log(index);
    dispatch(changeSelectedButtonIndex(index));
  };

  return isSelected ? (
    <button
      onClick={() => buttonClickHandler(index)}
      className="px-3 py-1 bg font-semibold text-neutral-800  bg-neutral-100 truncate rounded-lg max-w-[30ch] hover:bg-neutral-700"
    >
      {name}
    </button>
  ) : (
    <button
      onClick={() => buttonClickHandler(index)}
      className="px-3 py-1 bg font-semibold text-white bg-neutral-800 truncate rounded-lg max-w-[30ch] hover:bg-neutral-700"
    >
      {name}
    </button>
  );
};

export default Button;
