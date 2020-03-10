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
