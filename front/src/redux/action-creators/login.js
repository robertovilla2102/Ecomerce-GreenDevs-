import { LOGUEAR_USER } from "../constants";
import axios from "axios";

const receivedUser = (user) => ({
  type: LOGUEAR_USER,
  user,
});

// verifica en la base de datos si el usuario existe y lo loguea
export const loginUser = (email, password) => (dispatch) => {
  return axios
    .post("http://localhost:3000/api/user/login", {
      userEmail: email,
      password: password,
    })
    .then((res) => {
      dispatch(receivedUser(res.data));
    })
    .catch((err) => err.response);
};

// login con facebook
export const loginUserFacebook = () => (dispatch) => {
  return axios
    .post("http://localhost:3000/api/auth/facebook")
    .then((user) => {
      dispatch(receivedUser(user.data));
      return user.data;
    })
    .catch((err) => err);
};

//Mantiene viva la sesion del usuario por mas que refresque la pagina
export const userIsLogin = () => (dispatch) => {
  axios
    .get("http://localhost:3000/api/user/islogin")
    .then((res) => dispatch(receivedUser(res.data)));
};

export const userLogout = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/user/logout")
    .then(() => dispatch(receivedUser({})));
};

export const editPerfil = (user) => (dispatch) => {
  return axios
    .post("http://localhost:3000/api/user/editPerfil", { user })
    .then((res) => {
      dispatch(receivedUser(res.data));
    })
    .catch((err) => err);
};
