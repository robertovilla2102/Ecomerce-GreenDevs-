import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { userIsLogin } from "../../redux/action-creators/login";

import ProductsContainer from "../containers/ProductsContainer";
import Navbar from "../containers/NavbarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ViewSingleContainer from "../containers/ViewSingleContainer";
import Home from "../containers/Home";
import CarritoContainer from "../containers/CarritoContainer";
import ProductSearchContainer from "../containers/ProductSearchContainer";
import LoginContainer from "../containers/LoginContainer";
import CateogryContainer from "../containers/CategoryContainer";
import PerfilUsuario from "../containers/PerfilUsuario"
import EditPerfil from "../containers/ContainerEditPerfil"

const Main = ({ user, userLogin }) => {
  useEffect(() => {
    userLogin();
  }, []);

  return (
    <React.Fragment>
      <Navbar user={user} />

      <Switch>
        <Route exact path="/home" component={Home} />

        <Route exact path="/products" component={ProductsContainer} />

        <Route
          exact
          path="/products/page/:page"
          component={ProductsContainer}
        />

        <Route exact path="/products/:id" component={ViewSingleContainer} />

        <Route
          exact
          path="/products/categories/:id"
          component={CateogryContainer}
        />

        <Route exact path="/login" component={LoginContainer} />

        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/miPerfil" component={PerfilUsuario} />
        <Route exact path="/editPerfil" component={EditPerfil} />

        <Route exact path="/carrito" component={CarritoContainer} />
        <Route
          exact
          path="/products/product/:name"
          component={ProductSearchContainer}
        />

        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.login.userLogueado
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogin: () => dispatch(userIsLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
