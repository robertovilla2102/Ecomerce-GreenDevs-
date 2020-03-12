import React from "react";

import { imgSingleView } from "../css/estilosComunes";

export default ({ product }) => {
  return (
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
          </div>
        </section>
      </div>
    </div>
  );
};
