import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCompras, createCompra } from '../../redux/action-creators/compras'
import CompraView from '../components/CompraView'

const CompraContainer = ({ fetchCompras, compras, compraAgregada }) => {

  useEffect(() => {
    fetchCompras()
  }, [])

  return (
    <CompraView
      compras={compras}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    compras: state.compras.list,
    compraAgregada: state.compras.compraAgregada,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCompras: () => dispatch(fetchCompras()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompraContainer)