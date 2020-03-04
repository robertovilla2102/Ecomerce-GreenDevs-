import React from "react";
import {Link} from "react-router-dom";


export default ()=>{
  return(
  <div className="btn-group">
    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sign in
    </button>
    <div className="dropdown-menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <label for="exampleDropdownFormEmail1">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleDropdownFormPassword1">Contraseña</label>
          <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      <div className="dropdown-divider"></div>
      <Link to='/register' className="dropdown-item" href="#">Nuevo? Registrate</Link>
    </div>
  </div>
  )
}
