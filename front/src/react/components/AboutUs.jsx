import React from 'react'
import { Link } from 'react-router-dom'

//importando css
import { styleDivProduct, styleH, styleP, styleImg } from '../css/estilosComunes'

export default () => (
  <div>

    <div
      style={{ marginTop: "10px" }}
      className='container'
    >
      <h3 style={styleH}>About Us</h3>
      <p style={{
        textAlign: "center",
        marginTop: '2px',
        padding: '0 80px'
      }}
      >Cuando elegís tener una planta, estas eligiendo dar de tu tiempo y de tu espacio, sabemos lo que eso vale, por eso en Vivero Mario generamos un lugar donde vas a encontrar la mejor calidad en plantas, el mejor surtido de macetas, y todo lo necesario para poder cuidarlas de la manera que merecen. Si elegís plantas elegís Vida.</p>

      <p style={{
        textAlign: "center",
        marginTop: '2px',
        padding: '0 80px'
      }}>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
    </div>

    <img src="https://www.viveromario.com.ar/portal/images/tira-fotos-home1.jpg" alt="pepe" className='img-fluid' />
  </div>
)
