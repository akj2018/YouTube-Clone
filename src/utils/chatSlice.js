import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chats.splice(LIVE_CHAT_OFFSET);
      state.chats.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addChat } = chatSlice.actions;
