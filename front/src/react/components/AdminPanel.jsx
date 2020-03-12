import React from "react"
import {Link} from "react-router-dom"

export default ({})=>(
  <div className="container mt-5">
  		<div className="row mb-5">
  			<div className="col-md-4">
  				<div className="card">
  					<img src="imagenes/Admin/5.png" className="card-img-top" alt="..."/>
  					<div className="card-body">
  						<h5 className="card-title">Productos</h5>
  						<p className="card-text">Sección destinada a la administración de productos. Conocé el stock disponible, creá nuevos productos y editá los existentes.  </p>
  						<Link to='/admin/addProduct'>
                <button className="btn btn-info btn-block mb-2" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Editar y Crear</button>
              </Link>
              <Link to='/admin/editProduct'>
                <button className="btn btn-info btn-block" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Ver y Buscar</button>
              </Link>
  					</div>
  				</div>
  			</div>
  			<div className="col-md-4">
  				<div className="card">
  					<img src="imagenes/Admin/4.png" className="card-img-top" alt="..."/>
  					<div className="card-body">
  						<h5 className="card-title">Categorías</h5>
  						<p className="card-text">Sección destinada a la administración de categorías. Conocé todas las variedades, modificalas y agregá nuevas. </p>
              <Link to='/admin/listCategories'>
                <button className="btn btn-info btn-block mb-2" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Editar y Crear</button>
              </Link>
              <Link to='/admin/listCategories'>
                <button className="btn btn-info btn-block" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Ver y Buscar</button>
              </Link>
  					</div>
  				</div>
  			</div>
  			<div className="col-md-4">
  				<div className="card">
  					<img src="imagenes/Admin/6.png" className="card-img-top" alt="..."/>
  					<div className="card-body">
  						<h5 className="card-title">Usuarios</h5>
  						<p className="card-text">Sección destinada a la administración de usuarios. Conocé a todos tus clientes, pasalos a administrador o eliminalos.</p>
              <Link to='/admin/userList'>
                <button className="btn btn-info btn-block mb-2" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Editar y Crear</button>
              </Link>
              <Link to='/admin/userList'>
                <button className="btn btn-info btn-block" style={{backgroundColor:"#3e808e", borderColor: "#3e808e"}}>Ver y Buscar</button>
              </Link>
  					</div>
  				</div>
  			</div>
  		</div>
    </div>
)
