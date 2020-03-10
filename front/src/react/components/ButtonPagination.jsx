import React from "react";
import PaginationStyles from "../css/PaginationStyles.css";

export default ({ number, name, onChangePage }) => (
  <li className="pagination-group">
    <button className="" onClick={e => onChangePage(e, number + 1)}>
      {name}
    </button>
  </li>
);
