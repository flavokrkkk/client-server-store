import { IUser } from "../../../models/IUser";

export interface UserState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: unknown | string;
}
