import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//importando css
import { styleImgCategory, styleDivCAtegory, styleH } from '../css/estilosComunes'

export default () => {
  return (
    <div style={{marginBottom: "0"}}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center" >
            <div
              className="img-thumbnail"
              style={styleDivCAtegory}>
              <Link to='/categories/cactus' className="col-xs-4">
                <img
                  src="/imagenes/Categoria/5.png"
                  alt="img-cactus"
                  style={styleImgCategory}
                />
              </Link>
            </div>

            <div
              className="img-thumbnail"
              style={styleDivCAtegory}>
              <Link to='/categories/bonsais' className="col-xs-4">
                <img
                  src="/imagenes/Categoria/7.png"
                  style={styleImgCategory}
                />
              </Link>
            </div>

            <div
              className="img-thumbnail"
              style={styleDivCAtegory}>
              <Link to='/categories/suculentas' className="col-xs-4">
                <img
                  src="/imagenes/Categoria/2.png"
                  alt="img-cactus"
                  style={styleImgCategory}
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
