import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ pedorro, cambio }) => {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{pedorro.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{pedorro.descripcion}</Modal.Body>
      <Modal.Footer>
        {pedorro.boolean ? (
          <Link to={pedorro.ruta}>
            <Button
              style={{ backgroundColor: "#1c4c50", borderColor: "#1c4c50" }}
            >
              {pedorro.boton}
            </Button>
          </Link>
        ) : null}
        {pedorro.booleanBoton ? (
          <div className="container d-flex">
            <span className=" col-md-6 mr-3">
              <Link style={{ textDecoration: "none" }} to={pedorro.ruta}>
                <Button
                  style={{
                    backgroundColor: "#1c4c50",
                    borderColor: "#1c4c50"
                  }}
                  variant="success"
                  className="btn-block"
                >
                  {pedorro.boton}
                </Button>
              </Link>
            </span>
            <span className="col-md-6">
              <Button
                className="btn-block"
                onClick={cambio}
                style={{ backgroundColor: "#f17d30", borderColor: "#f17d30" }}
              >
                close
              </Button>
            </span>
          </div>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};
