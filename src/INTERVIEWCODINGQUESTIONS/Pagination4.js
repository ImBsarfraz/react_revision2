import React, { useState } from "react";

export const Pagination4 = () => {
    const [ items, setItems ] = useState([...Array(50).keys()]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage, setItemsPerPage ] = useState(10);

    // 2 handleClick Fun
    const handleClick = (event) => {
        setCurrentPage(event.target.id);
    };

    // 3. rendering page Numbers
    const renderPageNumebrs = items.map((item, index) => {
        if(index % itemsPerPage === 0 ){
            return(
                <button key={index}
                id={Math.floor(index / itemsPerPage) + 1}
                onClick={handleClick}
                style={{cursor: "pointer"}}
                >
                    {Math.floor(index / itemsPerPage) + 1}
                </button>
            )
        }
        return null;
    });

    // 4 defining rendering current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
        return <li key={index}> Item {item} </li>
    })

    return(
        <>
        <h1>Pagination Example</h1>
        <ul>{renderItems}</ul>
        <div>
        Page Number: <button id="page-numbers" className="btn btn-dark">
            {renderPageNumebrs}
        </button>
        </div>
        </>
    )
}