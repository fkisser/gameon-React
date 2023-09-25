import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  checkoutItems: [],
  open: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: INITIAL_STATE,
  reducers: {
    addItems: (state, action) => {
      return {
        ...state,
        checkoutItems: [...action.payload]
      }
    },
    clearItems: (state) => {
      return {
        ...state,
        checkoutItems: [],
      }
    }
  }
})

export const {
  addItems, clearItems
} = checkoutSlice.actions;

export default checkoutSlice.reducer;