import React from "react";
import {Link} from "react-router-dom";


export default ()=>{
  return(
    <div id="carouselExampleIndicators" className="carousel slide carousel-fluid" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/imagenes/Header/1.png" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/2.png" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/3.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/4.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/5.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/6.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/7.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/8.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/9.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/imagenes/Header/11.png" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
