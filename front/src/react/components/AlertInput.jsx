import React from "react";

export default ({ msg }) => {
  return (
    <div className="mx-auto">
      <span className="badge badge-danger">{msg}</span>
    </div>
  );
};
