import React from "react";
import { Link } from "react-router-dom";
import { imgSingleView } from "../css/estilosComunes";
import singleViewCard from "../css/singleViewCard.css";
import RatingGeneral from "./RatingGeneral";

export default ({
  product,
  onSubmitCarrito,
  cantidad,
  removeCantidad,
  addCantidad,
  onSubmitComprar
}) => (
  <div className="container">
    <div className="row mx-auto">
      <section class="product">
        <div class="product__photo">
          <div class="photo-container">
            <div class="photo-main">
              <img style={imgSingleView} src={product.imgProfile} alt="" />
            </div>
          </div>
        </div>

        <div class="product__info">
          <RatingGeneral size={40} ratingValue={product.valoracionGeneral} />
          <div class="title">
            <h1>{product.name}</h1>
            <span>COD: {product.id}</span>
          </div>
          <div class="price_single_card">
            <p>US$</p>
            <span>{product.price}</span>
          </div>
          <div class="description">
            <p>{product.description}</p>
          </div>
          <p className="align-middle">Stock: {product.stock}</p>
          <div className="botones d-flex">
            <div
              className="d-flex"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <button onClick={removeCantidad} className="btn btn-secondary">
                -
              </button>
              <input
                type="text"
                name="input"
                value={cantidad}
                style={{ width: "50px", margin: "3px", textAlign: "center" }}
                className="form-control btn"
              />
              <button onClick={addCantidad} className="btn btn-secondary">
                +
              </button>
            </div>
            <button
              style={{
                marginLeft: "10px"
              }}
              type="submit"
              class="add--btn"
              onClick={onSubmitCarrito}
            >
              ADD TO CART
            </button>
            <button
              style={{
                marginLeft: "10px"
              }}
              class="add--btn"
              type="submit"
              onClick={onSubmitComprar}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
);
