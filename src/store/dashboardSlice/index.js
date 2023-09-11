import { createSlice } from "@reduxjs/toolkit";
import { setActiveStore } from "./reducers.js";

const initialState = {
  updatedAt: null,
  activeStore: "acf2d038-7742-461d-9ce9-d5322f96be74",
  loading: false,
};

export const dashboardSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setActiveStore,
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
