import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css"

export default () => {
  return (
    <div className="icon-block text-center">
      <Link to="/miPerfil">
        <i class="fas fa-user"></i>
      </Link>

      <Link to="/carrito">
        <i className="fas fa-shopping-cart"></i>
      </Link>

      <Link to="#">
        <i class="fas fa-money-check-alt"></i>
      </Link>

      <Link to="#">
        <i className="fas fa-key"></i>
      </Link>

      <Link to="/editPerfil">
        <i className="fas fa-user-edit"></i>
      </Link>
    </div>
  );
};
