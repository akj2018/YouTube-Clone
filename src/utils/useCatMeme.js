import { useEffect, useState } from "react";
import { CAT_MEME_API } from "./constants";

const useCatMeme = () => {
  const [catMemeData, setCatMemeData] = useState({});

  useEffect(() => {
    const getCatMeme = async () => {
      const response = await fetch(CAT_MEME_API);
      const json = await response.json();
      setCatMemeData(json);
    };

    const interval = setInterval(() => {
      getCatMeme();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return catMemeData;
};

export default useCatMeme;
