import { CREATE_USER } from '../constants'
import axios from 'axios'

const createUser = user => ({
  type: CREATE_USER,
  user
})

//registra un user en localhost:3001
export const registerUser = (user) => dispatch => {
  return axios.post('http://localhost:3001/api/user/registerLocal', { user })
    .then(user => {
      dispatch(createUser(user.data))
    })
    .catch(err => err)
}