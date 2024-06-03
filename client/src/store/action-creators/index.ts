import { brandActions } from "../reducers/brandSlice/brandSlice";
import { typeActions } from "../reducers/typeSlice/typeSlice";
import { userActions } from "../reducers/userSlice/userSlice";

export const AllActionCreators = {
  ...userActions,
  ...typeActions,
  ...brandActions,
};
