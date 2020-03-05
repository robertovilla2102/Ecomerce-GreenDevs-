import React from 'react'
import { Link, Route, Redirect, Switch, Router } from 'react-router-dom'
import { connect } from 'react-redux'

//importando containers
import ProductsContainer from '../containers/ProductsContainer'
import Navbar from '../containers/NavbarContainer'
import RegisterContainer from '../containers/RegisterContainer'
import Header from '../containers/HeaderContainer'


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />

        <Switch>
          <Route path='/products' component={ProductsContainer} />

          <Route path='/register' component={RegisterContainer} />

          <Redirect to='/' />

        </Switch>

      </React.Fragment>
    )
  }
}

export default connect(null, null)(Main)
