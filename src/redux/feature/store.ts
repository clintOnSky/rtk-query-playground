import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./services/postApi";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware: any): any => {
    return [...getDefaultMiddleware(), postApi.middleware];
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
