import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { IBrand } from "../../../models/IBrand";
import { BrandState } from "./types";
import { $authHost } from "../../../api";
import { baseUrl } from "../../../utils/baseUrl";

const initialState = <BrandState>{
  brands: [],
  selectedBrand: {} as IBrand,
  error: "",
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const brandSlice = createSliceWithThunks({
  name: "brand",
  initialState,
  reducers: (create) => ({
    setBrand: create.reducer((state, { payload }: PayloadAction<IBrand[]>) => {
      state.brands = payload;
    }),
    setSelectedBrand: create.reducer(
      (state, { payload }: PayloadAction<IBrand>) => {
        state.selectedBrand = payload;
      }
    ),
    setAsyncBrand: create.asyncThunk<IBrand[], void, { rejectValue: string }>(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.get<IBrand[]>(
            baseUrl.REACT_APP_API_URL + "api/brand"
          );
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        fulfilled: (state, { payload }: PayloadAction<IBrand[]>) => {
          state.brands = payload;
        },
        rejected: (state) => {
          state.error = "Не удалось загрузить бренды!";
        },
      }
    ),
  }),
});

export const brandActions = brandSlice.actions;
export const brandReducer = brandSlice.reducer;
