import { LOGUEAR_USER } from "../constants";
import axios from "axios";

const receivedUser = user => ({
  type: LOGUEAR_USER,
  user
});
// verifica en la base de datos si el usuario existe y lo loguea
export const loginUser = (email, password) => dispatch => {
  return axios
    .post("http://localhost:3001/api/user/login", {
      userEmail: email,
      password: password
    })
    .then(user => dispatch(receivedUser(user.data)))
    .catch(err => err);
};

// login con facebook
export const loginUserFacebook = () => dispatch => {
  return axios
    .post("http://localhost:3001/api/auth/facebook")
    .then(user => dispatch(receivedUser(user)))
    .catch(err => err);
};

export const userLogout = () => dispatch => {
  return axios
    .get("http://localhost:3001/api/user/logout")
    .then(() => dispatch(receivedUser({})));
};

export const userIsLogin = () => dispatch => {
  axios
    .get("http://localhost:3001/api/user/islogin")
    .then(res => dispatch(receivedUser(res.data)));
};
