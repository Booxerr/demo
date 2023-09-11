import { configureStore } from "@reduxjs/toolkit";
import storesSlice from "./storeSlice";
import staffSlice from "./staffSlice";
import dashboardSlice from "./dashboardSlice";

const store = configureStore({
  reducer: {
    storesSlice: storesSlice.reducer,
    staffSlice: staffSlice.reducer,
    dashboardSlice: dashboardSlice.reducer,
  },
});
export default store;
