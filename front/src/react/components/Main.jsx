import React from 'react'
import { Link, Route, Redirect, Switch, Router } from 'react-router-dom'
import { connect } from 'react-redux'

//importando containers
import ProductsContainer from '../containers/ProductsContainer'
<<<<<<< HEAD
import Navbar from '../containers/NavbarContainer'
=======
import RegisterContainer from '../containers/RegisterContainer'
>>>>>>> 13a4a8ca2420b590b2e878e15d4ce0390f6f3894

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <h1>Bienvenido a la nada</h1>

        <div className="container">
          <Link to='/register'>
            <button>registarse</button>
          </Link>
        </div>

        <Switch>
          <Route path='/products' component={ProductsContainer} />

          <Route path='/register' component={RegisterContainer} />

          <Redirect from='/' to='/products' />

        </Switch>

      </React.Fragment>
    )
  }
}

export default connect(null, null)(Main)
