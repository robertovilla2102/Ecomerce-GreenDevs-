import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router";
import { fetchProductsByName } from "../../redux/action-creators/productos";
import { loginUser } from "../../redux/action-creators/login";
import { connect } from "react-redux";
import { userLogout } from "../../redux/action-creators/login";

const NavbarContainer = ({
  fetchProductsByName,
  history,
  user,
  loginUser,
  userLogout
}) => {
  const [inputSearch, setInputSearch] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handlerInput = e => {
    let search = e.target.value;
    setInputSearch(value => search);
  };

  const handlerInputForm = e => {
    const input = e.target.name;
    switch (input) {
      case "inputEmail":
        setInputEmail(e.target.value);
        break;
      case "inputPassword":
        setInputPassword(e.target.value);
        break;
    }
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    fetchProductsByName(inputSearch).then(() => {
      history.push(`/products/product/${inputSearch}`);
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    loginUser(email, password).then(() => {
      history.push("/home");
    });
  };
  const onSubmitLogout = e => {
    e.preventDefault();
    userLogout().then(() => history.push("/home"));
  };

  return (
    <div>
      <Navbar
        onSubmitLogout={onSubmitLogout}
        onSubmitForm={onSubmitForm}
        handlerInputForm={handlerInputForm}
        onSubmitSearch={onSubmitSearch}
        inputSearch={inputSearch}
        handlerInput={handlerInput}
        user={user}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.login.userLogueado
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductsByName: name => dispatch(fetchProductsByName(name)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    userLogout: () => dispatch(userLogout())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
