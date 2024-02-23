import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoDataSlice from "./videoDataSlice";
import channelDataSlice from "./channelDataSlice";
import chatSlice from "./chatSlice";

const reduxStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoData: videoDataSlice,
    channelData: channelDataSlice,
    chat: chatSlice,
  },
});

export default reduxStore;
