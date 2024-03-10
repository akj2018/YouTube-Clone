import { Link } from "react-router-dom";

const ErrorVideo = () => {
  return (
    <div className="bg-[#080808] w-full h-[calc(100vh-4.3rem)] flex flex-col items-center justify-center">
      <div className="w-[16rem] mb-3">
        <img
          alt="video-not-found"
          src="https://y.yarn.co/936f0573-a213-4be8-98d0-78fe18d7652f_text.gif"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <h1 className="text-2xl text-center font-semibold text-neutral-200 my-6">
        This video isn't available any more
      </h1>
      <Link to="/">
        <button className="bg-[#080808] font-semibold border border-zinc-700 text-sky-500 rounded-full px-4 py-2 mt-4 hover:border-transparent hover:bg-[#263850]">
          GO TO HOME
        </button>
      </Link>
    </div>
  );
};

export default ErrorVideo;
