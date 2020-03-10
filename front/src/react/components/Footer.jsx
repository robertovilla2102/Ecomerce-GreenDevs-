import React from "react";
import { Link } from "react-router-dom";
import "../css/estilosFooter.css"
import { styleH } from '../css/estilosComunes'

export default () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left ">
          <div className="col-xs-12 col-sm-4 col-md-4 ">
            <h5 style={styleH}>Nuestras Secciones</h5>
            <ul className="list-unstyled quick-links d-flex justify-content-center flex-column" style={{ alignItems: 'center' }}>
              <li><a href="javascript:void();"><i></i>Home</a></li>
              <li><a href="javascript:void();"><i></i>Productos</a></li>
              <li><a href="javascript:void();"><i></i>About Us</a></li>
              <li><a href="javascript:void();"><i></i>Sign In</a></li>
              <li><a href="javascript:void();"><i></i>Registrate</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5 style={styleH}>Sucursales</h5>
            <ul className="list-unstyled quick-links d-flex justify-content-center flex-column" style={{ alignItems: 'center' }}>
              <li><a href="javascript:void();"><i></i>Merlo 3355</a></li>
              <li><a href="javascript:void();"><i></i>Flores 5673</a></li>
              <li><a href="javascript:void();"><i></i>Recoleta 3452</a></li>
              <li><a href="javascript:void();"><i></i>Canning 9209</a></li>
              <li><a href="javascript:void();"><i></i>Palermo 8990</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5 style={styleH}>Horarios</h5>
            <ul className="list-unstyled quick-links d-flex justify-content-center flex-column" style={{ alignItems: 'center' }}>
              <li><a href="javascript:void();"><i></i>Lunes 9 a 19</a></li>
              <li><a href="javascript:void();"><i></i>Martes 9 a 19</a></li>
              <li><a href="javascript:void();"><i></i>Miercoles 10 a 19</a></li>
              <li><a href="javascript:void();"><i></i>Jueves 9 a 20</a></li>
              <li><a href="javascript:void();"><i></i>Viernes 9 a 21</a></li>

            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-google-plus"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="#">BotánicaBinaria</a></u> is a Registered Brand of GrenDevs</p>
            <p className="h6">All right Reversed <a className="text-green ml-2" href="https://www.plataforma5.la" target="_blank">Plataforma5</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
