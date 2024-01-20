import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice";
import watchlistReducer from "./watchlist-slice";
import searchReducer from "./search-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
    watchlists: watchlistReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
