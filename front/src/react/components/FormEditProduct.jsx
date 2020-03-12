import React from "react";
import FilterStyles from '../css/FilterStyles.css'

export default ({ submitEdit, producto }) => {
  return (
    <div className="container">
      <form onSubmit={submitEdit} >

        <div className="input-filter range-price ">

          <div>
            <label>Nombre de Producto</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={producto.name}
            />
          </div>

          <div>
            <label>Precio</label>
            <input
              type="text"
              name="price"
              placeholder="price"
              defaultValue={producto.price}
            />
          </div>

          <div>
            <label>URL de imagen</label>
            <input
              type="text"
              name="imgProfile"
              placeholder="url de imagen"
              defaultValue={producto.imgProfile}
            />
          </div>

          <div>
            <label>Stock</label>
            <input
              type="text"
              name="stock"
              placeholder="stock"
              defaultValue={producto.stock}
            />
          </div>

          <div>
            <label>Descripcion</label>
            <textarea
              type="text"
              name="description"
              placeholder="descrition"
              defaultValue={producto.description}
            />
          </div>

          <div>
            <label>Categoria</label>

            <select
              className="custom-select"
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
            Confirmar
      </button>
        </div >
      </form>
    </div >

  );
};