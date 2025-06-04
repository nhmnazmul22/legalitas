import { ServiceType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/axios";

interface ServiceState {
  items: {
    status?: string;
    data: ServiceType[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  items: {
    status: "",
    data: [],
  },
  loading: false,
  error: null,
};

export const fetchService = createAsyncThunk<ServiceType[]>(
  "posts/fetchPosts",
  async () => {
    const response = await api.get<{ status: string; data: ServiceType[] }>(
      "/api/service"
    );
    return response.data.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchService.fulfilled,
        (state, action: PayloadAction<ServiceType[]>) => {
          state.loading = false;
          state.items.data = action.payload;
        }
      )
      .addCase(fetchService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
