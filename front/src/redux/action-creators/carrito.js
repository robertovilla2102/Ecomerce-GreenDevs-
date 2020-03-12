import {
  ADD_CARRITO,
  RECEIVE_CARRITO,
  DELETE_PRODUCTO_DEL_CARRITO
} from "../constants";
import axios from "axios";

const addCarrito = carrito => ({
  type: ADD_CARRITO,
  carrito
});

export const receiveCarrito = carritos => ({
  type: RECEIVE_CARRITO,
  carritos
});

//agrega un carrito relacionando un userId y un ProductID
export const createCarrito = (productID, body) => dispatch => {
  return axios
    .post(`http://localhost:3001/api/carrito/add/${productID}`, { body })
    .then(carrito => carrito.data)
    .then(carritoCreado => dispatch(addCarrito(carritoCreado)))
    .catch(err => console.error(err));
};

//buscar todos los carritos relacionados con un UserID
export const fetchCarritos = () => dispatch => {
  axios
    .get(`http://localhost:3001/api/carrito/`)
    .then(carritos => carritos.data)
    .then(encontrados => dispatch(receiveCarrito(encontrados)))
    .catch(err => console.error(err));
};

export const carritoDelete = id => dispatch => {
  axios.delete(`/api/carrito/delete/${id}`).then(() => {
    axios
      .get("/api/carrito")
      .then(res => res.data)
      .then(carritoNuevo => dispatch(receiveCarrito(carritoNuevo)));
  });
};
