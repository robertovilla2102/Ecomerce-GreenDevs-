import React from "react";
import "../css/estilosPerfil.css";

export default ({ listaCarrito, handlerButtonDelete }) => {
  return listaCarrito.map((carrito, index) => {
    return (
      <tr key={carrito.id} className="text-center">
        <td>
          <img
            className="profile-buy rounded-circle"
            src={carrito.producto.imgProfile}
            alt=""
          />
        </td>
        <td className="align-middle">{carrito.producto.name}</td>
        <td className="align-middle">{carrito.producto.price}</td>
        <td className="align-middle">{carrito.cantidad}</td>
        <td className="align-middle">
          {carrito.cantidad * carrito.producto.price}
        </td>
        <td className="align-middle">
          <button
            className="btn btn-danger"
            type="submit"
            onClick={e => {
              e.preventDefault();
              handlerButtonDelete(carrito.id);
            }}
            style={{backgroundColor:"#f17d30", border:"#f17d30"}}
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  });
};
