import { BlogType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/config/axios";

interface StateType {
  items: {
    status?: string;
    data: BlogType[];
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

export const fetchBlogs = createAsyncThunk<BlogType[]>(
  "blogs/fetchBlogs",
  async () => {
    const response = await api.get<{ status: string; data: BlogType[] }>(
      "/api/artikel"
    );
    return response.data.data;
  }
);

const BlogSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBlogs.fulfilled,
        (state, action: PayloadAction<BlogType[]>) => {
          state.loading = false;
          state.items.data = action.payload;
        }
      )
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default BlogSlice.reducer;
