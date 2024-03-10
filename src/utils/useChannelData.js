import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/constants";

const useChannelData = (channelId) => {
  const [channelData, setChannelData] = useState({});

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    if (channelId !== undefined) {
      const response = await fetch(YOUTUBE_CHANNEL_DATA_API + channelId);
      const data = await response.json();
      setChannelData(data);
    }
  };

  return channelData;
};

export default useChannelData;
