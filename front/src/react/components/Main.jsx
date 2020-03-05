import React from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProductsContainer from "../containers/ProductsContainer";
import ProductSearchContainer from "../containers/ProductSearchContainer";
import Navbar from "../containers/NavbarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Footer from "../containers/FooterContainer";
import Home from "../containers/Home";
import ViewSingleContainer from "../containers/ViewSingleContainer";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route
          exact
          path="/products/product/:name"
          component={ProductSearchContainer}
        />
        <Route exact path="/products/:id" component={ViewSingleContainer} />
        <Route exact path="/register" component={RegisterContainer} />

        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default connect(null, null)(Main);
