import React, { useState } from 'react';

export const  Pagination = () => {
  const [items, setItems] = useState([...Array(50).keys()]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = items.map((item, index) => {
    if (index % itemsPerPage === 0) {
      return (
        <li
          key={index}
          id={Math.floor(index / itemsPerPage) + 1}
          onClick={handlePageClick}
          style={{ cursor: "pointer" }}
        >
          {Math.floor(index / itemsPerPage) + 1}
        </li>
      );
    }
    return null;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((item, index) => {
    return <li key={index}>Item {item}</li>;
  });

  return (
    <div>
      <ul>{renderItems}</ul>
      <ul id="page-numbers">Page Number{renderPageNumbers}</ul>
    </div>
  );
}
