import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import UserRegister from "./UserRegister";

export default ({
  handlerInputForm,
  onSubmitSearch,
  handlerInput,
  inputSearch,
  onSubmitForm,
  user,
  onSubmitLogout
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light align-middle">
      <Link to="/home" className="navbar-brand align-middle" href="#">
        <img src="/imagenes/Logo/logo.png" width="110" height="40" alt="" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <Link to='/home' className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <p className="nav-link">
              About Us
            </p>
          </li>

          <li className="nav-item">
            <p className="nav-link">
              Contacto
            </p>
          </li>

        </ul>

        <form className="form-inline my-2 my-lg-0" onSubmit={onSubmitSearch}>
          <input
            className="form-control mr-sm-2"
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
            value={inputSearch}
            onChange={handlerInput}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {user.userName ? (
        <div className="row ml-1">
          <UserInfo user={user} onSubmitLogout={onSubmitLogout} />
        </div>
      ) : (
          <div className="row ml-1">
            <UserRegister
              onSubmitForm={onSubmitForm}
              handlerInputForm={handlerInputForm}
            />
          </div>
        )}
    </nav>
  );
};
