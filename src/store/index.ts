import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import serviceReduce from "./serviceSlice";
import userReducer from "./userSlice";
import ruleReducer from "./ruleSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
    user: userReducer,
    rule: ruleReducer,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
