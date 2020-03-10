import { ADD_COMPRA, RECEIVE_ALL_COMPRAS, ADD_VARIAS_COMPRAS } from '../constants'
import { receiveCarrito } from './carrito'
import Axios from 'axios'

const addCompra = compra => ({
  type: ADD_COMPRA,
  compra
})

const receiveCompras = compras => ({
  type: RECEIVE_ALL_COMPRAS,
  compras
})

const addMuchasCompras = compras => ({
  type: ADD_VARIAS_COMPRAS,
  compras
})

export const createCompra = (carritoId, body) => dispatch => {
  return Axios.post(`http://localhost:3001/api/compra/add/${carritoId}/`, { body })
    .then(res =>
      dispatch(addCompra(res.data))
    )
}

export const fetchCompras = () => dispatch => {
  Axios.get(`http://localhost:3001/api/compra`)
    .then(res =>
      dispatch(receiveCompras(res.data))
    )
}

export const createVariasCompras = () => dispatch => {
  return Axios.post(`http://localhost:3001/api/compra/muchos`)
    .then(res => {
      dispatch(receiveCarrito([]))
    })
}
