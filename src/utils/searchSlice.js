import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResultsMap: {},
    inputText: "",
  },
  reducers: {
    cacheResults: (state, action) => {
      // payload is {searchString : [list of suggestions]}
      state.searchResultsMap = { ...state.searchResultsMap, ...action.payload };
    },
    changeInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults, changeInputText } = searchSlice.actions;
