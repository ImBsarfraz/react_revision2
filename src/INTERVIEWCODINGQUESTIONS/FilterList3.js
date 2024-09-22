import React, { useState } from "react";

export const FilterList3 = () => {
    const [ seacrchTerm, setSearchTerm ] = useState('');
    const [ list, setList ] = useState([
        'Apple',
        'Banana',
        'Mango',
        'Pear'
    ]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredList = 
        list.filter(item=> item.toLocaleLowerCase()
        .includes(seacrchTerm.toLocaleLowerCase())
    )

    return(
        <>
        <h1>Filtering List Based Search Term</h1>
        <input type="text" onChange={handleChange} value={seacrchTerm}/><br/>
        <ul>
            {
                filteredList.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
        </>
    )
}