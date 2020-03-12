import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosPerfil.css";
import ErrorDetected from "./ErrorDetected";
import { COMPRAS_VACIAS } from "../../assets/ErrorsMsg";

export default ({ compras }) => {
  return (
    <div className="container">
      {compras.length > 0 ? (
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID Compra</th>
              <th scope="col">Cantidad Productos</th>
              <th scope="col">Total</th>
              <th scope="col">Codigo Compra</th>
              <th scope="col">Fecha Compra</th>
              <th scope="col">Review</th>
            </tr>
          </thead>
          <tbody>
            {compras.map(compra => (
              <tr key={compra.id} className="text-center">
                <td>
                  <img
                    className="profile-buy rounded-circle"
                    src={compra.producto.imgProfile}
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px"
                    }}
                  />
                </td>
                <td className="align-middle">{compra.id}</td>

                <td className="align-middle">{compra.cantidad}</td>

                <td className="align-middle">
                  {compra.cantidad * compra.producto.price}
                </td>

                <td className="align-middle">{compra.compra.salt}</td>

                <td className="align-middle">{compra.createdAt}</td>

                <td className="align-middle">
                  {compra.valorado ? (
                    "Already rated"
                  ) : (
                    <Link
                      to={`/miPerfil/compras/${compra.id}/valorar/${compra.producto.id}`}
                    >
                      Valorar
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorDetected msg={COMPRAS_VACIAS} />
      )}
    </div>
  );
};
