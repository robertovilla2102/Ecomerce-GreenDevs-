import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//importando components
import EditProduct from "../components/EditProduct";

//importando action-creators
import { deletProduct, fetchProducts } from "../../redux/action-creators/productos";

const EditProductContainer = ({
  fetchProducts,
  deletProduct,
  lista
}) => {

  useEffect(() => {
    fetchProducts()
  }, [])

  const submitDelete = (e, id) => {
    e.preventDefault()
    deletProduct(id)
      .then(() => {
        console.log('se elimino con exito')
      })
  }

  return (
    <EditProduct
      productList={lista}
      submitDelete={submitDelete}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lista: state.productos.list,
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deletProduct: id => dispatch(deletProduct(id))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(EditProductContainer)

