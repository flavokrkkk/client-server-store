import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { DeviceState } from "./types";
import { IDevice } from "../../../models/IDevice";
import { $authHost } from "../../../api";
import { baseUrl } from "../../../utils/baseUrl";
import { IDeviceData } from "../../../models/IDeviceData";

const initialState = <DeviceState>{
  devices: [],
  device: {} as IDevice,
  error: "",
  isLoading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const deviceSlice = createSliceWithThunks({
  name: "device",
  initialState,
  reducers: (create) => ({
    setDevice: create.reducer(
      (state, { payload }: PayloadAction<IDevice[]>) => {
        state.devices = payload;
      }
    ),
    setAsyncDevices: create.asyncThunk<
      IDevice[],
      void,
      { rejectValue: string }
    >(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.get<IDeviceData>(
            baseUrl.REACT_APP_API_URL + "api/device"
          );
          return data.rows;
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IDevice[]>) => {
          state.devices = payload;
          state.isLoading = false;
          state.error = "";
        },
        rejected: (state) => {
          state.isLoading = false;
          state.error = "Не удалось загрузить товары";
        },
      }
    ),
    setAsyncDevice: create.asyncThunk<IDevice, string, { rejectValue: string }>(
      async (id, { rejectWithValue }) => {
        try {
          const cleanId = id.replace(/[^0-9]/g, "");
          const { data } = await $authHost.get<IDevice>(
            baseUrl.REACT_APP_API_URL + `api/device/${cleanId}`
          );
          if (data) {
            return data;
          } else {
            return rejectWithValue(`${`Не удалось получить девайс!`}`);
          }
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IDevice>) => {
          state.device = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.isLoading = false;
          state.error = "Не удалось получить девайс!";
        },
      }
    ),

    createAsyncDevice: create.asyncThunk(
      async (device: FormData, { rejectWithValue }) => {
        try {
          console.log(device);
          const { data } = await $authHost.post<IDevice>(
            baseUrl.REACT_APP_API_URL + "api/device",
            device
          );
          return data;
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IDevice>) => {
          state.devices.push(payload);
          state.isLoading = false;
          state.error = "";
        },
        rejected: (state) => {
          state.isLoading = false;
          state.error = "Не удалось создать устройство!";
        },
      }
    ),
  }),
});

export const deviceReducer = deviceSlice.reducer;
export const deviceActions = deviceSlice.actions;
