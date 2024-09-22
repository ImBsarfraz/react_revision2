import React, { useState } from "react";

export const FilterList2 = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [list, setList] = useState([
        'Sarfraz',
        'Arshad',
        'Sufiyan',
        'Sahil',
    ]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const filterList = list.filter(item => 
        item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return(
        <>
        <h1>Flitering The List Of Items Based On Search Term!</h1>

        <input  type="text" onChange={handleChange} value={searchTerm}/><br/>
        <ul>
            {
                filterList.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
        </>
    )
}