import { createSlice } from "@reduxjs/toolkit";
import { products, totalProducts } from "../../data/products";
import { productsSort } from "./productsSliceUtils";

const INITIAL_STATE = {
  products: products,
  totalProducts: totalProducts,
  orderBy: "price",
  ascendent: false
}

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: state => {
      return state.products;
    },
    orderProducts: ((state, action) => {
      const { products } = state;
      return {
        ...state,
        products: productsSort([...products], ...action.payload)
      }
    })
  }
});

export const { getProducts, orderProducts } = productsSlice.actions;
export default productsSlice.reducer;