import React from 'react'
import { connect } from 'react-redux'

import { fetchCarritos } from '../../redux/action-creators/carrito'
import Carrito from '../components/Carrito'

class CarritoContaienr extends React.Component {
  handleSubmitComprar(e) {
    e.preventDefault()
    //hace la logica de enviar a la ruta productos comprados y cargarlos en la base de dato como comprados y no como pending
  }

  componentDidMount() {
    this.props.fetchCarritos()
  }

  render() {
    return (
      <Carrito
        listaCarrito={this.props.listaCarrito}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    listaCarrito: state.carrito.listaCarrito
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchCarritos: () => dispatch(fetchCarritos())
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr) 