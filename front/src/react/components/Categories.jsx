import React from 'react'
import { Link } from 'react-router-dom'

export default ({ categorias, handlerSubmitDelete }) => (
  <div className="container">
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">ID</th>
          <th scope="col">Categoria</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>

      <tbody>
        {categorias.map((categoria, index) => {
          return (
            <tr className="text-center" key={index}>
              <td>
                <img className="profile-buy rounded-circle" src={categoria.imgCategory} style={{
                  width: '70px',
                  height: '70px'
                }} />
              </td>
              <td className="align-middle">{categoria.id}</td>
              <td className="align-middle">{categoria.name}</td>

              <td className="align-middle">
                <Link to={`/admin/editCategory/${categoria.id}`}>
                  <button
                    className="btn btn-warning"
                    type="submit"
                  >
                    Editar
                </button>
                </Link>
              </td>

              <td className="align-middle">
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={(id) => handlerSubmitDelete(id, categoria.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}

        <tr className="text-center">
          <td className="align-middle">
            <Link to='/admin/addCategory'>
              <button
                className="btn btn-danger"
              >
                Agregar Producto
                </button>
            </Link>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
)