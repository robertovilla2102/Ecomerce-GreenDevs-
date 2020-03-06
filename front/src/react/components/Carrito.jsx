import React from 'react'
import { Link } from 'react-router-dom'

let total = 0

export default ({ listaCarrito }) => (
  <div className="container">
    <div>
      <main className="jumbotron jumbotron-fluid">
        <div className="container wow fadeIn">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Tu Carrito</span>
            <span className="badge badge-secondary badge-pill">items</span>
          </h4>
          <ul className="list-group mb-3 z-depth-1">
            {listaCarrito.map((carrito, index) => {

              total += carrito.producto.price * carrito.cantidad

              return <li className="list-group-item d-flex justify-content-between lh-condensed" key={index}>
                <div>
                  <h6 className="my-0">{carrito.producto.name}</h6>
                  <small className="text-muted">Cantidad : {carrito.cantidad}</small>
                </div>
                <span className="text-muted">{carrito.producto.price * carrito.cantidad}$</span>
              </li>
            })}
            < li className="list-group-item d-flex justify-content-between lh-condensed" >
              <span>Total ($)</span>
              <strong>{total}</strong>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
)

