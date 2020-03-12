import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCategories } from '../../redux/action-creators/categories'

import AddCategories from '../components/AddCategories'

const AddCategoriesContainer = ({
  addCategories,
  history
}) => {

  const createCategory = (e) => {
    e.preventDefault()
    const name = (e.target[0].value)
    const imgCategory = (e.target[1].value)

    addCategories({ name, imgCategory })
      .then(algo => {
        history.push('/admin/listCategories')
      })
  }

  return (
    <AddCategories
      createCategory={createCategory}
    />
  )
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    addCategories: (body) => dispatch(addCategories(body))
  };
}

export default connect(null, mapDispathToProps)(AddCategoriesContainer)