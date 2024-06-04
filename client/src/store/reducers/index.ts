import { brandReducer } from "./brandSlice/brandSlice";
import { deviceReducer } from "./deviceSlice/deviceSlice";
import { typeReducer } from "./typeSlice/typeSlice";
import { userReducer } from "./userSlice/userSlice";

export const reducers = {
  userReducer,
  typeReducer,
  brandReducer,
  deviceReducer,
};
