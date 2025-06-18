import { ProgressType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/config/axios";

interface StateType {
  items: {
    status?: string;
    data: ProgressType[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: StateType = {
  items: {
    status: "",
    data: [],
  },
  loading: false,
  error: null,
};

export const fetchWorkProgress = createAsyncThunk<ProgressType[], string>(
  "progress/fetchWorkProgress",
  async (userId: string) => {
    const response = await api.get<{
      status: string;
      data: ProgressType[];
    }>(`/api/progress/${userId}`);
    return response.data.data;
  }
);

const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWorkProgress.fulfilled,
        (state, action: PayloadAction<ProgressType[]>) => {
          state.loading = false;
          state.items.data = action.payload;
        }
      )
      .addCase(fetchWorkProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default proposalSlice.reducer;
