import React from 'react'
import { Link } from 'react-router-dom'

//importando css
import { styleDivProduct, styleH, styleP, styleImg } from '../css/estilosComunes'

export default ({ productList }) => (
  <div style={{ marginTop: "10px" }}>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Nuestras Plantas</h1>
        <p className="lead">Conocé la selección de plantas que tenemos para vos. </p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        {productList.map((product, index) => (
          <div className="img-thumbnail" style={styleDivProduct} key={index}>
            <Link to={`/products/${product.id}`} key={index} className='col-xs-3'>
              <img
                src={product.imgProfile}
                alt='img-planta'
                style={styleImg}
              />
            </Link>
            <div>
              <h4 style={styleH}>{product.name}</h4>
              <p style={styleP}>${product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
)
