import { RECEIVE_ALL_CATEGORIES, RECEIVE_ONE_CATEGORY, RECEIVE_CATEGOTY_POSTA } from "../constants";

const inicialState = {
  list: [],
  selectedCategory: [],
  categoria: {}
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return { ...state, list: action.categories };

    case RECEIVE_ONE_CATEGORY:
      return { ...state, selectedCategory: action.category };

    case RECEIVE_CATEGOTY_POSTA:
      return { ...state, categoria: action.categoriaPosta };
    default:
      return state;
  }
};
