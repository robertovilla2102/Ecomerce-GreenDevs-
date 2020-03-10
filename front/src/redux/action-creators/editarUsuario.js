import { EDIT_PERFIL } from "../constants";
import axios from "axios";

const nuevoPerfil = user => ({
  type: EDIT_PERFIL,
  user
});

//registra un user en localhost:3001
export const editPerfil = user => dispatch => {
  return axios
    .post("http://localhost:3001/api/user/editPerfil", { user })
    .then(res => {
      console.log("res.data = ", res.data);
      dispatch(nuevoPerfil(res.data));
    })
    .catch(err => err);
};
