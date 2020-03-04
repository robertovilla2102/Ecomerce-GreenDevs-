import React from 'react'
import { Link } from 'react-router-dom'

//importando css
import { styleDivProduct, styleH, styleP, styleImg } from '../css/estilosComunes'

export default ({ productList }) => (
  <div className='container'>
    <h3>Lista de Plantas</h3>
    <hr />

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
)