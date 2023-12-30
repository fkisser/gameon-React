import { createSlice } from "@reduxjs/toolkit";
// import { categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: [],
  selectedCategory: "",
  isLoading: true,
  error: false
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
    },
    fetchingCategories: ((state) => {
      return {
        ...state,
        isLoading: true,
      }
    }),
    successFetchingCategories: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: false,
        categories: [...action.payload],
      }
    }),
    errorFetchingCategories: ((state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    })
  }
})

export const {
  getCategories, setSelectedCategory, fetchingCategories, successFetchingCategories, errorFetchingCategories
} = categoriesSlice.actions;

export default categoriesSlice.reducer;