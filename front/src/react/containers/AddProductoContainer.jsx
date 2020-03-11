import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addProducto } from '../../redux/action-creators/productos'

import AgregarProducto from '../components/AgregarProducto'

const AddProductoContainer = ({ addProducto }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [imgProfile, setImgProfile] = useState('')
  const [stock, setStock] = useState(0)
  const [description, setDescription] = useState('')
  const [categoryId, setcategoryId] = useState(0)

  const InputChangue = () => {
    switch (e.target.name) {
      case "name":
        {
          setName(e.target.value)
        }
        break

      case "price":
        {
          setPrice(e.target.value)
        }
        break

      case "imgProfile":
        {
          setImgProfile(e.target.value)
        }
        break

      case "stock":
        {
          setStock(e.target.value)
        }
        break

      case "description":
        {
          setDescription(e.target.value)
        }
        break

      case "categoryId":
        {
          setcategoryId(e.target.value)
        }
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = (e.target[0].value)
    const price = (e.target[1].value)
    const imgProfile = (e.target[2].value)
    const stock = (e.target[3].value)
    const description = (e.target[4].value)
    const categoryId = (e.target[5].value)

    addProducto({ name, price, imgProfile, stock, description, categoryId })
  }

  return (
    <AgregarProducto
      handleSubmit={handleSubmit}
      InputChangue={InputChangue}
    />
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProducto: (body) => dispatch(addProducto(body))
  }
};

export default connect(null, mapDispatchToProps)(AddProductoContainer)