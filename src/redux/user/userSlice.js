import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: false,
  loadingOrders: false
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loadingUser: ((state) => {
      return {
        ...state,
        isLoading: true,
      }
    }),
    successUser: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: false,
        currentUser: action.payload,
      }
    }),
    errorUser: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }),
    loadOrders: ((state, action) => {
      return {
        ...state,
        orders: action.payload,
        loadingOrders: false,
      }
    }),
    loadingUserOrders: ((state) => {
      return {
        ...state,
        loadingOrders: true,
      }
    })
  },
});

export const { loadingUser, successUser, errorUser, loadOrders, loadingUserOrders } = userSlice.actions;

export default userSlice.reducer;