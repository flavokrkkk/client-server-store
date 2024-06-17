import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { IType } from "../../../models/IType";
import { TypeState } from "./types";
import { $authHost } from "../../../api";
import { baseUrl } from "../../../utils/baseUrl";

const initialState = <TypeState>{
  types: [],
  selectedType: {} as IType,
  error: "",
  isLoading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const typeSlice = createSliceWithThunks({
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

    setAsyncTypes: create.asyncThunk<IType[], void, { rejectValue: string }>(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.get<IType[]>(
            baseUrl.REACT_APP_API_URL + "api/type"
          );
          return data;
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        fulfilled: (state, { payload }: PayloadAction<IType[]>) => {
          state.types = payload;
        },
        rejected: (state) => {
          state.error = "Не удалось получить типы";
        },
      }
    ),
    createAsyncType: create.asyncThunk<IType, string, { rejectValue: string }>(
      async (name: string, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.post(
            baseUrl.REACT_APP_API_URL + "api/type",
            { name }
          );
          return data;
        } catch (error) {
          rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IType>) => {
          state.types.push(payload);
          state.isLoading = false;
          state.error = "";
        },
        rejected: (state) => {
          state.error = "Не удалось создать товар!";
        },
      }
    ),
  }),
});

export const typeActions = typeSlice.actions;
export const typeReducer = typeSlice.reducer;
