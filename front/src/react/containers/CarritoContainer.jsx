import React from 'react'
import { connect } from 'react-redux'

import { fetchCarritos, carritoDelete } from '../../redux/action-creators/carrito'
import Carrito from '../components/Carrito'

class CarritoContaienr extends React.Component {
  constructor(){
    super()
    this.deleteProducto = this.deleteProducto.bind(this)
  }

  handleSubmitComprar(e) {
    e.preventDefault()
    //hace la logica de enviar a la ruta productos comprados y cargarlos en la base de dato como comprados y no como pending
  }

  componentDidMount() {
    this.props.fetchCarritos(this.props.user)
  }

  deleteProducto(id) {
    this.props.carritoDelete(id)
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
            {listaCarrito ? <Carrito deleteProducto={this.deleteProducto} listaCarrito={listaCarrito} /> : null}
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
    fetchCarritos: (id) => dispatch(fetchCarritos(id)),
    carritoDelete: (id) => dispatch(carritoDelete(id))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr)
