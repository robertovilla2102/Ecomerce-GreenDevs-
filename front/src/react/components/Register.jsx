import React from "react";
import AlertInput from "./AlertInput";
import Button from "./Button";
import CustomInput from "./CustomInput";
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
  <div className="card ">
    <img
      src="https://cdn.euroinnova.edu.es/img/subidasEditor/cursos-de-botanica-1571737005.webp"
      class="card-img"
      alt="Responsive image"
    />
    <div className="card-img-overlay text-white mt-5">
      <div className="col-md-4 mx-auto p-5 bg-success">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <CustomInput
              optionsClass={"d-flex"}
              handleInput={handleInput}
              nameInput={"Name"}
              typeInput={"text"}
              placeholderInput={"Enter your name"}
            />
            <div className="container">
              {nameError ? <AlertInput msg={NAME_FORMAT_INCORRECT} /> : null}
            </div>
          </div>

          <div className="form-group">
            <CustomInput
              optionsClass={"d-flex"}
              handleInput={handleInput}
              nameInput={"Email"}
              typeInput={"email"}
              placeholderInput={"Enter your email"}
            />
            <div className="container">
              {emailError ? <AlertInput msg={EMAIL_FORMAT_INCORRECT} /> : null}
            </div>
          </div>

          <div className="form-group">
            <CustomInput
              optionsClass={"d-flex"}
              handleInput={handleInput}
              nameInput={"BirthDate"}
              typeInput={"date"}
              step="1"
              min="1900-01-01"
              max="2002-12-31"
              placeholderInput={"Enter your birthdate"}
            />
          </div>

          <div className="form-group ">
            <CustomInput
              optionsClass={"d-flex"}
              handleInput={handleInput}
              nameInput={"Password"}
              typeInput={"password"}
              placeholderInput={"Enter password"}
            />
            <div className="container">
              {passError ? (
                <AlertInput msg={PASSWORD_FORMAT_INCORRECT} />
              ) : null}
            </div>
          </div>

          <div className="form-group ">
            <CustomInput
              optionsClass={"d-flex"}
              handleInput={handleInput}
              nameInput={"Address"}
              typeInput={"text"}
              placeholderInput={"Enter your address"}
            />
          </div>

          <div className="input-group mb-3 d-flex">
            <div className="col-md-3">
              <label htmlFor="">Img Profile</label>
            </div>
            <div className="col-md-8">
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
            <Button
              options={"btn btn-lg btn-outline-light btn-block mt-3"}
              buttonDisable={buttonDisable}
              name={"Sign Up"}
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);
