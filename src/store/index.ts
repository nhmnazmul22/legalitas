import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/filterSlice";
import serviceReduce from "@/store/serviceSlice";
import userReducer from "@/store/userSlice";
import ruleReducer from "@/store/ruleSlice";
import PaginationReducer from "@/store/paginationSlice";
import BlogReducer from "@/store/BlogSlice";
import BlogReducerById from "@/store/BlogByIdSlice";
import InvoiceReducer from "@/store/InvoiceSlice";
import ProposalReducer from "@/store/ProposalSlice";
import WorkProgressReducer from "@/store/WorkProgressSlice";
import FileReducer from "@/store/FileSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
    user: userReducer,
    rule: ruleReducer,
    pagination: PaginationReducer,
    blogs: BlogReducer,
    singleBlog: BlogReducerById,
    invoices: InvoiceReducer,
    proposals: ProposalReducer,
    workProgresses: WorkProgressReducer,
    files: FileReducer,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
