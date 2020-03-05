import {
  RECEIVE_ONE_PRODUCT,
  RECIVE_ALL_PRODUCTS,
  RECIVE_PRODUCTS_SEARCH
} from "../constants";

const inicialState = {
  list: [],
  productsSearch: [],
  selectedProduct: {}
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case RECIVE_ALL_PRODUCTS:
      return { ...state, list: action.products };

    case RECIVE_PRODUCTS_SEARCH:
      return { ...state, productsSearch: action.products };

    case RECEIVE_ONE_PRODUCT:
      return Object.assign({}, state, { selectedProduct: action.product });

    default:
      return state;
  }
};
