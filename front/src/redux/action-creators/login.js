import { LOGUEAR_USER } from '../constants'
import axios from 'axios'

const receivedUser = user => ({
  type: LOGUEAR_USER,
  user
})

// verifica en la base de datos si el usuario existe y lo loguea
export const loginUser = () => dispatch => {
  return axios.post('http://localhost:3001/api/user/login')
    .then(user => dispatch(receivedUser(user)))
    .catch(err => err)
}

// login con facebook
export const loginUserFacebook = () => dispatch => {
  return axios.post('http://localhost:3001/api/auth/facebook')
    .then(user => dispatch(receivedUser(user)))
    .catch(err => err)
}