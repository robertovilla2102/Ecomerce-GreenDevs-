import React from "react";
import FilterStyles from '../css/FilterStyles.css'

export default ({ handleSubmit, InputChangue }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} >

        <div className="input-filter range-price ">

          <div>
            <label>Nombre de Producto</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={InputChangue}
            />
          </div>

          <div>
            <label>Precio</label>
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={InputChangue}

            />
          </div>

          <div>
            <label>URL de imagen</label>
            <input
              type="text"
              name="imgProfile"
              placeholder="url de imagen"
              onChange={InputChangue}

            />
          </div>

          <div>
            <label>Stock</label>
            <input
              type="text"
              name="stock"
              placeholder="stock"
              onChange={InputChangue}

            />
          </div>

          <div>
            <label>Descripcion</label>
            <input
              type="text"
              name="description"
              placeholder="descrition"
              onChange={InputChangue}
            />
          </div>

          <div>
            <label>Categoria</label>

            <select
              className="custom-select"
              onBlur={InputChangue}
              name="categoryId"
            >
              <option value="">Categoria</option>
              <option value="1">Cactus</option>
              <option value="2">Suculentas</option>
              <option value="3">Bonsais</option>
            </select>
          </div>

          <button
            value
            className='btn btn-success'
            type='submit'
          >
            Agregar Producto
      </button>
        </div >
      </form>
    </div>

  );
};