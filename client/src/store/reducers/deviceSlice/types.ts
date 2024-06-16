import { IDevice } from "../../../models/IDevice";

export interface DeviceState {
  devices: IDevice[];
  device: IDevice;
  isLoading: boolean;
  error: string;
}
