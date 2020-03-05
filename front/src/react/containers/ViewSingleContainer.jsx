import React from "react";
import { connect } from "react-redux";

//importando components
import ViewSingle from "../components/ViewSingle";

//importando action-creators
import { fetchProduct } from "../../redux/action-creators/productos";

class ViewSingleContainer extends React.Component {
  componentDidMount() {
    console.log("entre");
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    console.log("kjasdkasjdkasjdlk" + this.props.producto);
    return (
      <div>
        <ViewSingle product={this.props.producto} />{" "}
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
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ViewSingleContainer);
