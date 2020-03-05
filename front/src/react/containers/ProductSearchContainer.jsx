import React from "react";
import { connect } from "react-redux";
//importando components
import Products from "../components/Products";

//importando action-creators

class ProductSearchContainer extends React.Component {
  render() {
    console.log("Lo que recibi", this.props);
    return <Products productList={this.props.productos} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productos: state.productos.productsSearch
  };
};

export default connect(mapStateToProps, null)(ProductSearchContainer);
