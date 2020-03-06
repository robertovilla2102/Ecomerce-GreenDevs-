import React from 'react'

class ContadorContairer extends React.Component() {
  // metodos que se aplican a los contadores
  constructor() {
    super()
    this.state = {
      cantidad: 1
    }

    this.onSubmitCarrito = this.onSubmitCarrito.bind(this)
    this.addCantidad = this.addCantidad.bind(this)
    this.removeCantidad = this.removeCantidad.bind(this)
  }

  addCantidad(e) {
    e.preventDefault()
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }


  removeCantidad(e) {
    e.preventDefault()
    this.setState({
      cantidad: this.state.cantidad - 1,
    })
  }

  onSubmitCarrito(e) {
    e.preventDefault()
    this.props.createCarrito(this.props.match.params.id, {
      cantidad: this.state.cantidad,
      user: this.props.usuario
    })
  }

  onSubmmitComprar
}