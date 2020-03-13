import React from "react";
import { Link } from "react-router-dom";

export default ({ categorias, handlerSubmitDelete }) => (
  <div className="container">
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col" style={{ width: "15%" }}></th>
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
                <img
                  className="profile-buy rounded-circle"
                  src={"/imagenes/Categoria/cat2.png"}
                  style={{
                    width: "100px",
                    height: "auto"
                  }}
                />
              </td>
              <td className="align-middle">{categoria.id}</td>
              <td className="align-middle">{categoria.name}</td>

              <td className="align-middle">
                <Link to={`/admin/editCategory/${categoria.id}`}>
                  <button
                    style={{
                      backgroundColor: "#3e808e",
                      borderColor: "#3e808e",
                      color: "#fff"
                    }}
                    className="btn"
                    type="submit"
                  >
                    Editar
                  </button>
                </Link>
              </td>

              <td className="align-middle">
                <button
                  style={{
                    color: "#fff",
                    backgroundColor: "#f17d30",
                    borderColor: "#f17d30"
                  }}
                  className="btn"
                  type="submit"
                  onClick={id => handlerSubmitDelete(id, categoria.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="container">
      <div className="row d-flex justify-content-end">
        <div className="col-md-3 align-middle">
          <Link style={{ textDecoration: "none" }} to="/admin/addCategory">
            <button
              style={{
                backgroundColor: "#1c4c50",
                borderColor: "#1c4c50",
                color: "#fff"
              }}
              className="btn "
            >
              Agregar categorias
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
