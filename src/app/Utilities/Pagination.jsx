import React from 'react';

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevPage) => prevPage + 1);
      scrollTop();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-on-primary text-xl">
      {page > 1 && (
        <button className="transition-all hover:text-on-accent" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      <p>{page} of {lastPage}</p>
      <button className="transition-all hover:text-on-accent" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
