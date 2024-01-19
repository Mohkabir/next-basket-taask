import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice";
import watchlistReducer from "./watchlist-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
    watchlists: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
