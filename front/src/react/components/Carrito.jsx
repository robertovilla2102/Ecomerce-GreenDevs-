import React from "react";
import "../css/estilosPerfil.css"

export default ({ listaCarrito, handlerButtonDelete }) => {
  return listaCarrito.map((carrito, index) => {
    return (
      <tr className="text-center">
        <td>
          <img className="profile-buy rounded-circle" src={carrito.producto.imgProfile} alt="" />
        </td>
        <td className="align-middle">{carrito.producto.name}</td>
        <td className="align-middle">{carrito.producto.price}</td>
        <td className="align-middle">{carrito.cantidad}</td>
        <td className="align-middle">{carrito.cantidad * carrito.producto.price}</td>
        <td className="align-middle">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            value={carrito.id}
          />
        </td>
        <td className="align-middle">
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
