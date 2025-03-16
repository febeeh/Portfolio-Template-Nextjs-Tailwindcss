import { configureStore } from "@reduxjs/toolkit";
import projectStore from "./project";
import siteOptionsStore from "./siteOptions";
const store = configureStore({
  reducer: {
    projectStore: projectStore.reducer,
    siteOptionsStore: siteOptionsStore.reducer,
  },
});

export default store;
