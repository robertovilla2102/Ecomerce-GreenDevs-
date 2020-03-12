import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCompras,
  createCompra
} from "../../redux/action-creators/compras";
import CompraView from "../components/CompraView";
import Alert from "../components/Alert";
import { NO_HAY_COMPRAS } from "../../assets/mensajesAlert";
const CompraContainer = ({ fetchCompras, compras, compraAgregada }) => {
  const [boolean, setBoolean] = useState(false);
  useEffect(() => {
    fetchCompras();
  }, []);

  const cambio = () => {
    setBoolean(true);
  };

  return compras.length > 0 ? (
    <CompraView compras={compras} />
  ) : (
    <Alert pedorro={NO_HAY_COMPRAS} cambio={cambio} />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    compras: state.compras.list,
    compraAgregada: state.compras.compraAgregada
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCompras: () => dispatch(fetchCompras())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompraContainer);
