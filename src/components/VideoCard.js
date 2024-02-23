import { IoLogoChrome } from "react-icons/io";
import getCount_K_M from "../utils/getCount_K_M";
import getPassedTime from "../utils/getPassedTime";
import getDuration from "../utils/getDuration";

const VideoCard = ({ info }) => {
  const { duration } = info.contentDetails;

  if (info === undefined) {
    return null;
  }

  const { title, thumbnails, channelTitle, publishedAt } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <div className="grid grid-cols-12 grid-rows-6 bg-neutral-950 w-96 h-80 cursor-pointer">
      <div className="col-span-12 row-span-4 mb-1 relative">
        <img
          src={thumbnails.high.url}
          alt="video-thumbnail"
          className="w-full h-full object-cover rounded-xl"
        />
        <span className="absolute bottom-1 right-1 text-white bg-black rounded-md p-1 text-sm font-semibold">
          {getDuration(duration)}
        </span>
      </div>
      <div className="col-span-2 row-span-2 my-1 flex justify-center items-start">
        <IoLogoChrome color="white" className="text-[2.75rem]" />
      </div>
      <div className="col-span-10 row-span-2 pr-3">
        <h1 className="font-bold text-white line-clamp-2 my-1">{title}</h1>
        <h2 className="text-gray-400 font-semibold">{channelTitle}</h2>
        <div>
          <span className="text-gray-400 font-semibold">
            {getCount_K_M(viewCount)} views
          </span>
          <span className="text-gray-400 mx-1">•</span>
          <span className="text-gray-400 font-semibold">
            {getPassedTime(publishedAt)} ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
