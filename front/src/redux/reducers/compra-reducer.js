import { ADD_COMPRA, RECEIVE_ALL_COMPRAS, RECEIVE_COMPRA } from "../constants";

const inicialState = {
  compraSelected: {},
  compraAgregada: {},
  list: []
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_COMPRA:
      return { ...state, compraAgregada: action.compra };

    case RECEIVE_ALL_COMPRAS:
      return { ...state, list: action.compras };

    case RECEIVE_COMPRA:
      return { ...state, compraSelected: action.compra };

    default:
      return state;
  }
};
