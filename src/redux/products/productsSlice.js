import { createSlice } from "@reduxjs/toolkit";
// import { products, totalProducts } from "../../data/products";
import { productsSort } from "./productsSliceUtils";



const INITIAL_STATE = {
  products: [],
  totalProducts: 0,
  orderBy: "price",
  ascendent: false,
  isLoading: true,
  error: false
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
    }),
    fetchingProducts: ((state) => {
      return {
        ...state,
        isLoading: true,
      }
    }),
    successFetchingProducts: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: false,
        products: [...action.payload],
      }
    }),
    errorFetchingProducts: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    })
  }
});

export const { getProducts, orderProducts, fetchingProducts, successFetchingProducts, errorFetchingProducts } = productsSlice.actions;
export default productsSlice.reducer;