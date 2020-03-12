import React from "react";
import Carrito from "./Carrito";
import Alert from "react-bootstrap/Alert";

import VistaConfirmacion from './VistaConfirmacion'

export default ({ listaCarrito, handlerButtonDelete, handleButtonComprar, mostrarDetalle, esVisible }) => {
  return (
    <div>
      {listaCarrito.length > 0 ? (
        <div>

          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">pecio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Incluir</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <Carrito
                handlerButtonDelete={handlerButtonDelete}
                listaCarrito={listaCarrito}
              />
            </tbody>
          </table>

          <button
            className='btn btn-success'
            type='submit'
            onClick={mostrarDetalle}
          >
            COMPRAR
            </button>

          {esVisible ?
            <VistaConfirmacion
              mostrarDetalle={mostrarDetalle}
              listaCarrito={listaCarrito}
              handleButtonComprar={handleButtonComprar}
            />
            : null
          }
        </div>

      )
        : (
          <div className="col-md-6 mx-auto mt-5">
            <Alert variant="info">
              <Alert.Heading>Your shopping cart is empty!</Alert.Heading>
              <p>Visit our catalog to add products to your cart!</p>
            </Alert>
          </div>
        )}
    </div>
  );
};
