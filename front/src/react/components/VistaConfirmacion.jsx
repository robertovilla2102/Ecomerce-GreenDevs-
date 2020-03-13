import React from 'react'
import { popUp, popUpInner } from '../css/estilosComunes'

export default ({ listaCarrito, mostrarDetalle, handleButtonComprar }) => (
  <div style={popUp}>
    <div style={popUpInner} className="container">

  <div class="jumbotron">
    <h1 class="display-4">Ya casi terminás tu compra!</h1>
    <p class="lead">A continuación te mostramos un detalle de las plantas que agregaste a tu carrito y están listas para ser enviadas a tu hogar!</p>
    <hr class="my-4"></hr>

        <div className="container">
          <table className="table text-center">
            <thead>
              <tr>
                <th>ID P.</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
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
            className='btn btn-success btn-block'
            type='submit'
            onClick={handleButtonComprar}
            style={{backgroundColor:"#1f4e52", border:"#1f4e52"}}
          >
            Confirmar Compra
          </button>

          <button
            className='btn btn-danger btn-block'
            type='submit'
            onClick={mostrarDetalle}
            style={{backgroundColor:"#f17d30", border:"#f17d30"}}
          >Cancelar
        </button>



      </div>
    </div>
  </div>

  </div>

)
