import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../models/IBrand";
import { BrandState } from "./types";
import { brands } from "../../../utils/mockData";

const initialState = <BrandState>{
  brand: brands,
  selectedBrand: {} as IBrand,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: (create) => ({
    setBrand: create.reducer((state, { payload }: PayloadAction<IBrand[]>) => {
      state.brand = payload;
    }),
    setSelectedBrand: create.reducer(
      (state, { payload }: PayloadAction<IBrand>) => {
        state.selectedBrand = payload;
      }
    ),
  }),
});

export const brandActions = brandSlice.actions;
export const brandReducer = brandSlice.reducer;
