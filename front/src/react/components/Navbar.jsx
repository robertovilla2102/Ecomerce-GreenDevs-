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
        <img src="/imagenes/Logo/logo2.png" width="110" height="auto" alt="" />
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
        <ul className="navbar-nav mr-auto pt-3">
          <li className="nav-item active" style={{fontWeight:"300",fontSize:"18px"}}>
            <Link to="/home" className="nav-link" href="#">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item" style={{fontWeight:"300",fontSize:"18px"}}>
            <Link to="/products/page/1" className="nav-link">
              PRODUCTOS
            </Link>
          </li>
          
          <li className="nav-item" style={{fontWeight:"300",fontSize:"18px"}}>
            <p className="nav-link">ABOUT US</p>
          </li>
          
          <li className="nav-item" style={{fontWeight:"300",fontSize:"18px"}}>
            <p className="nav-link">CONTACTO</p>
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
            style={{color:"#1c4c50", borderColor: "#1c4c50"}}
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
        <div className="row ml-1" >
          <UserRegister
            onSubmitForm={onSubmitForm}
            handlerInputForm={handlerInputForm}
          />
        </div>
      )}
    </nav>
  );
};
