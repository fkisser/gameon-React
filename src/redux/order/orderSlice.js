import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  isLoading: false,
  error: false,
}

const orderSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    loadedOrder: (state) => {
      return {
        ...state,
        isLoading: false,
        error: false,
      }
    },
    loadingOrder: (state) => {
      return {
        ...state,
        isLoading: true,
        error: false,
      }
    },
    errorOrder: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    })
  }
})

export const {
  loadedOrder, loadingOrder, errorOrder } = orderSlice.actions;

export default orderSlice.reducer;