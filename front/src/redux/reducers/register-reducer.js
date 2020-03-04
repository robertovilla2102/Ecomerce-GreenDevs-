import { CREATE_USER } from '../constants'

const inicialState = {
  userRegistrado: {}
}

export default (state = inicialState, action) => {
  switch (action.type) {

    case CREATE_USER:
      return Object.assign({}, state, { userRegistrado: action.user })

    default:
      return state
  }
}


