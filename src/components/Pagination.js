import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
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
`;

const Pagination = ({ pageSize, currentPage, length, setCurrentPage }) => {
  const totalPages = Math.ceil(length / pageSize);
  const hasNext = currentPage + 2 > totalPages;
  const hasPrev = currentPage <= 0;
  console.log(totalPages);
  console.log(hasPrev);
  if (totalPages === 1) return null;
  return (
    <PaginationStyles>
      <button
        disabled={hasPrev}
        type="button"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#8592; Prev
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
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={hasNext}
        type="button"
      >
        Next &#8594;
      </button>
    </PaginationStyles>
  );
};
export default Pagination;
