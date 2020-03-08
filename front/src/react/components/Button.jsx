//Este boton se repite muchas veces en el codigo, recibe una varias props, entre ella el nombre
import React from "react";

export default ({ buttonDisable, name, options }) => {
  return (
    <button className={`${options}`} type="submit" disabled={buttonDisable}>
      {name}
    </button>
  );
};
