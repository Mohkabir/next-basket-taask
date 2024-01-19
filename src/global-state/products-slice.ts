import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  formerPrice: string;
  price: string;
  thumbnail: string;
  discountPercentage: string;
}

interface ProductsState {
  data: Product[];
  total: number;
  currentProduct?: Product | null;
}

const initialState: ProductsState = {
  data: [],
  total: 0,
  currentProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<{ products: Product[]; total: number }>
    ) => {
      state.data = action.payload.products;
      state.total = action.payload.total;
    },

    addMoreProducts: (
      state,
      action: PayloadAction<{ products: Product[]; total: number }>
    ) => {
      state.data = [...state.data, ...action.payload.products];
      state.total = action.payload.total;
    },
    setProductDetails: (state, action: PayloadAction<{ product: Product }>) => {
      state.currentProduct = action.payload.product;
    },
  },
});

export const { setProducts, addMoreProducts, setProductDetails } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
export default productsReducer;
