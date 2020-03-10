import { ADD_COMPRA, RECEIVE_ALL_COMPRAS } from '../constants'
import Axios from 'axios'

const addCompra = compra => ({
  type: ADD_COMPRA,
  compra
})

const receiveCompras = compras => ({
  type: RECEIVE_ALL_COMPRAS,
  compras
})

export const createCompra = (carritoId, body) => dispath => {
  return Axios.post(`http://localhost:3001/api/compra/add/${carritoId}/`, { body })
    .then(res =>
      dispath(addCompra(res.data))
    )
}

export const fetchCompras = () => dispath => {
  Axios.get(`http://localhost:3001/api/compra`)
    .then(res =>
      dispath(receiveCompras(res.data))
    )
}
