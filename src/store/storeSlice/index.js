import { createSlice } from "@reduxjs/toolkit";
import { setStores } from "./reducers";

const initialState = {
  updatedAt: null,
  stores: null,
  loading: false,
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setStores,
  },
});

export const storesActions = storesSlice.actions;

export default storesSlice;
