import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css"

export default ({userLogueado}) => {
  return (

      <div className="card-body pt-5">
          <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Compose-512.png" alt="edit-image" className="profile"/>
            <form className="align-form">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
  );
};
