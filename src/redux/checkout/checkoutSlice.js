import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  checkoutOrder: null,
  open: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: INITIAL_STATE,
  reducers: {
    addCheckoutOrder: (state, action) => {
      return {
        ...state,
        checkoutOrder: action.payload
      }
    },
    clearOrder: (state) => {
      return {
        ...state,
        checkoutOrder: null,
      }
    }
  }
})

export const {
  addCheckoutOrder, clearOrder
} = checkoutSlice.actions;

export default checkoutSlice.reducer;