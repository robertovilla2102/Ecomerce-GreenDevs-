import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories'
import { connect } from 'react-redux'

//importandoaction-reducer
import { fetchCategories, deleteCategories } from '../../redux/action-creators/categories'

const CategoriesAdminContainer = ({ fetchCategories, categorias, deleteCategories }) => {
  useEffect(() => {
    fetchCategories()
  }, [])

  const handlerSubmitDelete = (e, id) => {
    e.preventDefault()

    deleteCategories(id)
      .then(data => {
        console.log('todo okk')
      })
  }

  return (
    <Categories
      categorias={categorias}
      handlerSubmitDelete={handlerSubmitDelete}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    categorias: state.categories.list
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    deleteCategories: id => dispatch(deleteCategories(id)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CategoriesAdminContainer)
