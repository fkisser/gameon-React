import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: categories,
  selectedCategory: ""
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: state => {
      return state.categories;
    },
    setSelectedCategory: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload
      }
    }
  }
})

export const {
  getCategories, setSelectedCategory
} = categoriesSlice.actions;

export default categoriesSlice.reducer;