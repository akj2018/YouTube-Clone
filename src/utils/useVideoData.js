import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DATA_API } from "./constants";

const useVideoData = (videoId) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(YOUTUBE_VIDEO_DATA_API + videoId);
    const data = await response.json();
    setVideoData(data);
  };

  return videoData;
};

export default useVideoData;
