import { RootState } from "..";

export const userSelectors = (state: RootState) => state.userReducer;

export const typeSelectors = (state: RootState) => state.typeReducer;

export const brandSelectors = (state: RootState) => state.brandReducer;
