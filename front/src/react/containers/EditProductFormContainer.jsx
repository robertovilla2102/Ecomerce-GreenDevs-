import React from 'react'

//importando action-creators
import { editProduct } from "../../redux/action-creators/productos";
import { connect } from 'react-redux'

import FormEditProduct from '../components/FormEditProduct'

const EditProductContainer = ({
  editProduct,
  match,
  history
}) => {

  const submitEdit = (e) => {
    e.preventDefault()
    console.log(match);

    const name = (e.target[0].value)
    const price = (e.target[1].value)
    const imgProfile = (e.target[2].value)
    const stock = (e.target[3].value)
    const description = (e.target[4].value)
    const categoryId = (e.target[5].value)

    const id = match.params.id

    editProduct(match.params.id, { name, price, imgProfile, stock, description, categoryId })
      .then(() => {
        history.push(`/admin/editProduct`)
      })
  }

  return (
    <FormEditProduct
      submitEdit={submitEdit}
    />
  )
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    editProduct: (id, body) => dispatch(editProduct(id, body))
  };
};

export default connect(null, mapDispathToProps)(EditProductContainer)