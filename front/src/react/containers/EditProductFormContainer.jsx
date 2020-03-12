import React, { useEffect } from 'react'

//importando action-creators
import { editProduct, fetchProduct } from "../../redux/action-creators/productos";
import { connect } from 'react-redux'

import FormEditProduct from '../components/FormEditProduct'

const EditProductContainer = ({
  editProduct,
  match,
  history,
  fetchProduct,
  producto
}) => {

  useEffect(() => {
    fetchProduct(match.params.id)
  }, [])

  const submitEdit = (e) => {
    e.preventDefault()
    console.log(match);

    const name = (e.target[0].value)
    const price = (e.target[1].value)
    const imgProfile = (e.target[2].value)
    const stock = (e.target[3].value)
    const description = (e.target[4].value)
    const categoryId = (e.target[5].value)

    editProduct(match.params.id, { name, price, imgProfile, stock, description, categoryId })
      .then(() => {
        history.push(`/admin/editProduct`)
      })
  }

  return (
    <FormEditProduct
      submitEdit={submitEdit}
      producto={producto}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    producto: state.productos.selectedProduct
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    editProduct: (id, body) => dispatch(editProduct(id, body))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(EditProductContainer)