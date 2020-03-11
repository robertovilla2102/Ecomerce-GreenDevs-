import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchCarritos,
  carritoDelete
} from "../../redux/action-creators/carrito";
import "../css/estilosPerfil.css";
import { createVariasCompras } from "../../redux/action-creators/compras";

import CarritoList from "../components/CarritoList";
import Footer from "../components/Footer";


const CarritoContaienr = ({ deleteCart, fetchCarritos, listaCarrito, createVariasCompras }) => {
  const [esVisible, setEsVisible] = useState(false)

  useEffect(() => {
    fetchCarritos();
  }, [])

  const handlerButtonDelete = id => {
    deleteCart(id);
  };

  const handleButtonComprar = e => {
    e.preventDefault();
    createVariasCompras().then(algo => console.log("todo bien"));
  };

  const mostrarDetalle = (e) => {
    e.preventDefault()
    setEsVisible(!esVisible)
  }

  return (
    <div>
      <div className="container-fluid mt-3 mb-3">
        <div className="card profile-card-2">
          <div className="card-img-block">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="Card image cap"
            />
          </div>
          <div className="card-body2">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/shopping-circle-blue-512.png"
              alt="shop-image"
              className="profile"
            />
            <CarritoList
              handlerButtonDelete={handlerButtonDelete}
              listaCarrito={listaCarrito}
              handleButtonComprar={handleButtonComprar}
              mostrarDetalle={mostrarDetalle}
              esVisible={esVisible}
            />

          </div>
        </div>
      </div>
      <Footer />
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
    deleteCart: id => dispatch(carritoDelete(id)),
    createVariasCompras: () => dispatch(createVariasCompras())
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr);
