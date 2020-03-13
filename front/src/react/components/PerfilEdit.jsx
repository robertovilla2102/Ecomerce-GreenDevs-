import React from "react";

import "../css/estilosPerfil.css";

export default ({
  userLogueado,
  mandarFormulario,
  setUserEmail,
  setUserName,
  setUserAddress,
  setUserBirthDay
}) => {
  return (
    <div className="card-body pt-5">
      <img
        src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Compose-512.png"
        alt="edit-image"
        className="profile"
      />
      <form className="align-form">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            name="userEmail"
            defaultValue={userLogueado.userEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => {
              setUserEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Nombre</label>
          <input
            name="userName"
            defaultValue={userLogueado.userName}
            type="string"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Dirección</label>
          <input
            name="adress"
            defaultValue={userLogueado.address}
            type="string"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setUserAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Nacimiento</label>
          <input
            name="birthday"
            defaultValue={userLogueado.birthDay}
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setUserBirthDay(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Autorizo la actualización de mi infomación personal
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => {
            mandarFormulario(e);
          }}
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
