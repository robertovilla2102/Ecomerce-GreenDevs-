import React from 'react'
import Alert from "react-bootstrap/Alert"
import "../css/estilosPerfil.css"

export default ({ compras }) => (
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
          </tr>
        </thead>
        <tbody>

          {compras.map(compra => (
            <tr className="text-center">
              <td>
                <img className="profile-buy rounded-circle" src={compra.producto.imgProfile} alt="" style={{
                  width: '70px',
                  height: '70px'
                }} />
              </td>
              <td className="align-middle">{compra.id}</td>

              <td className="align-middle">{compra.cantidad}</td>

              <td className="align-middle">{compra.cantidad * compra.producto.price}</td>

              <td className="align-middle">{compra.compra.salt}</td>

              <td className="align-middle">{compra.createdAt}</td>


            </tr>
          ))}

        </tbody>
      </table>
    ) : (
        <div className="col-md-6 mx-auto mt-5">
          <Alert variant="info">
            <Alert.Heading>Your Shopping history is empty!</Alert.Heading>
            <p>Visit our catalog to add products to your cart and buy!</p>
          </Alert>
        </div>
      )}
  </div>
)

