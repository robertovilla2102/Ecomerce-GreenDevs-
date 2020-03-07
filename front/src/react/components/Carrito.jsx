import React from 'react'
import { Link } from 'react-router-dom'
import {imgCart} from '../css/estilosComunes'

let total = 0

export default ({ listaCarrito }) => {
  return listaCarrito.map((carrito, index) => {
        return (
          <tr>
            <td><img style={imgCart} src={carrito.producto.imgProfile} alt=""/></td>
            <td>{carrito.producto.name}</td>
            <td>{carrito.producto.price}</td>
            <td>{carrito.cantidad}</td>
            <td>{carrito.cantidad * carrito.producto.price}</td>
            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
          </tr>
          )
        }
    )
}
