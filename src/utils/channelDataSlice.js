import { createSlice } from "@reduxjs/toolkit";

const channelDataSlice = createSlice({
  name: "channelData",
  initialState: {
    data: {},
    channelId: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
  },
});

export default channelDataSlice.reducer;
export const { setData, setChannelId } = channelDataSlice.actions;
