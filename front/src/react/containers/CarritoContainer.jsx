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
import Loading from "../components/Loading";

const CarritoContaienr = ({
  deleteCart,
  fetchCarritos,
  createVariasCompras
}) => {
  const [listaCarrito, setListaCarrito] = useState([]);

  useEffect(() => {
    fetchCarritos().then(res => {
      setListaCarrito(res);
    });
  }, []);

  const handlerButtonDelete = id => {
    deleteCart(id);
  };

  const handleButtonComprar = e => {
    e.preventDefault();
    createVariasCompras();
  };

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
            {listaCarrito ? (
              <CarritoList
                handlerButtonDelete={handlerButtonDelete}
                listaCarrito={listaCarrito}
                handleButtonComprar={handleButtonComprar}
              />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.login.userLogueado.id
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchCarritos: () => dispatch(fetchCarritos()),
    deleteCart: id => dispatch(carritoDelete(id)),
    createVariasCompras: () => dispatch(createVariasCompras())
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CarritoContaienr);
