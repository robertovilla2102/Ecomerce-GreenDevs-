import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../redux/action-creators/login";
import Login from "../components/Login";
import {
  isValidEmail,
  isValidPassword
} from "../../assets/validaciones-de-inputs";
import Alert from "../components/Alert";
import { LOGEASTE_ALERT } from "../../assets/mensajesAlert";

const LoginContainer = ({ loginUser, history }) => {
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [invalidData, setInvalidData] = useState(false);
  const [alertBoolean, setAlertBoolean] = useState(false);
  function handlerInput(e) {
    switch (e.target.name) {
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

    !emailError && !passError
      ? setButtonDisable(false)
      : setButtonDisable(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    loginUser(email, password).then(res => {
      if (res && res.status == 401) {
        setInvalidData(true);
      } else {
        console.log("entre2");
        setInvalidData(false);
        setAlertBoolean(true);
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        {alertBoolean ? <Alert pedorro={LOGEASTE_ALERT} /> : null}
        <Login
          handlerInput={handlerInput}
          handleSubmit={handleSubmit}
          emailError={emailError}
          passError={passError}
          buttonDisable={buttonDisable}
          invalidData={invalidData}
        />
      </div>
    </div>
  );
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default withRouter(connect(null, mapDispathToProps)(LoginContainer));
