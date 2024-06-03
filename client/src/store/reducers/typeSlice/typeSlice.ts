import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IType } from "../../../models/IType";
import { TypeState } from "./types";
import { types } from "../../../utils/mockData";

const initialState = <TypeState>{
  types: types,
  selectedType: {} as IType,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: (create) => ({
    setTypes: create.reducer((state, { payload }: PayloadAction<IType[]>) => {
      state.types = payload;
    }),
    setSelectedType: create.reducer(
      (state, { payload }: PayloadAction<IType>) => {
        state.selectedType = payload;
      }
    ),
  }),
});

export const typeActions = typeSlice.actions;
export const typeReducer = typeSlice.reducer;
