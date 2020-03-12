import React from "react";
import { Link } from "react-router-dom";
import singleViewCard from "../css/singleViewCard.css";

export default ({ productList, onSubmitCarrito }) => (
  <div className="container">
    <div className="row page-wrapper">
      {productList.map((product, index) => (
        <div className="page-inner" key={index}>
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <Link
                  to={`/products/${product.id}`}
                  key={index}
                  className="col-xs-3"
                >
                  <img className="img" src={product.imgProfile} alt="" />
                </Link>
                <div className="img-info">
                  <div className="info-inner">
                    <p className="p-name">{product.name}</p>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <div className="btn-add-cart">
                  <button
                    type="submit"
                    className="cart btn"
                    style={{backgroundColor:"#3e808e"}}
                    onClick={e => onSubmitCarrito(e, product.id)}
                  >
                    <span className="price">${product.price}.00</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
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
