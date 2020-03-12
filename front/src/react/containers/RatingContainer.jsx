import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RatingsForm from "../components/RatingsForm";
import ProducSingleViewReview from "../components/ProductSingleViewReview";

import { addNewReview } from "../../redux/action-creators/ratings";
import { fetchProduct } from "../../redux/action-creators/productos";
import { fetchCompra } from "../../redux/action-creators/compras";

const RatingContainer = ({
  history,
  addNewReview,
  fetchProduct,
  match,
  product,
  fetchCompra,
  carrito
}) => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(null);

  useEffect(() => {
    fetchProduct(match.params.productoId);
    fetchCompra(match.params.compraId);
  }, []);
  const handlerTextArea = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const onSubmitReview = e => {
    e.preventDefault();
    let review = { rating: rating, review: comment, productoId: product.id };
    let carritoId = carrito.id;
    addNewReview(review, carritoId).then(res => history.push("/home"));
  };

  return (
    <div>
      <ProducSingleViewReview product={product} />
      <RatingsForm
        compra={carrito}
        handlerTextArea={handlerTextArea}
        onSubmitReview={onSubmitReview}
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.productos.selectedProduct,
    carrito: state.compras.compraSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewReview: (review, compraId) =>
      dispatch(addNewReview(review, compraId)),
    fetchProduct: id => dispatch(fetchProduct(id)),
    fetchCompra: id => dispatch(fetchCompra(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RatingContainer)
);
