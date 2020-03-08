import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css"

export default ({userLogueado}) => {
  return (

      <div className="card-body pt-5">
          <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="profile-image" className="profile"/>
          <h5 className="card-title align-card card-title2">{userLogueado.userName}</h5>
          <p className="card-text align-card"><strong>Correo: </strong>{userLogueado.userEmail}</p>
          <p className="card-text align-card"><strong>Dirección: </strong>{userLogueado.address}</p>
          <p className="card-text align-card"><strong>Nacimiento: </strong>{userLogueado.birthDay}</p>
      </div>
  );
};
