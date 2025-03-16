import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectOpen: "",
};
const projectStore = createSlice({
  name: "Projects",
  initialState: initialState,
  reducers: {
    setProjectOpen(state, action) {
      state.projectOpen = action.payload.open;
    },
  },
});

export const projectStoreActions = projectStore.actions;

export default projectStore;
