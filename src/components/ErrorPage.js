import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useCatMeme from "../utils/useCatMeme";

const ErrorPage = () => {
  const catMemeInfo = useCatMeme();
  const imgUrl = catMemeInfo?.url;

  return (
    <div className="bg-[#080808] w-full h-[calc(100vh-4.3rem)] text-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg text-center">
          This page isn't available. Sorry about that. <br /> Try searching for
          something else
        </h1>
        <Link to="/">
          <button className="bg-[#080808] font-semibold border border-zinc-700 text-sky-500 rounded-full px-4 py-2 mt-4 hover:border-transparent hover:bg-[#263850]">
            GO TO HOME
          </button>
        </Link>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-center mb-4">
            Meanwhile, here is a fun cat meme...
          </p>
          <div className="h-[18rem] w-[18rem] ">
            {imgUrl === undefined ? (
              <Skeleton
                className="w-full h-full object-cover rounded-xl"
                highlightColor="#444"
                baseColor="#202020"
              />
            ) : (
              <img
                alt="cat meme"
                src={imgUrl}
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
