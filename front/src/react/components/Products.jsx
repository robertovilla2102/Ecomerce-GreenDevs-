import React from 'react'
import { Link } from 'react-router-dom'

//cssde imagenes
const styleImg = {
  width: "220px",
  height: '320px',
  margin: '10px'
}

const styleH6 = {
  textAlign: "center",
  marginBottom: '0'
}

const styleP = {
  textAlign: "center",
  marginTop: '2px'
}

export default ({ products }) => (
  <div className='container'>
    <h3>Lista de Plantas</h3>
    <hr />

    <div className="row">
      {products.map((product, index) => {
        <div className="img-thumbnail">
          <Link to={`/products/${id}`} key={index} className='col-xs-3'>
            <img
              src={product.imgProfile}
              alt='img-planta'
              style={styleImg}
            />
          </Link>
          <div>
            <h6 style={styleH6}>{product.name}</h6>
            <p style={styleP}>{product.price}</p>
            <p style={styleP}>{product.description}</p>
          </div>
        </div>
      })}
    </div>

  </div>
)