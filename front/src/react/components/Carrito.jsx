import React from 'react'
import { Link } from 'react-router-dom'
import {imgCart} from '../css/estilosComunes'


export default ({ listaCarrito, deleteProducto }) => {
  return listaCarrito.map((carrito, index) => {
        return (
          <div className="w-100 ">
            <tr className="d-flex justify-content-around">
            <td><img style={imgCart} src={carrito.producto.imgProfile} alt=""/></td>
            <td>{carrito.producto.name}</td>
            <td>{carrito.producto.price}</td>
            <td>{carrito.cantidad}</td>
            <td>{carrito.cantidad * carrito.producto.price}</td>
            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
            <td><button  onClick={(e) => {e.preventDefault() 
            deleteProducto(carrito.id)}}
            type="button" class="btn btn-danger">Eliminar</button></td>
          </tr>
          <button  style={{marginTop: '60px', marginLeft: '50px'}} type="sumbit" class="btn btn-outline-success  ">Comprar</button>
          </div>
          
          
          )
        }
        
    )
}
