import { CREATE_USER } from "../constants";
import axios from "axios";

const createUser = (user) => ({
  type: CREATE_USER,
  user,
});

//registra un user en localhost:3001
export const registerUser = (user) => (dispatch) => {
  return axios
    .post("http://localhost:3000/api/user/register-local", { user })
    .then((res) => {
      dispatch(createUser(res.data));
    })
    .catch((err) => err);
};
