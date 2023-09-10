import { configureStore } from "@reduxjs/toolkit";
import storesSlice from "./storeSlice";

const store = configureStore({
  reducer: {
    storesSlice: storesSlice.reducer,
  },
});
export default store;
