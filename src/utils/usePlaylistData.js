import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_VIDEOS_API } from "../utils/constants";

const usePlaylistData = (playlistId) => {
  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    getPlaylistData();
  }, [playlistId]);

  const getPlaylistData = async () => {
    if (playlistId !== "") {
      const response = await fetch(YOUTUBE_CHANNEL_VIDEOS_API + playlistId);
      const json = await response.json();
      setPlaylistData(json);
    }
  };

  return playlistData;
};

export default usePlaylistData;
