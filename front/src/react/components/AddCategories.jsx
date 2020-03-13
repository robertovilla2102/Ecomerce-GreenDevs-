import React from "react";
import AlertInput from "./AlertInput";
import Button from "./Button";

export default ({ InputChangue, createCategory }) => (
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
        Agregá una categoria
      </h1>
      <form onSubmit={createCategory}>
        <div>
          <input
            style={{ width: "100%" }}
            type="text"
            name="name"
            placeholder="Nombre de la categoria"
          />
        </div>

        <div className="form-group">
          <input
            optionsClass={"d-flex"}
            onChange={InputChangue}
            name={"imgProfile"}
            type={"text"}
            placeholder={"URL de imágen"}
            style={{ width: "100%", marginTop: "20px" }}
          />
        </div>
        <button
          type="submit"
          className={"btn btn-md btn-outline-light mt-3 btn-block"}
        >
          Agregar categoria
        </button>
      </form>
    </div>
    <div>
      <img src={"/imagenes/Fondos/imgcentrog.png"} />
    </div>
  </div>
);
