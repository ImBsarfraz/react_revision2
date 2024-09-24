import React, { useState } from "react";

export const Pagination3 = () => {
    // 1. Defining StateVaribales
    const [ items, setItems ] = useState([...Array(50).keys()]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage, setItemsPerPage ] = useState(10);

    // 2. handle page click function
    const handlePageClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // 3. rendering Page Numbers
    const renderPageNumbers = items.map((item, index) => {
        if (index % itemsPerPage === 0) {
            return (
                <button 
                    key={index} 
                    id={Math.floor(index / itemsPerPage) + 1}
                    onClick={handlePageClick}
                    style={{ cursor: "pointer" }}
                >
                    {Math.floor(index / itemsPerPage) + 1}
                </button>
            );
        }
        return null;
    });
    // 4. Determining and Rendering Current Page Items

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
        return <li key={index}>Item: {item}</li>
    });

    return(
        <>
        <h1>Pagination</h1>
        <ul>
            {renderItems}
        </ul>
        <div id="page-numbers">
            {renderPageNumbers}
        </div>
        </>
    )
}