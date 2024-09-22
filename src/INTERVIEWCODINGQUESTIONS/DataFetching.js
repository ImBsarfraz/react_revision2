import React, { useEffect, useState } from "react";

export const DataFetching = () => {
    const [ data1, setData1 ] = useState({});

    useEffect(()=> {
        fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => setData1(data));
    }, []);

    console.log(data1)
    return(
        <>
        <h1>Data Fetching Example!</h1>
        <div>{data1.name}: {data1.height}</div>
        </>
    )
}