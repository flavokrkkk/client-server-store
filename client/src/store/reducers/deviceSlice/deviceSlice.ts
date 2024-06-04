import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeviceState } from "./types";
import { IDevice } from "../../../models/IDevice";
import { devices } from "../../../utils/mockData";

const initialState = <DeviceState>{
  devices: devices,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: (create) => ({
    setDevice: create.reducer(
      (state, { payload }: PayloadAction<IDevice[]>) => {
        state.devices = payload;
      }
    ),
  }),
});

export const deviceReducer = deviceSlice.reducer;
export const deviceActions = deviceSlice.actions;
