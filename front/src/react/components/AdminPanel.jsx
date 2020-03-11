import React from 'react'
import { Link } from 'react-router-dom'

export default ({ }) => (
  <div className="container">
    <Link to='/admin/addProduct' >
      <h4>Agregar un productos</h4>
    </Link>

    <Link to={'/admin/editProduct'}>
      <h4>Lista Productos</h4>
    </Link>

    <Link to='/userList'>
      <h4>Ver todos los usuarios</h4>
    </Link>

    <Link to='/admin/listCategories'>
      <h4>Ver todas las categorias</h4>
    </Link>

    <h4>Ver categorias</h4>

  </div>
)