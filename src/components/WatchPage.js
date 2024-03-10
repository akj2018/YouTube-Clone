import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useVideoData from "../utils/useVideoData";
import VideoInfo from "./VideoInfo";
import LiveChat from "./LiveChat";
import PlaylistVideos from "./PlaylistVideos";
import ErrorVideo from "./ErrorVideo";

const WatchPage = () => {
  const [descriptionText, setDescriptionText] = useState("");
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoData = useVideoData(videoId);

  useEffect(() => {
    dispatch(closeSidebar());

    if (videoData && Object.keys(videoData).length !== 0) {
      setDescriptionText(videoData?.items[0]?.snippet?.description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoData]);

  if (Object.keys(videoData).length === 0) return null;

  if (videoData?.items.length === 0) {
    console.log("timer reached");
    return <ErrorVideo />;
  }

  return (
    <div className="bg-[#080808] w-full overflow-x-auto h-[calc(100vh-4.3rem)]">
      <div className="grid grid-cols-11 w-[88%] mx-auto mt-3 gap-x-5 gap-y-2">
        {/* Video Display */}
        <div className="col-span-8 overflow-hidden pt-[56.25%] relative w-full">
          <iframe
            className="h-full w-full rounded-xl absolute top-0 bottom-0 left-0 right-0"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div className="col-span-3 flex flex-col">
          <LiveChat />
        </div>

        {/* Video Info */}
        <div className="col-span-8 ">
          <VideoInfo
            videoData={videoData}
            showMore={showMore}
            descriptionText={descriptionText}
            setShowMore={() => {
              setShowMore(!showMore);
            }}
          />
          <div className="flex flex-col mt-3 bg-black mb-4">
            <h1 className="">Comments</h1>
          </div>
        </div>

        <div className="col-span-3 flex flex-col py-2">
          <PlaylistVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
