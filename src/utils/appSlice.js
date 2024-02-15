import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    isToggleScroll: false,
    selectedButtonIndex: 0,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleScroll: (state) => {
      state.isToggleScroll = !state.isToggleScroll;
    },
    changeSelectedButtonIndex: (state, action) => {
      console.log(action);
      state.selectedButtonIndex = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleScroll,
  changeSelectedButtonIndex,
  closeSidebar,
} = appSlice.actions;
export default appSlice.reducer;
