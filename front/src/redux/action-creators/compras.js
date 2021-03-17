import {
  ADD_COMPRA,
  RECEIVE_ALL_COMPRAS,
  ADD_VARIAS_COMPRAS,
  RECEIVE_COMPRA,
} from "../constants";
import { receiveCarrito } from "./carrito";
import Axios from "axios";

const addCompra = (compra) => ({
  type: ADD_COMPRA,
  compra,
});

const receiveCompras = (compras) => ({
  type: RECEIVE_ALL_COMPRAS,
  compras,
});

const receiveCompra = (compra) => ({
  type: RECEIVE_COMPRA,
  compra,
});

const addMuchasCompras = (compras) => ({
  type: ADD_VARIAS_COMPRAS,
  compras,
});

export const createCompra = (carritoId, body) => (dispatch) => {
  return Axios.post(`http://localhost:3000/api/compra/add/${carritoId}/`, {
    body,
  }).then((res) => {
    dispatch(addCompra(res.data));
    return res;
  });
};

export const fetchCompras = () => (dispatch) => {
  Axios.get(`http://localhost:3000/api/compra`).then((res) =>
    dispatch(receiveCompras(res.data))
  );
};

export const fetchCompra = (id) => (dispatch) => {
  return Axios.get(`http://localhost:3000/api/compra/find/${id}`)
    .then((res) => {
      dispatch(receiveCompra(res.data));
      return res.data;
    })
    .catch((err) => err);
};

export const createVariasCompras = () => (dispatch) => {
  return Axios.post(`http://localhost:3000/api/compra/muchos`).then((res) => {
    dispatch(receiveCarrito([]));
  });
};
