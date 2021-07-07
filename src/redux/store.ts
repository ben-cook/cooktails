import { configureStore } from "@reduxjs/toolkit";
import { drinksAPI } from "./reduxAPI";

export const store = configureStore({
  reducer: { [drinksAPI.reducerPath]: drinksAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(drinksAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
