import React from "react";
import { Link } from "react-router-dom";
import singleViewCard from "../css/singleViewCard.css";

export default ({ productList, onSubmitCarrito, productsLength }) => (
  <div className="container">
    <div className="row page-wrapper">
      {productList.map((product, index) => (
        <div class="page-inner">
          <div class="row">
            <div class="el-wrapper">
              <div class="box-up">
                <Link
                  to={`/products/${product.id}`}
                  key={index}
                  className="col-xs-3"
                >
                  <img class="img" src={product.imgProfile} alt="" />
                </Link>
                <div class="img-info">
                  <div class="info-inner">
                    <p class="p-name">{product.name}</p>
                  </div>
                </div>
              </div>

              <div class="box-down">
                <div class="h-bg">
                  <div class="h-bg-inner"></div>
                </div>

                <div className="btn-add-cart">
                  <button
                    type="submit"
                    className="cart btn"
                    onClick={e => onSubmitCarrito(e, product.id)}
                  >
                    <span class="price">${product.price}.00</span>
                    <span class="add-to-cart">
                      <span class="txt">Add in cart</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
