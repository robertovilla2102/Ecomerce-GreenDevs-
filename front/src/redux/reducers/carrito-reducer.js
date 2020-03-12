import { RECEIVE_CARRITO, ADD_CARRITO } from "../constants";

const inicialState = {
  productoAgregado: {},
  listaCarrito: []
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case RECEIVE_CARRITO:
      return { ...state, listaCarrito: action.carritos };

    case ADD_CARRITO:
      return { ...state, productoAgregado: action.carrito };

    default:
      return state;
  }
};
