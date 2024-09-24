import { render } from "@testing-library/react";
import React, { useState } from "react";

export const Pagination2 = () => {
    // Step1: Create StateVaribales For items, currentpage, itemsperpage
    const [ items, setItems ] = useState([...Array(50).keys()]);
    const [ curretntPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage, setItemsPerPage ] = useState(10);

    // Handle Page Click Function:
    const handlePageClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // 3. Rendering the Page Numbers:
    const renderPageNumbers = items.map((item, index) => {
        if( index % itemsPerPage === 0 ) {
            return(
                <button 
                key={index} 
                id={Math.floor(index / itemsPerPage) + 1}
                onClick={handlePageClick}
                style={{cursor: "pointer"}}
                >
                    {Math.floor(index / itemsPerPage) + 1}
                </button>
            )
        }
        return null;
    });

    // 4. Determining and Rendering Current Page Items:
    const indexOfLastItem = curretntPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const renderItems = currentItems.map((item, index) => {
        return <li key={index}>Item {item}</li>;
    });

    // 5. Rendering the Component:
    return(
        <>
        <h1>Pagination Exaple</h1>
       <ul>{renderItems}</ul> 
       <div id="page-numbers">
        Page Number {renderPageNumbers}
       </div>
        </>
    )
}