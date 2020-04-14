import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const baseUrl = "https://mt5jvqqlt0.execute-api.us-east-1.amazonaws.com/v1";

export const userSignup = (newUserData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, newUserData);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.login));
  } catch (error) {
    window.alert("Erro no SignUp");
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  const login = {
    email,
    password,
  };

  try {
    const response = await axios.post(`${baseUrl}/login`, login);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.home));
  } catch (error) {
    window.alert("Usuário não encontrado");
  }
};
