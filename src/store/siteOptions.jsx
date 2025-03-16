import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animationLoaded: false,
};
const siteOptionsStore = createSlice({
  name: "siteOptions",
  initialState: initialState,
  reducers: {
    setAnimationLoaded(state, action) {
      state.animationLoaded = action.payload.animationLoaded;
    },
  },
});

export const siteOptionsStoreActions = siteOptionsStore.actions;

export default siteOptionsStore;
