import React from "react";
import "../css/Page.css";

function Page({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="page">
      <div className="pageList">
        <input
          className="btn"
          type="button"
          name="go"
          value="<"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <ul className="list">
          {renderPageNumbers()}
        </ul>
        <input
          className="btn"
          type="button"
          name="back"
          value=">"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}

export default Page;
