import axios from "axios"
import { errorFetchingProducts, fetchingProducts, successFetchingProducts } from "../redux/products/productsSlice";

export const getAllProducts = async (dispatch) => {
  dispatch(fetchingProducts());
  try {
    const response = await axios.get("https://integrador-back-ten.vercel.app/products");
    const products = response?.data.products
      .map((product) => {
        const { _id, title, desc, category, price, starred, url } = product
        return {
          id: _id,
          title,
          desc,
          category: category.code,
          price,
          starred,
          url,
          quantity: 0
        }
      })
    if (products) dispatch(successFetchingProducts(products));
    else throw new Error("Error al obtener productos de la base de datos")
  } catch (error) {
    dispatch(errorFetchingProducts("Error al obtener productos de la base de datos"))
  }
}