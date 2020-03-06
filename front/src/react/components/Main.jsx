import React from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProductsContainer from '../containers/ProductsContainer'
import Navbar from '../containers/NavbarContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Footer from '../containers/FooterContainer'
import ViewSingleContainer from '../containers/ViewSingleContainer'
import Home from '../containers/Home'
import CarritoContainer from '../containers/CarritoContainer'
import ProductSearchContainer from "../containers/ProductSearchContainer";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/products" component={ProductsContainer} />

          <Route exact path="/products/:id" component={ViewSingleContainer} />

          <Route exact path="/register" component={RegisterContainer} />

          <Route exact path="/carrito" component={CarritoContainer} />
          <Route
            exact
            path="/products/product/:name"
            component={ProductSearchContainer}
          />

          <Redirect from='/' to='/home' />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Main);
