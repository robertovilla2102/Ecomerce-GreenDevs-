import React from "react";
import { Link } from "react-router-dom";
import AdminContainer from '../containers/AdminContainer'

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

        <Link
          to='/miPerfil'
          className="dropdown-item" >
          Mi Perfil.
        </Link>

        <Link
          to='/miPerfil/compras' className="dropdown-item">
          Mis Compras
        </Link>

        <Link
          to='/admin' className="dropdown-item">
          Admin Config.
        </Link>

        <button onClick={onSubmitLogout} className="dropdown-item">
          Log Out
        </button>

      </div>
    </div>
  );
};
