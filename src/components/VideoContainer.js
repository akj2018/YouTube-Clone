import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideosData(json.items);
  };

  useEffect(() => {
    getVideosData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 py-5 bg-black ">
      {videosData.map((videoData) => (
        <Link to={"/watch?v=" + videoData.id} key={videoData.id}>
          <VideoCard key={videoData.id} info={videoData} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
