import React from "react";
import { Link } from "react-router-dom";

export default ({ product, onSubmitCarrito, cantidad, removeCantidad, addCantidad, onSubmitComprar }) => (
  <div className="container">

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

          <button
            style={{ marginLeft: "20px" }}
            className="btn btn-success"
            type='submit'
            onClick={onSubmitComprar}
          >
            Comprar
          </button>

          <button
            style={{
              marginLeft: "10px"
            }}
            type="submit"
            className="btn btn-outline-success"
            onClick={onSubmitCarrito}
          >
            Agregar a carrito
          </button>

          <div className='d-flex' style={{ marginTop: '10px', marginLeft: '21px' }}>
            <button onClick={removeCantidad} className="btn btn-secondary">-1</button>
            <input type="text" name="input" value={cantidad} style={{ width: '50px', margin: '3px', textAlign: "center" }} className="form-control" />
            <button onClick={addCantidad} className="btn btn-secondary">+1</button>
          </div>

        </div>
      </div>
    </div>
  </div>
);
