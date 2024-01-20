"use client";
import { ICart } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const loadInitialStateFromLocalStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("cartState");
    return storedState ? JSON.parse(storedState) : initialState;
  }
  return { cart: [], totalQuantity: 0, totalAmount: 0 };
  // const storedState = localStorage.getItem("cartState");
  // return storedState ? JSON.parse(storedState) : initialState;
};

interface CartItem extends ICart {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const initialStateFromLocalStorage = loadInitialStateFromLocalStorage();

const calculateTotalAmount = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateFromLocalStorage,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        const newItem: CartItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
        state.totalQuantity += 1;
      }
      state.totalAmount = calculateTotalAmount(state.cart);
      localStorage.setItem("cartState", JSON.stringify(state));

      if (typeof window !== "undefined") {
        toast.success("Item added to cart");
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cartId = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== cartId);
      state.totalQuantity -= 1;
      state.totalAmount = calculateTotalAmount(state.cart);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
      }>
    ) => {
      const { id, quantity } = action.payload;
      console.log(id, quantity, "id, quantity, type");
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.id === id
      );
      if (existingCartItem) {
        existingCartItem.quantity = quantity;
        state.totalAmount = calculateTotalAmount(state.cart);
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    resetCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.setItem("cartState", JSON.stringify(state));

      if (typeof window !== "undefined") {
        toast.success("Transaction Successful");
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, resetCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartReducer;
