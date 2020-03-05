import React from 'react'
import { Link } from 'react-router-dom'

export default ({ listaCarrito }) => (
  <div className="container">
    <h3>Productos en tu carrito : </h3>

    {listaCarrito.map(carrito => (
      <div key={carrito.id}>
        <p>{carrito.producto.name}</p>
      </div>
    ))}
  </div>
)