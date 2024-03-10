import { createSlice } from "@reduxjs/toolkit";

const channelDataSlice = createSlice({
  name: "channelData",
  initialState: {
    data: {},
    channelId: "",
    playlistId: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
    setPlaylistId: (state, action) => {
      state.playlistId = action.payload;
    },
  },
});

export default channelDataSlice.reducer;
export const { setData, setChannelId, setPlaylistId } =
  channelDataSlice.actions;
