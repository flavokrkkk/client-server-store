import { RootState } from "..";

export const userSelectors = (state: RootState) => state.userReducer;

export const typeSelectors = (state: RootState) => state.typeReducer;

export const brandSelectors = (state: RootState) => state.brandReducer;

export const deviceSelectors = (state: RootState) => state.deviceReducer;

export const pageSelectors = (state: RootState) => state.pageReducer;
