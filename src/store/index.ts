import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/filterSlice";
import serviceReduce from "@/store/serviceSlice";
import userReducer from "@/store/userSlice";
import ruleReducer from "@/store/ruleSlice";
import ProposalReducer from "@/store/proposalSlice";
import BlogReducer from "@/store/blogSlice";
import PaginationReducer from "@/store/paginationSlice";
import AdminReducer from "@/store/AdminSlice";
import BankReducer from "@/store/BankSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    service: serviceReduce,
    user: userReducer,
    rule: ruleReducer,
    proposal: ProposalReducer,
    blog: BlogReducer,
    pagination: PaginationReducer,
    admin: AdminReducer,
    bank: BankReducer,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
