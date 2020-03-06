import React from 'react'
import { Link } from 'react-router-dom'

export default ({ listaCarrito }) => (
  <div className="container">
    <h3>Productos en tu carrito : </h3>

    {listaCarrito.map(carrito => (
      <div className='container' key={carrito.id}>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <img
            className='img-thumbnail '
            src={carrito.producto.imgProfile}
            alt="carrito.producto-picture"
            style={{ width: "250px", height: '400px', margin: '15px' }}
          />
          <div style={{ margin: '15px' }}>
            <br />
            <h3>{carrito.producto.name}</h3>
            <br />
            <h3>Precio</h3>
            <p>{carrito.producto.price}</p>
            <h4>Stock</h4>
            <small>{carrito.producto.stock}</small>
            <hr />
          </div>

        </div>
      </div>
    ))}
  </div>
)