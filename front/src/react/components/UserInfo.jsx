import React from "react";
import { Link } from "react-router-dom";

export default ({ user, onSubmitLogout }) => {
  return (
    <div className="btn-group dropleft">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {user.userName}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/carrito" className="dropdown-item">
          Mi Carrito
        </Link>
        <Link to='/miPerfil'className="dropdown-item" >
          Mi Perfil.
        </Link>
        <a className="dropdown-item">
          Mis Compras
        </a>
        <button onClick={onSubmitLogout} className="dropdown-item">
          Log Out
        </button>
      </div>
    </div>
  );
};
