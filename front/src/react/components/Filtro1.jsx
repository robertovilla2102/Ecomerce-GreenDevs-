import React from "react";
import FilterStyles from "../css/FilterStyles.css";

export default ({
  categories,
  filterByCategories,
  filterByPrice,
  onChange,
  filterByAlfabet,
  priceErr
}) => {
  return (
    <div className="mt-4">
      <div className="input-filter cat ">
        <label htmlFor="">Ordenar por categoria:</label>
        <select
          onChange={e => filterByCategories(e, e.target.value)}
          name="categoria"
          id=""
        >
          <option value="">Categoria</option>
          {categories.map(categoria => {
            return (
              <option key={categoria.id} value={categoria.id}>
                {categoria.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-filter range-price">
        <label htmlFor="">Ordenar por precio:</label>
        <div className="precios">
          <input
            type="text"
            name="minPrice"
            id=""
            placeholder="Minimo"
            onChange={onChange}
          />
          <input
            type="text"
            name="maxPrice"
            id=""
            placeholder="Maximo"
            onChange={onChange}
          />
        </div>
        <button onClick={filterByPrice}>Filtrar</button>
      </div>
      <div className="input-filter alfabeto">
        <label htmlFor="">Ordenar alfabeticamente:</label>
        <div className="orden">
          <button onClick={e => filterByAlfabet(e, "asc")}>Ascendente</button>
          <button onClick={e => filterByAlfabet(e, "desc")}>Descendente</button>
        </div>
      </div>
    </div>
  );
};
