import React from "react";
import Alert from "react-bootstrap/Alert";

export default msg => {
  return (
    <div className="col-md-12 mx-auto pt-5 text-center">
      <Alert variant="info">
        <Alert.Heading>{msg.msg.title}</Alert.Heading>
        <p>{msg.msg.description}</p>
      </Alert>
    </div>
  );
};
