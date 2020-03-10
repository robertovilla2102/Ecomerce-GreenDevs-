import { ADD_COMPRA, RECEIVE_ALL_COMPRAS } from '../constants'

const inicialState = {
  compraAgregada: {},
  list: [],
}

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_COMPRA:
      return { ...state, compraAgregada: action.compra }

    case RECEIVE_ALL_COMPRAS:
      return { ...state, list: action.compras }

    default:
      return state
  }
}