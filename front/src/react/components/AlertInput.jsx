import React from "react";

export default ({ msg }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {msg}
    </div>
  );
};
