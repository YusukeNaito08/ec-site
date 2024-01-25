import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/userSlice";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import productReducer from "../product/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
