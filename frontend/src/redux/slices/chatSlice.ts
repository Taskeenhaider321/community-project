import { userType } from "@/types/basicTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: userType[] = [];

export const allUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers: (_state: userType[], action: PayloadAction<userType[]>) => {
      return action.payload;
    },
  },
});

export const { setAllUsers } = allUsersSlice.actions;

export default allUsersSlice.reducer;
