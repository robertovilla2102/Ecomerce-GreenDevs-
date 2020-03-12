import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css";

export default () => {
  return (
    <div className="icon-block text-center">
      <Link to="/miPerfil">
        <i
          style={{ marginLeft: "2%", marginRight: "2%" }}
          className="fas fa-user"
        ></i>
      </Link>

      <Link to="/carrito">
        <i
          style={{ marginLeft: "2%", marginRight: "2%" }}
          className="fas fa-shopping-cart"
        ></i>
      </Link>

      <Link to="#">
        <i
          style={{ marginLeft: "2%", marginRight: "2%" }}
          className="fas fa-money-check-alt"
        ></i>
      </Link>

      <Link to="/editPassword">
        <i
          style={{ marginLeft: "2%", marginRight: "2%" }}
          className="fas fa-key"
        ></i>
      </Link>

      <Link to="/editPerfil">
        <i
          style={{ marginLeft: "2%", marginRight: "2%" }}
          className="fas fa-user-edit"
        ></i>
      </Link>
    </div>
  );
};
