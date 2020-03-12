import React from 'react'
import FilterStyles from '../css/FilterStyles.css'

export default ({ createCategory }) => (
  <div className="container">
    <form onSubmit={createCategory} >
      <div className="input-filter range-price ">
        <div>
          <label>Nombre de Categoria</label>
          <input
            type="text"
            name="name"
            placeholder="name"
          />
        </div>

        <div>
          <label>Img URL</label>
          <input
            type="text"
            name="imgCategory"
            placeholder="url de imagen"
          />
        </div>

        <button
          value
          className='btn btn-success'
          type='submit'
        >
          Agregar Categoria
      </button>

      </div >
    </form>
  </div>
)