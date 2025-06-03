import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOptions: {
    category: null,
    priceRange: null,
    rating: null,
    searchQuery: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedOptions.category = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.selectedOptions.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.selectedOptions = initialState.selectedOptions;
    },
  },
});

export const { setCategory, setSearchQuery, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
