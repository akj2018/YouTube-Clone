import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
import { PiShareFatThin } from "react-icons/pi";
import { TfiMoreAlt } from "react-icons/tfi";

import getCurrrentDate from "../utils/getCurrentDate";
import useChannelData from "../utils/useChannelData";
import getCount_K_M from "../utils/getCount_K_M";
import { YOUTUBE_CHANNEL_URL } from "../utils/constants";
import { setData, setChannelId } from "../utils/channelDataSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const VideoInfo = ({ videoData, showMore, descriptionText, setShowMore }) => {
  const channelId = videoData?.items[0]?.snippet?.channelId;
  const channelData = useChannelData(channelId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (channelData !== undefined) {
      dispatch(setData(channelData));
      dispatch(setChannelId(channelId));
    }
  }, [channelData]);

  if (channelData === undefined || Object.keys(channelData).length === 0)
    return null;

  const { title, channelTitle, publishedAt } = videoData?.items[0]?.snippet;
  const { viewCount, likeCount, commentCount } =
    videoData?.items[0]?.statistics;

  const { subscriberCount } = channelData.items[0].statistics;
  const { url: channelIconUrl } =
    channelData.items[0].snippet.thumbnails.default;
  const { customUrl: channelUrl } = channelData.items[0].snippet;

  return (
    <div className="flex flex-col bg-[#0F0F0F]">
      <h1 className="text-white font-bold text-2xl">{title}</h1>
      <div className="flex my-2 items-center">
        <a
          href={YOUTUBE_CHANNEL_URL + channelUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-self-start cursor-pointer">
            <img
              src={channelIconUrl}
              alt="channel icon"
              className="rounded-full w-[2.5rem] h-[2.5rem]"
            />
            <div className="flex flex-col ml-3 items-start justify-center">
              <h2 className="text-white font-bold text-lg">{channelTitle}</h2>
              <h3 className="text-neutral-400 text-sm">
                {getCount_K_M(subscriberCount)} subscribers
              </h3>
            </div>
          </div>
        </a>
        <button className="font-semibold ml-7 rounded-3xl py-[0.35rem] px-5 border border-zinc-700 bg-[#121212] cursor-pointer text-white hover:outline-none hover:bg-neutral-600">
          Join
        </button>
        <button className="font-semibold ml-2 rounded-3xl py-[0.35rem]  px-5 bg-neutral-100 cursor-pointer text-dark hover:outline-none hover:bg-neutral-200">
          Subscribe
        </button>

        <div className="flex justify-end flex-1 gap-x-2 items-center">
          <div className="flex">
            <button className="font-semibold rounded-s-3xl py-2 px-4 bg-[#2b2b2b] cursor-pointer text-neutral-200 hover:bg-neutral-600">
              <div className="flex gap-2">
                <span className="flex gap-2  hover:bg-neutral-600 ">
                  <BiLike className="h-full" size={"1.3rem"} />
                  <span>{getCount_K_M(likeCount)}</span>
                </span>
              </div>
            </button>
            <div className="bg-[#2b2b2b] py-1">
              <div className="h-full bg-neutral-600 w-[0.05rem]"></div>
            </div>
            <button>
              <div className="font-semibold rounded-e-3xl py-[0.6rem] px-4 bg-[#2b2b2b] cursor-pointer text-neutral-200 hover:bg-neutral-600">
                <BiDislike className="h-full" size={"1.3rem"} />
              </div>
            </button>
          </div>

          <button className="font-semibold rounded-3xl py-2 px-4 bg-[#2b2b2b] cursor-pointer text-neutral-200 hover:bg-neutral-600">
            <div className="flex gap-2 items-center">
              <PiShareFatThin className="h-full" size={"1.5rem"} />
              <span>Share</span>
            </div>
          </button>

          <button className="font-semibold rounded-3xl py-2 px-4 bg-[#2b2b2b] cursor-pointer text-neutral-200 hover:bg-neutral-600">
            <div className="flex gap-2 items-center">
              <RiPlayListAddFill className="h-full" size={"1.25rem"} />
              <span>Save</span>
            </div>
          </button>

          <button className="font-semibold rounded-full p-3 bg-[#2b2b2b] cursor-pointer text-neutral-200 ">
            <TfiMoreAlt />
          </button>
        </div>
      </div>

      <div className="rounded-xl text-white p-3 bg-[#2b2b2b] my-1">
        <div>
          <span className="font-semibold">
            {parseInt(viewCount).toLocaleString()} views
          </span>
          <span className="font-semibold ml-3">
            {getCurrrentDate(publishedAt)}
          </span>
        </div>
        <div className="">
          <span className="whitespace-pre-line">
            {showMore ? descriptionText : descriptionText.substring(0, 287)}
          </span>
          {showMore ? (
            <div
              className="cursor-pointer mt-3 font-semibold"
              onClick={setShowMore}
            >
              Show less
            </div>
          ) : (
            <span
              className="cursor-pointer font-semibold"
              onClick={setShowMore}
            >
              ...more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
