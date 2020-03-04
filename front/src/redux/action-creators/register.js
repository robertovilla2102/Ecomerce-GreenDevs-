import { CREATE_USER } from '../constants'
import axios from 'axios'

const createUser = user => ({
  type: CREATE_USER,
  user
})

//registra un user en localhost:3001
export const registerUser = (user) => dispatch => {
  axios.post('http://localhost:3001/api/user/register', { user })
    .then(user => dispatch(createUser(user)))
    .catch(err => console.error(err))
}