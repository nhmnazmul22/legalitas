import { SendProposalType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/config/axios";

interface StateType {
  items: {
    status?: string;
    data: SendProposalType[];
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

export const fetchProposals = createAsyncThunk<SendProposalType[], string>(
  "proposal/fetchProposals",
  async (userId: string) => {
    const response = await api.get<{
      status: string;
      data: SendProposalType[];
    }>(`/api/proposals/send-proposal/${userId}`);
    return response.data.data;
  }
);

const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProposals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProposals.fulfilled,
        (state, action: PayloadAction<SendProposalType[]>) => {
          state.loading = false;
          state.items.data = action.payload;
        }
      )
      .addCase(fetchProposals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default proposalSlice.reducer;
