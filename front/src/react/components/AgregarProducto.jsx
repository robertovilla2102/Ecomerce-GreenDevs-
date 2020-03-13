import React from "react";
import AlertInput from "./AlertInput";
import Button from "./Button";

export default ({ handleSubmit, InputChangue, categorias }) => (
  <div style={{ display: "flex" }}>
    <div
      className="col-md-4 mx-auto p-5"
      style={{ backgroundColor: "#182b3a" }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#FFFFFF"
        }}
      >
        Agregá un producto
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            optionsClass={"d-flex"}
            onChange={InputChangue}
            name={"name"}
            type={"text"}
            placeholder={"Nombre"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group">
          <input
            optionsClass={"d-flex"}
            name={"price"}
            type={"text"}
            onChange={InputChangue}
            placeholder={"Precio"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group">
          <input
            optionsClass={"d-flex"}
            onChange={InputChangue}
            name={"imgProfile"}
            type={"text"}
            placeholder={"URL de imágen"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group ">
          <input
            optionsClass={"d-flex"}
            onChange={InputChangue}
            name={"stock"}
            type={"password"}
            placeholder={"Stock"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group ">
          <input
            optionsClass={"d-flex"}
            onChange={InputChangue}
            name={"description"}
            typeInput={"text"}
            placeholder={"Descripción"}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-8 p-0">
          <div>
            <label>Categoria</label>

            <select
              className="custom-select"
              onBlur={InputChangue}
              name="categoryId"
            >
              <option value="">Categoria</option>
              {categorias.map(categoria => (
                <option value={categoria.id} key={categoria.id}>
                  {categoria.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className={"btn btn-md btn-outline-light mt-3 btn-block"}
        >
          Agregar producto
        </button>
      </form>
    </div>
    <div>
      <img src={"/imagenes/Fondos/imgcentrog.png"} />
    </div>
  </div>
);
