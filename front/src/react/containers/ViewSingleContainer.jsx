import React from "react";
import { connect } from "react-redux";

//importando components
import ViewSingle from "../components/ViewSingle";

//importando action-creators
import { fetchProduct } from "../../redux/action-creators/productos";
import { createCarrito } from '../../redux/action-creators/carrito'

class ViewSingleContainer extends React.Component {
  constructor() {
    super()
    this.onSubmitCarrito = this.onSubmitCarrito.bind(this)
  }

  onSubmitCarrito(e) {
    e.preventDefault()
    this.props.createCarrito(this.props.match.params.id)
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <ViewSingle
          product={this.props.producto}
          onSubmitCarrito={this.onSubmitCarrito}
        />
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    producto: state.productos.selectedProduct
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCarrito: productID => dispatch(createCarrito(productID))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ViewSingleContainer);
