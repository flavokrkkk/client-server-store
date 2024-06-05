import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { UserState } from "./types";
import { $authHost, $host } from "../../../api";
import { baseUrl } from "../../../utils/baseUrl";
import { IUser } from "../../../models/IUser";
import { IToken } from "../../../models/IToken";
import { jwtDecode } from "jwt-decode";

const initialState = <UserState>{
  isAuth: false,
  user: {},
  isLoading: false,
  error: "",
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const userSlice = createSliceWithThunks({
  name: "user",
  initialState,
  reducers: (create) => ({
    setIsAuth: create.reducer((state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    }),
    setUser: create.reducer((state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    }),
    authorizeUserAsync: create.asyncThunk<
      IUser,
      IUser,
      { rejectValue: string }
    >(
      async (requestParams: IUser, { rejectWithValue }) => {
        try {
          const { data } = await $host.post<IToken>(
            baseUrl.REACT_APP_API_URL + "api/user/registration",
            requestParams
          );
          localStorage.setItem("token", data.token);
          return jwtDecode(data.token);
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload;
          state.isLoading = false;
          state.error = null;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error = payload;
        },
      }
    ),
    loginUserAsync: create.asyncThunk<IUser, IUser, { rejectValue: string }>(
      async (requestParams: IUser, { rejectWithValue }) => {
        try {
          const { data } = await $host.post<IToken>(
            baseUrl.REACT_APP_API_URL + "api/user/login",
            requestParams
          );
          localStorage.setItem("token", data.token);
          return jwtDecode(data.token);
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload;
          state.isLoading = false;
          state.error = null;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error = payload;
        },
      }
    ),
    authenticateUserAsync: create.asyncThunk<
      IUser,
      void,
      { rejectValue: string }
    >(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.get<IToken>(
            baseUrl.REACT_APP_API_URL + "api/user/auth"
          );
          localStorage.setItem("token", data.token);
          return jwtDecode(data.token);
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload;
          state.isLoading = false;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error = payload;
        },
      }
    ),
    logoutUserAsync: create.reducer((state) => {
      state.isAuth = false;
      state.user = {} as IUser;
      localStorage.removeItem("token");
    }),
  }),
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
