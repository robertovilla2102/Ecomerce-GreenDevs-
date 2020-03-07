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
    this.props.fetchCarritos(this.props.user)
  }



  render() {
    const {listaCarrito} = this.props
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">pecio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
              <th scope="col">Incluir</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCarrito ? <Carrito listaCarrito={listaCarrito} /> : null}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    listaCarrito: state.carrito.listaCarrito,
    user: state.login.userLogueado.id
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchCarritos: (id) => dispatch(fetchCarritos(id))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr)
