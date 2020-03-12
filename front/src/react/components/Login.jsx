import React from "react";
import { formLogin } from "../css/estilosComunes";
import Button from "./Button";
import {
  EMAIL_FORMAT_INCORRECT,
  PASSWORD_FORMAT_INCORRECT,
  INVALID_DATA
} from "../../assets/errorsImputs";
import AlertInput from "./AlertInput";

export default ({
  handlerInput,
  handleSubmit,
  emailError,
  passError,
  buttonDisable,
  invalidData
}) => {
  return (
    <div className="card" style={{backgroundColor:"#172b3a",position:"fixed"}}>
      <div style={{
        backgroundColor: "#172b3a",
        height: "100vh",
        width: "102vw",
        left: "-2px",
        position: "fixed",
        zIndex: "-1",
        }}></div>
      <img
        src="/imagenes/Fondos/imgcentrog.png"
        alt="Responsive image"
      />
    <div className="card-img-overlay text-white mt-5">
    <div className="col-md-4 mx-auto p-5" style={{marginTop: "100px",width:'500px',backgroundColor:"#172b3ab8"}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group input-group-lg">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@example.com"
            onBlur={handlerInput}
          />
          {emailError ? <AlertInput msg={EMAIL_FORMAT_INCORRECT} /> : null}
        </div>
        <div className="form-group input-group-lg">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onBlur={handlerInput}
          />
          {passError ? <AlertInput msg={PASSWORD_FORMAT_INCORRECT} /> : null}
        </div>
        <Button options={"btn btn-block btn-secondary"} name={"Sign In"} buttonDisable={buttonDisable} />
      </form>
      {invalidData ? <AlertInput msg={INVALID_DATA} /> : null}
    </div>
  </div>
  </div>
  );
};
