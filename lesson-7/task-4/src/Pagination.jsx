import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const maxPages = Math.ceil(totalItems / itemsPerPage);
  const arrowLeft = currentPage === 1 ? false : '←';
  const arrowRight = currentPage === maxPages ? '' : '→';

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {arrowLeft}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={() => (currentPage === maxPages ? null : goNext())} className="btn">
        {arrowRight}
      </button>
    </div>
  );
};

export default Pagination;
