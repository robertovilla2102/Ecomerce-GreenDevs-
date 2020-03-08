import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCarritos,
  carritoDelete
} from "../../redux/action-creators/carrito";

import CarritoList from "../components/CarritoList";

const CarritoContaienr = ({ deleteCart, fetchCarritos, listaCarrito }) => {
  useEffect(() => {
    fetchCarritos();
  }, []);

  const handlerButtonDelete = id => {
    deleteCart(id);
  };

  return (
    <div className="container">
      <CarritoList
        handlerButtonDelete={handlerButtonDelete}
        listaCarrito={listaCarrito}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    listaCarrito: state.carrito.listaCarrito,
    user: state.login.userLogueado.id
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchCarritos: id => dispatch(fetchCarritos(id)),
    deleteCart: id => dispatch(carritoDelete(id))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr);
