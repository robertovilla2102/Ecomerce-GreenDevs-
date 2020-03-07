import { RECEIVE_ALL_CATEGORIES, RECEIVE_ONE_CATEGORY } from "../constants";

const inicialState = {
  list: [],
  selectedCategory: []
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return { ...state, list: action.categories };
    case RECEIVE_ONE_CATEGORY:
      return { ...state, selectedCategory: action.category };
    default:
      return state;
  }
};
