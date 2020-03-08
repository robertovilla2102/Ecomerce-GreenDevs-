import React from "react";
import { imgCart } from "../css/estilosComunes";

export default ({ listaCarrito, handlerButtonDelete }) => {
  return listaCarrito.map((carrito, index) => {
    return (
      <tr className="text-center">
        <td>
          <img style={imgCart} src={carrito.producto.imgProfile} alt="" />
        </td>
        <td>{carrito.producto.name}</td>
        <td>{carrito.producto.price}</td>
        <td>{carrito.cantidad}</td>
        <td>{carrito.cantidad * carrito.producto.price}</td>
        <td>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            value={carrito.id}
          />
        </td>
        <td>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={e => {
              e.preventDefault();
              handlerButtonDelete(carrito.id);
            }}
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  });
};
