//Este boton se repite muchas veces en el codigo, recibe una varias props, entre ella el nombre
import React from "react";

export default ({ buttonDisable, name }) => {
  return (
    <button
      className="btn btn-lg btn-dark btn-block"
      type="submit"
      disabled={buttonDisable}
    >
      {name}
    </button>
  );
};
