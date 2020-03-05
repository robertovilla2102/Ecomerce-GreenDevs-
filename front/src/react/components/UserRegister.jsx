import React, { useState } from "react";
import { Link } from "react-router-dom";

export default ({ onSubmitLogin }) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sign in
      </button>
      <div className="dropdown-menu" onSubmit={onSubmitLogin}>
        <form className="px-4 py-3">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link to="/register" className="dropdown-item" href="#">
          Nuevo? Registrate
        </Link>
      </div>
    </div>
  );
};
