import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "videoData",
  initialState: {
    videoId: "",
    data: {},
  },
  reducers: {
    setData: (state, action) => {},
  },
});

export default videoDataSlice.reducer;
