import React, { useEffect } from "react";
import { connect } from "react-redux";

//importando components
import Products from "../components/Products";

//importando action-creators
import { fetchProducts } from "../../redux/action-creators/productos";
import { createCarrito } from "../../redux/action-creators/carrito";

const ProductContainer = ({ fetchProducts, lista, usuario, createCarrito }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const onSubmitCarrito = (e, id) => {
    e.preventDefault();
    createCarrito(id, {
      cantidad: 1,
      user: usuario
    });
  };

  return <Products onSubmitCarrito={onSubmitCarrito} productList={lista} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    lista: state.productos.list,
    usuario: state.login.userLogueado.id
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    createCarrito: (productID, body) => dispatch(createCarrito(productID, body))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductContainer);
