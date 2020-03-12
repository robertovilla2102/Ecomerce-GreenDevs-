import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//importando components
import ViewSingle from "../components/ViewSingle";
import Alert from "../components/Alert";

//importando action-creators
import { fetchProduct } from "../../redux/action-creators/productos";
import { createCarrito } from "../../redux/action-creators/carrito";
import { createCompra } from "../../redux/action-creators/compras";
import { fetchRatingById } from "../../redux/action-creators/ratings";
import { CARRITO_ALERT, COMPRA_ALERT } from "../../assets/mensajesAlert";

const ViewSingleContainer = ({
  createCarrito,
  fetchProduct,
  match,
  usuario,
  createCompra,
  fetchRatingById,
  producto
}) => {
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState({});
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    fetchProduct(match.params.id);
    fetchRatingById(match.params.id);
  }, []);

  const addCantidad = e => {
    e.preventDefault();
    producto.stock > cantidad
      ? setCantidad(value => value + 1)
      : setCantidad(value => value);
  };

  const removeCantidad = e => {
    e.preventDefault();
    cantidad > 1
      ? setCantidad(value => value - 1)
      : setCantidad(value => value);
  };

  const onSubmitCarrito = e => {
    e.preventDefault();
    createCarrito(match.params.id, {
      cantidad: cantidad,
      userId: usuario
    });
    setMensaje(CARRITO_ALERT);
    setBoolean(true);
  };

  const onSubmitComprar = e => {
    e.preventDefault();
    createCompra(producto.id, {
      estado: "comprado",
      cantidad: cantidad
    });
    setMensaje(COMPRA_ALERT);
    setBoolean(true);
  };
  const cambio = () => {
    setBoolean(false);
  };

  return (
    <div>
      {boolean ? <Alert cambio={cambio} pedorro={mensaje} /> : null}

      <ViewSingle
        product={producto}
        onSubmitCarrito={onSubmitCarrito}
        addCantidad={addCantidad}
        removeCantidad={removeCantidad}
        cantidad={cantidad}
        onSubmitComprar={onSubmitComprar}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    producto: state.productos.selectedProduct,
    usuario: state.login.userLogueado.id,
    comprado: state.compras.compraAgregada,
    rating: state.reviews.rating
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCarrito: (productID, body) =>
      dispatch(createCarrito(productID, body)),
    createCompra: (productID, body) => dispatch(createCompra(productID, body)),
    fetchRatingById: id => dispatch(fetchRatingById(id))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ViewSingleContainer);
