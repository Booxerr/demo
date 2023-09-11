import { createSlice } from "@reduxjs/toolkit";
import { setStoreStaff } from "./reducers.js";

const initialState = {
  updatedAt: null,
  storeStaff:{},
  loading: false,
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStoreStaff,
  },
});

export const staffActions = staffSlice.actions;

export default staffSlice;
