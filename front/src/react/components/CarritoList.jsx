import React from "react";
import Carrito from "./Carrito";

export default ({ listaCarrito, handlerButtonDelete }) => (
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
      {listaCarrito ? (
        <Carrito
          handlerButtonDelete={handlerButtonDelete}
          listaCarrito={listaCarrito}
        />
      ) : null}
    </tbody>
  </table>
);
