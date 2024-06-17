import { brandActions } from "../reducers/brandSlice/brandSlice";
import { deviceActions } from "../reducers/deviceSlice/deviceSlice";
import { pageActions } from "../reducers/pageSlise/pageSlise";
import { typeActions } from "../reducers/typeSlice/typeSlice";
import { userActions } from "../reducers/userSlice/userSlice";

export const AllActionCreators = {
  ...userActions,
  ...typeActions,
  ...brandActions,
  ...deviceActions,
  ...pageActions,
};
