import { useSelector } from "react-redux";
import usePlaylistData from "../utils/usePlaylistData";
import PlaylistVideoCard from "./PlaylistVideoCard";
import { useEffect } from "react";

const PlaylistVideos = () => {
  const playlistId = useSelector((state) => state.channelData.playlistId);
  const playlistVideosData = usePlaylistData(playlistId);

  useEffect(() => {}, [playlistId]);

  if (Object.keys(playlistVideosData).length === 0) return null;

  const videos = playlistVideosData.items;

  const getPlaylistVideoCard = (video) => {
    const {
      channelTitle,
      publishedAt,
      resourceId: { videoId },
      title,
      thumbnails: {
        medium: { url },
      },
    } = video.snippet;

    return (
      <PlaylistVideoCard
        key={videoId}
        videoId={videoId}
        imageUrl={url}
        videoTitle={title}
        postedTime={publishedAt}
        channelTitle={channelTitle}
      />
    );
  };

  return (
    <div className="flex flex-col gap-y-3">
      {videos.map((video) => getPlaylistVideoCard(video))}
    </div>
  );
};

export default PlaylistVideos;
