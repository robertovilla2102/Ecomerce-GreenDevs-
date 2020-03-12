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

<div className="card shadow" style={{marginTop:"30px"}}>
	<article className="card-group-item">
		<header className="card-header" style={{backgroundColor: "#e9ecef",
    borderBottom: "1px solid #e9ecef"}}>
			<h6 className="title" style={{marginBottom:"0rem" , fontWeight:"500",fontSize:"17px"}}>Precio </h6>
		</header>
		<div className="filter-content">
			<div className="card-body">
  			<div className="form-row">
    			<div className="form-group col-md-6">
    			  <label>Min</label>
    			  <input type="text" name="minPrice" className="form-control" id="inputEmail4" placeholder="$0" onChange={onChange}/>
    			</div>
    			<div className="form-group col-md-6 text-right">
    			  <label>Max</label>
    			  <input type="text" name="maxPrice" className="form-control" placeholder="$1,0000" onChange={onChange}/>
    			</div>
  			</div>
      <button onClick={filterByPrice} className="btn-block btn-info" style={{backgroundColor:"#3e808e", border:"#3e808e"}}> Filtrar</button>
			</div>
		</div>
	</article>
	<article className="card-group-item">
		<header className="card-header"style={{backgroundColor: "#e9ecef",
    borderBottom: "1px solid #e9ecef"}}>
			<h6 className="title" style={{marginBottom:"0rem", fontWeight:"500",fontSize:"17px"}}>Categoria </h6>
		</header>
    <div className="ml-3 mr-3 mt-3 mb-3">
      <select
        onChange={e => filterByCategories(e, e.target.value)}
        name="categoria"
        id=""
        className="custom-select mr-sm-2"
        style={{width: "100%", position: "relative"}}
      >
        <option value="">Seleccioná</option>
        {categories.map(categoria => {
          return (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          );
        })}
      </select>
      </div>
	</article>
  <article className="card-group-item">
    <header className="card-header" style={{backgroundColor: "#e9ecef",
    borderBottom: "1px solid #e9ecef"}}>
      <h6 className="title" style={{marginBottom:"0rem", fontWeight:"500",fontSize:"17px"}}>Ordenar A-Z </h6>
    </header>
  <div className="ml-3 mr-3 mt-3 mb-3">
      <button className= "btn-info btn-block" style={{marginTop:"3px",marginBottom:"8px",backgroundColor:"#3e808e", border:"#3e808e"}} onClick={e => filterByAlfabet(e, "asc")}>Ascendente</button>
      <button className= "btn-info btn-block" style={{marginTop:"8px",marginBottom:"3px",backgroundColor:"#3e808e", border:"#3e808e"}} onClick={e => filterByAlfabet(e, "desc")}>Descendente</button>
  </div>
  </article>
</div>


  );
};
