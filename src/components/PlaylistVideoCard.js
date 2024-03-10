import { useState } from "react";
import getPassedTime from "../utils/getPassedTime";
import getDuration from "../utils/getDuration";
import getCount_K_M from "../utils/getCount_K_M";
import { MdOutlineMoreVert } from "react-icons/md";
import useVideoData from "../utils/useVideoData";

const PlaylistVideoCard = ({
  videoTitle,
  videoId,
  channelTitle,
  postedTime,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const videoData = useVideoData(videoId);
  if (videoData === undefined || Object.keys(videoData).length === 0) {
    return null;
  }

  const {
    contentDetails: { duration },
    statistics: { viewCount },
  } = videoData.items[0];

  return (
    <div
      className="flex gap-2  h-[6.5rem] cursor-pointer relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="basis-[45%] relative">
        <img
          className="bg-cover w-full h-full rounded-lg"
          alt="playlist video thumbnail"
          src={imageUrl}
        />
        <span className="absolute bottom-1 right-1 rounded-md text-white bg-black font-semibold px-1 text-sm">
          {getDuration(duration)}
        </span>
      </div>
      <div className="basis-[55%] flex flex-col">
        <p className="line-clamp-2 font-semibold text-white">{videoTitle}</p>
        <p className="text-sm text-neutral-400 mt-1">{channelTitle}</p>
        <div className="text-sm text-neutral-400 flex gap-x-1">
          <span>{getCount_K_M(viewCount)}</span>
          <span>•</span>
          <span>{getPassedTime(postedTime)} ago</span>
        </div>
      </div>
      {isHovered && (
        <span className="absolute top right-0">
          <MdOutlineMoreVert className="text-white" size={"1.5rem"} />
        </span>
      )}
    </div>
  );
};

export default PlaylistVideoCard;
