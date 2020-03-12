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
            <Button variant="secondary">Ok</Button>
          </Link>
        ) : null}
        {pedorro.booleanBoton ? (
          <div>
            <span>
              <Link to={pedorro.ruta}>
                <Button variant="secondary">{pedorro.boton}</Button>
              </Link>
            </span>
            <span>
              <Button onClick={cambio} variant="secondary">
                close
              </Button>
            </span>
          </div>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};
