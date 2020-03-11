import React from 'react'
import { popUp, popUpInner } from '../css/estilosComunes'

export default ({ listaCarrito, mostrarDetalle, handleButtonComprar }) => (
  <div className="container">
    <div style={popUp}>
      <div style={popUpInner} className='container col-xs-4'>
        <div className="container">
          <table className="table text-center">
            <thead>
              <tr>
                <th>ID P.</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantiad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {listaCarrito.map((carrito, i) => (
                <tr key={i} className='container'>
                  <td>{carrito.id}</td>
                  <td>{carrito.producto.name}</td>
                  <td>{carrito.producto.price}</td>
                  <td>{carrito.cantidad}</td>
                  <td>{carrito.cantidad * carrito.producto.price}</td>
                </tr>
              ))}
              <hr />
              <tr className="container">
                <td>
                  <label>Confirma tu mail</label>
                </td>

                <td>
                  <input type="text" />
                </td>
              </tr>

            </tbody>
          </table>


          <button
            className='btn btn-danger'
            type='submit'
            onClick={mostrarDetalle}
          >cancelar
        </button>

          <button
            className='btn btn-success'
            type='submit'
            onClick={handleButtonComprar}
          >
            confirmar compra
          </button>
        </div>




      </div>
    </div>
  </div>
)

