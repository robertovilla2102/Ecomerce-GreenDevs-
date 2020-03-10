import { LOGUEAR_USER, EDIT_PERFIL } from "../constants";

const inicialState = {
  userLogueado: {}
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case LOGUEAR_USER:
      return Object.assign({}, state, { userLogueado: action.user });
    case EDIT_PERFIL:
      return Object.assign({}, state, { userLogueado: action.user });
    default:
      return state;
  }
};
