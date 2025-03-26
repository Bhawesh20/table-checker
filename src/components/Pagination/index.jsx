import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, setCurrentPage, projectsPerPage, setProjectsPerPage, totalProjects }) => {
  function handleProjectsPerPageChange(value) {
    setProjectsPerPage(value);
    if (totalProjects <= (currentPage - 1) * value) {
      setCurrentPage(Math.ceil(totalProjects / value));
    }
  }

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      <div>
        <label htmlFor="rows-per-page" className="sr-only"></label>
        <select
          id="rows-per-page"
          value={projectsPerPage}
          onChange={(e) => handleProjectsPerPageChange(Number(e.target.value))}
          aria-label="Rows per page"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div className="pagination-buttons">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          aria-label="Go to first page"
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          Prev
        </button>
        <div aria-live="polite" aria-atomic="true">
          Page {currentPage} of {Math.ceil(totalProjects / projectsPerPage)}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalProjects / projectsPerPage)}
          aria-disabled={currentPage === Math.ceil(totalProjects / projectsPerPage)}
          aria-label="Go to next page"
        >
          Next
        </button>
        <button
          onClick={() => setCurrentPage(Math.ceil(totalProjects / projectsPerPage))}
          disabled={currentPage === Math.ceil(totalProjects / projectsPerPage)}
          aria-disabled={currentPage === Math.ceil(totalProjects / projectsPerPage)}
          aria-label="Go to last page"
        >
          Last
        </button>
      </div>
    </nav>
  );
};

export default Pagination;