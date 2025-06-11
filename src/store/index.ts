import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/filterSlice";
import serviceReduce from "@/store/serviceSlice";
import userReducer from "@/store/userSlice";
import ruleReducer from "@/store/ruleSlice";
import PaginationReducer from "@/store/paginationSlice";
import BlogReducer from "@/store/BlogSlice";
import BlogReducerById from "@/store/BlogByIdSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
    user: userReducer,
    rule: ruleReducer,
    pagination: PaginationReducer,
    blogs: BlogReducer,
    singleBlog: BlogReducerById,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
