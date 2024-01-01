import axios from "axios"
import { errorUser, loadingUser, successUser } from "../redux/user/userSlice";

export const login = async (dispatch, mail, password) => {
  dispatch(loadingUser());
  try {
    const response = await axios.post("https://integrador-back-ten.vercel.app/auth/login", { mail, password });
    const { user, token } = response?.data;
    user.token = token;
    if (user) dispatch(successUser(user));
    else dispatch(errorUser(response.data));
  } catch (error) {
    dispatch(errorUser(error.response.data.msg));
  }
}