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
    <div className="col-md-4 mx-auto" style={formLogin}>
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
        <Button name={"Sign In"} buttonDisable={buttonDisable} />
      </form>
      {invalidData ? <AlertInput msg={INVALID_DATA} /> : null}
    </div>
  );
};
