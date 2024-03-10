const GOOGLE_API_KEY = "AIzaSyDNCgaN4cq-ezf-fhxhIzzCA6sI_gpeKE0";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_VIDEO_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_CHANNEL_DATA_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_CHANNEL_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&key=${GOOGLE_API_KEY}&playlistId=`;

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/";

export const LIVE_CHAT_OFFSET = 30;

export const CAT_MEME_API = "https://meme-api.com/gimme/catmeme";
