import React from "react";
import Carrito from "./Carrito";
import Alert from "react-bootstrap/Alert";
import Alert1 from "../components/Alert";
import VistaConfirmacion from "./VistaConfirmacion";
import { NO_HAY_CARRITO } from "../../assets/mensajesAlert";

export default ({
  listaCarrito,
  handlerButtonDelete,
  handleButtonComprar,
  mostrarDetalle,
  esVisible,
  cambio
}) => {
  return (
    <div className="container">
      {listaCarrito.length > 0 ? (
        <div>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">pecio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <Carrito
                handlerButtonDelete={handlerButtonDelete}
                listaCarrito={listaCarrito}
              />
            </tbody>
          </table>

          <button
            className="btn btn-success btn-block"
            type="submit"
            onClick={mostrarDetalle}
            style={{ backgroundColor: "#1f4e52", border: "#1f4e52" }}
          >
            COMPRAR
          </button>

          {esVisible ? (
            <VistaConfirmacion
              mostrarDetalle={mostrarDetalle}
              listaCarrito={listaCarrito}
              handleButtonComprar={handleButtonComprar}
            />
          ) : null}
        </div>
      ) : (
        <div className="col-md-6 mx-auto mt-5">
          <Alert variant="info">
            <Alert.Heading>Your shopping cart is empty!</Alert.Heading>
            <p>Visit our catalog to add products to your cart!</p>
          </Alert>
          <Alert1 pedorro={NO_HAY_CARRITO} cambio={cambio} />
        </div>
      )}
    </div>
  );
};
