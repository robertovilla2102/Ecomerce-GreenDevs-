import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router";
import { fetchProductsByName } from "../../redux/action-creators/productos";
import { loginUser } from "../../redux/action-creators/login";
import { connect } from "react-redux";

const NavbarContainer = ({ fetchProductsByName, history, user, loginUser }) => {
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
    loginUser(inputEmail, inputPassword)
      .then(() => {
        history.push("/home");
      });
  };

  return (
    <div>
      <Navbar
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
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
