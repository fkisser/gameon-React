import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  open: false
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: INITIAL_STATE,
  reducers: {
    toggleNavbar: (state) => {
      return {
        ...state,
        open: !state.open
      }
    }
  }
})

export const {
  toggleNavbar
} = navbarSlice.actions;

export default navbarSlice.reducer;