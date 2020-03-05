import React from "react";
import { Link } from "react-router-dom";

export default ({ product }) => (
  <div
    className="card mb-12"
    style={{
      marginBottom: "30px",
      marginLeft: "5px",
      marginTop: "30px"
    }}
  >
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={product.imgProfile} className="card-img" />
      </div>
      <div className="col-md-6">
        <div style={{ marginTop: "30px" }} className="card-body">
          <h1 style={{ fontFamily: "georgia" }} className="card-title">
            {product.name}
          </h1>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <small className="text-muted">
              Disponibilidad:
              {product.disponibilidad ? "Hay stock" : "No hay stock"}
            </small>
          </p>
          <h5>Precio: {product.price}</h5>
        </div>
        <Link to={`/comprar/${product.id}`}>
          <button
            style={{ marginLeft: "20px" }}
            type="button"
            class="btn btn-success"
          >
            Comprar
          </button>
        </Link>
        <Link to={`/carrito/${product.id}`}>
          <button
            style={{
              marginLeft: "40px"
            }}
            type="button"
            class="btn btn-outline-success"
          >
            Agregar a carrito
          </button>
        </Link>
      </div>
    </div>
  </div>
);
