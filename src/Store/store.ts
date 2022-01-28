import { configureStore } from "@reduxjs/toolkit";
import dealerReducer from "./dealer.slice";

export const store = configureStore({
  reducer: {
    dealer: dealerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {dealer: dealerReducer}
export type AppDispatch = typeof store.dispatch;
