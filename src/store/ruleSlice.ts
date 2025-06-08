import { RuleTableContentsType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/config/axios";

interface RuleState {
  items: {
    status: string;
    message?: string;
    data?: RuleTableContentsType[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: RuleState = {
  items: {
    status: "",
    message: "",
    data: [],
  },
  loading: false,
  error: null,
};

export const fetchRules = createAsyncThunk<RuleTableContentsType[]>(
  "posts/fetchRules",
  async () => {
    const response = await api.get<{
      status: string;
      message?: string;
      data: RuleTableContentsType[];
    }>(`/api/rules`);
    return response.data.data;
  }
);

const postsSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRules.fulfilled,
        (state, action: PayloadAction<RuleTableContentsType[]>) => {
          state.loading = false;
          state.items.data = action.payload;
        }
      )
      .addCase(fetchRules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
