"use client";
import { IWatchlist } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadInitialStateFromLocalStorage = (): watchlistState => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("watchlistState");
    return storedState ? JSON.parse(storedState) : initialState;
  }
  return { watchlist: [], totalQuantity: 0 };

  // const storedState = localStorage.getItem("watchlistState");
  // return storedState ? JSON.parse(storedState) : initialState;
};

interface watchlistState {
  watchlist: IWatchlist[];
  totalQuantity: number;
}

const initialState: watchlistState = {
  watchlist: [],
  totalQuantity: 0,
};

const initialStateFromLocalStorage = loadInitialStateFromLocalStorage();

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: initialStateFromLocalStorage,
  reducers: {
    addTowatchlist: (state, action: PayloadAction<IWatchlist>) => {
      const existingwatchlistItem = state.watchlist.find(
        (watchlistItem) => watchlistItem.id === action.payload.id
      );
      if (existingwatchlistItem) {
        state.watchlist = state.watchlist.filter(
          (watchlistItem) => watchlistItem.id !== action.payload.id
        );
      } else {
        state.watchlist.push(action.payload);
        state.totalQuantity += 1;
      }
      localStorage.setItem("watchlistState", JSON.stringify(state));
    },
    removeFromwatchlist: (state, action: PayloadAction<number>) => {
      const watchlistId = action.payload;

      state.watchlist = state.watchlist.filter(
        (watchlistItem) => watchlistItem.id !== watchlistId
      );
      state.totalQuantity -= 1;
      localStorage.setItem("watchlistState", JSON.stringify(state));
    },
  },
});

export const { addTowatchlist, removeFromwatchlist } = watchlistSlice.actions;
export const watchlistReducer = watchlistSlice.reducer;
export default watchlistReducer;
