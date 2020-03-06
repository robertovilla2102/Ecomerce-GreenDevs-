import React from 'react'
import { Link } from 'react-router-dom'

//importando css
import { styleDivProduct, styleH, styleP, styleImg } from '../css/estilosComunes'

export default () => (
  <div  style={{marginTop: "0"}} id="carouselExampleIndicators" className="carousel slide carousel-fluid" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="/imagenes/AboutUs/4.png" alt="First slide" />
      </div>
    </div>
  </div>
)
