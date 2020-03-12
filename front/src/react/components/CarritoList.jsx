import React from "react";
import Carrito from "./Carrito";
import ErrorDetected from "./ErrorDetected";
import { CARRITO_VACIO } from "../../assets/ErrorsMsg";

export default ({ listaCarrito, handlerButtonDelete, handleButtonComprar }) => {
  return (
    <div className="container">
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
            className="btn btn-success"
            type="submit"
            onClick={handleButtonComprar}
          >
            COMPRAR
          </button>
        </div>
      ) : (
        <div className="col-md-8 mx-auto">
          <ErrorDetected msg={CARRITO_VACIO} />
        </div>
      )}
    </div>
  );
};
