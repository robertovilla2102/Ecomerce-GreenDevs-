import React from "react";

export default ({ msg }) => {
  return (
    <div class="alert alert-danger mt-2" role="alert">
      {msg}
    </div>
  );
};
