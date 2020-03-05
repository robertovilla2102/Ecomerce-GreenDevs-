import React, { useState } from "react";
import { Link } from "react-router-dom";

export default ({ handlerInputForm, onSubmitForm }) => {
  return (
    <div className="">
      <div className="btn-group dropleft">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle btn-block"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Enter your acount
        </button>
        <div className="dropdown-menu">
          <form className="px-1" onSubmit={onSubmitForm}>
            <div className="form-group">
              <input
                type="email"
                name="inputEmail"
                onChange={handlerInputForm}
                className="form-control"
                placeholder="email@example.com"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="inputPassword"
                onChange={handlerInputForm}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign in
            </button>
          </form>
          <div className="dropdown-divider"></div>
          <Link to="/register" className="dropdown-item" href="#">
            Nuevo? Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};
