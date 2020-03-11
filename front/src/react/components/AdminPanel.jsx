import React from 'react'
import { Link } from 'react-router-dom'

export default ({ }) => (
  <div className="container">
    <Link to='/admin/addProduct' >
      <h4>Agregarnproductos</h4>
    </Link>

    <Link to={'/admin/editProduct'}>
      <h4>Editar Productos</h4>
    </Link>

    <h4>Eliminar productos</h4>
    <h4>Eliminar productos</h4>

    <Link to='/userList'>
      <h4>Ver todos los usuarios</h4>
    </Link>

    <h4>Ver categorias</h4>

  </div>
)