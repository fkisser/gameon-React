import axios from "axios"
import { errorFetchingCategories, fetchingCategories, successFetchingCategories } from "../redux/categories/categoriesSlice";

export const getAllCategories = async (dispatch) => {
  dispatch(fetchingCategories());
  try {
    const response = await axios.get("https://integrador-back-ten.vercel.app/categories");
    const categories = response?.data.categories
    categories?.map((category) => {
      const { _id, title, code } = category
      return {
        id: _id,
        title,
        code
      }
    })
    if (categories) dispatch(successFetchingCategories(categories));
    else dispatch(errorFetchingCategories(response.data.msg))
  } catch (error) {
    dispatch(errorFetchingCategories("Error al obtener categorías de la base de datos"))
  }
}