// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        {[...Array(5)].map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
