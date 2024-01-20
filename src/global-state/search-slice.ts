import { IProduct } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  data: IProduct[];
}

const initialState: SearchState = {
  data: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchResult: (state, action: PayloadAction<{ search: IProduct[] }>) => {
      state.data = action.payload.search;
    },
    resetSearch: (state) => {
      state.data = [];
    },
  },
});

export const { addSearchResult, resetSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export default searchReducer;
