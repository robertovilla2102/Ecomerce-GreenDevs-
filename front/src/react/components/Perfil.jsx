import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css"

export default ({userLogueado}) => {
  return (
    <div className="card profile-card-2 mt-5">
      <div className="card-img-block">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Card image cap"/>
      </div>
      <div className="card-body pt-5">
          <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="profile-image" className="profile"/>
          <h5 className="card-title align-card card-title2">{userLogueado.userName}</h5>
          <p className="card-text align-card"><strong>Correo: </strong>{userLogueado.userEmail}</p>
          <p className="card-text align-card"><strong>Dirección: </strong>{userLogueado.address}</p>
          <p className="card-text align-card"><strong>Nacimiento: </strong>{userLogueado.birthDay}</p>
          <div className="icon-block text-center">
            <a href="#"> <i className="fas fa-user-edit"></i></a>
            <a href="#"> <i className="fas fa-shopping-cart"></i></a>
            <a href="#"> <i className="fas fa-key"></i></a>
          </div>
      </div>
    </div>
  );
};
