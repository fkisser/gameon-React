import { createSlice } from "@reduxjs/toolkit"
import { addProduct, removeProduct } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
  open: false
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
    }
  }
})

export const {
  addItem, removeItem, clearCart, toggleHiddenCart, addItems
} = cartSlice.actions;

export default cartSlice.reducer;