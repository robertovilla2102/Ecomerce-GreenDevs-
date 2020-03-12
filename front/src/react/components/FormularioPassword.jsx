import React from "react";

import "../css/estilosPerfil.css";

export default ({ myFunction, inputType }) => {
  return (
    <div className="card-body pt-5">
      <img
        src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Compose-512.png"
        alt="edit-image"
        className="profile"
      />
      <form className="align-form">
        <div className="form-group">
          <label for="exampleInputEmail1">Password actual</label>
          <input
            name="passwordActual"
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Put your new password
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password new</label>
          <input name="userName" type={inputType} className="form-control" />
          <input type="checkbox" onClick={myFunction} />
          Show Passwor
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm password </label>

          <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};
