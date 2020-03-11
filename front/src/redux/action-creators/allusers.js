import{
  SEARCH_USERS
} from "../constants"

import axios from "axios";

const searchUsers=users=>({
  type:SEARCH_USERS,
  users
});


//busca a todos los buscarUsuarios

export const fetchUsers= () => dispatch => {
  return axios
  .get("http://localhost:3001/api/admin/see-users")
  .then(users=>users.data)
  .then(users =>{
    dispatch(searchUsers(users));
    return users
  })
  .catch(err => console.err(err));
};

export const deleteUsers= (userId) => dispatch => {
  return axios
  .delete(`http://localhost:3001/api/admin/delete-user/${userId}`)
  .then(users=>users.data)
  .then(users => dispatch(fetchUsers()))
  .catch(err => console.err(err));
};

export const quitarAdministrador= (userId) => dispatch => {
  return axios
  .update(`http://localhost:3001/api/admin/remove-admin/${userId}`)
  .catch(err => console.err(err));
};

export const asignarAdministrador= (userId) => dispatch => {
  return axios
  .update(`http://localhost:3001/api/admin/add-admin/${userId}`)
  .catch(err => console.err(err));
};
