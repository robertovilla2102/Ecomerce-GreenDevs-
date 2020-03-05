import React from "react";
import { Link, Route, Redirect, Switch, Router } from "react-router-dom";
import { connect } from "react-redux";


import ProductsContainer from '../containers/ProductsContainer'
import Navbar from '../containers/NavbarContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Home from '../containers/Home'



class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Router exact path="/products/:id" component={ViewSingleContainer} />
          <Route exact path="/register" component={RegisterContainer} />

          <Redirect from='/' to='/home' />
        </Switch>
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Main);
