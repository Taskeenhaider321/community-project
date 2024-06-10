import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "currentTab",
  initialState: "personalChats",
  reducers: {
    setTab: (_state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});


export const {setTab} = tabSlice.actions;

export default tabSlice.reducer