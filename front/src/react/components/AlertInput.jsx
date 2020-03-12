import React from "react";

export default ({ msg }) => {
  return (
    <div className="mx-auto">
      <span className="badge" style={{background:"#F27830"}}>{msg}</span>
    </div>
  );
};
