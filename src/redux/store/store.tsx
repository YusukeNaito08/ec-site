import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/userSlice";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
