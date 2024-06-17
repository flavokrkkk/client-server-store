import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PageState } from "./types";

const initialState = <PageState>{
  page: 1,
  totalCount: 0,
  limit: 3,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: (create) => ({
    setPage: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    }),
    setTotalCount: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.totalCount = payload;
      }
    ),
    setLimit: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.limit = payload;
    }),
  }),
});

export const pageReducer = pageSlice.reducer;
export const pageActions = pageSlice.actions;
