import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCompras, createCompra } from '../../redux/action-creators/compras'

import ViewSingle from '../components/ViewSingle'

const CompraContainer = ({ fetchCompras }) => {

  useEffect(() => {
    fetchCompras()
  }, [])

  return (
    <p>Hola pepe</p>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    compras: state.compras.list,
    compraAgregada: state.compra.compraAgregada,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCompras: () => dispatch(fetchCompras()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompraContainer)