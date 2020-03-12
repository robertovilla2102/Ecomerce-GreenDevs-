import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCompras } from "../../redux/action-creators/compras";
import CompraView from "../components/CompraView";

const CompraContainer = ({ fetchCompras, compras }) => {
  useEffect(() => {
    fetchCompras();
  }, []);
  return <CompraView compras={compras} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    compras: state.compras.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCompras: () => dispatch(fetchCompras())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompraContainer);
