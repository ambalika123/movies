import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { pageSize, itemsCount, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount == 1) return null;
  //  console.log(pagesCount);
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
