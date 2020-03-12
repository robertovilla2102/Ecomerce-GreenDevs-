import { combineReducers } from "redux";

//importando reducers
import productos from "./products-reducer";
import register from "./register-reducer";
import login from "./login-reducer";
import carrito from "./carrito-reducer";
import categories from "./categories-reducer";
import compras from "./compra-reducer";
import usuarios from "./allusers-reducer";
import reviews from "./reviews-reducer";

export default combineReducers({
  productos,
  register,
  login,
  carrito,
  categories,
  compras,
  usuarios,
  reviews
});
