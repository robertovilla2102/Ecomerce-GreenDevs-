import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css"

export default () => {
  return (
          <div className="icon-block text-center">
            <Link to="/editPerfil"> <i className="fas fa-user-edit"></i></Link>
            <Link to="#"> <i className="fas fa-shopping-cart"></i></Link>
            <Link to="#"> <i className="fas fa-key"></i></Link>
          </div>
  );
};
