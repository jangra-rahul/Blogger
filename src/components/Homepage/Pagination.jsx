import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationUI = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 2);

    for (let number = start; number <= end; number++) {
      pages.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return pages;
  };

  return (
    <div className="d-flex ff_m justify-content-center mt-4">
      <Pagination className="custom-pagination">
        <Pagination.First onClick={() => onPageChange(1)} />
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {currentPage > 2 && (
          <Pagination.Item onClick={() => onPageChange(1)}>1</Pagination.Item>
        )}
        {currentPage > 3 && <Pagination.Ellipsis disabled />}
        {getPageNumbers()}
        {currentPage < totalPages - 2 && <Pagination.Ellipsis disabled />}
        {currentPage < totalPages - 1 && (
          <Pagination.Item onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </Pagination.Item>
        )}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={() => onPageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default PaginationUI;
