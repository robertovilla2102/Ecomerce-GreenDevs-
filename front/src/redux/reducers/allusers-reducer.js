import {
SEARCH_USERS
} from "../constants";

const inicialState = {
  users: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.users };
      
    default:
      return state;
  }
};
