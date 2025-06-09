import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/filterSlice";
import serviceReduce from "@/store/serviceSlice";
import userReducer from "@/store/userSlice";
import ruleReducer from "@/store/ruleSlice";
import PaginationReducer from "@/store/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
    user: userReducer,
    rule: ruleReducer,
    pagination: PaginationReducer,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
