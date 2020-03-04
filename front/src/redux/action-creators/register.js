import { CREATE_USER } from '../constants'
import axios from 'axios'

const createUser = user => ({
  type: CREATE_USER,
  user
})

//registra un user en localhost:3001
export const registerUser = (user) => dispatch => {
<<<<<<< HEAD
  axios.post('http://localhost:3001/api/user/register', { user })
    .then(user => dispatch(createUser(user)))
=======
  console.log(user)

  axios.post('http://localhost:3001/api/user/registerLocal', { user })
    .then(user => dispatch(createUser(user.data)))
>>>>>>> 13a4a8ca2420b590b2e878e15d4ce0390f6f3894
    .catch(err => console.error(err))
}