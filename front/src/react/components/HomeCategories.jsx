import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//importando css
import { styleImgCategory, styleDivCAtegory, styleH } from '../css/estilosComunes'

export default () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center" >
          <div
            className="img-thumbnail"
            style={styleDivCAtegory}>
            <div style={{ marginTop: '10px' }}>
              <h4 style={styleH}>CACTUS</h4>
              <h5 style={styleH}>Shop Collection</h5>
            </div>
            <Link to='/categories/cactus' className="col-xs-4">
              <img
                src="https://i.pinimg.com/originals/7a/64/7e/7a647ecce8c8cb26665598f40b2e0716.jpg"
                alt="img-cactus"
                style={styleImgCategory}
              />
            </Link>
          </div>

          <div
            className="img-thumbnail"
            style={styleDivCAtegory}>
            <div style={{ marginTop: '10px' }}>
              <h4 style={styleH}>BONSAIS</h4>
              <h5 style={styleH}>Shop Collection</h5>
            </div>
            <Link to='/categories/bonsais' className="col-xs-4">
              <img
                src="https://lh3.googleusercontent.com/proxy/RwFLKy3iMmp4DGNjHHu0-_HUHkcdT1jCqf8J4dCIo_B0IDcCLBiBCKvFWU0Nqs8euPpZwsVaPQC07m59OXWJgKJPVCwEa4x3b71bowZpqzmT5IzYmbYfHuW-LxcjNkhRMIG2gtgYa0RFINhkK5t4XoWXwWh6"
                style={styleImgCategory}
              />
            </Link>
          </div>

          <div
            className="img-thumbnail"
            style={styleDivCAtegory}>
            <div style={{ marginTop: '10px' }}>
              <h4 style={styleH}>SUCULENTAS</h4>
              <h5 style={styleH}>Shop Collection</h5>
            </div>
            <Link to='/categories/suculentas' className="col-xs-4">
              <img
                src="https://i.pinimg.com/originals/a2/8a/f5/a28af5aa1d852a6582d25a5cd4bab409.jpg"
                alt="img-cactus"
                style={styleImgCategory}
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}