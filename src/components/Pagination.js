import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  margin: 1rem 0;
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  justify-content: center;
  .current {
    border-bottom: 2px solid var(--blue);
  }
  button {
    border: none;
    background-color: unset;
    cursor: pointer;
    outline-color: var(--blue);
    font-size: 1.4rem;
    color: var(--gold);
    font-weight: 600;
    font-style: italic;
  }

  button:disabled {
    color: gray;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    .large-only {
      display: none;
    }
  }
`;

const Pagination = ({ pageSize, currentPage, length, setCurrentPage }) => {
  const totalPages = Math.ceil(length / pageSize);
  if (totalPages < currentPage + 1) setCurrentPage(0);
  const hasNext = currentPage + 2 > totalPages;
  const hasPrev = currentPage <= 0;
  if (totalPages === 1) return null;
  return (
    <PaginationStyles>
      <button
        disabled={hasPrev}
        type="button"
        title="Previous page"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#8592; <span className="large-only">Prev</span>
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          onClick={() => setCurrentPage(i)}
          key={i}
          className={currentPage === i ? 'current' : ''}
          type="button"
        >
          {i + 1}
        </button>
      ))}
      <button
        title="Next Page"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={hasNext}
        type="button"
      >
        <span className="large-only">Next</span> &#8594;
      </button>
    </PaginationStyles>
  );
};
export default Pagination;
