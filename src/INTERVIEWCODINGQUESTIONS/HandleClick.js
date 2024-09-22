import React from "react";

export const HandleClick = () => {
    const handleClick = () => {
        console.log('You Have Clicked The Button!');
    };
    
    return(
        <>
        <h1>Handle Click Example</h1>
        <button onClick={handleClick}>CLICK ME</button>
        </>
    )
}