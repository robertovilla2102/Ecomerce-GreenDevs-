import React from 'react'
import { Link, Router, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//importando containers
import ProductsContainer from '../containers/ProductsContainer'

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Bienvenido a la nada</h1>
        <ProductsContainer />

        {/* 
        <Switch>
          <Router path='/products' component={ProductsContainer} />
          <Redirect from='/' to='/products' />
        </Switch> */}

      </React.Fragment>
    )
  }
}

export default connect(null, null)(Main) 