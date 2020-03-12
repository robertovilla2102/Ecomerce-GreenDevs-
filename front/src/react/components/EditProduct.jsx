import React from 'react'
import { Link } from 'react-router-dom'

import FormEditProduct from './FormEditProduct'

export default ({ productList, submitDelete }) => (
  <div className="container">
    <table class="table text-center">

      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">ID</th>
          <th scope="col">Producto</th>
          <th scope="col">pecio</th>
          <th scope="col">Stock</th>
        </tr>

      </thead>
      <tbody>
        {productList.map((producto, i) => (
          <tr className="text-center" key={i}>
            <td>
              <img className="profile-buy rounded-circle" src={producto.imgProfile} style={{
                width: '70px',
                height: '70px'
              }} />
            </td>
            <td className="align-middle">{producto.id}</td>
            <td className="align-middle">{producto.name}</td>
            <td className="align-middle">{producto.price}</td>
            <td className="align-middle">{producto.stock}</td>

            <td className="align-middle">
              <Link to={`/posta/${producto.id}`} key={i}>
                <p>editar</p>
              </Link>
            </td>

            <td className="align-middle">
              <button
                className="btn btn-danger"
                type="submit"
                onClick={(e) => submitDelete(e, producto.id)}
              >
                Eliminar
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  </div >
)