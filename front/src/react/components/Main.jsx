import React from "react";
import { Link, Route, Redirect, Switch, Router } from "react-router-dom";
import { connect } from "react-redux";

//importando containers
import ProductsContainer from "../containers/ProductsContainer";
import Navbar from "../containers/NavbarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Header from "../containers/HeaderContainer";
import ViewSingleContainer from "../containers/ViewSingleContainer";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />

        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/products/:id" component={ViewSingleContainer} />
          <Route exact path="/register" component={RegisterContainer} />

          <Redirect from="/" to="/products" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Main);
