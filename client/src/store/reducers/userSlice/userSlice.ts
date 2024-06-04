import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState = <UserState>{
  isAuth: true,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    setIsAuth: create.reducer((state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    }),
    setUser: create.reducer((state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    }),
  }),
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
