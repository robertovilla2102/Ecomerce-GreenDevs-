import React from "react";

export default ({ number, name, onChangePage }) => (
  <li className="page-item">
    <button className="page-link" onClick={e => onChangePage(e, number + 1)}>
      {name}
    </button>
  </li>
);
