import { createSlice } from "@reduxjs/toolkit"
import { addProduct, removeProduct } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
  open: false,
  success: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        cartItems: addProduct(state.cartItems, action.payload)
      }
    },
    addItems: (state, action) => {
      return {
        ...state,
        cartItems: [...action.payload]
      }
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: removeProduct(state.cartItems, action.payload),
      }
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      }
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        open: !state.open
      }
    },
    success: (state) => {
      return {
        ...state,
        success: true
      }
    },
    noSuccess: (state) => {
      return {
        ...state,
        success: false
      }
    }
  }
})

export const {
  addItem, removeItem, clearCart, toggleHiddenCart, addItems, success, noSuccess
} = cartSlice.actions;

export default cartSlice.reducer;