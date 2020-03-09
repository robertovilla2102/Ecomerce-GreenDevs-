import React from "react";
import ButtonPagination from "./ButtonPagination";

const Pagination = ({ postsPerPage, totalPosts, onChangePage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumber.map(number => (
          <div key={number} className="p-1">
            <ButtonPagination
              name={number}
              number={number - 1}
              onChangePage={onChangePage}
            />
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
