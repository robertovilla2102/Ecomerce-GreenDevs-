import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { registerUser } from "../../redux/action-creators/register";
import Register from "../components/Register";
import {
  isValidName,
  isValidEmail,
  isValidPassword
} from "../../assets/validaciones-de-inputs";
import { imgRegisterForm } from "../css/estilosComunes";

const RegisterContainer = ({ registerUser, history }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);

  const handleInput = e => {
    switch (e.target.name) {
      case "name":
        {
          isValidName(e.target.value)
            ? setNameError(true)
            : setNameError(false);
        }
        break;
      case "email":
        {
          isValidEmail(e.target.value)
            ? setEmailError(true)
            : setEmailError(false);
        }
        break;
      case "password":
        {
          isValidPassword(e.target.value)
            ? setPassError(true)
            : setPassError(false);
        }
        break;
    }

    !nameError && !emailError && !passError
      ? setButtonDisable(false)
      : setButtonDisable(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      userName: e.target[0].value,
      userEmail: e.target[1].value,
      birthDay: e.target[2].value,
      password: e.target[3].value,
      address: e.target[4].value,
      imgProfile: e.target[5].value
    };
    registerUser(data).then(error => {
      error ? null : history.push("/login");
    });
  };

  return (
    <div className="">
      <Register
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        nameError={nameError}
        emailError={emailError}
        passError={passError}
        buttonDisable={buttonDisable}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    registeredUser: state.register.userRegistrado
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    registerUser: user => dispatch(registerUser(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(RegisterContainer)
);
