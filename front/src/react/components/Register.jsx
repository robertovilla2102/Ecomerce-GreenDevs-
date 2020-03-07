import React from "react";
import { Link } from "react-router-dom";
import AlertInput from "./AlertInput";
import Button from "./Button";

import {
  EMAIL_FORMAT_INCORRECT,
  PASSWORD_FORMAT_INCORRECT,
  NAME_FORMAT_INCORRECT
} from "../../assets/errorsImputs";

export default ({
  handleInput,
  handleSubmit,
  nameError,
  emailError,
  passError,
  buttonDisable
}) => (
  <div className="col-md-4 mx-auto">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your Name"
          onBlur={handleInput}
        />
        {nameError ? <AlertInput msg={NAME_FORMAT_INCORRECT} /> : null}
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your Email"
          onBlur={handleInput}
        />
        {emailError ? <AlertInput msg={EMAIL_FORMAT_INCORRECT} /> : null}
      </div>

      <div className="form-group">
        <input
          type="date"
          className="form-control"
          name="birthDay"
          onBlur={handleInput}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your Password"
          name="password"
          onBlur={handleInput}
        />
        {passError ? <AlertInput msg={PASSWORD_FORMAT_INCORRECT} /> : null}
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Address"
          name="address"
          onBlur={handleInput}
        />
      </div>

      <div className="input-group mb-3">
        <select
          className="custom-select"
          onBlur={handleInput}
          name="imgProfile"
        >
          <option value="">Select an image</option>
          <option value="volvo">img 1</option>
          <option value="saab">img 2</option>
          <option value="mercedes">img 3</option>
        </select>
      </div>
      <Button buttonDisable={buttonDisable} name={"Sign Up"} />
    </form>
  </div>
);
