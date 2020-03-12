import React from "react";
import { connect } from "react-redux";

//importando components
import ViewSingle from "../components/ViewSingle";
import Alert from "../components/Alert";
import RatingContainer from "./RatingContainer";

//importando action-creators
import { fetchProduct } from "../../redux/action-creators/productos";
import { createCarrito } from "../../redux/action-creators/carrito";
import { createCompra } from "../../redux/action-creators/compras";
import { CARRITO_ALERT, COMPRA_ALERT } from "../../assets/mensajesAlert";

class ViewSingleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cantidad: 1,
      mensaje: {},
      boolean: false
    };

    this.onSubmitCarrito = this.onSubmitCarrito.bind(this);
    this.addCantidad = this.addCantidad.bind(this);
    this.removeCantidad = this.removeCantidad.bind(this);
    this.onSubmitComprar = this.onSubmitComprar.bind(this);
    this.cambio = this.cambio.bind(this);
  }

  addCantidad(e) {
    e.preventDefault();
    this.setState({
      cantidad:
        this.props.producto.stock > this.state.cantidad
          ? this.state.cantidad + 1
          : this.state.cantidad
    });
  }

  removeCantidad(e) {
    e.preventDefault();
    this.setState({
      cantidad:
        this.state.cantidad > 1 ? this.state.cantidad - 1 : this.state.cantidad
    });
  }

  onSubmitCarrito(e) {
    e.preventDefault();
    this.props.createCarrito(this.props.match.params.id, {
      cantidad: this.state.cantidad,
      userId: this.props.usuario
    });

    this.setState({
      mensaje: CARRITO_ALERT,
      boolean: true
    });
  }

  onSubmitComprar(e) {
    e.preventDefault();
    this.props.createCompra(this.props.producto.id, {
      estado: "comprado",
      cantidad: this.state.cantidad
    });

    this.setState({
      mensaje: COMPRA_ALERT,
      boolean: true
    });
  }
  cambio() {
    this.setState({ boolean: false });
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    return this.state.boolean ? (
      <div>
        <Alert cambio={this.cambio} pedorro={this.state.mensaje} />

        <ViewSingle
          product={this.props.producto}
          onSubmitCarrito={this.onSubmitCarrito}
          addCantidad={this.addCantidad}
          removeCantidad={this.removeCantidad}
          cantidad={this.state.cantidad}
          onSubmitComprar={this.onSubmitComprar}
        />
      </div>
    ) : (
      <div>
        <ViewSingle
          product={this.props.producto}
          onSubmitCarrito={this.onSubmitCarrito}
          addCantidad={this.addCantidad}
          removeCantidad={this.removeCantidad}
          cantidad={this.state.cantidad}
          onSubmitComprar={this.onSubmitComprar}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    producto: state.productos.selectedProduct,
    usuario: state.login.userLogueado.id,
    comprado: state.compras.compraAgregada
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCarrito: (productID, body) =>
      dispatch(createCarrito(productID, body)),
    createCompra: (productID, body) => dispatch(createCompra(productID, body))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ViewSingleContainer);
