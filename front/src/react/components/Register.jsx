import React from "react";
import { Link } from "react-router-dom";

//importando cs

export default ({ handleInput, handleSubmit, error }) => (
  <div className="col-md-4 mx-auto">
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Ingresa Nombre"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="userEmail"
          placeholder="Ingresa Email"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="IngreseBirthday"
          name="birthDay"
          required=""
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Ingresa password"
          name="password"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa Adress"
          name="address"
          onChange={handleInput}
        />
      </div>

      <div className="input-group mb-3">
        <select
          className="custom-select"
          onChange={handleInput}
          name="imgProfile"
        >
          <option value="volvo">img 1</option>
          <option value="saab">img 2</option>
          <option value="mercedes">img 3</option>
        </select>
      </div>

      <button
        className="btn btn-lg btn-dark btn-block"
        type="submit"
        onClick={handleSubmit}
      >
        registarse
      </button>

      <hr />

      {error ? (
        <div className="alert alert-danger" role="alert">
          Intenta nuevamente, alguno de los campos es incorrecto!!
        </div>
      ) : null}
    </form>
  </div>
);
