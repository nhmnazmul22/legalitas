import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import serviceReduce from "./serviceSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
